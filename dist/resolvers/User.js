"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.User = {
    User: {
        myPosts: async (parent, args, { dataSources }) => {
            const posts = (await dataSources.JsonPlaceHolderAPI.getPosts());
            const myPosts = posts.filter((post) => post.userId == parent.id);
            return myPosts;
        },
    },
};
