const express = require('express')
const {ApolloServer}  = require('apollo-server-express')
const mongoose = require ('mongoose')
//  load schema & resolvers

const typeDefs = require ('./schema/schema');
const resolvers = require('./resolver/resolver');
const e = require('express');

// Connect to MongoDB

const connnectDB = async () =>{
    try {
        await connnectDB.connect('mongodb+srv://huutien1904:19042000@tutorialgraphql.txjqzit.mongodb.net/?retryWrites=true&w=majority',{
            useCreateIndex : true,
            useNewUrlParser : true,
            useUnifiedTogology: true,
            useFindAndModify: false
        })
        console.log("ket noi thanh cong")
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
    console.log("ket noi thanh cong")
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

(async function(){
    await server.start();
    const app = express()
    server.applyMiddleware({app});
    app.listen({port: 4000} , () =>{
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
})()
// server.start(app)


