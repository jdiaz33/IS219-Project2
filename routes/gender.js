var mongoose = require('mongoose');
//mongoose.model('Enroll', new mongoose.Schema());
var Collection = mongoose.model('Enroll');

exports.gender = function(req, res){
	Collection.find({}, function(err, college){
		
		var gender = [[college[0].EFTOTLM], [college[0].EFTOTLW]];
		res.send(gender);
	});
}