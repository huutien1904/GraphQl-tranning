const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id : ID
        name : String
        genre : String
    }
    type Author {
        id : ID!
        name : String
        age : Int
    }
        
    # ROOt TYPE

    type Query {
        books : [Book]
        authors: [Author]
    }
`

module.exports = typeDefs