const express = require('express')
const app = express()



var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var router=require('./routers.js');
app.use('/router',router);
	


app.listen(4324);