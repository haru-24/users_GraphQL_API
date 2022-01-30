import { QueryResolvers } from "../types/graphql";

export const hello: QueryResolvers["hello"] = (parent, { name }) => {
  return `hello ${name}`;
};

export const users: QueryResolvers["users"] = (
  parent,
  args,
  { dataSources }
) => {
  return dataSources.JsonPlaceHolderAPI.getUsers();
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
