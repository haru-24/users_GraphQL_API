import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./resolvers/Query";
import { typeDefs } from "./schema";
import { JsonPlaceHolderAPI } from "./restDataSource/jsonPlaceHolder";

// rest通信

// スキーマ

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
