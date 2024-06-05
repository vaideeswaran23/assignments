const fs = require("fs");

let content = "write to file";

fs.writeFile("b.txt", content, (err) => console.log(err));

function readFile() {
    fs.readFile("b.txt", "utf-8", (err, data) => console.log(data));
}
setTimeout(readFile, 1000);



