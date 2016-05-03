
/*jshint esversion: 6 */
"use strict";
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/CheckCode";
var express = require("express");
var app = express();
app.use(express.static("."));
var bodyparser = require("body-parser");
app.use(bodyparser.json());

//DataBase for Car
var carData =[
				{
					"street" : "600langsdorfdrive",
					"city" : "fullerton",
					"state" : "california",
					"country" : "usa",
					"phone_no" : 7149093405,
					"cars" : [
						{
							"type" : "sedan",
							"sedan_cars" : [
								{
									"car_id" : "s1",
									"name" : "honda_accord",
									"img" : "http://pop.h-cdn.co/assets/cm/15/05/54cb674f93048_-_big-sedans-02-1011-xln-70022162.jpg",
									"rate" : 5,
									"available" : "true"
								},
								{
									"car_id" : "s2",
									"name" : "mazda",
									"img" : "http://www.cars.com/crp/buyingGuides/images/segments/Sedan.png",
									"rate" : 5,
									"available" : "true"
								},
								{
									"car_id" : "s3",
									"name" : "ford_taurus",
									"img" : "http://images.hgmsites.net/med/2011-ford-taurus-4-door-sedan-limited-fwd-angular-front-exterior-view_100315876_m.jpg",
									"rate" : 5,
									"available" : "true"
								}
							]
						},
						{
							"type" : "suv",
							"suv_cars" : [
								{
									"car_id" : "v1",
									"name" : "scorpio",
									"img" : "https://www.carkhajana.com/admin/uploads/newcars/exterior/1449919710Mahindra-Scorpio-Angularfront-8.jpg",
									"rate" : 8,
									"available" : "true"
								},
								{
									"car_id" : "v2",
									"name" : "fortuner",
									"img" : "http://www.toyotabharat.com/showroom/fortuner/images/colors/c_h_1.jpg",
									"rate" : 8,
									"available" : "true"
								},
								{
									"car_id" : "v3",
									"name" : "ford_escape",
									"img" : "http://motorreview.com/wp-content/uploads/2013/12/2014-Ford-Escape-Titanium-8-of-341.jpg",
									"rate" : 8,
									"available" : "true"
								}
							]
						},
						{
							"type" : "hatchback",
							"hatch_cars" : [
								{
									"car_id" : "h1",
									"name" : "ford_fiesta",
									"img" : "http://images.dealer.com/autodata/us/640/color/2016/USC60FOC221B0/Z9.jpg",
									"rate" : 4,
									"available" : "false"
								},
								{
									"car_id" : "h2",
									"name" : "hyundai_veloster",
									"img" : "https://s3.graphiq.com/sites/default/files/4315/media/images/2015_Hyundai_Veloster_3dr_Hatchback_wBlack_Interior_16L_4cyl_6M_3915929.jpg",
									"rate" : 4,
									"available" : "true"
								}
							]
						}
					]
				},
				{
													
									"street" : "LemonStreet",
									"city" : "anaheim",
									"state" : "california",
									"country" : "usa",
									"phone_no" : 7145678909,
									"cars" : [
										{
											"type" : "sedan",
											"sedan_cars" : [
												{
													"car_id" : "s4",
													"name" : "honda_accord",
													"img" : "http://pop.h-cdn.co/assets/cm/15/05/54cb674f93048_-_big-sedans-02-1011-xln-70022162.jpg",
													"rate" : 5,
													"available" : "true"
												},
												{
													"car_id" : "s5",
													"name" : "mazda",
													"img" : "http://www.cars.com/crp/buyingGuides/images/segments/Sedan.png",
													"rate" : 5,
													"available" : "true"
												},
												{
													"car_id" : "s6",
													"name" : "ford_taurus",
													"img" : "http://images.hgmsites.net/med/2011-ford-taurus-4-door-sedan-limited-fwd-angular-front-exterior-view_100315876_m.jpg",
													"rate" : 5,
													"available" : "true"
												}
											]
										},
										{
											"type" : "suv",
											"suv_cars" : [
												{
													"car_id" : "v4",
													"name" : "scorpio",
													"img" : "https://www.carkhajana.com/admin/uploads/newcars/exterior/1449919710Mahindra-Scorpio-Angularfront-8.jpg",
													"rate" : 8,
													"available" : "true"
												},
												{
													"car_id" : "v5",
													"name" : "fortuner",
													"img" : "http://www.toyotabharat.com/showroom/fortuner/images/colors/c_h_1.jpg",
													"rate" : 8,
													"available" : "true"
												},
												{
													"car_id" : "v6",
													"name" : "ford_escape",
													"img" : "http://motorreview.com/wp-content/uploads/2013/12/2014-Ford-Escape-Titanium-8-of-341.jpg",
													"rate" : 8,
													"available" : "true"
												}
											]
										},
										{
											"type" : "hatchback",
											"hatch_cars" : [
												{
													"car_id" : "h3",
													"name" : "ford_fiesta",
													"img" : "http://images.dealer.com/autodata/us/640/color/2016/USC60FOC221B0/Z9.jpg",
													"rate" : 4,
													"available" : "false"
												},
												{
													"car_id" : "h4",
													"name" : "hyundai_veloster",
													"img" : "https://s3.graphiq.com/sites/default/files/4315/media/images/2015_Hyundai_Veloster_3dr_Hatchback_wBlack_Interior_16L_4cyl_6M_3915929.jpg",
													"rate" : 4,
													"available" : "true"
												}
											]
										}
									]
			},
			{
												
								"street" : "300irvine",
								"city" : "irvine",
								"state" : "california",
								"country" : "usa",
								"phone_no" : 7145642785,
								"cars" : [
									{
										"type" : "sedan",
										"sedan_cars" : [
											{
												"car_id" : "s7",
												"name" : "honda_accord",
												"img" : "http://pop.h-cdn.co/assets/cm/15/05/54cb674f93048_-_big-sedans-02-1011-xln-70022162.jpg",
												"rate" : 5,
												"available" : "true"
											},
											{
												"car_id" : "s8",
												"name" : "mazda",
												"img" : "http://www.cars.com/crp/buyingGuides/images/segments/Sedan.png",
												"rate" : 5,
												"available" : "true"
											},
											{
												"car_id" : "s9",
												"name" : "ford_taurus",
												"img" : "http://images.hgmsites.net/med/2011-ford-taurus-4-door-sedan-limited-fwd-angular-front-exterior-view_100315876_m.jpg",
												"rate" : 5,
												"available" : "true"
											}
										]
									},
									{
										"type" : "suv",
										"suv_cars" : [
											{
												"car_id" : "v7",
												"name" : "scorpio",
												"img" : "https://www.carkhajana.com/admin/uploads/newcars/exterior/1449919710Mahindra-Scorpio-Angularfront-8.jpg",
												"rate" : 8,
												"available" : "true"
											},
											{
												"car_id" : "v8",
												"name" : "fortuner",
												"img" : "http://www.toyotabharat.com/showroom/fortuner/images/colors/c_h_1.jpg",
												"rate" : 8,
												"available" : "true"
											},
											{
												"car_id" : "v9",
												"name" : "ford_escape",
												"img" : "http://motorreview.com/wp-content/uploads/2013/12/2014-Ford-Escape-Titanium-8-of-341.jpg",
												"rate" : 8,
												"available" : "true"
											}
										]
									},
									{
										"type" : "hatchback",
										"hatch_cars" : [
											{
												"car_id" : "h5",
												"name" : "ford_fiesta",
												"img" : "http://images.dealer.com/autodata/us/640/color/2016/USC60FOC221B0/Z9.jpg",
												"rate" : 4,
												"available" : "false"
											},
											{
												"car_id" : "h6",
												"name" : "hyundai_veloster",
												"img" : "https://s3.graphiq.com/sites/default/files/4315/media/images/2015_Hyundai_Veloster_3dr_Hatchback_wBlack_Interior_16L_4cyl_6M_3915929.jpg",
												"rate" : 4,
												"available" : "true"
											}
										]
									}
								]
							},
							{												
								"street" : "400sacremanto",
								"city" : "sacremanto",
								"state" : "california",
								"country" : "usa",
								"phone_no" : 7145642785,
								"cars" : [
									{
										"type" : "sedan",
										"sedan_cars" : [
											{
												"car_id" : "s10",
												"name" : "honda_accord",
												"img" : "http://pop.h-cdn.co/assets/cm/15/05/54cb674f93048_-_big-sedans-02-1011-xln-70022162.jpg",
												"rate" : 5,
												"available" : "true"
											},
											{
												"car_id" : "s11",
												"name" : "mazda",
												"img" : "http://www.cars.com/crp/buyingGuides/images/segments/Sedan.png",
												"rate" : 5,
												"available" : "true"
											},
											{
												"car_id" : "s12",
												"name" : "ford_taurus",
												"img" : "http://images.hgmsites.net/med/2011-ford-taurus-4-door-sedan-limited-fwd-angular-front-exterior-view_100315876_m.jpg",
												"rate" : 5,
												"available" : "true"
											}
										]
									},
									{
										"type" : "suv",
										"suv_cars" : [
											{
												"car_id" : "v10",
												"name" : "scorpio",
												"img" : "https://www.carkhajana.com/admin/uploads/newcars/exterior/1449919710Mahindra-Scorpio-Angularfront-8.jpg",
												"rate" : 8,
												"available" : "true"
											},
											{
												"car_id" : "v11",
												"name" : "fortuner",
												"img" : "http://www.toyotabharat.com/showroom/fortuner/images/colors/c_h_1.jpg",
												"rate" : 8,
												"available" : "true"
											},
											{
												"car_id" : "v12",
												"name" : "ford_escape",
												"img" : "http://motorreview.com/wp-content/uploads/2013/12/2014-Ford-Escape-Titanium-8-of-341.jpg",
												"rate" : 8,
												"available" : "true"
											}
										]
									},
									{
										"type" : "hatchback",
										"hatch_cars" : [
											{
												"car_id" : "h7",
												"name" : "ford_fiesta",
												"img" : "http://images.dealer.com/autodata/us/640/color/2016/USC60FOC221B0/Z9.jpg",
												"rate" : 4,
												"available" : "false"
											},
											{
												"car_id" : "h8",
												"name" : "hyundai_veloster",
												"img" : "https://s3.graphiq.com/sites/default/files/4315/media/images/2015_Hyundai_Veloster_3dr_Hatchback_wBlack_Interior_16L_4cyl_6M_3915929.jpg",
												"rate" : 4,
												"available" : "true"
											}
										]
									}
								]
							}



]
							




