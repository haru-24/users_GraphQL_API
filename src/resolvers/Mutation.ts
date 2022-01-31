import { PrismaClient } from "@prisma/client";
import { UserResolvers } from "../types/graphql";
const prisma = new PrismaClient();

export const createUser: UserResolvers["user"] = async (
  parent: any,
  args: any
) => {
  return await prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
    },
  });
};
export const updateUser: UserResolvers["user"] = async (
  parent: any,
  args: any
) => {
  return prisma.user.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });
};
