import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
const MyLocation = () => {
  return (
    <>
      <div>
        <div className="text-[45px] font-jost font-bold mx-auto text-center mb-16 mt-10 h_border">
          <h1>OUR LOCATION</h1>
        </div>
        <div className="w-screen h-screen relative">
          <div className=" absolute bottom-0 right-28 text-white rounded-2xl  h-[376.35px] w-[650px] bg-blue-600 ">
            <div className="text-jost mt-10 ml-5">
              <BiSolidPhoneCall className="text-[40px]" />
              <h1 className="py-2 font-extrabold text-[40px]">
                +92-308-4977779
              </h1>
              <div className="py-2 gap-2 flex items-center">
                <FaLocationDot className="text-[15px]" />
                <p className="text-[15px]">
                  OFFICE NO SF-113, 2ND FLOOR, M-DUBAI TOWER KHANNA PULL,
                  ISLAMABAD
                </p>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/The+Apex+Technology/@33.6293711,73.1170012,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfebdc408e094d:0xa89e9b789c05060a!8m2!3d33.6293711!4d73.1170012!16s%2Fg%2F11vkhb3jrm?entry=ttu"
                  className="underline"
                  target="blank"
                >
                  Get Direction
                </a>
              </div>
              <div className="py-2 flex items-center gap-2 text-[15px]">
                <IoMail />
                <p>info@TheApex.com</p>
              </div>
              <div className="flex items-center gap-2 text-[15px]">
                <IoMail />
                <a target="blank" className="hover:underline" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpcldpZMksDsjgxDmjWPGmjNTNfDPNbvdRFNjnqNnbBlKLQttFrFVBdkqBpjhBfmRjLvgL">
                  <p>Rizwan.14397@gmail.com</p>
                </a>
              </div>
              <p className="font-bold text-[20px] py-2">
                <span className="text-black text-[25px]">Contact us </span>if
                you want to become a professional technician.
              </p>
            </div>
          </div>
          <a
            target="blank"
            href="https://www.google.com/maps/place/The+Apex+Technology/@33.6293711,73.1170012,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfebdc408e094d:0xa89e9b789c05060a!8m2!3d33.6293711!4d73.1170012!16s%2Fg%2F11vkhb3jrm?entry=ttu"
          >
            <iframe
              title="mymap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.071982502634!2d73.11442627541362!3d33.62937553994106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfebdc408e094d%3A0xa89e9b789c05060a!2sThe%20Apex%20Technology!5e0!3m2!1sen!2s!4v1699037052892!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyLocation;
