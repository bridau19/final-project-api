const express = require("express");
const router = express.Router();
// require firestore
const firestore = require("firebase/firestore");
// initialize Firestore Database
const db = firestore.getFirestore();

// API Endpoint for submitting data through our form
router.get("/", (req, res) => {
    const queryParams = req.query; // Query params from URL
    const { imageAlt, imageSrc, postMessage, userId, username } = queryParams;
    
    // Submit post to Firebase
    const setPost = firestore.addDoc( 
        firestore.collection(db, "posts"), 
        {
            imageAlt, 
            imageSrc, 
            postMessage, 
            userId, 
            username,
        });

    setPost
    .then((response) => {
        // If successful send response
        res.send(response);
    })
    .catch((error) => {
        // If failure send error
        res.send(error);
    });
});

module.exports = router;