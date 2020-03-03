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

// app.get('/index/heros', (req, res, next) => {
//   let indexObj = {}
//   const innerFunc = async () => {
//     let id = 1;
//     while (id < 732) {
//       const getHero = await axios.get(`${url}/${id}`)
//       console.log(getHero.data.id)
//       let hero = getHero.data;
//       indexObj[hero.id] = hero.name
//       id++
//     }
//     console.log(indexObj);
//     return indexObj;
//   }
//   innerFunc()
//     .then((data) => {
//       console.log(data)
//       res.send(data.indexObj)
//     })
// })

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


app.listen(port, () => console.log(`Example app listening on port ${port}!`))