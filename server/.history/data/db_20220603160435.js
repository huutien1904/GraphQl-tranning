const Author = require('./../models/Author')
const Book = require('./../models/Book')

const mongoDatamethods = {
    getAllBooks : async () => {return await Book.find()}
}

module.exports = mongoDatamethods