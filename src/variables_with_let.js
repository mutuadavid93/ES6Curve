function display(myfunc) {
    return console.log(myfunc);  
};



// let provides true block scoping unlike var.
var doWork = function (flag) {
    if(flag){
        let x = 3;
        return x;
    }
};

var result = doWork(true);
//display(result);



// const keyword, makes a variable read-only
const MAX_SIZE = 10;
//MAX_SIZE = 12; // SyntaxError.







// 
// Destructuring Assgnment.
//  DESTRUCTURE ARRAYS.
// 

// What's on the Right it's an Array of real values
// while on the Left it's not an Array.

// NB: if you want to skip some value, use a comma.

var destructure = function () {
    return [1, 2, 5];
};

let [, x, y] = destructure();
   
// display(y);



//
//  DESTRUCTURE OBJECTS.
//

let destructObjs = function () {
    return {
        firstName: "Street",
        lastName: "David",
        handle: {
            faceBook: "Street David",
            linkedIn: "dmutuz"
        }
    };
};

// NB: What is on the Right it's the Variable Defn.
// e.g. fNameVar

// NB: if the Property and the Variable name are same,
// just use the property alone. i.e. faceBook
let { 
        firstName: fNameVar,
        handle: {faceBook}
    } = destructObjs();

// display(faceBook);



// Destructuring Works with Parameters too
let myAjaxReq = function (url, {data, cache}) {
    return data;
};

// invoke myAjaxReq()
let rs = myAjaxReq(
        "api/test/url", {
            data: "test",
            cache: false
        }
    );
    
// This is what's Happening with the Params.  
// The vars have same name as the props!!
let {data, cache} = { data: "test", cache: false};
// display(data);






//
// DEFAULT PARAMETERS
//

var defaultParams = function (name="StreetMoney") {
    return name;
};

// display(defaultParams());







//
// REST PARAMETERS
// 

// Make it easy to work with Unknown or Varying Number 
// of parameters in JS.

// REST Params are Greedy, They gulp the last Params 
// and Package them into an Array.

var restParams = function (name, ...numbers) {
    let rs = 0;
    numbers.forEach(function (n) {
        rs += n;
    });
    return rs;
};

// NB: if you don't pass the Rest params, you get an
// Empty Array whose length it's 0.
let myRs = restParams("David", 10, 2, 3);
// display(myRs);







//
// SPREAD OPERATOR
// 

// Similar to REST Operator due to "..."

let spreadOperator = function (x, y, z) {
    return x + y + z;
};

// Returns 6.
var spreadRs = spreadOperator(...[1, 2, 3]);
// display(spreadRs);

// Use spread Operator to build Arrays.
// e.g. Inject array A into some Position in Array B
var spreadToBuildArrays  = function () {
    let a = [4, 5, 6];
    let b = [1, 2, ...a, 7, 8];
    return b;
};

// display(spreadToBuildArrays());






// 
// Templates 
//

// Can easily combine literals and data

var tmpls = function (name) {
    return `Hello, ${name}`;
};

display(tmpls("StreetMoney"));