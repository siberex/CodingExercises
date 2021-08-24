[How it started](https://twitter.com/antonmedv/status/1429907721239810052):

```js
let i = 0,
    spin = () => process.stdout.write(`  ${[...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'][i++ % 10]}\r`),
    stop = (id => () => clearInterval(id))(setInterval(spin, 100));
```

And I simply could not resist from sticking generator in it:

```js
const spinIt = function* () {
    let s = [...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'],
        i = -1; 
    while (true) 
        yield s[i = ++i % s.length];
}

const it = spinIt(),
    spin = () => process.stdout.write(`  ${it.next().value}\r`),
    stop = (id => () => clearInterval(id))(setInterval(spin, 100));
```

A bit of explanation.

Using `i = -1` and `i = ++i % s.length` are not strictly needed.

In case of integer overflow it will still work fine. So `i++ % s.length` is totally safe.

Also, the last line is just a shorthand for:

```js
const stop = (function (id) {
    return function () {
        return clearInterval(id);
    };
})(
    setInterval(spin, 100)
);
```

OK, now I want to compact that in 3 lines or less...

```js
const it = function* (){let s = [...'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'], i = -1; while (true) yield s[++i % s.length]}(),
    spin = () => process.stdout.write(`  ${it.next().value}\r`),
    stop = (id => () => clearInterval(id))(setInterval(spin, 100));
```

And simplify a bit back to original:

```js
const it = function* (){let i = 0; while (true) yield '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'[i++ % 10]}(),
    spin = () => process.stdout.write(`  ${it.next().value}\r`),
    stop = (id => () => clearInterval(id))(setInterval(spin, 100));
```

And I should really stop here.

But then I thought... What about good old Perl-style code golf?

```js
let it = function* (){let i = 0; while (true) yield process.stdout.write(`  ${'⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'[i++ % 10]}\r`)}(),
    stop = (id => () => clearInterval(id))(setInterval(() => it.next(), 100));
```

[Let it stop](https://twitter.com/siberex/status/1430245195338092547), lol.