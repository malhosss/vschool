var readlineSync = require("readline-sync")
var str = readlineSync.question("give me you full name");
var str = str.toUpperCase();
var frn = readlineSync.question("first name")
var mdn = readlineSync.question("middle name")
var ldn = readlineSync.question("last name")
console.log(frn + " " + mdn + " " + ldn);
var aboutu = readlineSync.question("talk about yourself");
if (aboutu.length >= 20){
    //res = thrd.substring(thrd.length / 2,thrd.length);
    //console.log(res);
    res = aboutu.substring(aboutu.length / 2,aboutu.length);
    console.log(res);
}
var index = readlineSync.question("index: ");
console.log(aboutu.substring(index, aboutu.length));
