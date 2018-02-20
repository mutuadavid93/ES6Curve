
 function display(func) {
     console.log(func);
 }
 
/*
 * Numbers
 * @Number Method.
 */

// Octal Literals.
var octal = 0o71;

// Binary Literals
var bin = 0b1101;

// Parse the Literals with Number Function
var octalNum = Number("0o71");

// Number Function as well exposes parseInt and parseFloat
var doubleNum = Number.parseFloat("3.5"); // 3.5
var intNum = Number.parseInt("1.5"); // 1

// Detect Integers with isIntegers
var isInt = Number.isInteger(1); // true if 1.0
var isIntNow = Number.isInteger(1.5); // false

// Indicate safe Integers with isSafeInteger
// Largest Safe Int is 9007199254740991.
var safeInt = Number.isSafeInteger(9007199254740991);


var radNum = +new Date(); // radom number.
display(Number.isSafeInteger(radNum));


/*
 * Math
 * @Math Method
 */

// Cube Root
var cuberoot = Math.cbrt(27);
var logarithm = Math.log10(100); // 2


// Determine whether a value is Positive
var positveNum = Math.sign(10); // 1

// Determine whether a value is Negative
var negativeNum = Math.sign(-10); // -1

// Determine whether a value is a Zero
var zeroValue = Math.sign(0); // 0

// Truncate a Value
var truncVal = Math.trunc(2.8); // 2
var truncNegVal = Math.trunc(-2.8); // -2






/*
 * Arrays
 * New Features added in ES6
 */

// find(), find an item in an Array the first item that meets your createria.
var ary = [1,5,6,10];
var match = ary.find(item => item > 8); // 10

// findIndex(), find the index of the first Matching item in the Array
var matchIndex = ary.findIndex(item => item > 3); // 1

display(matchIndex); // 10
