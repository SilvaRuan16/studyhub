"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let courses = [
    'Typescript',
    'Electron',
    'React/Next'
];
let values = [
    10,
    20,
    30,
    40
];
courses.push('GNU/Bash', 'wget', 'cURL', 'C/C++', 'Assembly x86_64', null);
values.push(50, 60, 70);
for (let index = 0; index < courses.length; index++) {
    if (courses[index] !== null) {
        console.log(courses[index]);
    }
}
console.log(values);
//# sourceMappingURL=aula5.js.map