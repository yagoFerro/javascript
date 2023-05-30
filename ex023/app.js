const div = document.querySelector('.content')

const people = ['Jonatan', 'Vinicios', 'Diego']

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`   
})





//div.innerHTML += '<h2>Novo h2</h2>'



//const paragraphs = document.querySelectorAll('p')
//
//paragraphs.forEach((paragraph, index) => {
//    paragraph.innerText += ` Novo Texto ${index  +1}`
//})
//

//getters setters
//get set