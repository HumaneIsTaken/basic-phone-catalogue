const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3001;
const PAYLOAD = require("./phones.json");

app.listen(PORT);
console.log(`Phone Catalogue API server up on port ${PORT}`);

app.use(cors());
app.use(express.static("public")); //setup image hosting

app.get('/phones', (req, res) => {
    return res.json(PAYLOAD);
});
