const express=require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes=express.Router(); 

// Connection to the database
const dbo=require("../db/dbConnect");

// Conversion of the id
const ObjectId=require("mongodb").ObjectId;

recordRoutes.route("/record").get(function(req, res){
    let db_connect=dbo.getDb("users");
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result){
            if (err) throw err;
            res.json(result); 
        });
});

// Get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

 
// Create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
    
// Update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    db_connect
      .collection("records")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
    
// Delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });
    

 module.exports = recordRoutes;