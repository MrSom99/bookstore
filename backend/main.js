const express = require("express");
const app = express();
const port = 3001;

////////////////// Body-Parser /////////////////////
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

/////////////////// using Cors Middleware////////////////
const cors = require("cors");
app.use(cors());

////////////////// MongoDb connection file import ////////////
require("./mongo/connection");


////////////admin router midddleware////////////
const adminrouter=require('./adminroute/adminroutes')
app.use("/admin",adminrouter)

///////////////////getting Express router middleware////////////
const router = require("./bookroute/routes");
app.use("/book", router);



app.listen(port, () => {
  console.log(`server running on ${port}`);
  console.log(`http://localhost:${port}`);
});
