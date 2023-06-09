// Import the file system module
const fs = require("fs");
 // Read the file 'arquivo.txt' in UTF-8 format
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    // If there's an error while reading the file, log the error and stop the function
    if (err) {
        console.log(err);
        return;
    }
     // If the file is successfully read, log the file data
    console.log(data);
});