app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});


app.get("/carData/:city", function (req, res) {
    var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var a = req.params.city;
            console.log("hey" + a);

            var collection = db.collection("info");

            console.log("Get Connection established to", url);

            collection.find({ city: a }).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log(result.length);
                    console.log("Found:", result);

                    // arrpush.push(result);
                    res.send(JSON.stringify({ result }));
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

app.get("/userData", function (req, res) {
    var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)

            var collection = db.collection("user");

            console.log("Get Connection established to", url);

            collection.find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log(result.length);
                    console.log("Found:", result);

                    // arrpush.push(result);
                    res.send(JSON.stringify({ result }));
                } else {
                    console.log("No document(s) found with defined criteria!");
                }


                //Close connection
                db.close();
            });
        }

    });

});

//posting a user database
app.post("/userData", function (req, res) {
    var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)

            var collection = db.collection("user");

            console.log("Get Connection established to", url);

            var newUser = {};
            newUser = { "first_name": req.body.first_name, "last_name": req.body.last_name, "email": req.body.email, "password": req.body.password, "bookingDetail": { "dop": "", "pt": "", "dor": "", "dt": "", "payment": "", "cartype": "", "carid": "", "carname": "" } }
            //var collection = db.collection("links");
            //var user1 = {title: 'modulus admin', name: "", click: ""};
            collection.insert([newUser], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Inserted %d documents into the collection. The documents inserted with are:", result.length, result);
                    res.send(JSON.stringify({ key: "post/links" }));
                }
                // do some work here with the database.

                //Close connection
                db.close();


            });
        }

    });

});

