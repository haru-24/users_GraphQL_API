"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (parent, args) => {
    return await prisma.user.create({
        data: {
            name: args.name,
            email: args.email,
        },
    });
};
exports.createUser = createUser;
const updateUser = async (parent, args) => {
    return prisma.user.update({
        where: {
            id: args.id,
        },
        data: {
            name: args.name,
        },
    });
};
exports.updateUser = updateUser;
