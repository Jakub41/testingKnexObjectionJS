import config from './config/appConfig.js';

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
    min: 0,
    max: 50,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false,
  },
  migrations: {
    directory: './src/database/migrations',
  },
};

const test = {};

export default {
  development,
  test,
};
