const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    if (req.body.burger_name !== ""){
        burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
            res.json({ id: result.insertId });
        });
    } else {
        res.status(404).send({ message: "Invalid input! You must enter the name of a burger into the field"}).end();
    }
});

router.put("/api/burgers/:id", function(req, res){
    burger.updateOne("devoured", true, "id", req.params.id, function(){
        res.status(200).end();
    });
});

module.exports = router;