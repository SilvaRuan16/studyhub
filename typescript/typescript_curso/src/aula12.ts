function welcome(name: string): void {
    console.log('Welcome', name)
}

function sum(num1: number, num2: number): number {
    return num1 + num2
}

welcome('Ruan')

let result: number = sum(20.4, 10)
console.log('Sum:', result)