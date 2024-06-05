const fs = require('fs');

function readFile() {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        console.log(data);
    })
    console.log("file read");
}


readFile();

console.log("expense operation")

for(let i = 0; i < 10000000000000; i++) {
    // something going on
}

console.log("expense operation finished")