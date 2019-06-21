const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.send()
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
