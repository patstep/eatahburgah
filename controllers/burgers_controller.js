var express = require('express');
var router = express.Router();
var burger = require('../Model/burger.js');

router.get('/', function(req, res) {
   burger.selectAll(function(data) {
      var hbsObject = {
         burgers: data
      };
      res.render("index", hbsObject);
   });
});

router.post('/api/burgers', function(req, res) {
   console.log(req.body)
   burger.insertOne(
   [
      "burger_name", "devoured"
   ],
   [
      req.body.burger_name, req.body.devoured
   ], function(result) {
      //sends id of ne w burger
      res.json({ id: result.insertId });
   });
});

router.put('/api/burgers/:id', function(req, res) {
   var condition = "id = " + req.params.id;
   console.log("condition", condition);
   burger.updateOne({
      devoured: req.body.devoured
   }, condition, function(result) {

      if (result.changedRows === 0) {

         return res.status(404).end();

      } else {
         
         res.status(200).end();
      }
   });
});

//Export routes for server.js to use
module.exports = router;
