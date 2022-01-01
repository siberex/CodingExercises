#!/usr/bin/env node

let $year = 2021;
console.log(
    (++ $year & $year --) + (++ $year ^ $year --)
);
