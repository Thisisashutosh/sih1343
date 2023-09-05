import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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
    navigate("/details")
  };

  const handleclear = () => {
    setImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className='bg-[url("src/assets/leaves-8169572_1920.jpg")] h-fit w-full bg-cover bg-center p-72'></div>
      <div className="flex items-center justify-center p-10">
        {image ? (
          <div className="flex flex-col gap-5 justify-center items-center">
            <img
              class="h-auto max-w-lg rounded-lg"
              src={image}
              alt="uploaded image will appear here"
            />
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={handlesubmit}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
              >
                Check details
              </button>

              <button
                onClick={handleclear}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
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
    </div>
  );
};

export default Upload;
