import {
  errorHandler,
  loggerMiddleware,
  notFound,
} from './middlewares/index.js';

import config from '../config/appConfig.js';
import connectDB from '../db.js';
import express from 'express';
import helmet from 'helmet';
import log from './utils/logger.js';
import logger from 'morgan';
import message from './constants/message.js';
import route from './routes/index.js';

const port = config.PORT || 8800;
connectDB();
const server = express();

server.use(helmet());
server.use(express.json());
server.use(loggerMiddleware);

server.use(logger('dev'));

server.get('/', (req, res) => {
  res.json({
    message,
  });
});

if (config.NODE_ENV !== 'test') {
  server.listen(port, () => {
    log.info(`Listening at http://localhost:%s`, port);
    log.info(message);
  });
}

server.use('/', route);

server.use(notFound);
server.use(errorHandler);

export default server;
