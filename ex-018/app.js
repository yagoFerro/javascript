//Variaveis e escopos de blocos

/*escopo global*/const  age = 31
if(true){
    /*escopo local*/const  age = 41
const  name = 'iago'
console.log(`Dentro do bloco de código: ${age}  ${name}`)

if(true) {
const  age = 51
    console.log(`Dentro do  2ª bloco de codigo: ${age}`)
var test = 'oi'

}
}
console.log(`Fora do bloco de código: ${age}  ${name} ${test}`)