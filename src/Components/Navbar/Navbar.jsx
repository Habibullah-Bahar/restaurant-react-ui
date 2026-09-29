import React from "react";
import Logo from "../../assets/food-logo.png";
import { IoCartSharp } from "react-icons/io5";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center ">
              <a
                href="#"
                className="flex gap-3 items-center text-3xl font-bold"
              >
                <img src={Logo} alt="Foodie Zone" className="w-10" />
                Foodie
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <div>
                <Darkmode />
              </div>
              <ul className="hidden sm:flex justify-between items-center gap-6 ">
                <li className="hover:text-primary">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-primary">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-primary">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex cursor-pointer gap-2 items-center ">
                  Order
                  <IoCartSharp className="text-xl text-white drop-shadow-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
