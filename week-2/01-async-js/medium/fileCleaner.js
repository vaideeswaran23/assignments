const fs = require("fs");

function readFile() {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            formatText(data);
        })
}

function formatText(text) {
    text = text.replace(/  +/g, ' ');
    writeToFile(text);
}

function writeToFile(data) {
    fs.writeFile("a.txt", data, err => {});
}

readFile();

