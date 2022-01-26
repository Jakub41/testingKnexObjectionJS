import { Model } from 'objection';
import config from './config/appConfig.js';
import knex from 'knex';
import knexConfig from './knexfile.js';

const env = config.NODE_ENV || 'development';

function connectDB() {
  const connectionConfig = knex(knexConfig[env]);
  Model.knex(connectionConfig);
}

export default connectDB;
