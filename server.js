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
    if (result) {
      res.json(result.ClientId);
    } else {
      res.json(false);
    }
  });
});
app.put("/api/update", function (req, res) {
  db.Login.update(
    {
      Client: req.body.name,
      Email: req.body.email,
      password: req.body.password
    },
    {
      where: {
        ClientId: req.body.ClientId
      }
    }).then(function (result) {
      res.json({
        name: result.Client,
        email: result.Email,
      })
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
