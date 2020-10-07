const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if(isMainThread){
    const threads = new Set();
    for(let i=1; i<=3; i++) {
        threads.add(new Worker(__filename, {
            workerData: {start: i}
        }));
    }
    for(let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size == 0) {
                console.log('job done');
            }
        })
    }
}
else{   //worker의 순서를 보장하진 않음
    console.log(workerData);
    const data = workerData;
    parentPort.postMessage(data.start);
}