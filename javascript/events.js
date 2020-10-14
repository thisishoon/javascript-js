const Event = require('javascript/events');

const myEvent = new Event();

myEvent.addListener('event1', () => {
    console.log('event1');
});

myEvent.on('event2', () => {
    console.log('event2');
});
myEvent.on('event2', () => {
    console.log('event2+');
});

myEvent.once('event3', () => {
    console.log('event3');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

console.log(myEvent.listenerCount('event2'));