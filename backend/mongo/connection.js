const mongoose = require("mongoose");
const dbName = "Bookstore";
mongoose.connect("mongodb://127.0.0.1:27017/" + dbName)
.then(()=>{
    console.log("connected to the database")
})
.catch((e)=>{
    console.log('failed to connec to the database')
})
