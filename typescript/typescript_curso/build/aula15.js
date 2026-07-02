"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumAgain(...num) {
    let s = 0;
    num.forEach((e) => {
        s += e;
    });
    return s;
}
function sub(...num) {
    let s = 0;
    for (let e of num) {
        s -= e;
    }
    return s;
}
console.log(sumAgain(10, 20, 30, 40, 50));
console.log(sub(10, 20, 30, 40, 50));
//# sourceMappingURL=aula15.js.map