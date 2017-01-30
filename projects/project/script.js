function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var trashTalk = ["go banana", "lets play", "try again", "you fool", "you stuped"];
var people = [];
$("#btn").click(function () {
    console.log($("#check").is(':checked'))
    if ($("#check").is(':checked')) {
        people.push({
            fname: $("#fname").val()
            , lname: $("#lname").val()
            , date: $("#date").val()
            , score: $("#score").val()
            , talk: trashTalk[getRandomInt(0, trashTalk.length - 1)]
        , });
    }
    else {
        people.push({
            fname: $("#fname").val()
            , lname: $("#lname").val()
            , date: $("#date").val()
            , score: $("#score").val()
        , });
    }
    render();
    lname: $("#lname").val();
    date: $("#date").val();
    score: $("#score").val();
});
var render = function () {
    $(".output").html("");
    people.sort(function (a, b) {
        return a.score - b.score;
    });
    for (var i = 0; i < people.length; i++) {
        if (people[i].talk) {
            $(".output").append("<div><div class='firstname'>first name: " + people[i].fname + "</div><div class='lastname'> last name: " + people[i].lname + "</div><div class='date'>date: " + people[i].date + "</div><div class='score'>score: " + people[i].score + "</div><div class='talk'>talk: " + people[i].talk + "</div>");
        }
        else {
            $(".output").append("<div><div class='firstname'>first name: " + people[i].fname + "</div><div class='lastname'> last name: " + people[i].lname + "</div><div class='date'>date: " + people[i].date + "</div><div class='score'>score: " + people[i].score + "</div></div>");
        }
    }
//    
//localStorage.setItem("fname", "lname","date","score");
//document.getElementById("result").innerHTML = localStorage.getItem("fname", "lname","date","score");
//};