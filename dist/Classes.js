"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// show result.
function display(func) {
    return func;
}

// Class declaration
// NB: Methods inside a class have no 
// function keyword.

var Employee = function () {
    // Create a constructor.
    function Employee(name) {
        _classCallCheck(this, Employee);

        this._name = name;
    }

    _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
            return "Work complete";
        }
    }, {
        key: "getName",
        value: function getName() {
            return this._name;
        }
    }]);

    return Employee;
}();

// instantiate the class


var e = new Employee("Street Money");

// console.log(display(e.doWork())); // Work complete
// console.log(display(e.getName())); // Street Money


// Getters and Setters.
// Getters, gets a value and returns it to the caller.
// Setters, takes a Parameter which you can use to set 
// a piece of data to an Object.

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this._name = name;
    }

    _createClass(Animal, [{
        key: "name",
        get: function get() {
            // NB: You can manipulate the returned value.
            return this._name.toUpperCase();
        },
        set: function set(newValue) {
            // NB: Validation can be done here b4 setting.
            this._name = newValue;
        }
    }]);

    return Animal;
}();

var anim = new Animal("Dog");

// get the name.
console.log(anim.name); // DOG.


// set a new name value on the name property.
anim.name = "Buffy";
console.log(anim.name); // BUFFY.