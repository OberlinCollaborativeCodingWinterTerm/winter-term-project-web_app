// Attaches the environment variables to the process object 
require("dotenv").config({path: "./config.env"}); 

const express=require('express');
const app = express();
const mongoose=require("mongoose"); 
const cors=require("cors");
const userRoutes=require("./routes/user");
const postRoutes=require("./routes/post");
const courseRoutes=require("./routes/course");
const validateRoutes=require("./routes/validate");


// app.use() is middleware function, fires for every request coming in between giving a response back
app.use(cors());
  
// Allows access to the body of a request
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
// Grabs all the routes from the path to be able to use through app.get or other functions
// When user follows below path, the function with "/" in the routes is fired. 
// .../api/user/login 

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/course", courseRoutes);
app.use("/validate", validateRoutes);


mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{ 
            // Requests / responses can be sent only after connection to the database
            console.log("Server started on port: ", process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })








 