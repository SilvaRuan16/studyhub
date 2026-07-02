"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function test1() {
    console.log('test 1');
}
const test2 = (type = 'message', txt) => {
    console.log(`${type}: ${txt}`);
};
const newSum = (numbers) => {
    let sumValues = 0;
    numbers.forEach((e) => {
        sumValues += e;
    });
    return sumValues;
};
test1();
test2('warning', 'You do not say that I am senior yet');
console.log('Total sum:', newSum([11, 4, 9, 4, 5]));
//# sourceMappingURL=aula14.js.map