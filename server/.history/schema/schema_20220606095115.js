const {gql} = require('apollo-server-express');
const Author = require('./../models/Author')
const Book = require('./../models/Book')
//  apollo-server để tạo ra server trỏ đến endpoin chủa GrapQl
const typeDefs = gql`
    # Khai báo các đôi tượng để khi trở đến nó lấy đúng ra kiểu dữ liệu cần khai báo
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
        createBook( name: String, genre : String,authorId: String) : Book
    }
`

module.exports = typeDefs