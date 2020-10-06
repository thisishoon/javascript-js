// async & await
// clear style of using promise :)

// 1. async
async function fetchUser(){
    // return new Promise((resolve, reject)=>{
    //     //do network request in 10secs...
    //     resolve('thisis');
    // })
    return 'thsis';
}
const user = fetchUser();
user.then(console.log);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getOne(){
    await delay(1000);
    return 'one';
}

async function getTwo(){
    await delay(2000);
    return 'two';
}

async function pickNumber(){
    const onePromise = getOne();    //promise 즉시 생성
    const twoPromise = getTwo();    //promise 즉시 생성
    const one = await onePromise;   //병렬 처리
    const two = await twoPromise;
    return `${one} + ${two}`
}
pickNumber().then(console.log);

function pickAllNumber(){
    return Promise.all([getOne(), getTwo()])
        .then(numbers => numbers.join('+'));
}
pickAllNumber().then(console.log);

function pickOnlyOne(){
    return Promise.race([getOne(), getTwo()]);  //only first one
}
pickOnlyOne().then(console.log);
