import request from "../utils/request.js";

const api = {
  getStudentList: "/students",
};

export const getStudentList = (params = {}) => {
  return request({ url: api.getStudentList, method: "get", params });
};