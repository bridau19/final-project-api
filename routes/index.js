const express = require("express");

// middleware to allow for routing on the node server
const router = express.Router();
// require firestore
const firestore = require("firebase/firestore");
// initialize Firestore Database
const db = firestore.getFirestore();

// get all articles from firebase
router.get("/", (req, res) => {
    const posts = firestore.getDocs(
        firestore.collection(db, "posts")
    );
    // create empty array
    const postsArray = [];

    posts
        .then((response) => {
            response.forEach((doc) => {
                const docData = doc.data();
                docData.id = doc.id;
                // Push document into array every time the query loops over
                postsArray.push(docData);
            });
            return res.send(postsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
    });

module.exports = router;