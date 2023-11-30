import React from "react";
import "./Features.css";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
  BsFillBookmarkStarFill,
  BsFillFileEarmarkMedicalFill,
  BsFillPatchCheckFill,
  BsRepeat1,
} from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
const Features = () => {
  return (
    <>
      <div class="ag-format-container font-jost">
        <div className="mt-24">
          <h3 className="text-center text-blue-600 text-1xl">
            REPSERV TRANING INSTITUTE
          </h3>
          <h1 className="text-center font-semibold text-[48px]">
            WHY CHOOSE US
          </h1>
        </div>
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <BsFillPatchCheckFill className="text-[40px] mb-2 mx-auto" />
                Technical and Professional trainers
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <BsFillBookmarkStarFill className="text-[40px] mb-2 mx-auto" />
                Guaranteed Value For Your Money
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <MdOutlineSupportAgent className="text-[40px] mb-2 mx-auto" />
                100% support after completion of the courses
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <BsFillFileEarmarkMedicalFill className="text-[40px] mb-2 mx-auto" />
                Perfect Classification of Courses
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <BsRepeat1 className="text-[40px] mb-2 mx-auto" />
                Free Re-Take
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <PiCertificateBold className="text-white text-[40px] mb-2 mx-auto" />
                Guaranteed Certificate
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title">
                <ImPriceTags className="text-[40px] mb-2 mx-auto" />
                Comfortable Pricing
              </div>
            </div>
          </div>

          <div class="ag-courses_item">
            <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <RiUserStarLine className="text-[40px] mb-2 mx-auto" />
                Well Reputation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
