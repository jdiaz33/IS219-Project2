var mongoose = require('mongoose');
var Collection = mongoose.model('School');

exports.college = function(req, res){
	Collection.find({UNITID: req.params.id}, function(err, course){ 
		//console.log(course);
		res.render('college', {
			course: course
		});
	});
}