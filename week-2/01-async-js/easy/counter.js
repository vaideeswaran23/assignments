let counter = 0;

function count() {
    counter++;
    console.log("counter ", counter);
    setTimeout(count, 1000);
}

// setInterval(count, 1000);

setTimeout(count, 1000);