//put for user Date
app.put("/userData/:email", function (req, res) {
    //res.header("Access-Control-Allow-Origin", "*");
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var collection = db.collection("user");
            //console.log(:title)
            console.log("Get Connection established to", url);
            var a = req.params.email;
            console.log(a)
            var b = req.body
            //collection.update({ title: a }, { $inc: { click: 1 } })
            console.log(b);
            collection.findAndModify(
                { email: a }, // query
                [], //sort
                { $set: { bookingDetail: b } }, // replacement, replaces only the field "hi"
                { new: true }, // return 
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    } else {
                        console.log(object);
                        res.send(object);
                        db.close();
                    }
                });
        }

    });

});

//update for the carData
app.put("/carData/:city", function (req, res) {
    //res.header("Access-Control-Allow-Origin", "*");
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var collection = db.collection("info");
            //console.log(:title)
            console.log("Get Connection established to", url);
            var a = req.params.city;
            console.log(a)
            var b = req.body.carupdate;
            //collection.update({ title: a }, { $inc: { click: 1 } })
            console.log(b);
            collection.findAndModify(
                { city: a }, // query
                [], //sort
                { $set: { bookingDetail: b } }, // replacement, replaces only the field "hi"
                { new: true }, // return 
                function (err, object) {
                    if (err) {
                        console.warn(err.message);  // returns error if no matching object found
                    } else {
                        console.log(object);
                        res.send(object);
                        db.close();
                    }
                });
        }

    });

});

