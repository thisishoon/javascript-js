const spawn = require('child_process').spawn;

let process = spawn('python', ['test.py']);

process.stdout.on('data', (data) => {
    console.log(data.toString());
});

process.stderr.on('data', (data) => {
    console.log(data.toString());
});
