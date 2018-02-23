
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