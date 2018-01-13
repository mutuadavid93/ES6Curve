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
    function Employee() {
        _classCallCheck(this, Employee);
    }

    _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
            return "Work complete";
        }
    }, {
        key: "getName",
        value: function getName() {
            return "Street Money";
        }
    }]);

    return Employee;
}();

// instantiate the class


var e = new Employee();

console.log(display(e.doWork())); // Work complete
console.log(display(e.getName())); // Street Money