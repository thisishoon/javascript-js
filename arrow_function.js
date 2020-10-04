function add1(x,y){
    return x+y;
}

let add2 = (x,y) => {
    return x+y;
};

let add3 = (x,y) => x+y;
let add4 = (x,y) => (x,y);

function not1(x){
    return !x;
}
let not2 = x => !x;


let relationship1 = {
    name: 'zero',
    friends: ['one', 'two', 'three'],
    logFriends: function(){
        var that = this;
        //익명함수에서는 this로 name에 접근할 수 없다
        this.friends.forEach(function (friend){
            console.log(that.name, friend, this.name);
        });
    }
};
relationship1.logFriends();

let relationship2 = {
    name: 'zero',
    friends: ['one', 'two', 'three'],
    logFriends(){
        //화살표 함수에서는 자신을 호출한 소유자의 this를 가져온다
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};
relationship2.logFriends();

