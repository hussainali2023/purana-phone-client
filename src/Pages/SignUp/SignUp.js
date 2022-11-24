import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, loading } = useContext(AuthContext);
  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const handleSignup = (data) => {
    // console.log(data);
    console.log(data.email, data.password);
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Registration Successfull");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="/"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <h1 className=" text-center text-blue-700 font-bold text-3xl mb-6">
                Please Register
              </h1>
              <form onSubmit={handleSubmit(handleSignup)}>
                <div className="mb-6">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is Required" })}
                    name="name"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    name="email"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <label
                  className=" flex justify-start text-lg mb-2"
                  htmlFor="name"
                >
                  What type of User You are ?
                </label>
                <select
                  name="typeOfUser"
                  {...register("typeOfUser", {
                    required: "Password is Required",
                  })}
                  id=""
                  className=" mb-4 w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                <div className="mb-3">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="name"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    name="password"
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-end mb-2">
                  <a
                    href="#/"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-2">
                Already Have an Account?{" "}
                <Link to="/login" className=" text-blue-700 font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignUp;
