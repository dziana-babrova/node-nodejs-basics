import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const calculateHash = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const pathName = path.join(__dirname, '/files/fileToCalculateHashFor.txt');
  const content = await readFile(pathName, 'utf8');
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();
