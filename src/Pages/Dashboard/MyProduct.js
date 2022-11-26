import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Ads</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img src={product.photo} className="h-20" alt="" />
                  </td>
                  <td>{product.phoneName}</td>
                  <td>{product.salePrice}</td>
                  <td></td>
                  <td>
                    <button>Advertise</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
