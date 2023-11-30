import React from "react";
import "./YoutubeModal.css";
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed inset-0 z-[2] bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[700px] flex flex-col">
        <button
          onClick={() => onClose()}
          className=" hover:text-black transition duration-200 text-white text-xl font-bold place-self-end"
        >
          X
        </button>
        <div className="modal-bg bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
