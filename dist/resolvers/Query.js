"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// リゾルバー
exports.resolvers = {
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
