var express = require('express')
var router = express.Router()



var async=require('../modules/async.js');
var asyncSeries=require('../modules/async-series.js');



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
