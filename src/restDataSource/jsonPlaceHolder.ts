import { RESTDataSource } from "apollo-datasource-rest";
import { Post, User } from "../types/graphql";

export class JsonPlaceHolderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  async getUsers() {
    const data = await this.get<User[]>("/users");
    return data;
  }
  async getUser(id: number) {
    const data = await this.get<User>(`/users/${id}`);
    return data;
  }
  async getPosts() {
    const data = await this.get<Post[]>("/posts");
    return data;
  }
}
