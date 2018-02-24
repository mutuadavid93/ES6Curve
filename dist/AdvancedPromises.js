"use strict";

/*
 * Individual Function Returning Promises.
 */

function getOrder(orderId) {
    return Promise.resolve({ userId: 35 });
}

function getUser(userId) {
    return Promise.resolve({ companyId: 1879 });
}

function getCompany(companyId) {
    return Promise.resolve({ name: 'Alternate Ltd' });
}

// NB: When chaining promises, whatever it's passed into  resolve i.e. 
// promise.resolve(whatever), it's consumed in the then callback as a parameter
// i.e. then(whatever) 
// Then you can feed it to another function.


// Chained Sequential Promises
var chainedSequentialPromises = function chainedSequentialPromises() {
    // Now order param inside then() its {userId: 35}
    getOrder(3).then(function (order) {
        return getUser(order.userId);
    }).then(function (user) {
        return getCompany(user.companyId);
    }).then(function (company) {
        console.log(company.name); // 'Alternate Ltd'
    })

    // Handle Errors
    ["catch"](function (error) {
        console.warn(Error("An Error Occured")); // 'An Error Occured'
    });
};

/*
 *  Make a Promise Resolve after several other promises 
 *  have all resolved.
 */

// Execute after all the promises have finished.
function getCourse(courseId) {
    var courses = {
        1: { name: "CSS100" },
        2: { name: "CSS110" },
        3: { name: "CSS200" }
    };

    // Return correct course based on courseId
    return Promise.resolve(courses[courseId]);
}

// Batch them
var batchPromises = function batchPromises() {
    var coursesIds = [1, 2, 3];
    var promises = [];

    for (var i = 0; i < coursesIds.length; i++) {
        promises.push(getCourse(coursesIds[i]));
    }

    // Wait for all of them to finish and call then() listener.
    // all(iterable)
    Promise.all(promises).then(function (values) {
        console.log(values.length); // 3
    });
};

/*
 * How to make a Promise that resolves after the very first of a set 
 * of promises resolve.
 */

var resolvesAfterFirstPromise = function () {
    var coursesIds = [1, 2, 3];
    var promises = [];

    for (var i = 0; i < coursesIds.length; i++) {
        promises.push(getCourse(coursesIds[i]));
    }

    // Wait for the very first promise to finish and call then() listener.
    // race(iterable)
    Promise.race(promises).then(function (firstValue) {
        console.log(firstValue.name); // 'CSS100'
    });
}();

/*
 * Asynchronous Generators
 */

// They make our Promises code more readable.
// i.e. Taking advantage of it's Yield.

var easyGenerator = function easyGenerator() {};