document.getElementById("jacob").addEventListener("input", function () {
    var timesKilled = document.getElementById("jacob").value;
    var worth = 5;
    document.getElementById("jacoboutput").value = worth * parseInt(timesKilled);
totalOfAll();
});

document.getElementById("redfighter").addEventListener("input", function (){
var timesKilled = document.getElementById("redfighter").value;
var worth = 8;
document.getElementById("redoutput").value = worth * parseInt(timesKilled);
    totalOfAll();
});
document.getElementById("bf").addEventListener("input", function(){
   var timeskilled = document.getElementById("bf").value;
    var worth = 15;
    document.getElementById("blackfighteroutput").value = worth * parseInt(timeskilled);
    totalOfAll();
});
function totalOfAll(){
    var totalJacob = document.getElementById("jacoboutput").value;
    var redfighter = document.getElementById("redoutput").value;
    var blackfighter = document.getElementById("blackfighteroutput").value;
    console.log(totalJacob, redfighter, blackfighter);
    document.getElementById("output").value = parseInt(totalJacob) + parseInt(redfighter) + parseInt(blackfighter);
}