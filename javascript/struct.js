let candy_machine = {
    status:{
        name: 'node',
        count: 5
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};
candy_machine.status.count = candy_machine.getCandy();
console.log(candy_machine.status.count);

const array = ['nodejs', {}, 10, true];
let [node, obj, , bool] = array;
console.log(node, obj, bool);

