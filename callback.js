function callTenTimes(callback){
    for(let i=0; i<10; i++){
        callback(i);
    }
}

callTenTimes(x=>{
    console.log(x);
});

//Promise
let condition = true;

let promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.error(error);
    })
    .finally(()=>{
        console.log('finish');
    })

new Promise(function(resolve, reject){
    setTimeout(()=> resolve(1), 1000);
}).then((result)=>{
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    result = result/0;
    return result/0;
}).catch((reject)=>{
    console.log(reject);
    return 0;
});

//하나의 promise에 여러 .THEN을 추가할 경우 병렬적으로 실행
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});
promise2.then(function(result) {
    console.log(result); // 1
    return result * 2;
});
promise2.then(function(result) {
    console.log(result); // 1
    return result * 2;
});
promise2.then(function(result) {
    console.log(result); // 1
    return result * 2;
});