const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
app.use(bodyParser.json());
app.use(cors())


app.listen(port, () => console.log(`Example app listening on port ${port}!`))