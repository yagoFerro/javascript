
// object math
/*
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.4        
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))


//  Numeros aleatorios

const randonNumber = Math.random() 
console.log(randonNumber)

console.log(Math.round(randonNumber * 100))
*/
//valores primtivos

let scoreOne = 50
let scoreTwo = scoreOne
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

//Valore de Referencia

let userOne = {name:'iago', age:29}
let userTwo = userOne
console.log(userOne, userTwo)



userOne.age = 19

console.log(userOne, userTwo)