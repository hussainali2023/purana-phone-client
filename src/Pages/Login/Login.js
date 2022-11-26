import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signInUser, googleLogin, user } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError("");
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setLoginError("");
    const provider = new GoogleAuthProvider();
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userData = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
        };

        fetch("http://localhost:5000/adduser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <section>
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
                Please Login
              </h1>
              <p className="text-center text-red-700 font-semibold ">
                {loginError}
              </p>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-6">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="email"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-3">
                  <label
                    className=" flex justify-start text-lg mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <p className=" text-start mt-2">
                  New User?{" "}
                  <Link className=" text-blue-700 font-medium" to="/signup">
                    {" "}
                    Sign Up
                  </Link>
                </p>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
              </form>
              <button
                onClick={handleGoogleLogin}
                className=" text-white flex justify-center align-middle w-full bg-blue-700 py-2 rounded font-medium"
              >
                Login With Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
