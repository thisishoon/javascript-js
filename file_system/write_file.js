const fs = require('fs').promises;

fs.writeFile('./test.txt', 'ready to write')
    .then(() => {
        return fs.readFile('./test.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });