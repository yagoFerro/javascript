// Ultilizando o callback
const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twiter', 'instagram', 'facebook']

let HTMLTemplate = ''

socialNetworks.forEach((socialNetwork) => {
HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate
