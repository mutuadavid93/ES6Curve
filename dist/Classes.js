"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// show result.
function display(func) {
    return console.log(func);
}

// Class declaration
// NB: Methods inside a class have no 
// function keyword.

var Employees = function () {
    // Create a constructor.
    function Employees(name) {
        _classCallCheck(this, Employees);

        this._name = name;
    }

    _createClass(Employees, [{
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

    return Employees;
}();

// instantiate the class


var e = new Employees("Street Money");

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
// console.log(anim.name); // DOG.


// set a new name value on the name property.
anim.name = "Buffy";
// console.log(anim.name); // BUFFY.


// Inheritance: Reuse code i.e. X "is-a" Z
// Uses Extends. "is-a" === "extends"

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this._name = name;
    }

    _createClass(Person, [{
        key: "doWork",


        // Invoke this Method in a Derived class using super Keyword.
        // i.e. Employee derived class.
        value: function doWork() {
            return "free";
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }]);

    return Person;
}();

var Manager = function (_Person) {
    _inherits(Manager, _Person);

    function Manager() {
        _classCallCheck(this, Manager);

        return _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).apply(this, arguments));
    }

    _createClass(Manager, [{
        key: "doWork",
        value: function doWork() {
            // this._name property is inherited from Person.
            return this._name + " is working";
        }
    }]);

    return Manager;
}(Person);

;

var p1 = new Person("Street");
// console.log(display(p1.name));

// Instantiating Manager now Inherits Everything from 
// Person Super class.
var m1 = new Manager("Martini");
// console.log(display(m1.doWork()));


// Super Keyword usage.

// NB: When you invoke super(PropName) inside a Method it invokes the Method with
// the same name e.g. constructor in the Super class passing in that Property.

// NB: Whenever you add a contructor() explicitly into a 
// derived class, the Super class's constructor it's not 
// called implicitly. You must use Super().

// Using the Person Example Above

var Employee = function (_Person2) {
    _inherits(Employee, _Person2);

    function Employee(title, name) {
        _classCallCheck(this, Employee);

        var _this2 = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name));

        _this2._title = title;
        return _this2;
    }

    _createClass(Employee, [{
        key: "doWork",


        // Override doWork()
        value: function doWork() {
            // invoke any Method Existing in Super Class.
            // @Syntax; super.MethodName();
            return _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), "doWork", this).call(this); // free
        }
    }, {
        key: "title",
        get: function get() {
            return this._title;
        }
    }]);

    return Employee;
}(Person);

var emp = new Employee("Developer", "StreetMoney");
display(emp.name + " is a " + emp.title);

console.log(emp.doWork());

/*
 * 
 *  NOTES:
 * 
 */

// By Default when a Class is Defined and does not Extend anything( i.e. Parent class ),
// it extends Object.
//
// Thus you can Override toStrig() method.