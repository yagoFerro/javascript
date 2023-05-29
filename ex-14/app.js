// Argumentos, parametros e default paramtros
//const myFun = function (name = 'Estrôçio',lastname = 'Almeida') {
//    console.log(`Oi,${name} ${lastname}!`)
//}
//myFun()
//myFun('Iago', 'Ferro')
//
//Retornandoo valores
const double = function (number) {
    return number * 2
}

const result = double(3)
const showResult = function (value) {
    return `O resultado é: ${value}`
}

console.log(showResult(result))