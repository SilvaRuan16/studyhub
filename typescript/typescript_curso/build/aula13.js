"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
}
function newUser(user, password, name) {
    let parseUser = {
        user,
        password,
        name
    };
    return parseUser;
}
console.log(sum(10, 10));
console.log(newUser('Ruan', 'Pass123', 'test'));
//# sourceMappingURL=aula13.js.map