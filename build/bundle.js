"use strict";

var greeting = "Hi";
console.log("-- " + greeting + " David Mutua");
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


// es2015 modules are declared using exports keyword.
var operations = exports.operations = {
    add: function add(a, b) {
        return a + b;
    },
    sub: function sub(a, b) {
        return a - b;
    }
};
'use strict';

var _arithmetic_module = require('arithmetic_module');

var result = _arithmetic_module.operations.add(6, 10);

// Consume the Arithmetic Module

console.log(result);

result = _arithmetic_module.operations.sub(39, 10);
console.log(result);
