

function display(func) {
    return console.log(func);
}


/***************************
 * 
 *  @ES2016 Two Features:
 * Array.prototype.includes
 * 
****************************/

// Checks whether a certain value is present in an Array.
// Returns a Boolean.

// @Syntax
let ArrayName = ["val1", "val2"];

// Now check if val1 exists in ArrayName array.
display(ArrayName.includes("val1")); // true


// NB: Difference between Array.includes(val) and Array.indexOf(val):

// Where an Array has NaN as it's values;
var someArray = [34, 556, NaN];


display(someArray.includes(NaN)); // true
display(someArray.indexOf(NaN) >= 0); // false





/***************************
 * 
 *  Exponentiation Operator
 *  Double Star: "**"
 * 
****************************/

// Resembles the Traditional Math.pow

// @Example 3 pow 4;
display(3**4); // 81