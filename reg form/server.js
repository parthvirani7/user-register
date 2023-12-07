const http = require("http");
const express = require("express");

const app = express();
const { connectDB } = require("./db/dbconnection");

const bodyParser = require("body-parser");

const routes = require("./routes");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/v1", routes);


// database connection
connectDB();

http.createServer(app).listen(3011, () => {
  console.log("server started...");
});
