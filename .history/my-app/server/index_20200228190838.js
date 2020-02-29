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
  axios.get(`${url}/search/${hero}`)
    .then((data) => {
      const arr = data.data.results;
      arr.map(obj => {
        if (obj.name.toLowerCase() === hero) {
          res.send(obj)
        }
      })
    }).catch(error => {
      throw error;
    });
})

app.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  axios.get(`${url}/${id}`)
    .then((data) => {
      console.log('clicked');
      console.log(data.data)
    }).catch(error => {
      console.log(error);
    });
})

app.get('/:id/image', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/image`)
    .then((data) => {
      res.send(data.data.url);
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/appearance', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/appearance`)
    .then((data) => {
      console.log(data.data)
    }).catch(error => {
      throw error;
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))