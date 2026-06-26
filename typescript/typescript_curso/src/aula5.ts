let courses: Array<string | null> = [
    'Typescript',
    'Electron',
    'React/Next'
]

let values: Array<number> = [
    10,
    20,
    30,
    40
]

courses.push('GNU/Bash', 'wget', 'cURL', 'C/C++', 'Assembly x86_64', null)
values.push(50, 60, 70)

for (let index = 0; index < courses.length; index++) {
    if (courses[index] !== null) {
        console.log(courses[index])
    }
}

console.log(values)