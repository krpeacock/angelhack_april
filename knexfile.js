module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/angel_dev',
    debug: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'knexlibrary_test'
    },
      pool: {
      min: 1,
      max: 5
    },
    debug:true
  },
};

