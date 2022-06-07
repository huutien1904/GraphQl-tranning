
const { books,authors} = require('./../data/static')
const Author = require('./../models/Author')
const Book = require('./../models/Book')
const resolvers = {
    // query
    Query : {
        books : async(parent,args,{mongoDateMethods}) => {
            const result = await mongoDateMethods.getAllBooks()
            console.log( result);
            return await mongoDateMethods.getAllBooks();
        },
        book :async( parent ,{id},{mongoDateMethods}) => mongoDateMethods.getBookById(id),
        author : async( parent ,{id},{mongoDateMethods}) => mongoDateMethods.getAuthorById(id),
        authors : async(parent,args,{mongoDateMethods}) => {
            const result = await mongoDateMethods.get()
            console.log( result);
            return await mongoDateMethods.getAllAuthors();
        }
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
        createAuthor : async(parent,args,{mongoDateMethods}) => 
            await mongoDateMethods.createAuthor(args)
         ,
        createBook : async(parent,args,{mongoDateMethods}) => 
            await mongoDateMethods.createBook(args)
        
    }
}

module.exports = resolvers