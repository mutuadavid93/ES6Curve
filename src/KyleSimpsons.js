
/*
 *  An Arrow Function
 */

// NB: It lucks the "this" keyword and instead goes up one step 
// to the parent.

// @Example;
var obj = {
    id: 42,
    foo: function () {
        setTimeout(() => {
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
function people(name = "David Mutua") {
    // console.warn(`Hello ${name} !`);
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
function foobar(x = 48) {
    // console.log(x);    
}

foobar(undefined ); // 48



/*
 * Lazy Expressions
 */

// Def: Execution never happens until its needed.

// @Example:
function uniqueID() {
    // console.log("ID_XWY");
}

// NB: The parameter list is defined using "let" implicitly.
function rook(id = uniqueID()) {
    
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
var doosh = function (...args) {
    args.unshift(62);
    args.push(80);
    
    // Spread the Array into individual parts.
    // Then Maybe pass it to a function.
    bar(...args);
}(58, 78);

function bar(...moargs) {
    console.log(moargs); // [62, 58, 78, 80]
}


/*
 * Another Place to use Gather/Spread Operator
 * other than as function params.
 */

// As Array Literals.
// Scenarios: Array.slice(), Array.concat(), Array.apply()

// @Example;
var r = [1,2], z = [8,9];

// Gather into a new Array.
var rz = [0, ...r, ...z, 10];

// Spread into a function.
dice(0, ...r, ...z, 10);

// dice(...rz); // Alternative.

function dice(...params) {
    console.log(params); // [0, 1, 2, 8, 9, 10]
}


// @Example;
// On Slicing Arrays.
function frooz(x, y, ...rest) {
    return rest;
}

var a = [1,2,3];
var b = [4,5,6];

frooz(...a, ...b); // x = 1 and y = 4





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
var [a, b, c] = destructure();

// Set Default Values for the Array Values.
// if they are absent in the returned structure.

// Be safe by speacializing a fallback e.g. Empty Array.
var [e, f = 43, g] = destructure() || [];

// Gather the Rest of the values into an Array.
var [d, ...args] = destructure() || [];


/*
 * Dumping Variables
 * Dump === Discard or Slice some parts of an Array.
 */

var a = [1,2,3];

// Gather on the Left and Spread on the Right.
var [x, y, ...a] = [0, ...a, 4];

// Now a == [2, 3, 4]


/*
 * Destructuring a Nested Array
 */
function nestedArray() {
    return [13, [4, 5,6] ];
}

// This becomes;
var [v, [h,,n]] = nestedArray() || [];


/*
 * Object Destructuring
 */

function desObjects() {
    return { w:1, y:21 };
}

// Now Destructure the Object;

// @Syntax, propname:varname

var { w, y:varname } = desObjects() || {};

// Defaults
var { w, y:varname = 33 } = desObjects() || {};

// Nested Destructuring of an Array inside an Object
var {
    a, 
    b: B = 46,
    d: [
        e
    ] = []
} = desObjects() || {};


/*
 * Destructuring Function Parameters
 */

function desFuncParams( [a, b, c] = [] ) {
    console.log(a, b, c);
}

// Tricky: You have to pass an Array for it to work.
desFuncParams([1,2,3]);


// @Example 2:
function desParams( {a = 10, b, d} = {} ) {
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
 let config = {
     url: "http://some.api.url/resource",
     callback: foo,
     headers: {
         "x-requested-with" : "foo"
     }
 };
 
 // @Example:
 {
     // let {} = config || {};
     
     // Destructure the Config Object.
     // Setting Defaults where it lacks them.
    let {
        method = "POST",
        url,
        callback = function (){},
        headers: {
            "content-type" : contentType = "text/plain",
            "x-requested-with" : xRequestedWith
        }
    } = config || {};
     
     // Restructure the Config Object Back.
    config = {
        method,
        url,
        callback,
        headers : {
            "content-type" : contentType,
            "x-requested-with" : xRequestedWith
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
 var a = 1, c = "hello";
 
 var myObjectConcised = {
     a,
     b(){ },
     [c]: 42,
     [c+"fn"](){  },
     *foo(){  },
     *[c+"gn"](){  }
 };