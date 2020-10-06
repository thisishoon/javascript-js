const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello World!<\h1>');
    res.write('<p>Hello Node!<\p>');
    res.end('<p>Hello Server!<\p>');
})
    .listen(8080, () => {
        console.log('listening 8080 port');
    });