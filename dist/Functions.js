"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// show result.
function display(func) {
    return console.log(func);;
}

/////////////////////////////\
//
// Arrow Functions.
//
//////////////////////////////\

// @Syntax, 
// let add = (x, y) => x + y;
// invoked, add(5, 6);

// take more than one Param
var add = function add(x, y) {
    return x + y;
};

// takes one Parameter.
var singleParam = function singleParam(x) {
    return x + x;
};

// Takes Zero Parameters.
var noParam = function noParam() {
    return "Hello World";
};

// NB: If you need more than one BLocks of code, you
// will need curly braces a return keyword.
var times = function times(x, z) {
    var temp = x * z;
    return temp;
};

// Used with array methods, like forEach()
var numbers = [1, 3, 6, 7];

var sum = 0;
numbers.forEach(function (n) {
    return sum += n;
});

var doubled = numbers.map(function (n) {
    return n * 2;
});
// display(doubled); 


// NB: Arrow functions will always catch the "this" context 
// in which they are in e.g. inside callbacks. 
// i.e. Lexical Binding.


/////////////////////////////\
//
// Iterables and Iterators.
//
//////////////////////////////\

// They walk a Collection to find either an Item or indicate 
// whether the end of the Collection is reached. 

// Basic iterator Example.
var iteratorsDemo = function () {
    var nums = [1, 8, 3, 4, 5],
        sum = 0;

    // collection.values(); returns an iterator.
    var iterator = nums.values();
    var next = iterator.next();

    // now loop
    while (!next.done) {
        // Keep Walking the Collection.
        sum += next.value;
        next = iterator.next();
    }

    // display(sum); // print sum.
}(); // Self invoke.     


// iterators at a High Level:

// for of loop: Works Best with iterators.
// Loops over a Collection's Values and NOT Keys or Indices.

var highEndIterators = function () {
    var numbers = [1, 8, 3, 4, 5],
        sum = 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            sum += n;
        }

        // display(sum);
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
}();

/////////////////////////////\
//
// Generators.
//
//////////////////////////////\

// A Generator function, It's a function that generates an iterator.
// 
// Instead of the return Keyword, it uses the yield keyword to 
// return Multiple Values.

var generatorsFunc = function generatorsFunc() {

    // Declare the Generator function.
    var numbers = /*#__PURE__*/regeneratorRuntime.mark(function numbers(start, end) {
        var i;
        return regeneratorRuntime.wrap(function numbers$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        i = start;

                    case 1:
                        if (!(i <= end)) {
                            _context.next = 8;
                            break;
                        }

                        console.log(i); // log number we abt to yield.
                        _context.next = 5;
                        return i;

                    case 5:
                        i++;
                        _context.next = 1;
                        break;

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, numbers, this);
    });

    var sum = 0;

    // Generate code to work with an iterator.
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = numbers(1, 5)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var n = _step2.value;

            sum += n;
        }

        // display(sum); // 15
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
};

// Put it all together.

// @Example: Generator.

var Company = function () {
    function Company() {
        _classCallCheck(this, Company);

        this.employees = [];
    }

    _createClass(Company, [{
        key: "addEmployees",
        value: function addEmployees() {
            for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
                names[_key] = arguments[_key];
            }

            this.employees = this.employees.concat(names);
        }

        // Declare the Generator

    }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e;

            return regeneratorRuntime.wrap(function value$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            _context2.prev = 3;
                            _iterator3 = this.employees[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                _context2.next = 13;
                                break;
                            }

                            e = _step3.value;

                            console.log(e);
                            _context2.next = 10;
                            return e;

                        case 10:
                            _iteratorNormalCompletion3 = true;
                            _context2.next = 5;
                            break;

                        case 13:
                            _context2.next = 19;
                            break;

                        case 15:
                            _context2.prev = 15;
                            _context2.t0 = _context2["catch"](3);
                            _didIteratorError3 = true;
                            _iteratorError3 = _context2.t0;

                        case 19:
                            _context2.prev = 19;
                            _context2.prev = 20;

                            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                                _iterator3["return"]();
                            }

                        case 22:
                            _context2.prev = 22;

                            if (!_didIteratorError3) {
                                _context2.next = 25;
                                break;
                            }

                            throw _iteratorError3;

                        case 25:
                            return _context2.finish(22);

                        case 26:
                            return _context2.finish(19);

                        case 27:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        })
    }]);

    return Company;
}();

