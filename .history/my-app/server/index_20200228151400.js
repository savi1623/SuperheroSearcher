const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
app.use(bodyParser.json());
app.use(cors())

app.get('/:hero', (req, res, next) => {

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))