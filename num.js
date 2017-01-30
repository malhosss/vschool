var readlineSync = require('readline-sync');  

var Student=function(name, grade){
    this.name=name;
    this.grade=grade;
    var pass=function(){
        var pass=[];
        var fail=[];
        if( this.grade >= 60)
        {
            pass.push(this.name);
        }else (this.grade < 60)
        {
             fail.push(this.name);
        }
    }
}

for( var i=0;i<4;i++){
    var name = readlineSync.question('enter a  student name : ');
     var grade = readlineSync.question('enter a  student grade  : ');
    var newStudent = new Student(name,grade);
}

console.log(Student);