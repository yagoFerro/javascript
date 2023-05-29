//Palavra chave this
let user = {
    name:'Joao',
    age: 25,
    email: 'iagoferro25@gmail.com',
    cyte: 'Maranhão',
    blogPost: ['Empadão de frango', '4 receitas de purê de batata'],
    login () {
        console.log('Usuario logado')
    },
    logout () {
        console.log('Usuario deslogado')
    },
    logblogPost ()  {
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPost.forEach(post => {
            console.log(post)
        })
    
    }

}
user.logblogPost()