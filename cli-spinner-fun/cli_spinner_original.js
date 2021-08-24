// https://twitter.com/antonmedv/status/1429907721239810052?s=21

let i = 0,
    spin = () => process.stdout.write(`  ${[...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'][i++ % 10]}\r`),
    stop = (id => () => clearInterval(id))(setInterval(spin, 100));
