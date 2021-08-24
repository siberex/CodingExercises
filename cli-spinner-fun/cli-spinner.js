process.on('SIGINT', () => {
    console.log('\rSTOP');
    stop();
    // process.exit();
});

// https://twitter.com/siberex/status/1430245195338092547?s=20
// https://gist.github.com/siberex/904e7d834107b21470d07e382ac7dd85

let it = function* (){let i = 0; while (true) yield process.stdout.write(`  ${'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'[i++ % 10]}\r`)}(),
    stop = (id => () => clearInterval(id))(setInterval(() => it.next(), 100));
