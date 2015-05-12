var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enrollSchema = new Schema({
	_id : String,
	UNITID : Number,
	EFTOTLT : Number,
	EFTOTLM : Number,
	EFTOTLW : Number
});

mongoose.model('Enroll', enrollSchema, 'enrollment2013');