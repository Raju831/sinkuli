var express = require('express');
var router = express.Router();

var Model = require('../models/Items')

var {Mobile2} = Model

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  Mobile2.find().then(items =>{
    res.send(items)
  })
});

router.post('/add', function(req, res){
  Mobile2.create({
    name:req.body.name,
    age:req.body.age
  })
  res.send('Success')
})



module.exports = router;
