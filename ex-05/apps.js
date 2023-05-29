const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//usando concatenaçao
//const postMessage = 'O post "' + postTitle + '", do '  + postAuthor + ',tem ' + postComments + ' comentarios'
console.log('Você manja do filme \'As branquelas\'')
//usando template strings
const postMessage = `O poste "${postTitle}",do  ${postAuthor},tem  ${postComments} comentarios`
console.log(postMessage)


//criando templates HTML
const html = `
<h2>${postTitle}</h2>
<P>${postAuthor}</P>
<span>${postComments}</span>
`
console.log(html)