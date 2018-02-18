"use strict";

var _myObjectConcised;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 *  An Arrow Function
 */

// NB: It lucks the "this" keyword and instead goes up one step 
// to the parent.

// @Example;
var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(function () {
            // console.log(this.id);
        }, 100);
    }
};

obj.foo(); // 42


/*
 * Default Values
 */

// NB: Passing an Empty String won't Trigger the Default value usage.
// @Example:
function people() {
    // console.warn(`Hello ${name} !`);

    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "David Mutua";
}

people("Kimeu"); // Hello Kimeu !
people(); // Hello David Mutua !
people(""); // Hello  !
people(undefined); // Hello David Mutua !

// Traditionally, Right way;
function foo(x) {
    x = x !== undefined ? x : 52;
    // console.log(x);
}
foo(); // 52

// ES6 Way
function foobar() {
    // console.log(x);    

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 48;
}

foobar(undefined); // 48


/*
 * Lazy Expressions
 */

// Def: Execution never happens until its needed.

// @Example:
function uniqueID() {}
// console.log("ID_XWY");


// NB: The parameter list is defined using "let" implicitly.
function rook() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : uniqueID();
}

rook(); // Now the execution its needed.
rook(1); // Execution Not Needed.


/*
 * Gather and Spread Operators
 */

// NB: Same operator but different name based on location of usage.

// You can pass it as a function parameter to account for all of the aurguments 
// that are not already accounted for by named parameters into an Array.

// Called REST/Gather Operator.

// @Example;
var doosh = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    args.unshift(62);
    args.push(80);

    // Spread the Array into individual parts.
    // Then Maybe pass it to a function.
    bar.apply(undefined, args);
}(58, 78);

function bar() {
    for (var _len2 = arguments.length, moargs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        moargs[_key2] = arguments[_key2];
    }

    console.log(moargs); // [62, 58, 78, 80]
}

/*
 * Another Place to use Gather/Spread Operator
 * other than as function params.
 */

// As Array Literals.
// Scenarios: Array.slice(), Array.concat(), Array.apply()

// @Example;
var r = [1, 2],
    z = [8, 9];

// Gather into a new Array.
var rz = [0].concat(r, z, [10]);

// Spread into a function.
dice.apply(undefined, [0].concat(r, z, [10]));

// dice(...rz); // Alternative.

function dice() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    console.log(params); // [0, 1, 2, 8, 9, 10]
}

// @Example;
// On Slicing Arrays.
function frooz(x, y) {
    for (var _len4 = arguments.length, rest = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        rest[_key4 - 2] = arguments[_key4];
    }

    return rest;
}

var a = [1, 2, 3];
var b = [4, 5, 6];

frooz.apply(undefined, _toConsumableArray(a).concat(_toConsumableArray(b))); // x = 1 and y = 4


/*
 *  Destructuring
 */

// Def: Take a Structure e.g. an Array/Object and split it up into 
// it's individual parts.

// Incase we want to consume an Array. We can consume indivual values from the 
// Array without using Indexors.

// Used better with API results to navigate the tree.

// @Example
function destructure() {
    return [1, 2];
}

// Now Distructure the Array.

var _destructure = destructure(),
    _destructure2 = _slicedToArray(_destructure, 3),
    a = _destructure2[0],
    b = _destructure2[1],
    c = _destructure2[2];

// Set Default Values for the Array Values.
// if they are absent in the returned structure.

// Be safe by speacializing a fallback e.g. Empty Array.


var _ref = destructure() || [],
    _ref2 = _slicedToArray(_ref, 3),
    e = _ref2[0],
    _ref2$ = _ref2[1],
    f = _ref2$ === undefined ? 43 : _ref2$,
    g = _ref2[2];

// Gather the Rest of the values into an Array.


var _ref3 = destructure() || [],
    _ref4 = _toArray(_ref3),
    d = _ref4[0],
    args = _ref4.slice(1);

/*
 * Dumping Variables
 * Dump === Discard or Slice some parts of an Array.
 */

var a = [1, 2, 3];

// Gather on the Left and Spread on the Right.

var _ref5 = [0].concat(_toConsumableArray(a), [4]),
    x = _ref5[0],
    y = _ref5[1],
    a = _ref5.slice(2);

// Now a == [2, 3, 4]


/*
 * Destructuring a Nested Array
 */


function nestedArray() {
    return [13, [4, 5, 6]];
}

// This becomes;

var _ref6 = nestedArray() || [],
    _ref7 = _slicedToArray(_ref6, 2),
    v = _ref7[0],
    _ref7$ = _slicedToArray(_ref7[1], 3),
    h = _ref7$[0],
    n = _ref7$[2];

/*
 * Object Destructuring
 */

