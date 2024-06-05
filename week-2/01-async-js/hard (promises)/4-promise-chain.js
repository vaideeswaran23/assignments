/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function simplePromise(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t*1000);
    })
}

function wait1(t) {
    return simplePromise(t);
}

function wait2(t) {
    return simplePromise(t);
}

function wait3(t) {
    return simplePromise(t);
}

function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
    let w1 = wait1(t1);
    let w2 = w1.then(() => wait2(t2));
    let w3 = w2.then(() => wait3(t3));
    return w3.then(r => {
        return new Date().getTime() - start;
    })
}

module.exports = calculateTime;
