const express = require('express')
const {ApolloServer}  = require('apollo-server-express')

//  load schema & resolvers

const typeDefs = require ('./schema/schema');
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()
// server.start(app)
server.applyMiddleware({app})

(async function(){
    await server.start()
})()

app.listen({port: 4000} , () =>{
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})