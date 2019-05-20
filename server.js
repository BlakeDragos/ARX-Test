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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db.Login.create({
//   Email: "mr.duncan8@gmail.com",
//   password: "password",
//   Client: "Blake Dragos",
//   ClientId: "105344EC-07A7-4660-908B-339D47199A6D"
// })

//   db.Sessions.create({
//     Client: "Blake Dragos",
//     ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
//     Exercise: "Decline Press",
//     Protocol: "Reps (6)",
//     MovementMode: "Automatic",
//     StartPosition: 27.73,
//     EndPosition: 20.703,
//     StartToEndTime: 4.8,
//     PauseAfterEndPosition: 0,
//     EndToStartSpeed: 2.9,
//     PauseAfterStartPosition: 3,
//     NumOfReps: 6,
//     Finished: "Yes",
//     ExerciseTime: "01:04.02",
//     Intensity: 45,
//     Max: 116,
//     Output: 288,
//   })
//   db.Sessions.create({
//     Client: "Blake Dragos",
//     ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
//     Exercise: "Decline Press",
//     Protocol: "Reps (6)",
//     MovementMode: "Automatic",
//     StartPosition: 27.73,
//     EndPosition: 20.703,
//     StartToEndTime: 4.8,
//     PauseAfterEndPosition: 0,
//     EndToStartSpeed: 2.9,
//     PauseAfterStartPosition: 3,
//     NumOfReps: 6,
//     Finished: "Yes",
//     ExerciseTime: "01:04.02",
//     Intensity: 57,
//     Max: 140,
//     Output: 364,
//   })
//   db.Sessions.create({
//     Client: "Blake Dragos",
//     ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
//     Exercise: "Decline Press",
//     Protocol: "Reps (6)",
//     MovementMode: "Automatic",
//     StartPosition: 27.73,
//     EndPosition: 20.703,
//     StartToEndTime: 4.8,
//     PauseAfterEndPosition: 0,
//     EndToStartSpeed: 2.9,
//     PauseAfterStartPosition: 3,
//     NumOfReps: 6,
//     Finished: "Yes",
//     ExerciseTime: "01:04.02",
//     Intensity: 37,
//     Max: 110,
//     Output: 246,
//   })
  
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
  //   Intensity: 51,
  //   Max: 148,
  //   Output: 343,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Incline Press",
  //   Protocol: "Reps (5)",
  //   MovementMode: "Automatic",
  //   StartPosition: 22.071,
  //   EndPosition: 8.547,
  //   StartToEndTime: 7,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 4.8,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 5,
  //   Finished: "Yes",
  //   ExerciseTime: "01:13.31",
  //   Intensity: 58,
  //   Max: 260,
  //   Output: 423,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Incline Press",
  //   Protocol: "Reps (5)",
  //   MovementMode: "Automatic",
  //   StartPosition: 22.071,
  //   EndPosition: 8.547,
  //   StartToEndTime: 7,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 4.8,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 5,
  //   Finished: "Yes",
  //   ExerciseTime: "01:13.27",
  //   Intensity: 56,
  //   Max: 244,
  //   Output: 409,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Incline Press",
  //   Protocol: "Reps (5)",
  //   MovementMode: "Automatic",
  //   StartPosition: 22.071,
  //   EndPosition: 8.547,
  //   StartToEndTime: 7,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 4.8,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 5,
  //   Finished: "Yes",
  //   ExerciseTime: "01:14.85",
  //   Intensity: 50,
  //   Max: 142,
  //   Output: 371,
  // })
  
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Incline Press",
  //   Protocol: "Reps (5)",
  //   MovementMode: "Automatic",
  //   StartPosition: 22.071,
  //   EndPosition: 8.547,
  //   StartToEndTime: 7,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 4.8,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 5,
  //   Finished: "Yes",
  //   ExerciseTime: "01:14.75",
  //   Intensity: 60,
  //   Max: 217,
  //   Output: 452,
  // })
  
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Incline Press",
  //   Protocol: "Reps (5)",
  //   MovementMode: "Automatic",
  //   StartPosition: 22.071,
  //   EndPosition: 8.547,
  //   StartToEndTime: 7,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 4.8,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 5,
  //   Finished: "Yes",
  //   ExerciseTime: "01:18.41",
  //   Intensity: 46,
  //   Max: 142,
  //   Output: 358,
  // // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Biceps Curl",
  //   Protocol: "Reps (4)",
  //   MovementMode: "Automatic",
  //   StartPosition: 21.865,
  //   EndPosition: 0.865,
  //   StartToEndTime: 9,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 7,
  //   PauseAfterStartPosition: 5,
  //   NumOfReps: 4,
  //   Finished: "Yes",
  //   ExerciseTime: "01:20.92",
  //   Intensity: 69,
  //   Max: 289,
  //   Output: 555,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Biceps Curl",
  //   Protocol: "Reps (4)",
  //   MovementMode: "Automatic",
  //   StartPosition: 21.865,
  //   EndPosition: 0.865,
  //   StartToEndTime: 9,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 7,
  //   PauseAfterStartPosition: 5,
  //   NumOfReps: 4,
  //   Finished: "Yes",
  //   ExerciseTime: "01:20.84",
  //   Intensity: 64,
  //   Max: 200,
  //   Output: 514,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Leg Press-Alpha",
  //   Protocol: "Reps (6)",
  //   MovementMode: "Automatic",
  //   StartPosition: 10.424,
  //   EndPosition: 19.099,
  //   StartToEndTime: 5,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 3.1,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 6,
  //   Finished: "Yes",
  //   ExerciseTime: "01:06.64",
  //   Intensity: 254,
  //   Max: 865,
  //   Output: 1694,
  // })
  // db.Sessions.create({
  //   Client: "Blake Dragos",
  //   ClientId: "105344EC-07A7-4660-908B-339D47199A6D",
  //   Exercise: "Leg Press-Alpha",
  //   Protocol: "Reps (6)",
  //   MovementMode: "Automatic",
  //   StartPosition: 10.424,
  //   EndPosition: 19.099,
  //   StartToEndTime: 5,
  //   PauseAfterEndPosition: 0,
  //   EndToStartSpeed: 3.1,
  //   PauseAfterStartPosition: 3,
  //   NumOfReps: 6,
  //   Finished: "Yes",
  //   ExerciseTime: "01:06.69",
  //   Intensity: 423,
  //   Max: 1454,
  //   Output: 2823,
  // })
app.post("/api/dash", function (req, res) {
  db.Sessions.findAll({
    where: {
      ClientId: req.body.id
    }
  }).then(function (result) {
    res.json(result);
  });
});
app.post("/api/login", function (req, res) {
  db.Login.findOne({
    where: {
      Email: req.body.email,
      Password: req.body.password
    }
  }).then(function (result) {
    if(result){
    res.json(result.ClientId);
    }else {
      res.json(false);
    }
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
 