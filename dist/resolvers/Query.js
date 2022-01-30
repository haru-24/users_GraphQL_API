"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
// リゾルバー
exports.Query = {
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
