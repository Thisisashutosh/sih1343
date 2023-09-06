// import React, { useState } from "react";

const Details = ({res}) => {
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);

  return (
    <div className="md:flex items-start justify-center py-8 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src="https://images.pexels.com/photos/6223420/pexels-photo-6223420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          className="mt-6 w-full"
          alt="img of a girl posing"
          src="https://images.pexels.com/photos/904621/pexels-photo-904621.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src="https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="flex items-center flex-wrap justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-60"
            src="https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-60"
            src="https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-60"
            src="https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-60"
            src="https://images.unsplash.com/photo-1527195694714-9b939fac3432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Aloe Vera</p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            Aloe barbadensis miller
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Kingdom</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">Plantae</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Phylum</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">Anthophyta</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Class</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">
              Monocotyledoneae
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Order</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">Asparagales</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Family</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">Asphodelaceae</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Genus</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 ">Aloe</p>
          </div>
        </div>
        {/* <button
          className="
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
        >
          Upload
        </button> */}
        <div>
          <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            An evergreen perennial, it originates from the Arabian Peninsula,
            but grows wild in tropical, semi-tropical, and arid climates around
            the world. It is cultivated for commercial products, mainly as a
            topical treatment used over centuries. The species is attractive for
            decorative purposes, and succeeds indoors as a potted plant.
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600">
            Regions: Africa, Asia, Europe and America
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Average Height: 60-100 cm
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Water Requirement: 2-3 times a month
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Soil Requirement: Sandy soil with neutral PH
          </p>
        </div>

        {/* <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">
                Shipping and returns
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div> */}

        {/* <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Details;
