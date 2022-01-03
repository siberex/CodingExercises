# Operator precedence research

Inspiration:

https://twitter.com/bolknote/status/1477172141900578823?s=28


How it works in PHP:

https://github.com/php/php-src/blob/f51eb157990ee70860bd0c0fe0619fe88298ab00/Zend/zend_ast.c#L1883

https://github.com/php/php-src/blob/f51eb157990ee70860bd0c0fe0619fe88298ab00/Zend/zend_ast.c#L1988

https://github.com/php/php-src/blob/f51eb157990ee70860bd0c0fe0619fe88298ab00/Zend/zend_ast.c#L1063

PHP differs from other languages: prefix and postfix increment/decrement have the same priority.


How it works in JS (different priority):

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table


How it works in C++

https://bastian.rieck.me/blog/posts/2016/unsequenced_operations/


# Research results

![Cursed Increment Meme](./5zumsm.jpeg)
