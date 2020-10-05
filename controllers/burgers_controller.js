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
    burger.insertOne(["burger_name"], [req.body.burger], function(result){
        res.json({ id: result.insertId });
    });
});