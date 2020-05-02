
// Package import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Local import
const { mongoose } = require('./db.js')
var employeeController = require('./controllers/employeeController.js')

var app = express();
// Configure the express middleware  to send node.js data to send the json data the project
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:4200' })); //Cross-origin resource sharing (CORS) to allow request from other port no and any domain 

const port = 3000;
app.listen(port,
    () => console.log("Server started at " + port)
);

app.use("/employees", employeeController)