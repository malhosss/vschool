var ask = require("readline-sync");
var str = ask.question("please enter a string: ");

function isCaps(letter){
    return letter === letter.toUpperCase();
}
console.log(str.toUpperCase);