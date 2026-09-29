import React from "react";
import Food1 from "../../assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div>
      <div className="min-h-[550px]">
        <div className="container">
          <div
          data-aos="slide-up"
          data-aos-duration="300"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-3">
            <div>
              <img
                src={Food1}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)] "
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold dark:text-white">
                Lorem ipsum dolor.
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                deserunt, quisquam ullam tenetur est debitis dignissimos
                voluptate neque maiores ab, dicta minima!
                <br />
                <br />
                Odio illum eligendi soluta consectetur fugit est assumenda, quia
                nihil quisquam et alias harum architecto laboriosam similique
                amet reiciendis, hic vero enim velit! Accusamus adipisci
                pariatur laboriosam dicta.consectetur fugit est assumenda, quia
              </p>

              <div className="flex gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                </div>
                <div>
                  <IoFastFoodSharp className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                </div>
              </div>

              <div className="drop-shadow-xl">
                <button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 py-3 hover:scale-105 duration-200 cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
