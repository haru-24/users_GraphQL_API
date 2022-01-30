"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPlaceHolderAPI = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class JsonPlaceHolderAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://jsonplaceholder.typicode.com/";
    }
    async getUsers() {
        const data = await this.get("/users");
        return data;
    }
    async getUser(id) {
        const data = await this.get(`/users/${id}`);
        return data;
    }
    async getPosts() {
        const data = await this.get("/posts");
        return data;
    }
}
exports.JsonPlaceHolderAPI = JsonPlaceHolderAPI;
