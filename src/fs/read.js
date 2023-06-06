import { readFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const read = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathName = path.join(__dirname, '/files/fileToRead.txt');
    try {
      const content = await readFile(pathName, 'utf8');
      console.log(content);
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await read();
