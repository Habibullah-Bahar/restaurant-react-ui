import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 px-6 py-6 dark:text-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 py-5 items-start">
          {/* Company Info */}
          <div>
            <a href="#" className="flex gap-3 items-center text-3xl font-bold">
              <img src={Logo} alt="Foodie Zone" className="w-10" />
              Foodie
            </a>

            <div className="flex flex-col gap-5 mt-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                eum tenetur.
              </p>

              <div className="flex gap-3 items-center">
                <FaLocationArrow />
                <p>Tangail, Bangladesh</p>
              </div>

              <div className="flex gap-3 items-center">
                <FaMobileAlt />
                <p>+880 1703-321082</p>
              </div>

              <div className="flex gap-3 items-center mt-2">
                <a href="#">
                  <FaSquareInstagram className="text-3xl" />
                </a>

                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>

                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:col-span-3">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold mb-3">Important Links</h2>
              <a href="#" className="hover:text-gray-500/90">Home</a>
              <a href="#" className="hover:text-gray-500/90">About</a>
              <a href="#" className="hover:text-gray-500/90">Services</a>
              <a href="#" className="hover:text-gray-500/90">Login</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold mb-3">Important Links</h2>
              <a href="#" className="hover:text-gray-500/90">Home</a>
              <a href="#" className="hover:text-gray-500/90">About</a>
              <a href="#" className="hover:text-gray-500/90">Services</a>
              <a href="#" className="hover:text-gray-500/90">Login</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold mb-3">Important Links</h2>
              <a href="#" className="hover:text-gray-500/90">Home</a>
              <a href="#" className="hover:text-gray-500/90">About</a>
              <a href="#" className="hover:text-gray-500/90">Services</a>
              <a href="#" className="hover:text-gray-500/90">Login</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
