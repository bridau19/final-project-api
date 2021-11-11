const express = require("express");
const app = express();
const port = 4000;

router.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`App Listening on Port ${port}`);
})