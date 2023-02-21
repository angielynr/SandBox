import React, { createContext } from "react";

const ProductContext = createContext();

const ProductContextProvider = (props) => {
  return <ProductContext.Provider>{props.children}</ProductContext.Provider>;
};

export default ProductContext;
