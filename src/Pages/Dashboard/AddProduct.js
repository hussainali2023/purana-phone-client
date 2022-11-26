import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    data: companies,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category/companyName");
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

  const handleAddCategory = (data) => {
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
          console.log(imgData);

          const category = {
            companyName: data.companyName,
            companyLogo: imgData.data.url,
          };
          console.log(category);
          fetch("http://localhost:5000/category", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(category),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Category Added Successfully");
              refetch();
              navigate("/");
            });
        }
      });
  };
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  return (
    <div className="grid grid-cols-12  gap-10 my-10 mr-6">
      <div className=" ml-4 col-span-4 ">
        <h1 className=" mb-6 text-2xl font-bold text-blue-600">
          Add Phone Category
        </h1>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Existing Brand
          </label>
          <br />
          <select className="w-full py-2 ">
            {companies.map((company, i) => (
              <option value={company.companyName} key={i}>
                {company.companyName}
              </option>
            ))}
          </select>
        </div>{" "}
        <form
          onSubmit={handleSubmit(handleAddCategory)}
          className=" "
          action=""
        >
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Phone Brand
            </label>
            <input
              {...register("companyName")}
              type="text"
              className="form-control lowercase
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
              placeholder="Enter A New Brand"
            />
          </div>
          <p className="mb-2">Brand Logo</p>
          <label className="block shadow ">
            <span className="sr-only cursor-pointer">Choose File</span>
            <input
              type="file"
              {...register("image")}
              className="block cursor-pointer text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
            />
          </label>
          <input
            className="btn bg-yellow-400 text-white border-0 mt-6"
            type="submit"
            value="Submit"
          />
        </form>
      </div>

      <div className=" col-span-8 ml-16  ">
        <h1 className=" text-2xl font-bold text-blue-600">Add Phone</h1>
        <form action="">
          <div className=" grid grid-cols-2 gap-6 mt-6">
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Brand Name
              </label>
              <br />
              <select className="w-full py-2 ">
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
              <p className="mb-2">Brand Logo</p>
              <label className="block shadow ">
                <span className="sr-only cursor-pointer">Choose File</span>
                <input
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
