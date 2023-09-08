import React from "react";
import { useNavigate } from "react-router-dom";

const Homenav = () => {
  let Links = [{ name: "SIH1343", link: "/" }];
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-10 w-full bg-transparent shadow-sm bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-lg border-gray-200">
      <div className="relative flex items-center justify-between w-full max-w-screen-xl px-5 py-1 mx-auto text-gray lg:px-2 lg:shadow-none">
        <div className="z-0 w-full h-full lg:hideden">
          <ul className="flex items-center tracking-tight lg:space-x-5 text-md">
            {Links.map((link, index) => (
              <li key={index}>
                <a className="text-3xl font-normal font-serif" href={link.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => navigate("/signin")}
            className="cursor-pointer flex items-center justify-center leading-none font-medium w-20 rounded-lg py-3 text-center text-black hover:scale-110 duration-300"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer flex items-center justify-center leading-none font-medium w-20 rounded-lg py-3 text-center text-white bg-gray-800 hover:scale-110 duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Homenav;
