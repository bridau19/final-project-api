const express = require("express");

// middleware to allow for routing on the node server
const router = express.Router();
// require firestore
const firestore = require("firebase/firestore");
// initialize Firestore Database
const db = firestore.getFirestore();

// get a single post by id from firebase
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const post = firestore.getDoc(firestore.doc(db, "posts", postId));
    
    post.then((response) => {
        const apost = response.data;
        if (apost) return res.send(apost);
        return res.send( { postMessage: `No doc` });

    }) .catch((error) => {
        res.send(error);
    });
});

module.exports = router;
