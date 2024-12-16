import request from "../utils/request.js";

const api = {
  getLoansList: "/loans",
  createLoan: "/loans",
  getLoansDetail: (id) => `/loans/${id}`,
  updateLoan: (id) => `/loans/${id}`,
  deleteLoan: (id) => `/loans/${id}`,
};

export const getLoansList = (params = {}) => {
  return request({ url: api.getLoansList, method: "get", params });
};
export const createLoan = (data) => {
  return request({ url: api.createLoan, method: "post", data})
};
export const updateLoan = (data) => {
  return request({ url: api.updateLoan(data.id), method: "put", data });
}