const express = require('express')
const {ApolloServer}  = require('apollo-server-express')

//  load schema & resolvers

const typeDefs = require ('./schema/schema');
const resolvers = require('./resolver/resolver')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// (async function(){
    await server.start();
    const app = express()
    server.applyMiddleware({app});
    app.listen({port: 4000} , () =>{
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
// })()
// server.start(app)


