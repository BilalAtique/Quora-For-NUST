const PORT = process.env.port || 8000;
const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));