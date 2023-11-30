import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Slider.css";
import { FaAngleRight } from "react-icons/fa"; // import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";
const andriodLevel1 = [
  {
    level: "Usage of Multimeter",
  },
  {
    level: "Assemble and Disassemble Mobile Phone",
  },
  {
    level: "Usage of iron Station ",
  },
  {
    level: "Replacement of Display",
  },
  {
    level: "Basic Knowledge of Components",
  },
  {
    level: "Replacement of flexes",
  },
  {
    level: "Usage of USB Tester",
  },
  {
    level: "Basic Knowledge of Components",
  },
];
const andriodLevel2 = [
  {
    level: "Usage of Microscope",
  },
  {
    level: "Understand the Charge siquence",
  },
  {
    level: "Understand the DC Power Supply Sequence",
  },
  {
    level: "Understand the Boot sequence",
  },
  {
    level: "Solution of Network ",
  },
  {
    level: "Micro Jumping",
  },
  {
    level: "Full Short Solution",
  },
  {
    level: "Diagnose the Audio Faults",
  },
];
const andriodLevel3 = [
  {
    level: "Understand the Schmatics Diagram",
  },
  {
    level: "Swapping of Mothboard",
  },
  {
    level: "Level 3 Micro Jumping",
  },
  {
    level: "Dead Boot Repair",
  },
  {
    level: "Repair of Water Damage phones",
  },
  {
    level: "Flashing of frimWare",
  },
  {
    level: "Detailed Knowledge of Boot Sequence",
  },
  {
    level: "Detailed Knowledge of LDO Supply",
  },
];
export default function Slider() {
  return (
    <>
      <div className="text-center mx-auto h_border md:text-[45px] text-3xl md:py-5 font-semibold border-b-2 border-black  mb-10">
        <h1>
          OUR <span className="text-blue-600">COURSES</span>
        </h1>
      </div>
      <div className="md:flex g_bg pb-20">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <h1 className="text-white font-bold mt-3 text-center text-2xl font-jost ">FOR ANDRIOD</h1>

          <SwiperSlide>
            <h1 className=" uppercase font-jost font-bold text-2xl text-center pt-5">
              level 1-beginner
            </h1>
            <div className="ml-10 py-6 border-b w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                20,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul>
                {andriodLevel1.map((items) => {
                  return (
                    <>
                      <li className="flex gap-2 py-[6px] font-jost">
                        <FaAngleRight />
                        {items.level}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="mt-3 absolute border-2 rounded-[50px] border-black font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="uppercase text-white font-jost font-bold text-2xl text-center pt-5">
              level 2-intermediate
            </h1>
            <div className="ml-10 py-6 border-b text-white w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                30,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul>
                {andriodLevel2.map((items) => {
                  return (
                    <>
                      <li className="flex gap-2 py-[6px] font-jost text-white">
                        <FaAngleRight />
                        {items.level}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="mt-2 absolute border-2 rounded-[50px] border-white text-white font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="uppercase text-white font-jost font-bold text-2xl text-center pt-5">
              level 3-advance
            </h1>
            <div className="ml-10 py-6 text-white border-b w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                20,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul>
                {andriodLevel3.map((items) => {
                  return (
                    <>
                      <li className="flex gap-2 text-white py-[6px] font-jost">
                        <FaAngleRight />
                        {items.level}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="mt-2 absolute border-2 rounded-[50px] border-white text-white font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1 className="font-jost font-bold text-2xl text-center pt-5"></h1>
            <div className="ml-10 py-6 border-b w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                20,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul></ul>
            </div>
            <div className="mt-2 absolute border-2 rounded-[50px] border-black font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="font-jost font-bold text-2xl text-center pt-5"></h1>
            <div className="ml-10 py-6 border-b w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                20,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul></ul>
            </div>
            <div className="mt-2 absolute border-2 rounded-[50px] border-black font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="font-jost font-bold text-2xl text-center pt-5"></h1>
            <div className="ml-10 py-6 border-b w-[260px]">
              <span>Starting At...</span>
              <h1 className="font-extrabold text-3xl">
                20,000<span className="text-sm">Rs</span>
              </h1>
            </div>
            <div className="ml-2 mt-5">
              <ul></ul>
            </div>
            <div className="mt-2 absolute border-2 rounded-[50px] border-black font-medium left-5 py-2 px-3">
              <Link to={"our-courses"}>Read More..</Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
