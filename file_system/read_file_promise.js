const fs = require('fs').promises;

fs.readFile('../README.md')
    .then((result) => {
        console.log(result);
        console.log(result.toString());
    })
    .catch((err) => {
        console.error(err);
    });
