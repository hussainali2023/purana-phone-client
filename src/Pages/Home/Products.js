import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className=" text-lg">
      {products.map((product) => (
        <div key={product._id} className=" grid grid-cols-2 gap-4">
          <div className=" ml-28">
            <img src={product.photo} style={{ height: "550px" }} alt="" />
          </div>
          <div className=" mt-16">
            <div>
              <h1 className=" text-3xl font-bold">{product.phoneName}</h1>
              <div className="flex mt-4">
                <p className=" mr-4">
                  Seller:{" "}
                  <span className=" font-bold">{product.sellerName}</span>
                </p>
                <p>{product.sellerVerify ? "Verified" : "not verified yet"}</p>
              </div>
            </div>
            <hr className=" w-2/3" />
            <p className=" text-4xl mt-6">${product.salePrice}</p>
            <p className=" text-lg line-through">
              Original Price: ${product.originalPrice}
            </p>
            <p>Available: {}</p>
            <p>Years of Use: {product.usage}</p>
            <p>Post Date: {product.post_date}</p>
            <div className=" border-0 mt-24">
              <button className=" btn bg-yellow-500 text-white mr-4 border-0">
                Book Now
              </button>
              <button className=" btn bg-yellow-700 border-0 text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
