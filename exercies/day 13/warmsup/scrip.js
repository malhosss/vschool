var counter = 0;
var line=[];


for(var i = 0; i<=100; i++){
  if(i%2==0){
    if(line.length <5){
    line[counter] = i;
    counter++
    }else{
      console.log(line);
      line=[];
      counter=0;
      line[counter] =i;
    }
  }
  }
console.log(line);