import expressPinoLogger from 'express-pino-logger';
import logger from '../utils/logger.js';
import config from '../../config/appConfig.js';

const autoLogging = config.NODE_ENV === 'development' ? true : false;

const loggerMidlleware = expressPinoLogger({
  logger,
  autoLogging,
});

export default loggerMidlleware;
