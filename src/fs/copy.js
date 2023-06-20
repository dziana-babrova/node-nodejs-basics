import { access, copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const copy = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const sourcePath = path.join(__dirname, '/files');
  const destinationPath = path.join(__dirname, '/files_copy');
  try {
    await access(sourcePath);
    const [files] = await Promise.all([readdir(sourcePath), mkdir(destinationPath)]);
    const result = files.map((file) =>
      copyFile(path.join(sourcePath, file), path.join(destinationPath, file)),
    );
    await Promise.all(result);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
