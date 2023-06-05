import { writeFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const create = async () => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const pathName = path.join(__dirname, '/files/fresh.txt');
    const content = 'I am fresh and young';
    try {
        await writeFile(pathName, content, {flag: 'ax'});
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
