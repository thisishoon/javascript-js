// nan 끼리의 비교는 무조건 False
let nan = Number("string");
console.log(nan === nan);
console.log(nan !== nan);
console.log(isNaN(nan));

//이항 연산자가 아닌 단항 연산자 +는 Number 함수와 같은 역할
let x = 1;
let y = -1;
console.log(+x);
console.log(+y);
console.log(+'');
console.log(+'string');

//!! 연산자는 Bolean 함수와 같은 역할
let undefinedVar;
console.log(!!nan);
console.log(!!undefinedVar);
console.log(!!"");

//==연산자와 ===연산자의 차이
console.log(52 == "52");
console.log(52 === "52");
console.log(0 == "");
console.log(0 === "");


