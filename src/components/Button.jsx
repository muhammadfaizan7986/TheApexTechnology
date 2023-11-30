import React from "react";

const Button = (props) => {
  return (
    <button className="flex items-center gap-2  bg-blue-700 text-white font font-jost py-4 px-7 rounded-[30px] md:ml-8 hover:bg-blue-500  duration-300">
      {props.children}
    </button>
  );
};

export default Button;
