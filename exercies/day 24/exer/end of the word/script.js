$("#btn").click(function() {
 var timeinterval= setInterval(function(){
    
 var seconds= parseInt($('#seconds').val());  
  var minutes= parseInt($('#minutes').val());    
    var hours= parseInt($('#hours').val()) ;
     seconds--;
     if(seconds<=0&&minutes>0){
         minutes--;
         second = 59;
     }
     else
       if(minutes<=0&&hours>0){
         hours--;
         minutes=59;
     }
     else if( seconds<=0&&minutes<=0&&hours<=0){
         $('#output').html( "The world is end");
         clearInterval(timeinterval);
     }
     $('#hours').val(hours);
      $('#minutes').val(minutes);
      $('#seconds').val(seconds);},1000);
});