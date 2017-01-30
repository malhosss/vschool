function Employee(name, jobtitle, salary, status){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = status || "fulltime";
    this.printEmployeeForm = function() {
        console.log (this.name+this.jobtitle+this.salary+this.status);
    }
};
var jacob = new Employee("jacob","teacher",1000,"full time");
console.log(jacob)