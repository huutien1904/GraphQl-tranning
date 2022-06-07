const {gql} = require('apollo-server-express');

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
        createAuthor(id : ID! , name: String, age : Int) : Author
        createBook(id : ID! , name: String, genre : String,authorId: ID!) : Book
    }
`

module.exports = typeDefs