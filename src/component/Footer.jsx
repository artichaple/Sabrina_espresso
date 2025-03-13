import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" bg-teal-100 h-10 "></div>

        <div className="  bg-teal-100  ">
          <div className="logo flex justify-center gap-x-10 mt-2 pt-20">
            <img
              src="src/assets/logo.png"
              alt=""
              className=" rounded-full shadow-2xl h-40 w-40 shadow-gray-500"
            />
          </div>

          <div className="flex justify-center gap-x-10 font-[Crimson] text-sm  text-gray-700 pt-10">
            <h2>CONTACT</h2>
            <h2>TERMS</h2>
            <h2>PRIVACY POLICY</h2>
            <h2>RETURN POLICY</h2>
            <h2>FAQ's</h2>
            <h2>SITE MAP</h2>
          </div>

            <div className="flex justify-center ">
                <input type="text" placeholder="Enter your email" className="border-2 border-gray-300 rounded-full   bg-amber-50 w-80 h-10 mt-10 pl-5"/>
                <button className="bg-gray-700   text-white rounded-full w-20 h-10 mt-10 ml-1">Subscribe</button>


            </div>


             

          <div className="flex justify-center gap-x-5 font-[Crimson] text-sm pt-10">
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bx bxl-whatsapp"></i>
            </a>
            <a href="#">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i class="bx bxl-pinterest"></i>
            </a>
          </div>

          <p className=" text-center font-[Crimson]  text-gray-700 pt-5">
            © 2024-2025, All rights reserved BY AC
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
