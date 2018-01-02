"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function display(myfunc) {
    return console.log(myfunc);
};

// let provides true block scoping unlike var.
var doWork = function doWork(flag) {
    if (flag) {
        var _x = 3;
        return _x;
    }
};

var result = doWork(true);
//display(result);


// const keyword, makes a variable read-only
var MAX_SIZE = 10;
//MAX_SIZE = 12; // SyntaxError.


// 
// Destructuring Assgnment.
//  DESTRUCTURE ARRAYS.
// 

// What's on the Right it's an Array of real values
// while on the Left it's not an Array.

// NB: if you want to skip some value, use a comma.

var destructure = function destructure() {
    return [1, 2, 5];
};

var _destructure = destructure(),
    _destructure2 = _slicedToArray(_destructure, 3),
    x = _destructure2[1],
    y = _destructure2[2];

// display(y);


//
//  DESTRUCTURE OBJECTS.
//

var destructObjs = function destructObjs() {
    return {
        firstName: "Street",
        lastName: "David",
        handle: {
            faceBook: "Street David",
            linkedIn: "dmutuz"
        }
    };
};

// NB: What is on the Right it's the Variable Defn.
// e.g. fNameVar

// NB: if the Property and the Variable name are same,
// just use the property alone. i.e. faceBook

var _destructObjs = destructObjs(),
    fNameVar = _destructObjs.firstName,
    faceBook = _destructObjs.handle.faceBook;

// display(faceBook);


// Destructuring Works with Parameters too


var myAjaxReq = function myAjaxReq(url, _ref) {
    var data = _ref.data,
        cache = _ref.cache;

    return data;
};

// invoke myAjaxReq()
var rs = myAjaxReq("api/test/url", {
    data: "test",
    cache: false
});

// This is what's Happening with the Params.  
// The vars have same name as the props!!
var _data$cache = { data: "test", cache: false },
    data = _data$cache.data,
    cache = _data$cache.cache;
// display(data);


//
// DEFAULT PARAMETERS
//

var defaultParams = function defaultParams() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "StreetMoney";

    return name;
};

// display(defaultParams());


//
// REST PARAMETERS
// 

// Make it easy to work with Unknown or Varying Number 
// of parameters in JS.

// REST Params are Greedy, They gulp the last Params 
// and Package them into an Array.

var restParams = function restParams(name) {
    var rs = 0;

    for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        numbers[_key - 1] = arguments[_key];
    }

    numbers.forEach(function (n) {
        rs += n;
    });
    return rs;
};

// NB: if you don't pass the Rest params, you get an
// Empty Array whose length it's 0.
var myRs = restParams("David", 10, 2, 3);
// display(myRs);


//
// SPREAD OPERATOR
// 

// Similar to REST Operator due to "..."

var spreadOperator = function spreadOperator(x, y, z) {
    return x + y + z;
};

// Returns 6.
var spreadRs = spreadOperator.apply(undefined, [1, 2, 3]);
// display(spreadRs);

// Use spread Operator to build Arrays.
// e.g. Inject array A into some Position in Array B
var spreadToBuildArrays = function spreadToBuildArrays() {
    var a = [4, 5, 6];
    var b = [1, 2].concat(a, [7, 8]);
    return b;
};

// display(spreadToBuildArrays());


// 
// Templates 
//

// Can easily combine literals and data

var tmpls = function tmpls(name) {
    return "Hello, " + name;
};

display(tmpls("StreetMoney"));