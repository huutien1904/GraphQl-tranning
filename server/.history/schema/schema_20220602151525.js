const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        id : ID
        name : String
        genre : String
    }

    # ROOt TYPE

    type Query {
        books : [Book]
    }
`

module.exports = typeDefs