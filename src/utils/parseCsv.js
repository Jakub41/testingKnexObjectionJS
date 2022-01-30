import path, { dirname } from 'path';

import Papa from 'papaparse';
import fs from 'fs';
import log from './logger.js';

const papaConfig = {
  worker: true,
  header: true,
  delimiter: ',',
  skipEmptyLines: true,
  dynamicTyping: true,
};

const folderPath = 'Data';
const src = path.resolve(dirname('./../'), folderPath);

export async function parseCsv(fileName) {
  if (!fileName) {
    log.error('No filename was provided to parse!');
  }

  log.info('Parsing CSV file %s', fileName);

  const csvFile = path.join(src, fileName);
  log.info('File path %s', csvFile);

  const file = fs.createReadStream(csvFile);
  log.info('File read stream');

  log.info('Init parsing');
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      ...papaConfig,
      transformHeader: (h) => {
        return h.replace(/ +/g, '').replaceAll('.', '');
      },
      complete: (res) => {
        log.info('Completed %d data records', res.data.length);
        return resolve(res.data);
      },
      error: (error) => {
        log.error('Error %o', error);
        return reject(error);
      },
    });
  });
}
