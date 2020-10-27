const url = require('url');

const myURL = new URL('http://www.naver.com/?id=jihoon522');

console.log(myURL.searchParams.keys());