var readlineSync = require("readline-sync");
var str = readlineSync.question("give me a string: ");
var str = str.toUpperCase();
console.log(str);
console.log(str.length);
var first = readlineSync.question("give me word: ");
var second = readlineSync.question("give me a second word: ");
console.log(first + " " + second);
var thrd = readlineSync.question("many words: ");
if(thrd.length >= 20) {
    res = thrd.substring(thrd.length / 2,thrd.length);
    console.log(res);
} 

var index = readlineSync.question("index: ");
console.log(thrd.substring(index, thrd.length));
