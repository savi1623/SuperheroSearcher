const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const url = 'https://superheroapi.com/api/10217002715925793';

const port = 5000;
app.use(bodyParser.json());
app.use(cors())

app.get('/:hero', (req, res, next) => {
  const { hero } = req.params
  console.log(hero);
  axios.get(`${url}/search/${hero}`)
    .then((data) => {
      let arr = data.data;
      srrmap(obj => {
        console.log(obj)
      })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))