var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/dota')
var Schema=mongoose.Schema

var dotaUsersSchema=new Schema({
	name: String,
	age: Number,
	location:String,
	gender: String

});

var dotaSchema=new Schema({
	name: String,
	age: Number,
	location:String,
	gender: String

});

var dotaUsersColl=mongoose.model('dotausers',dotaUsersSchema);
var sampleColl=mongoose.model('sampledota',dotaSchema);

module.exports={users : dotaUsersColl,
	sample : sampleColl};



