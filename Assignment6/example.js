"use strict";
var redis = require("redis"),
    client = redis.createClient();
var express = require("express");
var app = express();
app.use(express.static("."));
var bodyparser = require("body-parser");
app.use(bodyparser.json());
var stats = {};
var l;
var w;


client.on("connect", function() {
    client.EXISTS("loss", function(err, reply) {
        if (reply === 1) {} else {
            client.set("loss", "0", function(err, reply) {
                console.log(reply);
            });
        }
        });
            client.EXISTS("win", function(err, reply) {
        if (reply === 1) {} else {
            client.set("win", "0", function(err, reply) {
                console.log(reply);
            });
        }
        });

   
});

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
        client.get("wins", function() {
            client.incr("wins", function(err, reply) {
                console.log(reply); 
            });
        });

        stats = JSON.stringify({
            result: "success"
        });
    }
    else if (check < 0.5 && "tails" === a) {

        client.incr("wins", function(err, reply) {
            console.log(reply); 
        });

            stats = JSON.stringify({
            result: "success"
        });
    }
    else {
        client.incr("loss", function(err, reply) {
            console.log(reply); 
        });
        stats = JSON.stringify({
            result: "fails"
        });
    }
    res.send(stats);
});


app.get("/stats", function(req, res) {
    client.get("wins", function(err, reply) {
        console.log(reply);
        w = reply;

        client.get("loss", function(err, reply) {
            console.log(reply);
            l = reply;
            res.send(JSON.stringify({
                win: w,
                loss: l
            }));
        });
    });

});


app.delete("/stats", function(req, res) {

    client.set("wins", "0");
    client.set("loss", "0");
    stats = JSON.stringify({
        result: "reset successful"
    });
    res.send(stats);
});
