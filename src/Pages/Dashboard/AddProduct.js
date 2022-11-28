import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import AddCategory from "./AddCategory";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const date = new Date().toJSON().slice(0, 10);
  const {
    data: companies,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        "https://purana-phone-server.vercel.app/category/companyName"
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const imgbbKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAddPhone = (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          // console.log(imgData);

          const phone = {
            sellerName: user.displayName,
            email: user.email,
            post_date: date,
            companyName: data.companyName,
            phoneName: data.phoneName,
            photo: imgData.data.url,
            originalPrice: data.originalPrice,
            salePrice: data.salePrice,
            location: data.location,
            usage: data.usage,
          };
          // console.log(phone);
          fetch("https://purana-phone-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(phone),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("New Phone Added Successfully");
              refetch();
              navigate("/dashboard/my-product");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  md:gap-10 my-10 mr-6">
      <AddCategory></AddCategory>

      <div className=" col-span-8 ml-2 md:ml-16  ">
        <h1 className=" text-2xl font-bold text-blue-600">Add A New Phone</h1>
        <p className=" text-red-600">{error}</p>
        <form onSubmit={handleSubmit(handleAddPhone)} action="">
          <div className=" grid grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Select Brand Name
              </label>
              <br />
              <select
                {...register("companyName")}
                className="w-full py-2 border-2 "
              >
                {companies.map((company, i) => (
                  <option value={company.companyName} key={i}>
                    {company.companyName}
                  </option>
                ))}
              </select>
            </div>{" "}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Phone Name
              </label>
              <input
                {...register("phoneName")}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                placeholder="Enter Phone Name"
              />
            </div>{" "}
          </div>
          <div className=" grid grid-cols-2  gap-6">
            <div>
              <p className="mb-2">Image of Phone</p>
              <label className="block shadow ">
                <span className="sr-only cursor-pointer">Choose File</span>
                <input
                  {...register("image")}
                  type="file"
                  className="block cursor-pointer text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
                />
              </label>
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Sale Price
              </label>
              <input
                {...register("salePrice")}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                placeholder="Enter Sale Price"
              />
            </div>{" "}
          </div>
          <div className=" grid grid-cols-2 gap-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Usage Years
              </label>
              <input
                {...register("usage")}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                placeholder="Usage Years"
              />
            </div>{" "}
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Original Price
              </label>
              <input
                {...register("originalPrice")}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                placeholder="Enter Original Price"
              />
            </div>{" "}
          </div>
          <div className="">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                placeholder="Enter Location"
              />
            </div>{" "}
          </div>
          <input
            className="btn bg-yellow-400 text-white border-0 mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
