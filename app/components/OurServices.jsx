"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleDot,
  faCircle,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

const page = ["home", "sec1", "sec2", "sec4"];

const OurServices = () => {
  const [activePage, setActivePage] = useState("home");
  //scroll the bullet
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      // Determine the active section based on the scroll percentage
      let activeSection;
      if (scrollPercentage < 25) {
        activeSection = page[0];
      } else if (scrollPercentage < 50) {
        activeSection = page[1];
      } else if (scrollPercentage < 75) {
        activeSection = page[2];
      } else {
        activeSection = page[3];
      }

      setActivePage(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className=" bg-gray-900 bg-opacity-30 p-5 mt-24 max-w-[1920px] w-[100%]">
      <div className=" h-[100%] rounded-md bg-gradient-to-r from-white to-gray-900 p-0.5">
        <main className="sm:grid grid-cols-8 sm:p-10 pt-10  h-[100%] bg-black rounded-md">
          {/* col 1 */}
          <div className="flex justify-center items-center xl:col-span-5 col-span-8 ms-10 h-[100%] ">
            <div className="text-white xl:flex hidden flex-col gap-7">
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
              <div className="border border-gray-500 w-0 h-[100%] mt-2"></div>
            </div>
            {/* our services section */}
            <div className="flex flex-col">
              <div className="text-white lg:text-[70px] sm:text-[50px] text-[30px] font-bold mb-2">
                Our Services :{" "}
              </div>
              <ul className="w-[90%] p-5 rounded-xl bg-[#228DAF] list-disc list-inside">
                <li className="text-white text-[14px]">
                  Category{" "}
                  <p className="text-white mt-2 text-[12px]">
                    communication and teamwork are key strengths of the team, as
                    they frequently collaborate, share knowledge, and provide
                  </p>
                </li>

                <li className="text-white mt-3 text-[14px]">
                  Category{" "}
                  <p className="text-white mt-2 text-[12px]">
                    communication and teamwork are key strengths of the team, as
                    they frequently collaborate, share knowledge, and provide
                  </p>
                </li>

                <li className="text-white mt-3 text-[14px]">
                  Category{" "}
                  <p className="text-white mt-2 text-[12px]">
                    communication and teamwork are key strengths of the team, as
                    they frequently collaborate, share knowledge, and provide
                  </p>
                </li>
              </ul>
              <div className="w-[90%] p-5 rounded-xl bg-[#5E7656] mt-3">
                <p className="text-white text-[12px]">
                  design efficient solutions, and implement robust software
                  systems. Effective communication and teamwork are key
                  strengths of the team, as they frequently collaborate, share
                  knowledge, and provide
                </p>
              </div>
              <div className="text-end w-[90%]">
                <Button className="bg-[#616161] bg-opacity-25 rounded-md border-2 border-[#616161] mt-3 px-5 py-2 hover:bg-[#887382]">
                  <span className="text-white">ContactUS</span>
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className="text-white ms-2"
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* end of col 1 */}
          <div className="xl:flex hidden justify-center items-center col-span-3 h-[100%]">
            {/* test the img tag */}
            <div className="sec2Wallpaper w-full h-full me-10" />
          </div>
        </main>
      </div>
    </section>
  );
};

export default OurServices;
