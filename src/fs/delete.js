import { unlink } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const remove = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.join(__dirname, '/files/fileToRemove.txt');
  try {
    await unlink(pathName);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
