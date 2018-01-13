// show result.
function display (func) {
    return func;
}




// Class declaration
// NB: Methods inside a class have no 
// function keyword.
class Employee {
    // Create a constructor.
    constructor(name) {
        this._name = name;
    }
    
    doWork() {
        return "Work complete";
    }
    
    getName() {
        return this._name;
    }
}

// instantiate the class
var e = new Employee("Street Money");

// console.log(display(e.doWork())); // Work complete
console.log(display(e.getName())); // Street Money

