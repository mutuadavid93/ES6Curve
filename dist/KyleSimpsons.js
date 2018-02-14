"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

    // Spread the Array into individual parts.
    // Then Maybe pass it to a function.
    bar.apply(undefined, args);
}(58, 78);

function bar() {
    for (var _len2 = arguments.length, moargs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        moargs[_key2] = arguments[_key2];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = moargs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            // console.log(a); // Now use the Array items.

            var _a = _step.value;
        }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = params[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _y = _step2.value;

            console.log(_y);
        }
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