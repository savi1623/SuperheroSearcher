const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/controllers.js');
const url = 'https://superheroapi.com/api/10217002715925793';

const port = 5000;
app.use(bodyParser.json());
app.use(cors())

app.get('/:hero', (req, res, next) => {
  const { hero } = req.params
  axios.get(`${url}/search/${hero}`)
    .then((data) => {
      let resultObj = {};
      let heroObj = {};
      const arr = data.data.results;
      arr.map(obj => {
        heroObj[obj.id] = obj.name;
        if (obj.name.toLowerCase() === hero) {
          if (resultObj.hero === undefined) {
            resultObj.hero = obj;
          }
        }
      })
      resultObj.heros = heroObj;
      res.send(resultObj);
    }).catch(error => {
      throw error;
    });
})

app.get('/index/heros', (req, res, next) => {
  axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(data => {
      res.send(data.data)
    })
})

app.get('/:id/image', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/image`)
    .then((data) => {
      res.send(data.data);
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/appearance', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/appearance`)
    .then((data) => {
      res.send(data.data)
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/biography', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/biography`)
    .then((data) => {
      res.send(data.data)
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/connections', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/connections`)
    .then((data) => {
      res.send(data.data)
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/powerstats', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/powerstats`)
    .then((data) => {
      res.send(data.data)
    }).catch(error => {
      throw error;
    });
})

app.get('/:id/work', (req, res, next) => {
  const { id } = req.params;
  axios.get(`${url}/${id}/work`)
    .then((data) => {
      res.send(data.data)
    }).catch(error => {
      throw error;
    });
})

app.get('/team/team', db.getTeam)

app.post('/team/:id', db.newMember)

app.delete('/team/:id', db.deleteHero)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))