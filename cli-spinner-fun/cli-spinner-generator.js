process.on('SIGINT', () => {
    console.log('\rSTOP');
    stop();
    // process.exit();
});

const spinIt = function* () {
    let s = [...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'],
        i = -1; 
    while (true) 
        yield s[i = ++i % s.length];
}

const it = spinIt();
const spin = () => process.stdout.write(`  ${it.next().value}\r`);
const stop = (function (id) {
    return function () {
        return clearInterval(id);
    };
})(
    setInterval(spin, 100)
);

// Compact:

// const it = function* (){let s = [...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'], i = -1; while (true) yield s[++i % s.length]}(),
//     spin = () => process.stdout.write(`  ${it.next().value}\r`),
//     stop = (id => () => clearInterval(id))(setInterval(spin, 100));


// More compact

// const it = function* (){let i = 0; while (true) yield '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'[i++ % 10]}(),
//     spin = () => process.stdout.write(`  ${it.next().value}\r`),
//     stop = (id => () => clearInterval(id))(setInterval(spin, 100));
