import React, { createContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[cart, setCart]}>
      {children}
    </ProductContext.Provider>
  );
};