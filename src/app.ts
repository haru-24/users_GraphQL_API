import { ApolloServer } from "apollo-server";
import { Query } from "./resolvers/Query";
import { User } from "./resolvers/User";
import { typeDefs } from "./schema";
import { JsonPlaceHolderAPI } from "./restDataSource/jsonPlaceHolder";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    User,
  },
  dataSources: () => {
    return {
      JsonPlaceHolderAPI: new JsonPlaceHolderAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
