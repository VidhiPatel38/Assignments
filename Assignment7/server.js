//lets require/import the mongodb native drivers.


//We need to work with "MongoClient" interface in order to connect to a mongodb server.

// Connection URL. This is where your mongodb server is running.


// Use connect method to connect to the Server


/*jshint esversion: 6 */
"use strict";
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/test";
var express = require("express");
var app = express();
app.use(express.static("."));
var bodyparser = require("body-parser");
app.use(bodyparser.json());


app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});

app.post("/links", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var click1 = 0;
            console.log("Post Connection established to", url);
            console.log(req.body);
            var newLink = {};
            newLink = { link: req.body.link, title: req.body.title, click: click1 };
            var collection = db.collection("links");
            //var user1 = {title: 'modulus admin', name: "", click: ""};
            collection.insert([newLink], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Inserted %d documents into the collection. The documents inserted with are:", result.length, result);
                }
                // do some work here with the database.

                //Close connection
                db.close();

                res.send(JSON.stringify({ key: "post/links" }));
            });
        }
    });
});

app.get("/links", function (req, res) {
    var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var collection = db.collection("links");

            console.log("Get Connection established to", url);
 
            collection.find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log(result.length);
                    console.log("Found:", result);
                    arrpush.push(result);
                    res.send(JSON.stringify({ arrpush }));
                } else {
                    console.log("No document(s) found with defined criteria!");
                }

                // do some work here with the database.
                //console.log("hey");


                //Close connection
                db.close();
            });
        }

    });

});

app.get("/click/:title", function (req, res) {
    //console.log(req.params.title);
    //res.header("Access-Control-Allow-Origin", "*");
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var collection = db.collection("links");
            //console.log(:title)
            console.log("Get Connection established to", url);
            var a = req.params.title;

            //collection.update({ title: a }, { $inc: { click: 1 } })

            collection.findAndModify(
                { title: a }, // query
                [], //sort
                { $inc: { click: 1 } }, // replacement, replaces only the field "hi"
                { new: true }, // return 
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    } else {
                        console.log(object.value.link);
                        res.redirect(object.value.link);
                        db.close();
                    }
                });
        }

    });


});
