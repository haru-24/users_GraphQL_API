"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPosts = void 0;
const myPosts = async (parent, args, { dataSources }) => {
    const posts = (await dataSources.JsonPlaceHolderAPI.getPosts());
    const myPosts = posts.filter((post) => post.userId == parent.id);
    return myPosts;
};
exports.myPosts = myPosts;
