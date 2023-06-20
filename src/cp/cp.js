import { spawn, fork } from 'child_process';
import path from 'path';
import * as url from 'url';

const spawnChildProcess = async (...args) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.join(__dirname, '/files/script.js');

  fork(pathName, args, { stdio: [0, 1, 2, 'ipc'] });

};

spawnChildProcess('test', 'test');
