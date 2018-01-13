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

var generatorsFunc = function () {
    
    // Declare the Generator function.
    let numbers = function* (start, end) {
        for(let i = start; i <= end; i++){
            console.log(i); // log number we abt to yield.
            yield i;
        }
    };
    
    let sum = 0;
    
    // Generate code to work with an iterator.
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

// Example to only Retrieve the exact set of items that match filter.
// i.e. Just to confirm atleast we have ONE item that matches our creteria.
let take = function* (items, number) {
    let counter = 0;
    if(number < 1) return;
    
    for(let item of items){
        console.log("take", item);
        yield item;
        counter += 1;
        if(counter >= number){
            return; // sets done to true.
        }
    }
};


let count = 0;
let company = new Company();
company.addEmployees("Tim", "Kim", "Tom");

// Code to generate an iterator
// NB: company var it's the employees["Tim", "Kim", "Tom"]
for(let employee of filter(company, e => e[0] == 'T')){
    count += 1;
}

display(count);