"use strict";

/*
 * Brief Explanation of Symbol()
 */

function display(val) {
  return console.log(val);
}

// It's a Function Object That exists as a Property inside iterables i.e. Arrays

// Declare it
var s = Symbol();

// Every Symbol() has a random value associted with it.
// Allows you to use a Symbol() as a Property Name of an Object.
// Avoids Object Properties Name Conflicts.

var myObj = {};

// Add a prop or a function in that object using a symbol
myObj[s] = "Scott";

// Retrieve the Property
display(myObj[s]);

// Demonstrating Symbol.iterator
// Assume x was an array of numbers i.e. 
var x = [1, 2, 3];

// To create an instance of an iterator from x Array, 
// we access the Symbol.iterator property function and invoke it ASAP.
// Then move through it's individual items using next().

//@Example;
var it_instance = x[Symbol.iterator]();
var next = it_instance.next(); // returns {value and done} flags.