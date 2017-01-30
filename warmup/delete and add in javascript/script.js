//function();
$("#btn").click(function () {
    
    var text = $("#addItem").val();
    $("#list").append( "<li id="+text+">"+text+" <button onclick='delItem("+text+")'  id="+text+">Delete</button></li>" );
    $("#add").val("");
});
function delItem(id){
    $(id).remove();
}