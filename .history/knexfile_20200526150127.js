// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:root@localhost:5432/MVP',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  },
};
