import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Navimg from "../../assets/images/Logo PNG.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdSms } from "react-icons/md";
import Button from "../Button";
const Header = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "about" },
    { name: "OUR COURSES", link: "our-courses" },
    { name: "CONTACT US", link: "contect" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" background_blur border-b shadow-md w-full fixed top-0 left-0 ">
        <div className="   md:flex items-center justify-between  py-4 md:px-10 px-7 ">
          <div className="text-white font-bold md:text-2xl text-xl cursor-pointer flex items-center font-jost ">
            <span className="w-14 mr-2 pt-1">
              <img src={Navimg} alt="img" />
            </span>
            <h1 className="">The Apex Technology</h1>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden text-white"
          >
            {open ? <IoClose className="text-4xl" /> : <TiThMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static text-white md:bg-transparent bg-white md:z-10 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-480px]"
            }`}
          >
            {links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                <NavLink
                  to={Link.link}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-blue-700" : "md:text-white text-black"
                    }   duration-300 hover:text-blue-700 `
                  }
                >
                  {Link.name}
                </NavLink>
              </li>
            ))}
            <Link to={"/contect"}>
              <Button>
                APPOINTMENT
                <MdSms className="text-2xl" />
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
