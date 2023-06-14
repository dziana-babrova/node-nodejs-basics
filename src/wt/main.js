import { Worker, isMainThread, parentPort } from "worker_threads";
import path from 'path';
import * as url from 'url';
import os from 'os';

const runService = (workerData) => {
    return new Promise((resolve) => {
        const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
        const pathName = path.join(__dirname, '/worker.js');

        if (isMainThread) {
          const worker = new Worker(pathName, { workerData });
            worker.on('message', (message) => resolve({ data: message, status: 'resolved' }));
            worker.on('error', () => resolve({ data: null, status: 'error' }));
        } else {
          const data = workerData;
          parentPort.postMessage(`You said \"${data}\".`);
        }
    })
}

const performCalculations = async () => {
    const result = [];
    let index = 10;
    for (const _core of os.cpus()) {
      const workerResult = await runService(index);
        result.push(workerResult);
        index++;
    }
    console.log(result);
};

await performCalculations();