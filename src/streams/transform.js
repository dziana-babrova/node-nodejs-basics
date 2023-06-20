import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, `${String(chunk).split('').reverse().join('')}\n`);
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();
