const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const enCon = config[environment];
const knex = require('knex');
const connection = knex(enCon);
console.log(connection);
module.exports = connection;
