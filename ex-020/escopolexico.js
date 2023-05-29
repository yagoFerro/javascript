const external = () => {
    const  book = 'Sapiens'

    const internal = () => {
        //const book = 'Os testamentos'
        const extraInternal = () => {
        console.log(book.toUpperCase())
        }
        extraInternal()
    }
    internal()
}