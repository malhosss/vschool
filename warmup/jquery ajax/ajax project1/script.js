console.log("Request Sent");

function loadData() {
    $.ajax({
        url: "http://api.vschool.io/mhoss/todo/"
        , type: "GET"
        , success: function (data) {
            console.log("data loaded");
            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<li>" + data[i].title + data[i].description +data[i].price +data[i].completed  "</li>")
            }
        }
    });
}

function addData(data){
    $.ajax({
         url: "http://api.vschool.io/mhoss/todo/",
        type: "POST",
        data: data,
        success: function(){
            loadData();
        }
    })
}
$(document).ready(function () {
    console.log("Application has started");
    loadData();
    $("#submit").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        // var url=$("#imgURL").val();
        var isComplete = $("#complete").is(":checked");
        var data = {
          title: title,
            description: description,
            price: price,
           completed: isComplete,
            
        }
        addData(data);
    });
});
$("#title").val("");