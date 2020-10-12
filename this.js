console.log(__filename);
console.log(__dirname);

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log(this===exports, this===global);
}
whatIsThis();