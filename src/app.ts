import { ApolloServer } from "apollo-server";
import { hello, user, users, posts } from "./resolvers/Query";
import { myPosts } from "./resolvers/User";
import { typeDefs } from "./schema";
import { JsonPlaceHolderAPI } from "./restDataSource/jsonPlaceHolder";
import { Resolvers } from "./types/graphql";

const resolvers: Resolvers = {
  Query: {
    hello,
    user,
    users,
    posts,
  },
  User: {
    myPosts,
  },
};

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
