/*
 *  yield, pauses a generator execution cycle.
 *  it also returns a value.
 */

// NB: You can pause a Generator using yield the way u wish to.
// A generator it's a state machine which pauses and remembers 
// it's current state, then moves forward.


// NB: A Generator will return a true only when it gets 
// to the END( last yield ).


// Define a Generator
function *main() {
    console.log("Hey");
    yield;
    console.log("Young");
    yield 9;
    console.log("World");
    yield 10;
}

var it = main();

//it.next(); // { value: undefined, done: false }

//it.next(); // { value: 9, done: false }

//it.next(); // { value: 10, done: true }


// Another Generator, to yield values automatically.
function *mygenerator () {
    
    // Simulate Looping Records from a DB then yield them;
    for(let x=0; x<=5; x++){
        yield x; // return thread of execution back to "for of" caller.
    }
}

// now output yielded values.
// "for of" loops thr values only but not keys or indices.
for (let i of mygenerator()) {
    // console.log(i); // now use the yielded value.
}


/*
 *  Symbols
 *  Declared: var x = Symbol("Optional Description");
 */

// Def: Unique Globally unguesable value within the context of your program.

// NB: You will NEVER need to create your own Symbols.
// NB: Used Opaquely i.e. Don't care of it's value.
// NB: Two Symbols will never be EQUAL.


// Well Known Symbols; JS Ships with Properties on the Symbol Object.
// That is:

// Symbol.iterator
// Symbol.toStringTag
// Symbol.toPrimitive
// Symbol.isConcatSpreadable


/*
 * Iterators
 */

// Def: It's a patterned way of stepping through set of data on some datasource.

// NB: Arrays ship with a Symbol.iterator property which steps through the Array 
// one item at a time.
// NB: The property it's a function which we can invoke asap.

// @Example;
var arr = [1, 2, 3];

var it = arr[Symbol.iterator](); // returns an instance of an iterator.

// But "for of" loop comes to the rescue to hasten things up.
for(let j of arr){
    // console.log(j);
}

// NB: Objects Do not ship with a Default iterator.


// Custom Iterators.
// Make an Object Iterable.
var obj = {
    *[Symbol.iterator]() {
        for (var i = this.start; i < this.end; i++) {
            yield this.values[i];
        }
    },
    start: 1,
    end: 5,
    values: [2, 4, 6, 10, 5, 7, 9]
};

var vals = [ ...obj ];
console.log(vals);