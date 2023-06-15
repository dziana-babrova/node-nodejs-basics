import { Worker } from 'worker_threads';
import path from 'path';
import * as url from 'url';
import {cpus} from 'os';

const runService = (workerData) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.join(__dirname, '/worker.js');

  return new Promise((resolve) => {
    const worker = new Worker(pathName, { workerData });
    worker.on('message', (message) => resolve({ data: message, status: 'resolved' }));
    worker.on('error', () => resolve({ data: null, status: 'error' }));
  });
};

const performCalculations = async () => {
  const numbers = cpus().map((_, index) => runService(10 + index));
  const result = await Promise.all(numbers);
  console.log(result);
};

await performCalculations();
