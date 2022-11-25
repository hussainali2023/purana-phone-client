import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div className=" grid grid-cols-2">
          <div>
            <img src={product.photo} style={{ height: "400px" }} alt="" />
          </div>
          <div className=" mt-8">
            <h1 className=" text-3xl">{product.phoneName}</h1>
            <p>Seller: {product.sellerName}</p>
            <p>{product.salePrice}</p>
            <p>{product.originalPrice}</p>
            <p>Available: {product}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
