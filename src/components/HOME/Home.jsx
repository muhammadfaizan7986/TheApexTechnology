import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button } from "@material-tailwind/react";
import Features from "./Features/Features";
import { BsCaretRightFill, BsFillPlayFill } from "react-icons/bs";
import Modal from "../Modals/YoutubeModal";
import Slider from "../slider/Slider";
import { motion } from "framer-motion";
import Gallery from "../../Gallery/Gallery";
import Whatsapp from "../Whatsapp/Whatsapp";
import MyLocation from "../Location/MyLocation";
import OurTeam from "../Team/OurTeam";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [coursorVariant, setCoursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const [showModal, setShowModal] = useState(false);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      zIndex: "2",
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text2: {
      height: 60,
      width: 60,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text3: {
      height: 60,
      width: 60,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCoursorVariant("text");
  const textLeave = () => setCoursorVariant("default");
  const textEnter2 = () => setCoursorVariant("text2");
  const textEnter3 = () => setCoursorVariant("text3");
  return (
    <>
      <div className="relative background font-jost w-[100vw] md:flex sm:h-[60vh]">
        <motion.div
          variants={variants}
          className="cursor"
          animate={coursorVariant}
        ></motion.div>
        <div className="section_1 w-[100vw] flex flex-col justify-center items-center text-center mb-5">
          <div className="text-[#3c7aff] pb-7 sm:mt-20 font-bold flex items-center  gap-5 md:text-2xl text-lg">
            <span className="first_highlight"></span>MOBILE TRANING INSTITUTE
            <span className="first_highlight"></span>
          </div>
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="md:text-[66px] text-2xl  font-[700] text-[#ffffff]"
          >
            We Help To Solution Your Devices!
          </h1>
          <h1
            onMouseEnter={textEnter2}
            onMouseLeave={textLeave}
            className=" text-[#3c91ff] mt-7 font-bold md:text-[35px] text-xl"
          >
            WE MAKE YOU <span className="text-[#ffffff]">MOBILE ENGINEER</span>
          </h1>
          <p
            onMouseEnter={textEnter3}
            onMouseLeave={textLeave}
            className="mt-4 md:w-[30%] font-medium text-lg text-[#ffffff]"
          >
            The Apex Technology Is Offering Best Repairing Services & Training
            Courses In Twin Cities.Teacher's And Technicians With
            <span className="text-blue-600 font-extrabold text-[20px]">
              10+
            </span>
            Years of Experience.
          </p>
          <a href="https://wa.me/+923084977779" target="blank">
            <Button className="border rounded-[35px] bg-[#ffffff80] hover:bg-blue-600 px-10 py-5 text-lg  font-jost duration-300 mt-5 cursor-pointer">
              ENROLL NOW
            </Button>
          </a>
        </div>
      </div>
      <Features />
      <section className=" flex flex-col font-jost mt-4 h-[100vh] ">
        <div className="text-center md:py-5  h_border mx-auto md:mb-10 ">
          <h1
            onMouseEnter={textEnter3}
            onMouseLeave={textLeave}
            className="font-semibold md:text-[48px] text-3xl"
          >
            ABOUT US
          </h1>
        </div>
        <div className="md:flex gap-3 max-w-[1400px] py-5 mx-auto md:text-left text-center">
          <div className="basis-1/2">
            <h1
              onMouseEnter={textEnter3}
              onMouseLeave={textLeave}
              className="font-bold md:text-6xl text-2xl"
            >
              <span className="text-blue-700">Mobile Phone </span>Repairing
              Course Islamabad
            </h1>
            <p className="md:text-[18px]  mt-5 ">
              Taught by industry professionals, at our courses you’ll learn from
              the best. With small training classes, you’ll get the support and
              attention you need to excel from the start of your professional
              career. We have a variety of courses including foundation for
              those with no experience to more advanced techniques courses.Start
              your professional journey with The Apex Technology Institute.
            </p>
            <ul>
              <li className="flex items-center mt-3 gap-2">
                <BsCaretRightFill className="text-blue-600 text-2xl md:block hidden" />
                <p className="md:text-lg font-semibold ">
                  Best learning environment with centrally air conditioned
                </p>
              </li>
              <li className="flex items-center mt-3 gap-2">
                <BsCaretRightFill className="text-blue-600 text-2xl md:block hidden" />
                <p className="md:text-lg font-semibold">
                  All courses certified with international level
                </p>
              </li>
              <li className="flex items-center mt-3 gap-2">
                <BsCaretRightFill className="text-blue-600 text-2xl md:block hidden" />
                <p className="md:text-lg font-semibold">
                  Trained teachers and technicians with international experience
                </p>
              </li>
            </ul>
            <button className="py-4 px-8 transition-all duration-300 cursor-pointer hover:bg-blue-400 font-bold text-white mt-6 ml-5 border rounded-[50px] bg-blue-600">
              About US
            </button>
          </div>
          <div className="basis-1/2 relative">
            <div className="About_img sm:mx-auto absolute right-0 md:block hidden"></div>
            <div
              onClick={() => setShowModal(true)}
              className="md:flex justify-center hidden text-white text-4xl items-center absolute w-20 h-20 rounded-lg top-36 hover:bg-[#111111bc] duration-300 transition-all cursor-pointer left-16 bg-black"
            >
              <BsFillPlayFill />
            </div>
            <div className="hidden absolute md:flex justify-center items-center bottom-[-15px] text-white bg-shadow rounded-[20px] shadow-md left-16 w-[210px] h-[250px] bg-blue-600">
              <div className="pl-4 ">
                <h1 className="font-bold text-[30px] ">
                  More Then <span className="text-[60px] block">10+</span> Years
                  of Exprience
                </h1>
              </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/_1_H2iIQ9dY?si=79EObQfxxgPb7hBh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </section>
      <Slider />
      <Gallery />
      <Whatsapp />
      <MyLocation />
      <OurTeam />
    </>
  );
};

export default Home;
