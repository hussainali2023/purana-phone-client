import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

const Products = () => {
  const [categoryPhone, setCategoryPhone] = useState("null");
  const products = useLoaderData();
  console.log(products);
  return (
    <div className=" text-xs md:text-lg ">
      {products.map((product) => (
        <div key={product._id} className=" my-10 grid grid-cols-2 gap-2">
          <div className=" md:ml-28">
            <img src={product.photo} className=" h-4/5 md:h-[600px]" alt="" />
            <div className=" ml-1 mt-2 border-0 md:hidden flex ">
              <button className=" text-xs px-2 py-1 rounded-md bg-yellow-700 mr-1 border-0 text-white">
                Add to Wishlist
              </button>
              <label
                htmlFor="booking-modal"
                onClick={() => setCategoryPhone(product)}
                className="text-xs px-2 py-1 rounded-md bg-yellow-500 text-white border-0"
              >
                Book Now
              </label>
            </div>
          </div>
          <div className=" md:mt-16">
            <div>
              <h1 className=" text-xl md:text-3xl font-bold">
                {product.phoneName}
              </h1>
              <div className="flex mt-4">
                <p className=" mr-1">
                  Seller:{" "}
                  <span className=" font-bold">{product.sellerName}</span>
                </p>
                <p>{product.sellerVerify ? "Verified" : "not verified yet"}</p>
              </div>
            </div>
            <hr className=" w-2/3" />
            <p className=" text-2xl mt-6">${product.salePrice}</p>
            <p className=" text-base line-through">
              Original Price: ${product.originalPrice}
            </p>
            <p>Available: {}</p>
            <p>Years of Use: {product.usage}</p>
            <p>Post Date: {product.post_date}</p>
            <div className=" border-0 mt-24 invisible md:visible  ">
              <label
                htmlFor="booking-modal"
                onClick={() => setCategoryPhone(product)}
                className=" btn bg-yellow-500 text-white mr-4 border-0"
              >
                Book Now
              </label>
              <button className=" btn bg-yellow-700 border-0 text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
      {categoryPhone && (
        <BookingModal categoryPhone={categoryPhone}></BookingModal>
      )}
    </div>
  );
};

export default Products;
