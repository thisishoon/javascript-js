const dep1 = require('./dep1');
console.log('require1', dep1);

module.exports = () => {
    console.log('dep1', dep1);
};
