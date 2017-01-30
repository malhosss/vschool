$("#head").mouseover(function(){
    console.log("growbig");
    $("#head").addClass("big");
});
$("#je").mouseover(function(){
    
})

$("#head").mouseleave(function(){
    console.log("growsmall");
    $("#head").removeClass("big");
});

$("#beast1").on("input", function () {
    var timesKilled = $("#beast1").val();
    var worth = 5;
    $("#beast1output").val(worth * parseInt(timesKilled)); totalOfAll();
});
$("#beast2").on("input", function () {
    var timesKilled = $("#beast2").val();
    var worth = 8;
    $("#beast2output").val(worth * parseInt(timesKilled)); totalOfAll();
});
$("#bf").on("input", function () {
    var timeskilled = $("#bf").val();
    var worth = 15;
    $("#blackfighteroutput").val(worth * parseInt(timeskilled)); totalOfAll();
});

function totalOfAll() {
    var totalbeast1 = $("#beast1output").val();
    var beast2 = $("#beast2output").val();
    var blackfighter = $("#blackfighteroutput").val();
    console.log(totalbeast1, beast2, blackfighter);
    $("#output").val(parseInt(totalbeast1) + parseInt(beast2) + parseInt(blackfighter));
}