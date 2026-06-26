// null - undefined - unknown

// null
// serve para declarar uma variavel como nulo de forma intencional
const type_null: null = null
console.log(type_null)

// undefined
// serve para declarar que uma variável não foi inicializada
const type_undefined: undefined = undefined
console.log(type_undefined)

// unknown
// serve para declarar uma variável como any seguro, impedindo entrada de outros valores
// ex: primeira entrada é string, então a variavel é obrigada a aceitar somente entradas do mesmo tipo
let type_unknown: unknown
type_unknown = 'Hello World!'
console.log(type_unknown)

type_unknown = 20
console.log(type_unknown)