function desObjects() {
    return { w: 1, y: 21 };
}

// Now Destructure the Object;

// @Syntax, propname:varname

var _ref8 = desObjects() || {},
    w = _ref8.w,
    varname = _ref8.y;

// Defaults


var _ref9 = desObjects() || {},
    w = _ref9.w,
    _ref9$y = _ref9.y,
    varname = _ref9$y === undefined ? 33 : _ref9$y;

// Nested Destructuring of an Array inside an Object


var _ref10 = desObjects() || {},
    a = _ref10.a,
    _ref10$b = _ref10.b,
    B = _ref10$b === undefined ? 46 : _ref10$b,
    _ref10$d = _ref10.d;

_ref10$d = _ref10$d === undefined ? [] : _ref10$d;

var _ref10$d2 = _slicedToArray(_ref10$d, 1),
    e = _ref10$d2[0];

/*
 * Destructuring Function Parameters
 */

function desFuncParams() {
    var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
        _ref12 = _slicedToArray(_ref11, 3),
        a = _ref12[0],
        b = _ref12[1],
        c = _ref12[2];

    console.log(a, b, c);
}

// Tricky: You have to pass an Array for it to work.
desFuncParams([1, 2, 3]);

// @Example 2:
function desParams() {
    var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref13$a = _ref13.a,
        a = _ref13$a === undefined ? 10 : _ref13$a,
        b = _ref13.b,
        d = _ref13.d;

    console.log(a, b, d);
}

// Like named paremeters;
// Useful when you have many Params and you don't remember their order.
desParams({
    d: 5,
    b: 7
}); // invokation


/*
 * Advanced Destructuring
 */

// @Scenario: I have an Object to hold my defaults. e.g. an AJax Call.
// a config to hold both properties i have set and those i havn't

// Declare the Config Object.
var config = {
    url: "http://some.api.url/resource",
    callback: foo,
    headers: {
        "x-requested-with": "foo"
    }
};

// @Example:
{
    // let {} = config || {};

    // Destructure the Config Object.
    // Setting Defaults where it lacks them.
    var _ref14 = config || {},
        _ref14$method = _ref14.method,
        method = _ref14$method === undefined ? "POST" : _ref14$method,
        url = _ref14.url,
        _ref14$callback = _ref14.callback,
        callback = _ref14$callback === undefined ? function () {} : _ref14$callback,
        _ref14$headers = _ref14.headers,
        _ref14$headers$conten = _ref14$headers["content-type"],
        contentType = _ref14$headers$conten === undefined ? "text/plain" : _ref14$headers$conten,
        xRequestedWith = _ref14$headers["x-requested-with"];

    // Restructure the Config Object Back.


    config = {
        method: method,
        url: url,
        callback: callback,
        headers: {
            "content-type": contentType,
            "x-requested-with": xRequestedWith
        }
    };

    // console.log(config.method);
}

/*
 * Concise Variables, Properties, Concise Functions
 */

// Concise Variables, if the varName & propName are the same, use 
// the elem as the varible name too. e.g. a below.


// Concise Functions, Exclude the function keyword and write it 
// this way:  b(){ } instead of b: function(){}
// NB: They lack lexical scope i.e. can call itself.

// Computed Property Names
// e.g. var c = "hello" where you want "hello" to be a property.
//
// So instead of adding a property to an Object this way: obj[varname] = 42 
// you instead do this inside the object body: [c]: 42
//
// Creating a function fn from a computed property name;
// [c+"fn"](){  } so becomes: function hellofn(){}


// Computed Generator: *foo(){  }
// Concise Computed Generator: *[c+"gn"](){  }
var a = 1,
    c = "hello";

var myObjectConcised = (_myObjectConcised = {
    a: a,
    b: function b() {}
}, _defineProperty(_myObjectConcised, c, 42), _defineProperty(_myObjectConcised, c + "fn", function () {}), _defineProperty(_myObjectConcised, "foo", /*#__PURE__*/regeneratorRuntime.mark(function foo() {
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                case "end":
                    return _context.stop();
            }
        }
    }, foo, this);
})), _defineProperty(_myObjectConcised, c + "gn", /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee, this);
})), _myObjectConcised);

/*
 * Ranges Between Numbers Trick
 */

Number.prototype[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var i;
    return regeneratorRuntime.wrap(function _callee2$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i <= this)) {
                        _context3.next = 7;
                        break;
                    }

                    _context3.next = 4;
                    return i;

                case 4:
                    i++;
                    _context3.next = 1;
                    break;

                case 7:
                case "end":
                    return _context3.stop();
            }
        }
    }, _callee2, this);
});

// Try it out;
var myRange = [].concat(_toConsumableArray(5));

console.log(myRange); // [0, 1, 2, 3, 4, 5]