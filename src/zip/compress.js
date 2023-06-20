import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';
import { unlink } from 'node:fs/promises';
import * as url from 'url';
import path from 'path';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  try {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const inputPathName = path.join(__dirname, '/files/fileToCompress.txt');
    const outputPathName = path.join(__dirname, '/files/archive.gz');

    const gzip = createGzip();
    const source = createReadStream(inputPathName);
    const destination = createWriteStream(outputPathName);

    await pipeline(source, gzip, destination);
    await unlink(inputPathName);
  } catch {
    throw new Error('FS operation failed');
  }
};

await compress();
