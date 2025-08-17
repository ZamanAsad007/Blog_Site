const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT ||4000;

app.use(express.json());

const blog = require('./routes/blog');

app.use("/api/v1", blog);

app.listen(PORT, function(){
    console.log('Server running at port ${PORT}')
})

const dbconnect = require('./config/db');
dbconnect();

app.get('/', function(req, res){
    res.send("<h1>this is homepage</h1>");
})