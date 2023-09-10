import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let Links = [{ name: "Home", link: "/" }];
  const navigate = useNavigate();

  const handlechange = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="sticky top-0 z-10 w-full bg-transparent shadow-sm bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-lg border-gray-200">
      <div className="relative flex items-center justify-between w-full max-w-screen-xl px-5 py-1 mx-auto text-gray lg:px-2 lg:shadow-none">
        <div className="z-0 w-full h-fulllg:hideden">
          <ul className="flex items-center font-medium tracking-tight lg:space-x-5 text-md">
            {Links.map((link, index) => (
              <li
                className="text-black transition duration-200 hover:text-gray-400 lg:block"
                key={index}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handlechange}
          className="w-28 hover:scale-110 duration-300 text-white p-2 rounded-md bg-gray-800"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
