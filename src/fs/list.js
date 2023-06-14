import { readdir } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const list = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathName = path.join(__dirname, '/files');
    try {
        const files = await readdir(pathName);
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await list();
