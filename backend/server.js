const PORT = process.env.port || 8000;
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/', function (req, res) {
    res.send('hello world');
});

app.use(require('./routes/register.js'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));