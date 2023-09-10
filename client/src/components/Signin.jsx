import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./gradient.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };

    axios
      .post("http://localhost:3000/api/auth/signin", body)
      .then((res) => {
        if (res.data.status === "error") toast.error(res.data.message);
        else {
          localStorage.setItem("profile", JSON.stringify(res.data.result));
          navigate("/upload");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="relative flex justify-center min-h-screen gradient">
        <div className="w-full flex h-full items-center justify-between gap-5 m-auto bg-gray-50 rounded-md shadow-md lg:max-w-3xl">
          <div className="w-3/5 p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-800">
              Sign In
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  onClick={handlesubmit}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
          <div className="w-2/5 h-full">
            <img
              src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-r-md"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
