// show result.
function display (func) {
    return func;
}




// Class declaration
// NB: Methods inside a class have no 
// function keyword.
class Employee {
    doWork() {
        return "Work complete";
    }
    
    getName() {
        return "Street Money";
    }
}

// instantiate the class
var e = new Employee();

console.log(display(e.doWork())); // Work complete
console.log(display(e.getName())); // Street Money

