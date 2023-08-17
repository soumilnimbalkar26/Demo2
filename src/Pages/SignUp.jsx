import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className=" bg-gray-700 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto">
          <div className="w-full bg-gray-900 rounded-lg shadow max-w-md mt-32">
            <div className="p-6 space-y-6">
              <h1 className="text-white text-xl font-bold flex justify-center">
                SignUp
              </h1>
              <form className="space-y-4">
                <div>
                  <label className="text-white font-bold">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className=" text-white font-bold">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>

                <div>
                  <label className=" text-white font-bold"> Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-700 text-white rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-gray-900 hover:bg-white hover:text-black duration-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  SignUp
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="../Pages/SignIn.jsx"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 pl-1"
                  >
                    SignIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
