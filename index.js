const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");
const hotelRooms = require('./routes/api/hotels')
const Joi = require('joi'); 

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
  .connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

app.use('/api/nasa/', hotelRooms); 


app.listen(3000, () => console.log("listening on port 3000"));


