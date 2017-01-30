var names = ["Anna", "Bill", "Charly", "Emily", "Frank", "George"];

function attemptcall(name, call, donotcall, sendtext) {
    for (var i = 0; i < name.length; i++) {
        var newName = name[i].toLowerCase();
        var counterA = 0;
        for (var j = 0; j < newName.length; j++) {
            if (newName[j] === 'a') {
                counterA++;
            }
        }
        if (counterA > 1) {
            sendtext(newName);
            counterA = 0;
        }
        else if (name[i].length % 2 !== 0) {
            donotcall(newName);
        }
        else if (name[i].length % 2 === 0) {
            call(newName);
        }
    }
}
var call = function (n) {
    console.log("call " + n);
}
var donotcall = function (n) {
    console.log("donotcall " + n);
}
var sendtext = function (n) {
    console.log("sendtext " + n);
}
attemptcall(names, call, donotcall, sendtext);