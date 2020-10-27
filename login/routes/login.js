var express = require('express');
const fs = require('fs');
var router = express.Router();

/* GET home page. */

const b = fs.readFileSync('data.json');
const dataJson = b.toString();
const data = JSON.parse(dataJson);


var fruit = [];
var vegatable = [];
for(let i of data.fruits){
    fruit.push(i);
}
for(let i of data.vegetables){
    vegatable.push(i);
}

router.get('/', (req, res, next) => {
    res.render('login', {name:'anonymous'});
});

router.post('/', function(req, res, next) {
    var input = req.body.id;

    if(input==='admin'){
        res.render('items', { name:input, fruit:fruit, vegatable:vegatable });
    }
    else{
        res.render('login', { name:input });
    }
});

module.exports = router;
