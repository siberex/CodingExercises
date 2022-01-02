<?php

// https://www.php.net/manual/en/language.operators.precedence.php#example-108

$i = 100;
var_dump( (++$i & $i--) );

$inc1 = $i + 1;
var_dump( ($inc1 & $inc1--) );

/*
int(101)
int(100)
*/
