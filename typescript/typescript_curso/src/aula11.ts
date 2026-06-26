let nvalue: number
let svalue: string
let uvalue: unknown

uvalue = 10
nvalue = <number> uvalue
svalue = <string> uvalue
svalue += 10

console.log(typeof(uvalue))
console.log(uvalue)

console.log(typeof(nvalue))
console.log(nvalue)

console.log(typeof(svalue))
console.log(svalue)