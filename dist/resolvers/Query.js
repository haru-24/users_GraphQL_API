"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.user = exports.users = exports.hello = void 0;
// prisma
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const hello = (parent, { name }) => {
    return `hello ${name}`;
};
exports.hello = hello;
const users = () => {
    return prisma.user.findMany();
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
