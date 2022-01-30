import { Resolvers } from "../types/graphql";

// リゾルバー
export const Query: Resolvers = {
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
};
