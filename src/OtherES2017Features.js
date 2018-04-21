

function display(func) {
    return console.log(func);
}


/*
 * Iterating through Objects
 */


//  Object.values


// @Example: Show all the Member Keys of an Object;
let ride = {
    name: "The Michaelson",
    excitementLevel: 1000,
    capacity: 5,
    get go() {
        console.log("go");
    }
};


// @ES5 Only you could return the Array of Keys Only.
// 
// Make the ride Object an Array
let members = Object.keys(ride);
display(members);

// @ES2017
//
// Now you can access the values directly.
let gunmember = Object.values(ride);
display(gunmember);






/***************************
 * 
 *  Object.entries()
 * 
****************************/

//  A way to get both the Keys and the Values in one Fly.
display(Object.entries(ride));

// Loop to get Individual elements
for(let keyValue of Object.entries(ride)){
    // display(keyValue);
}


// Distructure the Array to Key Value
for(let [key, value] of Object.entries(ride)) {
    // display(`Key: ${key} Value: ${value}`);
}


// Use Array Distructring and Map
var map = new Map(Object.entries(ride));
map.forEach((value, key) => {
    // display(`Key: ${key} Value: ${value}`);
    // display(`Value: ${value}`);
});




/********************************
 * 
 *  Object Property Drescriptors
 * 
*********************************/

let descriptors = Object.getOwnPropertyDescriptors(ride);
// display(descriptors); 

// Get Capacity Value through Descriptors.
// display(descriptors.capacity.value); // 5


// Get Metadata of just one Property
let descriptor = Object.getOwnPropertyDescriptor(ride, "go");
// display(descriptor);


// Copy one Object into another and now getOwnDescriptor
let copy = {};
Object.defineProperties(copy, Object.getOwnPropertyDescriptors(ride));
let descriptorClone = Object.getOwnPropertyDescriptor(copy, "go");

display(descriptorClone);


// A real total clone to help get away with Object creation.
// Giving the Object the New Object Data.
let clone = Object.create(Object.getPrototypeOf(ride), 
Object.getOwnPropertyDescriptors(ride));

display(clone); 