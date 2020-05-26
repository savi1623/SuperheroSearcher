// SELECT÷ * FROM team WHERE user_id = user_id

const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);

const connectionString = 'postgres://postgres:root@localhost:5432/MVP';
const knex = require('../../knex/knex');
const db = pgp(knex);

function getTeam(req, res, next) {
  let heroArr = [];
  db.any(
    `SELECT * FROM team Left Outer JOIN heros ON heros.id = team.hero_id
    WHERE team.user_id = 1`
  )
    // allHeros.hero_id FROM team LEFT OUTER JOIN allHeros ON allHeros.id = team.hero_id
    .then((data) => {
      data.map((hero) => {
        heroArr.push(hero.hero_id);
      });
      return heroArr;
    })
    .then((data) => {
      res.status(200).json({
        heros: data,
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function newMember(req, res, next) {
  const hero_id = parseInt(req.params.id);
  db.one(`Select (id) from heros where hero_id =${hero_id}`)
    .then((data) => {
      // console.log(data)
      const hero = data.id;
      db.none(`INSERT into team(hero_id, user_id) VALUES (${hero}, 1)`);
    })
    .then((data) => {
      res.status(201).json({
        status: 'success',
        message: 'Inserted Hero',
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteHero(req, res, next) {
  const id = parseInt(req.params.id);
  db.many(`SELECT id FROM heros where hero_id = ${id} `)
    .then((hero) => {
      const num = hero[0].id;
      {
        db.none(`DELETE FROM team where user_id =1 AND hero_id = ${num}`);
      }
    })
    .then((data) => {
      res.status(204).json({
        status: 'success',
        message: 'Hero Deleted from Team',
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getTeam: getTeam,
  newMember: newMember,
  deleteHero: deleteHero,
};
