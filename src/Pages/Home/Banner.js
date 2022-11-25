import React from "react";

const banner = () => {
  return (
    <div className=" grid grid-cols-2 justify-around gap-2 md:gap-6 bg-gray-700 md:p-12 p-2 m-3 md:mx-16 md:my-10 rounded-md">
      <div className=" mt-6 md:mt-28">
        <div className=" text-center">
          <h2 className=" text-xl md:text-5xl text-white font-semibold">
            Lowest Prices on
          </h2>
          <h1 className=" text-2xl md:text-6xl font-bold text-yellow-300">
            Your Favorite Phones
          </h1>
          <div className=" text-white md:mt-4 md:font-medium">
            <p className=" md:text-lg">Big Savings. No Waiting.</p>
            <p className=" md:text-lg">Best Prices</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end  md:pr-20">
        <img
          className=" h-52 md:h-96 rounded-md"
          src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-civi-01.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default banner;
