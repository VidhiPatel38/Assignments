"use strict";
var express = require("express");
var app = express();
app.use(express.static("."));
var bodyparser = require("body-parser");
app.use(bodyparser.json());
var wins1 = 0;
var stats = {};
var results = {};
var loss1 = 0;
app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
});

app.post("/flip", function(req, res) {
    var check = Math.random();
    var a = req.body.call;
    console.log(a);
    if (check > 0.5 && "heads" === a) {
        wins1++;
        console.log(wins1);
        stats = JSON.stringify({
        result: "success"
        });
    }
    else if (check < 0.5 && "tails" === a) {
        wins1++;
        console.log(wins1);
        stats = JSON.stringify({
        result: "success"
        });
    }
    else {
        loss1 = loss1 + 1;
        console.log(loss1);
        stats = JSON.stringify({ 
        result: "fails"
        });
    }
    res.send(stats);
});


app.get("/stats", function(req, res) {
    results = JSON.stringify({
        wins: wins1,
        loss: loss1
    });
    res.send(results);
});
