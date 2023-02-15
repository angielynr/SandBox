import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

// const get = id => {
//   return http.get(`/tutorials/${id}`);
// };

const create = (data) => {
  return http.post("/products", data);
};

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

const ProductService = {
  getAll,
  create,
  // get,
  // update,
  // remove,
  // removeAll,
  // findByTitle
};

export default ProductService;
