//const button = document.querySelector('button')
//
//button.addEventListener('click', () => {
//    console.log('clicou no botão')
//})
//
 const ul = document.querySelector('ul')



const lis = document.querySelectorAll('li')


lis.forEach(li => {
    li.addEventListener('click', event => {
       const elementclick =  event.target

       elementclick.remove()
    })
})

const button =document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'novo item'
    ul.prepend(li)
})