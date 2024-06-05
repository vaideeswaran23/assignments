/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    return new Promise(function(resolve) {
        let start = new Date().getTime();
        for(let i = 0; i < 1e7; i++) {
            if((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
        resolve();
    });

}

module.exports = sleep;
