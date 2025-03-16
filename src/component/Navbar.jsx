import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      {/* Sign-up Banner */}
      <div className="bg-teal-100 text-white text-center py-2 ">
        <p className="text-black font-medium">
          Made by Hand, Made for You.{" "}
          <a href="#" className="text-black font-semibold underline">Sign Up Now</a>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-teal-500 text-white flex items-center justify-between py-4 px-8 shadow-md">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold  ml-10  cat-para">
            Serena's Handmade
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-18 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-200 transition">Shop</Link>
          </li>
          <li>
            <Link to="/for" className="hover:text-gray-200 transition">For</Link>
          </li>
          <li>
            <Link to="/ocassions" className="hover:text-gray-200 transition">Occasions</Link>
          </li>
        </ul>

       {/* icons */}
        <div className="flex space-x-6 text-xl mr-10">
          <a href="#" className="hover:text-gray-300"><i className="bx bx-user"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="bx bx-search-alt-2"></i></a>
          <a href="#" className="hover:text-gray-300"><i className="bx bx-heart"></i></a>
          <a href="#" className="hover:text-gray-300"> <i className='bx bx-cart-alt'></i></a>
         
          
      

            
        </div> 
      

      



      </nav>
    </header>
  );
};

export default Navbar;
