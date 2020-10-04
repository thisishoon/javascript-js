let object = {
    name: '바나나',
    price: 1200,
    print: function(){
        console.log(this.name, this.price);
    }
};

for(let key in object){ //순서가 없는 순회자 = in
    console.log(key, object[key], object.key);
}

object.print();

let array = [1,2,3,4,5];
for(let val of array){  //순서가 있는 순회가 = of
    console.log(val);
}
for(let i in array){
    console.log(i);
}

//생성자
function Product(name, price){
    this.name = name;
    this.price = price;
}
let product1 = new Product('감자', 200);
console.log(product1);

//프로토타입 메소드
Product.prototype.print = function(){
    console.log(this.name, this.price);
};
product1.print();

let sayNode = function(){
    console.log('NODE');
};

//객체 리터럴
var es = 'ES';
let new_object = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]: 'Fantastic'
};
new_object.sayJS();
new_object.sayNode();
console.log(new_object.ES6)