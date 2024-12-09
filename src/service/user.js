import request from "../utils/request.js";

const api = {
  getUserList: "/users",
  createUser: "/users",
  getUserDetail: (id) => `/users/${id}`,
  updateUser: (id) => `/users/${id}`,
  deleteUser: (id) => `/users/${id}`,
};

export const getUserList = (params = {}) => {
  return request({ url: api.getUserList, method: "get", params });
};
export const createUser = (date) => {
  return request({ url: api.createUser, method: "post", data: date });
};
export const getUserDetail = (id) => {
  return request({ url: api.getUserDetail(id), method: "get" });
}
export const updateUser = (id, date) => {
  return request({ url: api.updateUser(id), method: "put", data: date });
}
export const deleteUser = (id) => {
  return request({ url: api.deleteUser(id), method: "delete" });
}