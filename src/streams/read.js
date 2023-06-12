import { createReadStream } from 'fs';
import path from 'path';
import { stdout } from 'process';
import * as url from 'url';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathName = path.join(__dirname, '/files/fileToRead.txt');
    const fileStream = createReadStream(pathName, 'utf-8');
    fileStream.on('data', (chunk) => {
        stdout.write(chunk);
    })
};

await read();