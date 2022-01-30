import { Post, UserResolvers } from "../types/graphql";

export const myPosts: UserResolvers["myPosts"] = async (
  parent,
  args,
  { dataSources }
) => {
  const posts = (await dataSources.JsonPlaceHolderAPI.getPosts()) as Post[];
  const myPosts = posts.filter((post) => post.userId == parent.id);
  return myPosts;
};
