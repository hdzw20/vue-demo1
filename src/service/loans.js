import request from "../utils/request.js";

const api = {
  getLoansList: "/loans",
  createLoans: "/loans",
  getLoansDetail: (id) => `/loans/${id}`,
  updateLoans: (id) => `/loans/${id}`,
  deleteLoans: (id) => `/loans/${id}`,
};

export const getLoansList = (params = {}) => {
  return request({ url: api.getLoansList, method: "get", params });
};