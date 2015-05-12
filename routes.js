module.exports = function (app) {

	var index = require('./routes/index');
	var college = require('./routes/college');
	var enroll = require('./routes/enrollment');
	var users = require('./routes/users');
	var gender = require('./routes/gender');

	app.get('/', index.index);
	app.get('/enrollment', enroll.enrollment);
	app.get('/enroll', enroll.enroll);
	app.get('/college:id', college.college);
	app.get('/gender', gender.gender);
}