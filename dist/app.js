"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const Query_1 = require("./resolvers/Query");
const User_1 = require("./resolvers/User");
const schema_1 = require("./schema");
const jsonPlaceHolder_1 = require("./restDataSource/jsonPlaceHolder");
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: {
        Query: Query_1.Query,
        User: User_1.User,
    },
    dataSources: () => {
        return {
            JsonPlaceHolderAPI: new jsonPlaceHolder_1.JsonPlaceHolderAPI(),
        };
    },
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
