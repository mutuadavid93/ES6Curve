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
// console.log(anim.name); // DOG.


// set a new name value on the name property.
anim.name = "Buffy";
// console.log(anim.name); // BUFFY.











// Inheritance: Reuse code i.e. X "is-a" Z
// Uses Extends. "is-a" === "extends"
class Person {
    constructor(name){
        this._name = name;
    }
    
    get name() {
        return this._name;
    }
}


class Manager extends Person {
    doWork() {
        // this._name property is inherited from Person.
        return `${this._name} is working`;
    }
};

let p1 = new Person("Street");
// console.log(display(p1.name));

// Instantiating Manager now Inherits Everything from 
// Person Super class.
let m1 = new Manager("Martini");
console.log(display(m1.doWork()));
