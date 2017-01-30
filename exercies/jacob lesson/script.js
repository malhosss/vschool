//document.getElementById("output").innerHTML = "Jacobevans";
//console.log(document.getElementById("output").innerHTML);
//document.getElementById("username").value = "insert username";
document.getElementById("num6").value = 5;

document.getElementById("add").addEventListener("click", function() {
   var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("output").innerHTML = parseInt(num1) +parseInt(num2);
});
document.getElementById("sub").addEventListener("click", function(){
   var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    document.getElementById("output").innerHTML = parseInt6(num3) - parseInt(num4);
});
document.getElementById("num6").addEventListener("click", function(){
   var num5= document.getElementById("num5").value;
    var num6= document.getElementById("num6").value;
    document.getElementById("output").innerHTML = parseInt(num5) * parseInt(num6);
});