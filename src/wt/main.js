import { Worker, isMainThread, parentPort } from "worker_threads";
import path from 'path';
import * as url from 'url';

const runService = (workerData) => {
    return new Promise((resolve) => {
        const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
        const pathName = path.join(__dirname, '/worker.js');

        if (isMainThread) {
          const worker = new Worker(pathName, { workerData });
          worker.on('message', resolve);
        } else {
          const data = workerData;
          parentPort.postMessage(`You said \"${data}\".`);
        }
    })
}

const performCalculations = async () => {
    const result = await runService(9);
    console.log(result);
};

await performCalculations();