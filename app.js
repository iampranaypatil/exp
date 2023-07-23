//import library
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require('./router/routers.js');
const CORS=require("cors");


//add middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//configure the application
//CORS settings

app.use(CORS ({
    origin:"*", //allow all origins to access our api
    credentials:true,
}));


//add url handler
app.use("/",router);

//start the server
app.listen(3002,function(){
    console.log("server running at port 3002")
});


module.exports=app;