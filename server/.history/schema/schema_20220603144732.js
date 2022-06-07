const {gql} = require('apollo-server-express');
const Author = require('./../models/Author')
const Book = require('./../models/Book')
const typeDefs = gql`
    type Book {
        id : ID
        name : String
        genre : String
        author : Author
    }
    type Author {
        id : ID!
        name : String
        age : Int
        books : [Book]
    }
        
    # ROOt TYPE

    #  doc du lieu tu CSDL
    type Query {
        books : [Book]
        book (id : ID!): Book
        authors: [Author]
        author(id : ID): Author
    }

    #  ghi du lieu vao CSDL

    type Mutation{
        createAuthor( name: String, age : Int) : Author
        createBook( name: String, genre : String,authorId: ID!) : Book
    }
`

module.exports = typeDefs