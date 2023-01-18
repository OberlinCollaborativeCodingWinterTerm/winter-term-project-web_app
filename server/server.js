const express=require('express');
const app = express();
const cors=require("cors");

require("dotenv").config({path: "./config.env"});
const port=process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// require database connection 
const dbConnect = require("./db/dbConnect");

app.listen(port, ()=>{ 
    // perform connection to the database once the server starts
    dbConnect.connectToServer(function (err){
        if (err) console.error(err);
    }); 
    console.log('Server started on port: 5000');
});


// simple example route
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});  // Response that is sent to App.js after the GET request 
})

app.post("/", (req, res)=>{
    return res.send("Received a POST HTTP method");
})

app.put("/", (req,res)=>{
    return res.send("Received a PUT HTTP method"); 
})
// TODO: Create more endpoints with app.get("/yourDesiredRoute")





 