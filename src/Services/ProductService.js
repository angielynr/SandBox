import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

const getProductById = (id) => {
  return http.get(`/products/${id}`);
};

const create = (data) => {
  return http.post("/products", data);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
  // return http.put("/products/" + id, data);
};

const remove = (id) => {
  return http.delete(`/products/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

const ProductService = {
  getAll,
  create,
  getProductById,
  update,
  remove,
  // removeAll,
  // findByTitle
};

export default ProductService;
