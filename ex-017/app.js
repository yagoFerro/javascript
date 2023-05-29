//Adicionando Métodos

let user = {
    name:'Joao',
    age: 25,
    email: 'iagoferro25@gmail.com',
    cyte: 'Maranhão',
    blogPost: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function() {
        console.log('Usuario logado')
    },
    logout: function() {
        console.log('Usuario deslogado')
    }

}
user.login()
user.logout()

