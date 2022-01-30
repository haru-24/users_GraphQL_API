import { Post, Resolvers } from "../types/graphql";

// リゾルバー
export const resolvers: Resolvers = {
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
