var mongoose = require('mongoose');
mongoose.model('Enroll', new mongoose.Schema());
var Collection = mongoose.model('Enroll');


exports.enrollment = function(req, res){
	Collection.find({}).sort({EFTOTLT: -1}).limit(10)
	.exec(function(err, top){
		var topten = [];
		for(var i = 0; i < top.length; i++){
			var tmp = [top[i].EFTOTLT];
			topten.push(tmp);
		}
		res.send(topten);
	});
}

exports.enroll = function(req,res){
	res.render('enrollment');
}


