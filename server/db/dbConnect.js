const { MongoClient }=require("mongodb");
const Db=process.env.DB_URL;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var _db; 

module.exports ={
    connectToServer: function (callback){
        client.connect(function (err, db){
            if (db){
                _db=db.db("users");
                console.log("Successfully connected to MongoDB");
            }
            return callback(err);
        });
    },
    getDb: function (){
        return _db; 
    },
};

// // external imports
// const mongoose = require("mongoose");
// require('dotenv').config()

// async function dbConnect() {
//   // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
//   mongoose
//     .connect(
//         process.env.DB_URL,
//       {
//         //   these are options to ensure that the connection is done properly
//         useNewUrlParser: true, 
//         useUnifiedTopology: true 
//       }
//     )
//     .then(() => {
//       console.log("Successfully connected to MongoDB Atlas!");
//     })
//     .catch((error) => {
//       console.log("Unable to connect to MongoDB Atlas!");
//       console.error(error);
//     });
// }



