"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.user = exports.users = exports.hello = void 0;
const hello = (parent, { name }) => {
    return `hello ${name}`;
};
exports.hello = hello;
const users = (parent, args, { dataSources }) => {
    return dataSources.JsonPlaceHolderAPI.getUsers();
};
exports.users = users;
const user = (parent, args, { dataSources }) => {
    return dataSources.JsonPlaceHolderAPI.getUser(args.id);
};
exports.user = user;
const posts = (parent, args, { dataSources }) => {
    return dataSources.JsonPlaceHolderAPI.getPosts();
};
exports.posts = posts;
