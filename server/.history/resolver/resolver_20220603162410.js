
const { books,authors} = require('./../data/static')
const Author = require('./../models/Author')
const Book = require('./../models/Book')
const resolvers = {
    // query
    Query : {
        books : async(parent,args,context) => {
            const result = await context.mongoDateMethods.getAllBooks;
            console.log(result);
            return []
        },
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
        createAuthor : async(parent,args) => {
            const newAuthor = new Author(args)
            return await newAuthor.save()
        } ,
        createBook : async(parent,args) => {
            const newBook = new Book(args)
            return await newBook.save()
        }
    }
}

module.exports = resolvers