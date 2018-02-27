// You can Hide Details by combining Modules and Symbols.
// 
// Then expose them by defining their Setters and Getters.

// Create a new Symbol()
let s_name = Symbol();

// Declaring a Module e.g. Employee
export class Employee {
    constructor(name) {
        this[s_name] = name;
    }
    
    get name() {
        return this[s_name];
    }
    
    // Hide Value Manipulation By Failing to define a setter.
    set name(value) {
        this[s_name] = value;
    }
    
    doWork() {
        return `${this.name} is working`;
    }
}