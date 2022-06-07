const Author = require('./../models/Author')
const Book = require('./../models/Book')

const mongoDatamethods = {
    getAllBooks : async () => await Book.find(),
    createAuthor : async args => {
        const newAuthor = new Author(args)
        return await newAuthor.save()
    },
    createBook : async args => {
        const newBook = new Book(args)
        return await newBook.save()
    },
    getBookById: async id => await Book.findById(id)
}

module.exports = mongoDatamethods