//GET for carInfo
app.get("/carBookDetails/:car_id", function (req, res) {
    var arrpush = [];

    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var a = req.params.car_id;
            console.log(a);
            var collection = db.collection("dateInfo");
            var c = {
                "car_id": a,
                "bookingDate": []
            }
            console.log("Get Connection established to", url);

            collection.find({ car_id: a }).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log(result.length);
                    console.log("Found:", result);

                    // arrpush.push(result);
                    res.send(JSON.stringify({ result }));
                } else {
                    collection.insert([c], function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(object);
                            res.send(object);
                            //db.close();
                            // console.log("Inserted %d documents into the collection. The documents inserted with are:", result.length, result);
                            //res.send(JSON.stringify({ key: "post/links" }));
                        }
                        //console.warn(err.message);
                        //console.log("hey")  // returns error if no matching object found
                    });
                }

                //Close connection
                db.close();
            });
        }

    });

});

//updating the client side
app.put("/carBookDetails/:car_id", function (req, res) {
    // var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)
            var a = req.params.car_id;
            var b = req.body;
            var collection = db.collection("dateInfo");
            //collection.find( { car_id:a}, { $exists: true, $nin: [ 5, 15 ] }  )
            // collections.find( { a : { $exists: false } } )
            console.log("Get Connection established to", url);

            collection.findAndModify(
                { car_id: a }, // query
                [], //sort
                { $push: { bookingDate: b } }, // replacement, replaces only the field "hi"
                { new: true }, // return 
                function (err, object) {
                    if (err) {



                    }
                    else {
                        console.log(object);
                        res.send(object);
                        db.close();
                    }
                });

        }


    });

});





//populate the database

app.get("/addCarData", function (req, res) {
    var arrpush = [];
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("Unable to connect to the mongoDB server. Error:", err);
        } else {
            //HURRAY!! We are connected. :)

            var collection = db.collection("info");

            console.log("Get Connection established to", url);

            collection.insert(carData, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Inserted %d documents into the collection. The documents inserted with are:", result.length, result);
                    res.send(JSON.stringify({ key: "post/links" }));
                }
                // do some work here with the database.

                //Close connection
                db.close();


            });
        }

    });

});
