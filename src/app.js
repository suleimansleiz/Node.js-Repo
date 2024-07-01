const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("this is a get request");
});
app.post("/", (req, res) => {
  res.send("this is a post request");
});
app.listen(PORT, () => {
  console.log("app listening to port " + PORT);
});

const start = async() => {
  await mongoose.connect('mongodb+srv://suleimansleiz:suleiman@cluster0.17avjjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  app.listen(PORT, () => {
  console.log("app listening to port " + PORT);
});
};

start();