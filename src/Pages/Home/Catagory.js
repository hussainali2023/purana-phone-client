import { useQuery } from "@tanstack/react-query";
import React from "react";

const Catagories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    },
  });
  console.log(categories);
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  return (
    <div className=" mt-12">
      <h1 className=" text-center text-3xl font-bold text-blue-700">
        Smartphone Companies
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mx-16">
        {categories.map((category) => (
          <div key={category._id} className="card shadow-xl">
            <figure>
              <img
                src={category.compnayLogo}
                alt=""
                style={{ height: "200px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">{category.companyName}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full">Show All</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
