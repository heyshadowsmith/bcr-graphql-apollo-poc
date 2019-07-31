const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const experianSearchAPI = require('./datasources/experian');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        experianSearchAPI: new experianSearchAPI()
    }) 
});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}.`);
});