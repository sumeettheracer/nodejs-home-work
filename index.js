const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyparser = require('body-parser');

//requireing the router file to route the server.

const user = require("./routes/user.router");
const app = express();


// to access the body material.
app.use(bodyparser.urlencoded({extended:true}));

// connecting to mongoose.
const DB_URI = "mongodb://127.0.0.1:27017";
mongoose
  .connect(`${DB_URI}/userdataDB`)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("not connected check mongodb is running or not?", e);
  });


//saving one data for the work.
// const person = new users({
//   fullName: "Sumeet Biswas",
//   userName: "sumeettheracer",
//   email: "sumeettheracer@gmail.com"
// })
// person.save();
app.use("/", user);
// declaring a port...
const PORT = 8082;

//listining to the port...
app.listen(PORT, () => {
  console.log("Server Listening at PORT 8082");
});

