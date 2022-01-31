import { QueryResolvers, User, UserResolvers } from "../types/graphql";
// prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const hello: QueryResolvers["hello"] = (parent, { name }) => {
  return `hello ${name}`;
};

export const users: UserResolvers["users"] = () => {
  return prisma.user.findMany();
};

export const user: QueryResolvers["user"] = (parent, args, { dataSources }) => {
  return dataSources.JsonPlaceHolderAPI.getUser(args.id);
};

export const posts: QueryResolvers["posts"] = (
  parent,
  args,
  { dataSources }
) => {
  return dataSources.JsonPlaceHolderAPI.getPosts();
};
