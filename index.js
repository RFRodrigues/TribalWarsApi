const express = require("express");
const app = express();
const firebase = require("firebase");

const port = 5000;

const firebaseConfig = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348",
  appId: "1:1009323283348:web:465fb1bed784908d33f581",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.get("/usersinfo", (req, res) => {
  var db = firebase.database().ref("/users");
  db.once("value", (snapshot) => {
    var users = snapshot.val();
    
  });
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
