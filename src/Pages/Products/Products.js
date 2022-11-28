import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

const Products = () => {
  const [categoryPhone, setCategoryPhone] = useState("null");
  const products = useLoaderData();
  // console.log(products);
  return (
    <div className=" text-xs md:text-lg ">
      {products.map((product) => (
        <div key={product._id} className=" my-10 grid grid-cols-2 gap-2">
          <div className=" md:ml-28">
            <img src={product.photo} className=" h-5/6  md:h-[550px]" alt="" />
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
            <p className=" text-xl md:text-2xl md:mt-6">${product.salePrice}</p>
            <p className=" text-sm line-through">
              Original Price: ${product.originalPrice}
            </p>
            <p>Available: {}</p>
            <p>Years of Use: {product.usage}</p>
            <p>Post Date: {product.post_date}</p>
            <div className=" border-0 mt-2 md:mt-24 ">
              <label
                htmlFor="booking-modal"
                onClick={() => setCategoryPhone(product)}
                className=" md:btn md:bg-yellow-500 cursor-pointer  bg-yellow-500 text-[10px] md:text-base p-2 md:text-white text-white md:mr-4 mr-2 rounded-2xl md:border-0"
              >
                Book Now
              </label>
              <button className="md:btn md:bg-yellow-700 bg-yellow-700 text-[10px] md:text-base p-2 md:text-white text-white md:mr-4 rounded-2xl md:border-0">
                Wishlist
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
