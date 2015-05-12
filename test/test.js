var assert = require('assert');
var request = require('supertest');

var routes = require('../routes.js');
describe('GET /', function(){
	it('should return 200 OK', function(){
		request(routes).get('/').expect(200);
	});
});

describe('Get /college:id', function(){
	it('should return 200 OK', function(){
		request(routes).get('/college:id').expect(200);
	});
});

var index = require('../routes/index.js');
describe('Index', function(){
	it('should have index return 200', function(){
		assert.equal(typeof index.index, "function")
	});
});

var college = require('../routes/college.js');
describe('Get college', function(){
	it('should have college and return 200', function(){
		assert.equal(typeof college.college, 'function')
	});
});

//var app = require('../app.js');
describe('Get wrong url', function(){
	it('should return 404 Not found', function(){
		request(routes).get('/random').expect(404);
	});
});