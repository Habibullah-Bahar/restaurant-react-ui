import React from "react";
import img2 from "../../assets/biryani2.png";

const serviceData = [
  {
    id: 1,
    img: img2,
    name: "Biriyani",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam accusamus enim",
  },
  {
    id: 2,
    img: img2,
    name: "Chiken Kari",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam accusamus enim",
  },
  {
    id: 3,
    img: img2,
    name: "Cold Cofee",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam accusamus enim",
  },
];

const Services = () => {
  return (
    <div>
      <div className="py-10 dark:bg-gray-900 dark:text-white">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              aperiam accusamus enim saepe ipsa cumque in reiciendis facilis
              atque quaerat!
            </p>
          </div>

          <div 
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-23 place-items-center">
            {serviceData.map((item) => (
              <div key={item.id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary p-4 hover:text-white shadow-xl duration-300">
                <div className="h-[100px]">
                  <img src={item.img} alt=""
                  className="max-w-[200px] mx-auto block -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{item.name} </h1>
                  <p className="text-gray-500 text-sm line-clamp-2">{item.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
