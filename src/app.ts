import { ApolloServer, gql, GraphQLOptions } from "apollo-server";
import axios from "axios";
import { RESTDataSource } from "apollo-datasource-rest";

import { Post, Resolvers, User } from "./types/graphql";

// rest通信
class JsonPlaceHolderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  async getUsers() {
    const data = await this.get<User[]>("/users");
    return data;
  }
  async getUser(id: number) {
    const data = await this.get<User>(`/users/${id}`);
    return data;
  }
  async getPosts() {
    const data = await this.get<Post[]>("/posts");
    return data;
  }
}

// スキーマ

const typeDefs = gql`
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
const resolvers: Resolvers = {
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
      const posts = (await dataSources.JsonPlaceHolderAPI.getPosts()) as Post[];
      const myPosts = posts.filter((post) => post.userId == parent.id);
      return myPosts;
    },
  },
};

// サーバーの設定
const server = new ApolloServer({
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
