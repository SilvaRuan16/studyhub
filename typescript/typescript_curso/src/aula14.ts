function test1(): void {
    console.log('test 1')
}

const test2 = (type: string = 'message', txt?: string): void => {
    console.log(`${type}: ${txt}`)
}

const newSum = (numbers: Array<number>): number => {
    let sumValues = 0;

    numbers.forEach((e) => {
        sumValues += e
    })

    return sumValues
}

test1()
test2('warning', 'You do not say that I am senior yet')
console.log('Total sum:', newSum([11, 4, 9, 4, 5]))