import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SaveBase64Image from "./saveimage";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [displayData, setDisplaydata] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleupload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  const handlesubmit = () => {
    const body = { image };

    axios
      .post("http://localhost:3000/api/upload/image", body)
      .then((res) => {
        if (res.data.status === "error") toast.error(res.data.message);
        else {
          setDisplaydata(res.data.result);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleclear = () => {
    setImage(null);
    setDisplaydata(null);
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <div className='bg-[url("src/assets/leaves-8169572_1920.jpg")] h-fit w-full bg-cover bg-center p-72'></div>
      <div className="flex items-center justify-center p-10">
        {image ? (
          <div className="flex flex-col gap-5 justify-center items-center">
            <img
              className="h-auto max-w-lg rounded-lg"
              src={image}
              alt="uploaded image will appear here"
            />
            <div className="flex items-center justify-center gap-5">
              <SaveBase64Image base64ImageString={image} fileName="image.jpg" />

              <button
                onClick={handlesubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
              >
                {loading ? "loading..." : "Check Details"}
              </button>

              <button
                onClick={handleclear}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
              >
                Clear
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-1/3">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG
                </p>
              </div>
              <input
                onChange={(e) => handleupload(e)}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>
      {displayData ? (
        <>
          <div className="shadow-md mx-2 my-5 rounded-md">
            <div className="card flex flex-row items-center space-x-4 rounded-md py-4 px-8">
              <div className="card-body text-xl font-bold flex flex-col">
                <h1>{displayData.class_name}</h1>
                <div className="flex flex-col items-start gap-3 justify-center text-blue-500">
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[2]}
                  </span>
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[3]}
                  </span>
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[4]}
                  </span>
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[5]}
                  </span>
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[6]}
                  </span>
                  <span className="text-lg font-normal text-black">
                    {displayData.parsedData[7]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Upload;
