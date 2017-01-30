function MyClass () { 
  var privateVariable = "foo";  

  this.publicVariable = "bar";  
  this.privilegedMethod = function () { 
    alert(privateVariable);
  };
}


function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);


var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};