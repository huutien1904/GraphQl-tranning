
const { books,authors} = require('./../data/static')
const resolvers = {
    // query
    Query : {
        books : () => books,
        book :( parent ,args) => books.find(book => book.id.toString() == args.id),
        author : (parent,args) => authors.find(author => author.id.toString() == args.id),
        authors : () => authors
    },
    Book : {
        author :(parent,args) => {
            return authors.find(author => author.id == parent.id)
        }
    },
    Author : {
        books : (parent,args) => 
            books.filter(book => {
                console.log(book.authorId, parent.id)
                return book.authorId == parent.id
            })
             
        
    }, 
    // mutation
    Mutation : {
        createAuthor : (parent,args) => args 
    }
}

module.exports = resolvers