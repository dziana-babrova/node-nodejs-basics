import { cp, mkdir } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const copy = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const sourcePath = path.join(__dirname, '/files');
    const destionationPath = path.join(__dirname, '/files_copy');
    try {
        await mkdir(destionationPath);
        await cp(sourcePath, destionationPath, { recursive: true });
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

await copy();
