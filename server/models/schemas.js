var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/dota')
var schema=mongoose.Schema;

var dotaUsersSchema=new schema({
	name: String,
	age: Number,
	location:String,
	gender: String

});

var dotaSchema=new schema({
	name: String,
	age: Number,
	location:String,
	gender: String

});

var dotaUsersColl=mongoose.model('dotausers',dotaUsersSchema);
var sampleColl=mongoose.model('sampledatas',dotaSchema);

module.exports={ student : dotaUsersColl,
	teacher : sampleColl
};



