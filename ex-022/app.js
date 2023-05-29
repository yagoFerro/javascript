const paragraph =  document.querySelector('p')


//paragraph.innerText += ' Texto inserido com sucesso'

const paragraphs =document.querySelectorAll('p')

//paragraphs.forEach((paragraph, index) => {
//    paragraph.innerText += ` Novo Texto ${index + 1}`
//})
const div = document.querySelector('.content')

//div.innerHTML += '<h2>Novo h2</h2>'


const peples = ['Jonatan', 'Vinicios', 'Diego']

peples.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})


// Getters setters
//get       set