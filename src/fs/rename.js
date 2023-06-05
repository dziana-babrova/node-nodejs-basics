import { rename as renameFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const rename = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const oldName = path.join(__dirname, '/files/wrongFilename.txt');
    const newName = path.join(__dirname, '/files/properFilename.md');
    try {
        await renameFile(oldName, newName);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await rename();
