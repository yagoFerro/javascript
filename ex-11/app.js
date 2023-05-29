//if ccondition
// IF significa "e se"
//const age = 18
//
//if(age >= 18) {
//    console.log('Você tem mais de 18 anos')
//}
//const simpsons =  ['marge', 'Homer', 'Lisa', 'Bart']
//if (simpsons.length > 3) {
//    console.log('O array simpsons tem bastante personagens')
//}


// else e else if statements

//const password = 'oi123oi'
//if (password.length >= 12) {
//    console.log('Essa senha e muito longa')
//} else if (password.length >= 8) {
//    console.log('Essa senha tem 8 ou mais caracteres')
//} else {
//    console.log('Essa senha e muito curta ')
//}
//

// operadores logicos -"OU" = || e "E" = &&

const password = 'oi1sw'
if (password.length >= 12 && password.includes('1')) {
    console.log('Essa senha e muito longa')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('senha forte')
} else {
    console.log('Essa senha e muito curta ')
}


