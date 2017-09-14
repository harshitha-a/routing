var async=require('async');

var students=require('./schemas.js').student;
var teachers=require('./schemas.js').teacher;

function getSeries(callback){
    var retObj={};
    async.series({
    one: function(callback1){
        students.find({},function(err,docs){
            callback1(null,docs);
        });
    },
    two: function(callback2){
        teachers.find({},function(err,tdocs){
            callback2(null,tdocs);
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

module.exports= getSeries;
