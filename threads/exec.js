const exec = require('child_process').exec;

let process = exec('ls');

process.stdout.on('data', function(data){
    console.log(data.toString());
});

process.stderr.on('data', (data) => {
    console.error(data.toString());
});


