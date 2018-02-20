"use strict";

var _obj;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(main),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(mygenerator),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(functionName);

/*
 *  yield, pauses a generator execution cycle.
 *  it also returns a value.
 */

// NB: You can pause a Generator using yield the way u wish to.
// A generator it's a state machine which pauses and remembers 
// it's current state, then moves forward.


// NB: A Generator will return a true only when it gets 
// to the END( last yield ).


// Define a Generator
function main() {
    return regeneratorRuntime.wrap(function main$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log("Hey");
                    _context.next = 3;
                    return;

                case 3:
                    console.log("Young");
                    _context.next = 6;
                    return 9;

                case 6:
                    console.log("World");
                    _context.next = 9;
                    return 10;

                case 9:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var it = main();

//it.next(); // { value: undefined, done: false }

//it.next(); // { value: 9, done: false }

//it.next(); // { value: 10, done: true }


// Another Generator, to yield values automatically.
function mygenerator() {
    var x;
    return regeneratorRuntime.wrap(function mygenerator$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    x = 0;

                case 1:
                    if (!(x <= 5)) {
                        _context2.next = 7;
                        break;
                    }

                    _context2.next = 4;
                    return x;

                case 4:
                    x++;
                    _context2.next = 1;
                    break;

                case 7:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

// now output yielded values.
// "for of" loops thr values only but not keys or indices.
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = mygenerator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;
    }
    // console.log(i); // now use the yielded value.


    /*
     *  Symbols
     *  Declared: var x = Symbol("Optional Description");
     */

    // Def: Unique Globally unguesable value within the context of your program.

    // NB: You will NEVER need to create your own Symbols.
    // NB: Used Opaquely i.e. Don't care of it's value.
    // NB: Two Symbols will never be EQUAL.


    // Well Known Symbols; JS Ships with Properties on the Symbol Object.
    // That is:

    // Symbol.iterator
    // Symbol.toStringTag
    // Symbol.toPrimitive
    // Symbol.isConcatSpreadable


    /*
     * Iterators
     */

    // Def: It's a patterned way of stepping through set of data on some datasource.

    // NB: Arrays ship with a Symbol.iterator property which steps through the Array 
    // one item at a time.
    // NB: The property it's a function which we can invoke asap.

    // @Example;
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var arr = [1, 2, 3];

var it = arr[Symbol.iterator](); // returns an instance of an iterator.

// But "for of" loop comes to the rescue to hasten things up.
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var j = _step2.value;
    }
    // console.log(j);


    // NB: Objects Do not ship with a Default iterator.


    // Custom Iterators.
    // Make an Object Iterable.
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
            _iterator2["return"]();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var obj = (_obj = {}, _defineProperty(_obj, Symbol.iterator, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    i = this.start;

                case 1:
                    if (!(i < this.end)) {
                        _context3.next = 7;
                        break;
                    }

                    _context3.next = 4;
                    return this.values[i];

                case 4:
                    i++;
                    _context3.next = 1;
                    break;

                case 7:
                case "end":
                    return _context3.stop();
            }
        }
    }, _callee, this);
})), _defineProperty(_obj, "start", 1), _defineProperty(_obj, "end", 6), _defineProperty(_obj, "values", [2, 4, 6, 10, 5, 7, 9]), _obj);

var vals = [].concat(_toConsumableArray(obj)); // Finally it becomes an Array which is an Iterable!

console.log(vals);

// NOTES:
//
// 1. Making an Object Iterable, You need an Array and loop it's values,
// 2. So that you can yield each of them.
//
// NB: It doesn't matter what for loop you use during yielding process.
//
// Now the Above makes that Object an Iterable.

// Just a Thought:
// *[Symbol.iterator]() { }
//
// Becomes a Generator from a Generator Syntax Below

//@Syntax;
function functionName() {
    return regeneratorRuntime.wrap(function functionName$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                case "end":
                    return _context4.stop();
            }
        }
    }, _marked3, this);
}

// And since we don't use function keyword inside a class then we only use the 
// *functionName()