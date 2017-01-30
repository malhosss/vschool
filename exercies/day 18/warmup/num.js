var students=[{
    name:"mahmoud",grade:90
},{
    name:"jacob",grade:60
}];
        var pass=[];
        var fail=[];
for( var i=0;i<students.length;i++){

        if(students[i].grade <= 60)
        {
            
            fail.push({name:students[i].name});
        }else if(students[i].grade >= 60)
        {
         
            pass.push({name:students[i].name,status:"good"});
        }
}
   function printpass(arr) 
{
    for( var i=0;i<arr.length;i++){
   console.log(arr[i].name +" "+arr[i].status);
}
}  function print(arr) 
{
    for( var i=0;i<arr.length;i++){
   console.log(arr[i].name );
}
}
printpass(pass);
print(fail);

