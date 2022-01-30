"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
// rest通信
class JsonPlaceHolderAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://jsonplaceholder.typicode.com/";
    }
    async getUsers() {
        const data = await this.get("/users");
        return data;
    }
    async getUser(id) {
        const data = await this.get(`/users/${id}`);
        return data;
    }
    async getPosts() {
        const data = await this.get("/posts");
        return data;
    }
}
// スキーマ
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    hello(name: String!): String
    users: [User]
    user(id: ID!): User
    posts: [Post]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    myPosts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    userId: ID!
  }
`;
// リゾルバー
const resolvers = {
    Query: {
        hello: (parent, { name }) => {
            return `hello ${name}`;
        },
        users: async (parent, args, { dataSources }) => {
            return dataSources.JsonPlaceHolderAPI.getUsers();
        },
        user: async (parent, args, { dataSources }) => {
            return dataSources.JsonPlaceHolderAPI.getUser(args.id);
        },
        posts: async (parent, args, { dataSources }) => {
            return dataSources.JsonPlaceHolderAPI.getPosts();
        },
    },
    User: {
        myPosts: async (parent, args, { dataSources }) => {
            const posts = (await dataSources.JsonPlaceHolderAPI.getPosts());
            const myPosts = posts.filter((post) => post.userId == parent.id);
            return myPosts;
        },
    },
};
// サーバーの設定
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            JsonPlaceHolderAPI: new JsonPlaceHolderAPI(),
        };
    },
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
