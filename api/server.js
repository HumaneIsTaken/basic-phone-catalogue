var express = require("express");
var app = express();

const PORT = 3001;
const PAYLOAD = require("./phones.json");

app.listen(PORT);
console.log(`Phone Catalogue API server up on port ${PORT}`);

app.use(express.static("public")); //setup image hosting

app.get('/phones', (req, res) => {
    return res.json(PAYLOAD);
});
