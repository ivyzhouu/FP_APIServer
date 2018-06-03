var models  = require('../models');
var express = require('express');
var router  = express.Router();

// doc: http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update
// create using http post
router.post('/create', function(req, res) {
  models.MyTest.create({
    testname: req.body.testname,
    description: req.body.description
  }).then(function() {
    res.send(req.body);
  });
});

// for update by id 
// update using http put
router.put('/update', function(req, res) {
  models.MyTest.update({
    testname: req.body.testname,
    description: req.body.description
  }, {
    where: {
      id: req.body.id
    }
  }).then(function() {
    res.send(req.body);
  });
});

// query by id using http get
// test : http://localhost:3100/api/mytests/get/1, you need to have the record id 1
router.get('/get/:test_id', function(req, res) {
  models.MyTest.findById(req.params.test_id).then(function(mytest) {
    res.send(mytest);
  });
});

module.exports = router;
