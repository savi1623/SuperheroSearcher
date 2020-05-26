// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:root@localhost:5432/MVP'
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      password: 'very_secure_password',
      database: 'MVP',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      password: 'very_secure_password',
      database: 'MVP',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
