//switch statement
const grade = 'b'
 switch(grade) {
    case 'a':
        console.log('voce tirou um b')
        break
    case 'b': 
        console.log('Você tirou um c')
        break
    case 'c':  
        console.log('Você tirou um d')
        break
    case 'd':
        console.log('Você tirou um d')
        break
    case 'e':
        console.log('Você tirou um d')
        break
    default:
        console.log('desculpe não encontramos sua nota')
 }
    
    
// break end contimue
const scores = [50, 25, 0, 30, 100, 20, 10] 
for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 0) {
        continue
    }
       
    console.log(`"Sua pontuação foi de:${scores[i]}"`)
  if(scores[i] === 100) {
    console.log(`Parabens,você atingiu a paontuação maxíma`)
    break
  }    
}

//operador logico not(!)
/*
let isUserLoggedIn = false
if (!isUserLoggedIn) {
    console.log('Você pecisa fazer login pra continuar')
}
console.log(!true)
console.log(!false)
*/