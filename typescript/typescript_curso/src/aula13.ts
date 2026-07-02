function sum(num1: number = 0, num2: number = 0): number {
    return num1 + num2
}

function newUser(user: string, password: string, name?: string): object {
    let parseUser = {
        user,
        password,
        name
    }
    
    return parseUser
}

console.log(sum(10, 10))
console.log(newUser('Ruan', 'Pass123', 'test'))