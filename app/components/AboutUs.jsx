"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleDot,
  faCircle,
  faCircleRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
// import { Button } from "@material-tailwind/react";

const page = ["home", "sec1", "sec2", "sec4"];

const cardData = [
  {
    headerNumber: "15",
    headerText: "Years of Experience",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share",
  },
  {
    headerNumber: "350",
    headerText: "Project Completed",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share",
  },
  {
    headerNumber: "250",
    headerText: "Happy Customers",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share",
  },
];

const AboutUs = () => {
  const [activePage, setActivePage] = useState("home");
  const [expandedItem, setExpandedItem] = useState(0);

  const toggleItem = (idx) => {
    if (expandedItem === idx) {
      setExpandedItem(null);
    } else {
      setExpandedItem(idx);
    }
  };

  useEffect(() => {
    if (expandedItem === null) setExpandedItem(0);
  }, [expandedItem]);

  return (
    <section className=" bg-gray-900 bg-opacity-30  w-full mt-32">
      <main className="grid grid-cols-8  h-full w-full bg-black rounded-md">
        {/* col 1 */}
        <div className="hidden xl:inline-block">
          <div className="xl:flex hidden justify-center  items-center col-span-1 xl:ms-16 ms-0 h-[100%]">
            <div className="text-white flex flex-col gap-7">
              {page.map((item, index) => (
                <div key={index}>
                  {activePage === item ? (
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      className="text-[#5fb2ff]"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[2px] ms-1"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="text-red-600 xl:flex hidden flex-col items-center justify-center p-5 h-[100%] w-[10%]">
              <div className="flex flex-col ">
                <div className="border border-gray-500 w-[20px] rotate-45"></div>
                <div className="border border-gray-500 w-[20px] rotate-45 mt-1"></div>
                <div className="border border-gray-500 w-[20px] rotate-45 mt-1"></div>
              </div>
              <div className="border border-gray-500 w-0 h-[80%] mt-2"></div>
            </div>
          </div>
        </div>
        {/* AboutUs section */}
        <div className="xl:col-span-7 col-span-8 h-[100%]">
          <section className="sm:pe-10 sm:ms-10 xl:ms-0 py-10">
            <div className="xl:grid grid-cols-8 bg-cyan-400 rounded-r-[80px] xl:p-10 p-5">
              <div className="col-span-3 font-bold flex items-center justify-center xl:ms-5">
                <h1 className="xl:text-[70px] sm:text-[50px] text-[30px]  text-white">
                  ABOUT US
                </h1>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <div className="border h-0 w-[70%] xl:inline-block hidden"></div>
              </div>
              <div className="text-white col-span-4 flex items-center">
                <p className="ms-10">
                  design efficient solutions, and implement robust software
                  systems. Effective communication and teamwork are key
                  strengths of the team, as they frequently collaborate, share{" "}
                </p>
              </div>
              {/* image */}
              <div className="xl:col-span-4 xl:flex justify-center items-center hidden">
                <div className="sec3Wallpaper-aboutUs" />
              </div>
              {/* cards */}
              <div className="col-span-4 flex flex-col gap-4 mb-10 mt-10">
                {cardData.map((item, idx) => {
                  return (
                    <div className="bg-black text-white rounded-[50px] ms-10 overflow-hidden shadow-2xl">
                      <header className="flex items-center justify-between px-10 py-3">
                        <div className="flex items-center">
                          <span className="xl:text-[80px] sm:text-[50px] text-[40px] font-bold mt-2">
                            {item.headerNumber}
                          </span>
                          <span className="ms-3 me-2 sm:me-0 sm:text-[20px] text-[15px]">
                            {item.headerText}
                          </span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={
                              expandedItem !== idx ? faChevronDown : faChevronUp
                            }
                            className={`text-[40px] cursor-pointer hover:text-blue-gray-300 ${
                              expandedItem === idx ? "open" : ""
                            }`}
                            onClick={() => toggleItem(idx)}
                          />
                        </div>
                      </header>
                      {expandedItem === idx && (
                        <p className="px-10 mb-10 text-[12px]">
                          {item.content}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
