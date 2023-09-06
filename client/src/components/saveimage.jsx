import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const SaveBase64Image = ({ base64ImageString, fileName }) => {
  const downloadLinkRef = useRef(null);

  const handleSaveImage = () => {
    // Create a Data URL from the base64 image string
    const dataURL = base64ImageString; // Specify the appropriate image type
    console.log("image data received in image component");

    // Set the href and download attributes of the link
    downloadLinkRef.current.href = dataURL;
    downloadLinkRef.current.download = fileName; // Set the desired file name
    console.log("file name set");

    // Trigger a click event to initiate the download
    downloadLinkRef.current.click();
    console.log("image saved");
    toast.success("Image uploaded successfully");
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
          onClick={handleSaveImage}
        >
          Upload image to server
        </button>
        <a ref={downloadLinkRef} style={{ display: "none" }} />
      </div>
    </>
  );
};

export default SaveBase64Image;
