import React from "react";

const Gallary = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-1 h-80 w-[1100px] p-4 rounded-xl mx-auto">
        <div className="col-span-2 row-span-2 relative rounded-tl-4xl rounded-bl-2xl shadow-lg overflow-hidden text-white text-center  font-[Crimson]">
          <img
            src="src/assets/gg.jpeg"
            alt="Image"
            className="h-full w-full object-cover brightness-50"
          />

          <h2 className="absolute top-3 left-1/2 text-lg font-semibold text-emerald-950">
            New Arrivals
          </h2>
          <p className="absolute top-10 left-1/2 text-2xl text-red-800 font-bold ">
            LED Name Plates
          </p>
          <button className="absolute  top-20 left-1/2 px-6 py-2 bg-pink-200 text-pink-600 rounded-full hover:bg-blue-600 transition ">
            Shop Now
          </button>
        </div>

        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <img
            src="src/assets/rr.jpeg"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className=" col-span-1 row-span-1 rounded-tr-2xl flex items-center justify-center">
          <img
            src="src/assets/err.jpeg"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>

        <div className=" col-span-2 row-span-2 rounded-br-2xl flex items-center justify-center">
          <img
            src="src/assets/lrr.jpeg"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>

   <div>










    

   </div>




    </>
  );
};

export default Gallary;
