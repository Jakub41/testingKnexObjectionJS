import { Model } from 'objection';
import config from './config/appConfig.js';
import knex from 'knex';
import knexConfig from './knexfile.js';

const env = config.NODE_ENV || 'development';

function connectDB() {
  const connectionConfig = knexConfig[env];
  const connection = knex(connectionConfig);
  Model.knex(connection);
}

export default connectDB;
