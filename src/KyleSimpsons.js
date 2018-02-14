
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
    
    // Spread the Array into individual parts.
    // Then Maybe pass it to a function.
    bar(...args);
}(58, 78);

function bar(...moargs) {
    for(let a of moargs){
        // console.log(a); // Now use the Array items.
    }
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
    for(let y of params){
        console.log(y);
    }
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

