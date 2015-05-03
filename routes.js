module.exports = function (app) {

	var index = require('./routes/index');
	var college = require('./routes/college');
	var graph = require('./routes/graph');
	var users = require('./routes/users');
	//var test = require('./routes/csvParser');

	app.get('/', index.index);
	app.get('/graph', graph.graph);
	app.get('/college:id', college.college);
	//app.get('/test', test.parse); 
}