import React from "react";

const Header = () => {
  return (
    <div className="headerContainer container flex items-center justify-center p-20 w-11/12 rounded-xl bg-gray-200">
      <div className="textContainer flex flex-col items-center justify-center gap-10 w-3/4">
        <h1 className="title text-gray-800 text-8xl font-serif leading-5">
          Low Effort
        </h1>
        <h1 className="title text-gray-800 text-8xl font-serif ">High Yield</h1>
        <p className="desc text-gray-800 font-normal text-xl w-6/12">
          Take a virtual trip into the alluring world of botany, where every
          flower, leaf, and bloom is just a touch away. You can now discover the
          world of plants one virtual excursion at a time.
        </p>
        <div className="headerContact">
          <button className="flex items-center justify-center hover:scale-110 duration-300 bg-yellow-500 p-3 rounded-full pr-7 pl-7 text-black text-xl">
            Get Started
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8447 8.09467C10.5518 8.38756 10.5518 8.86244 10.8447 9.15533L12.5643 10.875H4.375C3.96079 10.875 3.625 11.2108 3.625 11.625C3.625 12.0392 3.96079 12.375 4.375 12.375H12.5643L10.8447 14.0947C10.5518 14.3876 10.5518 14.8624 10.8447 15.1553C11.1376 15.4482 11.6124 15.4482 11.9053 15.1553L14.9053 12.1553C15.1982 11.8624 15.1982 11.3876 14.9053 11.0947L11.9053 8.09467C11.6124 7.80178 11.1376 7.80178 10.8447 8.09467Z"
                fill="#1C274C"
              />
              <path
                d="M12.375 5.87745C12.375 6.3254 12.6492 6.71725 12.966 7.03401L15.966 10.034C16.8447 10.9127 16.8447 12.3373 15.966 13.216L12.966 16.216C12.6492 16.5327 12.375 16.9246 12.375 17.3726V19.625C16.7933 19.625 20.375 16.0433 20.375 11.625C20.375 7.20672 16.7933 3.625 12.375 3.625V5.87745Z"
                fill="#1C274C"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
