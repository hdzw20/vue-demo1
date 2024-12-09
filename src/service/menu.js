import request from "../utils/request.js";

const api = {
  getMenuList: "/menuListByPage",
};

export const getMenuList = (params = {}) => {
  return request({ url: api.getMenuList, method: "get", params });
};