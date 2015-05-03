var mongoose = require('mongoose');
var Collection = mongoose.model('School');

var csv = require('csv');
var fs = require('fs');
var records = new Array();
var records = [];

function parser (){
	csv(records).from.stream(fs.createReadStream(__dirname + '/hd2013.csv'),{
		columns: true
	}).on('record', function(row, index){
		records.push(row);
	}).on('end', function (count) {
		var MongoClient = require('mongodb').MongoClient;
		MongoClient.connect("mongodb://localhost:27017/schoolsDB", function(err, db){
			var collection = db.collection('schoolList')
			collection.insert(records, function(err, doc) {
				console.log(doc);
			});
		});
		console.log('Number of lines: ' + count);
	});
}

exports.index = function(req, res){
	//parser();
	Collection.find({}, function(err, schools){
		res.render('index', {
			title: 'List of Colleges',
			schools: schools
		});
	});
}