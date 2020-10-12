const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0; i < 10000000; i++){
    file.write('abcdefghijklmnopㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ');
}
file.end();