import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Catagories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        "https://purana-phone-server.vercel.app/category"
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(categories);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" mt-12">
      <h1 className=" text-center text-xl md:text-3xl font-bold text-blue-700 my-4">
        Smartphone Brands
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 md:mx-16">
        {categories.map((category) => (
          <div key={category._id} className="card shadow-xl">
            <figure>
              <img
                src={category.companyLogo}
                alt=""
                style={{ height: "200px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">{category.companyName}</h2>
              <div className="justify-center mt-4">
                <Link to={`/category/${category.companyName}`}>
                  <button className=" btn bg-yellow-400 border-0 text-white w-full">
                    Show All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
