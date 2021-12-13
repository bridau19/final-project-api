const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// import firebase
const firebase = require("firebase/app");

// get configuration object so we can communicate with Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAF0glgm_A_1kRRF70tvoR0sw1yuYU5N58",
    authDomain: "final-project-f78df.firebaseapp.com",
    projectId: "final-project-f78df",
    storageBucket: "final-project-f78df.appspot.com",
    messagingSenderId: "650834290917",
    appId: "1:650834290917:web:0d893072be86aef7460c0c"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// routes for directing user to correct place
const indexRoute = require("./routes/index");
// const singlePostRoute = require("./routes/post");
const createPostRoute = require("./routes/createPost");

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    // Pass to next layer of middleware
    next();
  });

// get all posts
app.use("/", indexRoute);
// submit new post
app.use("/create", createPostRoute);
// get single post
// app.use("/post", singlePostRoute);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

