
function display(func) {
    return console.log(func);
}


/***************************
 * 
 *  @ES2017 Examples
 * 
****************************/

/*
 * Callbacks
 */

// A function supplied as a parameter to a function you call
// and executes when that function completes.

/*
 * 
 * Promises Rescue Callbacks by Separating Processing 
 * from the workflow.
 * 
 */



/*
 * async
 */

// Defn: A Keyword you can add to a function declaration.

// NB: Everything returned from that function will be wrapped 
// in a resolved promise.

// The Above ELIMINATES the need to explicitly new up a Promise
// Object.

// The Promise Automatically gets in a rejected state when an 
// Exception is thrown inside that function.



// @Syntax;
var returnPromise = async() => {
    
    // Now throw an Error inside the async()
    // this gets the Promise into a Rejected State.
  
    // throw new Error("Something went wrong!");
    
    return 123; 
};

display(returnPromise());

// Get the returned item ASAP:
returnPromise().then(result => {
    display(result);
});

// Catch the Promise Error;
returnPromise().catch(error => {
    display(error);
});


// You can Create Multiple Promises and Return one Promise Created by 
// Promise.all





/*
 * await
 */

// Defn: A Keyword you can add before a call to any function that returns a 
// Promise.


// NB: Only used inside a function that is marked with an async Keyword.

// Usage: Makes Sure that the code that is below the call, it's executed after 
// the Promise it's done.

// When the function called executes successfully, the result of await is the 
// returned value of the function called.

// Otherwise await throws an Error with the value of Rejection.

// NOTE: await Automatically pulls the value out of the Promise and returns it.
// not the Bare Promise.


// @Example I;
var returnPromise847 = async() => {
    return 847;
};

// Create an async function that awaits returnPromise847()
// and then execute that function.
var executingFunction = async() => {
    let result = await returnPromise847();
    
    display(result); // 847
};


// invoke the driver function
executingFunction();



// Example II:
var returnPromiseError = async() => {
    
    // Instead throw an Error
    throw new Error("Whoops!");
    
    return "Promise Value";
};


// Create the Driver catching the error;
var executeHandlingErrors = async() => {
    
    try {
        let rs = await returnPromiseError();
        display(rs);
    }catch (err) {
        display(err.message);
    }

};

// invoke Driver function
executeHandlingErrors();





/***************************
 * 
 *  Squential vs Parallel
 * 
****************************/

// Sequential, When Multiple awaits are listed.
// Usage: When Results of First await it's needed in the 
// second await. 

// @Syntax:
async () => {
   var rs1 = await asyncFunction1();
   var rs2 = await asyncFunction2();
};

// Parallel, Batched into Promise.all then one await is used.
// Usage: When you don't need to reuse the results.
// aka. Fire and Forget.

async () => {
    var myRs = await Promise.all([asyncFunction1(), asyncFunction2()]);
};