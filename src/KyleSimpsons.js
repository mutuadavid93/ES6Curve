
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