//Palavra chave this

let user = {
    name:'Joao',
    age: 25,
    email: 'iagoferro25@gmail.com',
    cyte: 'Maranhão',
    blogPost: [
        {title: 'Empadão de frango', likes: 50},
        {title: '4 receitas de purê de batata', likes: 30}
    ],
    login () {
        console.log('Usuario logado')
    },
    logout () {
        console.log('Usuario deslogado')
    },
    logblogPost ()  {
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPost.forEach(post => {
            console.log(post.title, post.likes)
        })
    
    }

}
user.logblogPost()