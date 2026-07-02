function sumAgain(...num: Array<number>) {
    let s: number = 0
    
    num.forEach((e) => {
        s += e
    })

    return s
}

function sub(...num: Array<number>) {
    let s: number = 0

    for (let e of num) {
        s -= e
    }

    return s
}

console.log(sumAgain(10, 20, 30, 40, 50))
console.log(sub(10, 20, 30, 40, 50))