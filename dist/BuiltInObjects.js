"use strict";

function display(func) {
  console.log(func);
}

/*
 * Numbers
 * @Number Method.
 */

// Octal Literals.
var octal = 57;

// Binary Literals
var bin = 13;

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
display(radNum);