import { createWriteStream } from 'fs';
import path from 'path';
import { stdin } from 'process';
import * as url from 'url';

const write = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathName = path.join(__dirname, '/files/fileToWrite.txt');
    const stream = createWriteStream(pathName);
    stdin.on('data', (chunk) => {
        stream.write(chunk);
    })
};

await write();
