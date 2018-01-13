// show result.
function display (func) {
    return console.log(func);;
}



/////////////////////////////\
//
// Arrow Functions.
//
//////////////////////////////\

// @Syntax, 
// let add = (x, y) => x + y;
// invoked, add(5, 6);

// take more than one Param
let add = (x, y) => x + y;

// takes one Parameter.
let singleParam = x => x + x;

// Takes Zero Parameters.
let noParam = () => "Hello World";

// NB: If you need more than one BLocks of code, you
// will need curly braces a return keyword.
let times = (x, z) => {
    let temp = x * z;
    return temp;
};

// Used with array methods, like forEach()
var numbers = [1, 3, 6, 7];

var sum = 0;
numbers.forEach(n => sum += n);

var doubled = numbers.map(n => n * 2);
// display(doubled); 


// NB: Arrow functions will always catch the "this" context 
// in which they are in e.g. inside callbacks. 
// i.e. Lexical Binding.






/////////////////////////////\
//
// Iterables and Iterators.
//
//////////////////////////////\

// They walk a Collection to find either an Item or indicate 
// whether the end of the Collection is reached. 

// Basic iterator Example.
var iteratorsDemo = function() {
    let nums = [1, 8, 3, 4, 5],
        sum = 0;
    
    // collection.values(); returns an iterator.
    let iterator = nums.values();
    let next = iterator.next();
    
    // now loop
    while(!next.done){
        // Keep Walking the Collection.
        sum += next.value;
        next = iterator.next();
    }
    
    // display(sum); // print sum.
}(); // Self invoke.     


// iterators at a High Level:

// for of loop: Works Best with iterators.
// Loops over a Collection's Values and NOT Keys or Indices.

var highEndIterators = function () {
    let numbers = [1, 8, 3, 4, 5], sum = 0;
    
    for (let n of numbers) {
        sum += n;
    }
    
    // display(sum);
}();



/////////////////////////////\
//
// Generators.
//
//////////////////////////////\

// A Generator function, It's a function that generates an iterator.
// 
// Instead of the return Keyword, it uses the yield keyword to 
// return Multiple Values.

// Each time a Generator Yields a Value, it returns the thread of execution back 
// to the caller. i.e. for of loop.

// The caller then takes the yielded value and works it. After it's done it 
// invokes the iterator for the next value, execution returns to the Generator 
// function just where it left off.

// This  cycle continues untill there no more yield statements, thus it returns 
// done = true.

var generatorsFunc = function () {
    
    // Declare the Generator function.
    let numbers = function* (start, end) {
        // for loop to produce multiple values to yield.
        for(let i = start; i <= end; i++){
            console.log(i); // log number we abt to yield.
            yield i;
        }
    };
    
    let sum = 0;
    
    // Generate the code to work with an iterator.
    for(let n of numbers(1, 5)){
        sum += n;
    }
    
    // display(sum); // 15
};



// Put it all together.

// @Example: Generator.

class Company {
    constructor() {
        this.employees = [];
    }
    
    addEmployees(...names){
        this.employees = this.employees.concat(names);
    }
    
    
    // Declare the Generator
    
    // NB: for of loop, requires a Magic iterator function i.e. Generator. 
    // It invokes it to get to the next item in the Array. 
    // It returns each item using yield.
    
    // This is a Magic iterator function.
    // that makes Company Object iterable.
    *[Symbol.iterator]() {
        for (let e of this.employees){
            console.log(e);
            yield e;
        }
    }
}

// Example a generator to filter items in a collection.
// Walks through the entire collection.
let filter = function* (items, predicate) {
    for(let item of items){
        console.log("filter", item);
        if(predicate(item)){
            yield item; // return item e.g. Tom
        }
    }
};

let count = 0;
let company = new Company();
company.addEmployees("Tim", "Kim", "Tom");

// Code to generate an iterator
// NB: company var it's the employees["Tim", "Kim", "Tom"]

// This code in for of, simulates next().
for(let employee of filter(company, e => e[0] == 'T')){
    count += 1;
}

display(count);