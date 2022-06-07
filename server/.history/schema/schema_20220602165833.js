const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id : ID
        name : String
        genre : String
    }
    type Author Ơ
        id : ID!
        name : String
        age : Int
    # ROOt TYPE

    type Query {
        books : [Book]
        author: [Author]
    }
`

module.exports = typeDefs