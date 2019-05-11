require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

// db.Login.create({
//   Email: "test",
//   password: "password",
//   Client: "Blake Dragos"
// })

  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Decline Press",
  //   Protocol: "Reps (6)",
  //   MovementMode: "Automatic",
  //   StartPosition: 27.73,
  //   EndPosition: 20.703,
  //   StartToEndTime: 4.8,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 2.9,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 6,
  //   Finished: "Yes",
  //   ExerciseTime: "01:04.02",
  //   Intensity: 45,
  //   Max: 116,
  //   Output: 288,
  // })

app.get("/api/dash", function (req, res) {
  db.Sessions.findAll({
    where: {
      Client: "Blake Dragos"
    }
  }).then(function (result) {
    res.json(result);
  });
});
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

var syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
 