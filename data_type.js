let primitiveNumber = 100;
//기본 자료형에는 프로토타입으로 메소드 추가
Number.prototype.method = function(){
    return this;
};
//메소드 사용 시 자동으로 객체 자료형으로 변환
console.log(primitiveNumber.method());

let number1 = Number.MAX_VALUE;
let number2 = Number.MAX_VALUE;
console.log(number1);
console.log(number2);
console.log(number1+1); //큰 수는 부동소수점으로 다루기 때문에 +1은 무시
console.log(number1+1 === number2);

let array = [{
    name: '고구마',
    price: 1000
},{
    name: '감자',
    price: 500
},{
    name: '바나나',
    price: 400
}];

array.sort((itemA, itemB) =>{   //숫자로 정렬
    return itemA.price - itemB.price;
});
console.log(array);

array.sort((itemA, itemB) =>{   //문자로 정렬
    if(itemA.name < itemB.name) return -1;
    else if(itemA.name == itemB) return 0;
    else return 1;
});
console.log(array);

[1,2,3,4,5].forEach((item, index)=>{
    console.log(item, index);
});

let map_array = [1,2,3,4,5].map((item, index)=>{
    return item*index;
});
console.log(map_array);

let filter_array = [1,2,3,4,5].filter((item, index) =>{
    return item%2==0;
});
console.log(filter_array);

String.prototype.contain = function (input){
    return this.indexOf(input) >= 0;
};
console.log('hello world'.contain('wor'));

let js_object = {
    name:'강지훈',
    age: 25
};

let json = JSON.stringify(js_object);
console.log(json);
let js = JSON.parse(json);
console.log(js);