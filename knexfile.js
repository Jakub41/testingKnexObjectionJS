import config from './config/appConfig.js';
import log from './src/utils/logger.js';

const dev = config.NODE_ENV === 'development';

const development = {
  client: 'pg',
  connection: {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    database: config.POSTGRES_DB,
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
  },
  pool: {
    min: 5,
    max: 50,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    afterCreate: function (conn, done) {
      conn.query('SELECT 1;', function (err) {
        if (err) {
          log.error('Connection to DB failed %s', err);
        }
        done(err, conn);
      });
    },
  },
  debug: dev ? true : false,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
  useNullAsDefault: true,
};

const test = {};

export default {
  development,
  test,
};
