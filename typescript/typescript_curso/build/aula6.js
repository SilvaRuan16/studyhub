"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array_numbers = [20, 30, 40];
const isPositive = (number) => {
    if (number < 0)
        return false;
    return true;
};
console.log(isPositive(10));
// Adicionar valor ao arrau
array_numbers.push(50); // final do array
array_numbers.unshift(10); // inicio do aray
// Remover valor do array
array_numbers.pop(); // final do array
array_numbers.shift(); // inicio do array
// Lista com permissão somente para leitura
let users_list = ['ru@S', 'marcelgz4', 'bronquite'];
console.log('List of Users: ', users_list);
//# sourceMappingURL=aula6.js.map