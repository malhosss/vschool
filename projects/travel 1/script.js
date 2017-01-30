$("#red").css('color','red' );
$("#red").css('text-align','center');
$("#red").css('font-size','60px');
$("#img1").css('width','100%');
$("#img1").css('height','280px');
$("#checkbox").css('height','15px');
$("#checkbox1").css('height','15px');
$("#checkbox2").css('height','15px');
$("#btn").click(function(){
    var firstname = $("#firstName").val();
    var lastname = $("#lastName").val();
    var age = $("#Age").val();
    var gender = $("#gender").val();
    var direction = $("#direction").val();
    var food = $("#food").val();
    alert("fist name: " + firstname + "\n lastname: " + lastname + "\n age: " + age + "\n gender: " + gender + "\n direction: " + direction + "\n food: " + food)
    
});
