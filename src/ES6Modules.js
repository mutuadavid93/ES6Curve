

/*
 * MODULES
 */


// Aim at Code Organization and Visibility Control

//
//      AMD MODULE PATTERN
//      Favours JS on the Browser.
// 

// Similar to IIFE but Major diff is that it never executes 
// imediately:

// @Syntax:

// employee.js File;
/*
define(function () {
    var privateWork = function () {
        // private logic here
    };
    
    var Employee = function () {
        // public logic here
    };
    
    // Expose What is Private. e.g. An Object
    return Employee;
});



// Import and use the Module.
define(["employee"], function (Employee) {
    var e = new Employee("Street Money");
});

*/








/*
 * CommonJS Module Pattern
 */

// Favours Other Environments Rather than JS on Browser.
// e.g. NodeJS Env.

// @Example:
/*
var privateDoWork = function (name) {
    return name + " is working";
};

var Employeey = function (name) {
    this.name = name;
};

Employeey.prototype = {
    doWork: function () {
        return privateDoWork(this.name);
    }
};

// Export the Employeey Module to become Public.
exports.Employee = Employeey;



// import it in a separate file;
var Employeey = require('./Employeey').Employeey;

var e1 = new Employeey("Street David");
console.log(e1.doWork());

*/




/*
 * ES6 Modules
 */


// @Example:

// Emloyyee.js
/*
export class Employyee {
    constructor(name) {
        this._name = name;
    }
    
    get name () {
        return this._name;
    }
    
    doWork () {
        return `${this._name} is working`;
    }
}


// Import the Emloyyee into anotherfile.js
// import {Employyee} from './es6/employyee';

// var e =  new Employyee("Scott Allen");

*/