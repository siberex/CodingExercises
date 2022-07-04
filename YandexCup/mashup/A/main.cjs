const fs = require('fs/promises');

async function main() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    console.log(data);

    const[n1, n2] = data.split('\n').map(s => {
      s = s.replaceAll('one', '1');
      s = s.replaceAll('zero', '0');
      return parseInt(s, 2);
    });

    let output = '';
    if (n1 > n2) {
      output = '>';
    } else if (n1 < n2) {
      output = '<';
    } else {
      output = '=';
    }

    await fs.writeFile('output.txt', output);

  } catch (err) {
    console.error(err);
  }
}
main();
