var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/userdb');

router.post('/', function(req,res,next){
	
	res.send('Login Success');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