// Example a generator to filter items in a collection.
// Walks through the entire collection.


var filter = /*#__PURE__*/regeneratorRuntime.mark(function filter(items, predicate) {
    var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

    return regeneratorRuntime.wrap(function filter$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    _context3.prev = 3;
                    _iterator4 = items[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                        _context3.next = 14;
                        break;
                    }

                    item = _step4.value;

                    console.log("filter", item);

                    if (!predicate(item)) {
                        _context3.next = 11;
                        break;
                    }

                    _context3.next = 11;
                    return item;

                case 11:
                    _iteratorNormalCompletion4 = true;
                    _context3.next = 5;
                    break;

                case 14:
                    _context3.next = 20;
                    break;

                case 16:
                    _context3.prev = 16;
                    _context3.t0 = _context3["catch"](3);
                    _didIteratorError4 = true;
                    _iteratorError4 = _context3.t0;

                case 20:
                    _context3.prev = 20;
                    _context3.prev = 21;

                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                        _iterator4["return"]();
                    }

                case 23:
                    _context3.prev = 23;

                    if (!_didIteratorError4) {
                        _context3.next = 26;
                        break;
                    }

                    throw _iteratorError4;

                case 26:
                    return _context3.finish(23);

                case 27:
                    return _context3.finish(20);

                case 28:
                case "end":
                    return _context3.stop();
            }
        }
    }, filter, this, [[3, 16, 20, 28], [21,, 23, 27]]);
});

// Example to only Retrieve the exact set of items that match filter.
// i.e. Just to confirm atleast we have ONE item that matches our creteria.
var take = /*#__PURE__*/regeneratorRuntime.mark(function take(items, number) {
    var counter, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, item;

    return regeneratorRuntime.wrap(function take$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    counter = 0;

                    if (!(number < 1)) {
                        _context4.next = 3;
                        break;
                    }

                    return _context4.abrupt("return");

                case 3:
                    _iteratorNormalCompletion5 = true;
                    _didIteratorError5 = false;
                    _iteratorError5 = undefined;
                    _context4.prev = 6;
                    _iterator5 = items[Symbol.iterator]();

                case 8:
                    if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                        _context4.next = 19;
                        break;
                    }

                    item = _step5.value;

                    console.log("take", item);
                    _context4.next = 13;
                    return item;

                case 13:
                    counter += 1;

                    if (!(counter >= number)) {
                        _context4.next = 16;
                        break;
                    }

                    return _context4.abrupt("return");

                case 16:
                    _iteratorNormalCompletion5 = true;
                    _context4.next = 8;
                    break;

                case 19:
                    _context4.next = 25;
                    break;

                case 21:
                    _context4.prev = 21;
                    _context4.t0 = _context4["catch"](6);
                    _didIteratorError5 = true;
                    _iteratorError5 = _context4.t0;

                case 25:
                    _context4.prev = 25;
                    _context4.prev = 26;

                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                        _iterator5["return"]();
                    }

                case 28:
                    _context4.prev = 28;

                    if (!_didIteratorError5) {
                        _context4.next = 31;
                        break;
                    }

                    throw _iteratorError5;

                case 31:
                    return _context4.finish(28);

                case 32:
                    return _context4.finish(25);

                case 33:
                case "end":
                    return _context4.stop();
            }
        }
    }, take, this, [[6, 21, 25, 33], [26,, 28, 32]]);
});

var count = 0;
var company = new Company();
company.addEmployees("Tim", "Kim", "Tom");

// Code to generate an iterator
// NB: company var it's the employees["Tim", "Kim", "Tom"]
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator6 = filter(company, function (e) {
        return e[0] == 'T';
    })[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var employee = _step6.value;

        count += 1;
    }
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
            _iterator6["return"]();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

display(count);