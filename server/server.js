const express=require('express')

const app = express()

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

app.listen(5000, ()=>{ console.log("Server started on port 5000") })