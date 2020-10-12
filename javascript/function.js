// 익명 함수
let func1 = function(){
    console.log('start function1');
};
func1();

// 선언 함수
function func2(){
    console.log('start function2');
}
func2();

//화살표 함수
let func3 = () => {
    console.log('start function3');
};
func3();

//매개변수 초기화
function func4(first, second){
    second = second || 1;   //second가 undefined이면 1로 초기화
    console.log(first, second);
}
func4(1,2);
func4(3);
//매개변수 기본 값 설정
function func5(first, second=1){
    console.log(first, second);
}
func5(10);

//콜백 함수
function callTenTimes(callback){
    for(let i =0; i<10; i++){
        callback();
    }
}
callTenTimes(function (){   //함수를 인자로 사용
    console.log('함수 호출');
});

//익명 함수와 선언적 함수의 생성 순서
함수 = function(){console.log("첫 번째 함수");};
function 함수(){console.log("두 번째 함수");};
함수();

//익명함수와 화살표 함수에서의 this 키워드 차이
(function () {
    console.log(this);
})();

(() => {
    console.log(this);
})();

