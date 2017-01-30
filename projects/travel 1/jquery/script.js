$(".asd").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "yellow");
});
$(".asd").click(function(){
    $(this).css("background-color", "red");
});
$(".asd").dblclick(function(){
    $(this).css("background-color", "green");
});
$(".asd").scroll(function () { 
        var y = $(this).scrollTop();        
        if (y > 100) {
            $(".asd").css("background-color","green");
        }
    });