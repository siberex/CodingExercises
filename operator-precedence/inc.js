const var_dump = console.log;
let $i, $inc;

$i = 100;
var_dump( (++$i & $i--) );

$inc1 = $i + 1;
var_dump( ($inc1 & $inc1--) );

/*
101
101
*/
