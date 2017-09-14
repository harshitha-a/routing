var async=require('async');

var students=require('./schemas.js').users;
var teachers=require('./schemas.js').sample;

function getData(callback){
    var retObj={};
    async.parallel({
    one: function(callback1){
        students.find({},function(err,docs){
            callback1(null,docs);
        });
    },
    two: function(callback2){
        teachers.find({},function(err,docs){
            callback2(null,docs);
        });
    }
},
function(err, results) {

    if (err) {
            retObj.status=false;
            retObj.message='error!';
            callback(retObj);
        }else{

            retObj.status=true;
            retObj.message='success';
            retObj.output= results.one.concat(results.two);
            callback(retObj);
        }
    
});
}

module.exports= getData;
