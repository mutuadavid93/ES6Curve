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
// console.log(display(e.getName())); // Street Money






// Getters and Setters.
// Getters, gets a value and returns it to the caller.
// Setters, takes a Parameter which you can use to set 
// a piece of data to an Object.
class Animal {
    constructor (name) {
        this._name = name;
    }
    
    get name() {
        // NB: You can manipulate the returned value.
        return this._name.toUpperCase();
    }
    
    set name(newValue) {
        // NB: Validation can be done here b4 setting.
        this._name = newValue;
    }
}

var anim = new Animal("Dog");

// get the name.
console.log(anim.name); // DOG.


// set a new name value on the name property.
anim.name = "Buffy";
console.log(anim.name); // BUFFY.