// Dependencies
const express = require('express');
const burger = require('../models/burger.js');

// Variables
const router = express.Router();

// Main HTML page Route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Route for adding new burgers
router.post("/api/burgers", function(req, res){
    if (req.body.burger_name !== ""){
        burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
            res.json({ id: result.insertId });
        });
    } else {
        res.status(404).send({ message: "Invalid input! You must enter the name of a burger into the field"}).end();
    }
});

// Route for updating burgers that have been devoured
router.put("/api/burgers/:id", function(req, res){
    burger.updateOne("devoured", true, "id", req.params.id, function(){
        res.status(200).end();
    });
});

module.exports = router;