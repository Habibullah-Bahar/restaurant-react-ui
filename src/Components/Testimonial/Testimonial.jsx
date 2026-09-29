import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Jhon Doe",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum quam! Nulla?",
    img: "https://picsum.photos/200",
  },
];

const Testimonial = () => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="300"
    className="dark:text-white">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto py-10">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold">
            Testimonial
          </p>
          <p className="text-3xl font-bold">Testimonial</p>
          <p className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>

        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className="mx-auto"
          >
            {testimonialData.map((data) => (
              <SwiperSlide className="mb-10 text-center ">
                <div key={data.id}
                className=" w-full mx-auto max-w-[550px] bg-primary/20 dark:bg-primary/40 rounded-3xl px-6 py-2 relative"
                >
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full block mx-auto h-[150px] w-[150px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{data.text}</p>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold mt-2">{data.name}</h1>
                    <p className="font-serif font-bold text-9xl absolute top-0 right-0 text-black/20">,,</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
