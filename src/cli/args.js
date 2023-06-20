const parseArgs = () => {
  const result = [];
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length - 1; i += 2) {
    result.push(`${args[i].replace('--', '')} is ${args[i + 1]}`);
  }
  console.log(result.join(', '));
};

parseArgs();
