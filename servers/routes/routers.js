var express = require('express')
var router = express.Router()



var async=require('./async.js');
var asyncSeries=require('./async-series.js');



router.get('/parallel',function(req, res){
	async(function(result){
		res.json(result);
	})
});

router.get('/series',function(req,res){
	asyncSeries(function(output){
		res.json(output);
	})
})


module.exports = router;
