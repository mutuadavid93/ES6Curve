
/*
 * Callbacks Explained:
 */


// Disadvantages:
// 1. Only the Caller can be notified that the asynchronous process completed
// and No any other party can take part when the process completes unless the 
// callback itself notifies interested parties.

// 2. Error handling is difficult.
// 3. The callback is responsible for multiple things in the scenario.
//      a) Process the results to the Async Call.
//      b) Kick off any other processes that want to execute based on it.


/*
 * Promises come to the Rescue.
 */

// Defn: A Promise is an Object that represents a Handle to Listen to the Results
// of a Async Operation Whether it Succeeds or Fails.

// Other Defn: A Promise Promises to alert you when the Async is done and give 
// you the results of that Operation.

// Promises can be Chained to occur in a Flow or Wait for Both to run.

// A Promise Comprises of Two Parts:

// 1. Control:
// i.e. A Deferred and it's a Separate Object. 
// Actually in other implementations it's the Callback itself.
// Gives the Creator of the Promise the ability to write the Promise as Succeeded
// or Failed.

// 2. Promise: This is the Promise itself.
// This Object can be Passed around and Enables interested Parties to register 
// Listeners who can take Actions when the Async Operation completes.

// Promise States:
// 1. Pending, Hasn't completed yet.
// 2. Fullfilled, Has completed successfully.
// 3. Rejected, it has failed somehow.

// NB: When it's in Rejected State, Thus anyone who wants to take an Action when  
// a particular asynchronous call fails can take that action.

// @Example:
function getCompanyFromOrderId(orderId) {
    
    // 1. We Call getOrder() first which returns a Promise.
    getOrder(orderId).then(function (order){
        // When getOrder() returns Successfully, Then we execute the getUser()
        // callback Below:
        return getUser(order.userId); // Another Async operation which returns a Promise.
    })
    
    .then(function (user) {
        // When getUser() returns, getCompany() below is called.
        return getCompany(user.companyId); // Async Operation which returns a Promise.
    })
    
    .then(function (company) {
        // When getCompany() returns, it calls another function inside here
        // and the process continues. 
       
        // do something with company.
    })
    
    // Handle any Exceptions that are expressed by a failing promise, 
    // by calling then one last time passing .then(undefined, callback)
    .then(undefined, function (error) {
        // Handler Error
    });
}



/*
 * Promises Basics
 */

// NOTE: done() in all this promises called explicitly should commented out,
// otherwise it will throw an Error: done() is not defined in Promise.

var myPromiseFunction = function () {
    // Declare the Promise
    var promise = new Promise(function (resolve, reject){
        resolve();
    });
    
    // Listen to the Promise, and Execute some code when it Finishes.
    // By passing promise.then(callback), creates a promise listener.
    
    // This Below here is a Promise's Listener.
    promise.then(function () {
        done(); 
    });
};


// Now look at return data.
// i.e. Promises need a way to pass data back to the Listeners and let them know 
// that the async funtionality is completed by the given data.

// @Example:
var returnDataFromPromise = function () {
    var promise = new Promise(function (resolve, reject){
        resolve(1);
    });
    
    // Now recieve that data as a param into my listener.
    promise.then(function (data) {
        console.log(data); // 1
        done();
    });
};


// What if a promise fails? Reject is used to fail a Promise.
var failOnRejection = function () {
    var promise = new Promise(function (resolve, reject){
        reject(Error("Error description"));
    });
    
    // Deal with Success and Failure
    promise.then(function () {
        // Success
    }, function (error) {
        console.warn(error.message);
        done();
    });
};


// We can use a catch if it's a definate fail
var failUsingCatch = function () {
    var promise = new Promise(function (resolve, reject){
        reject(Error("Error description"));
    });
    
    // Deal with Failure Explicitly.
    promise.catch(function (error) {
        console.warn(error.message);
        done();
    });
};


// Should compose when resolved with a promise.
// i.e. Resolve a promise by giving it another promise:
var resolveUsingAnotherPromise = function () {
    var prevPromise = new Promise(function (resolve, reject){
        resolve(3); // resolve with a static value.
    });
    
    // nextPromise Promise resolves based on status of prevPromise Promise.
    var nextPromise = new Promise(function (resolve, reject){
        resolve(prevPromise); // resolve with another promise's resolve value i.e. 3
    });
    
    nextPromise.then(function (data) {
        console.log(data); // 3
        // done();
    });
};


// Dealing a Promise that Automatically Resolves or Automatically Rejects.
// Named: Static Resolve and Reject respectively.

// A Promise that Automatically Resolves with a Value 3.
var resolvesPromiseAutomatically = function () {
    var previousPromise = Promise.resolve(3);
    
    var promise = Promise.resolve(previousPromise);
    
    promise.then(function (data) {
        console.log(data); // 3
        done();
    });
};


var rejectsPromiseAutomatically = function () {
    var promise = Promise.reject(Error("Oh noo!"));
    
    promise.catch(function (error) {
        console.warn(error.message);
        done();
    });
};


var shouldBeAsynchronous = function () {
    
    var async = false;
    var promise = new Promise(function (resolve, reject) {
        resolve(); // imediately resolve the promise.
    });
    
    // Inside the Listener, the async value is true.
    promise.then(function () {
        console.log(async); // true
        // done();
    });
    
    // after everything make async true.
    
    // 1. async is set from false to true.
    // 2. the callback is invoked and at that time async is true.
    async = true;
}();