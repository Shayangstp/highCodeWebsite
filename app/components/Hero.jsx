"use client";
import React, { useState, useEffect } from "react";
import {
  faArrowDown,
  faCircleDot,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Tooltip } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

const page = ["home", "sec1", "sec2", "sec4"];
const constactIcons = [
  {
    icon: faGithub,
    title: "github.com/HighCodeTeam",
  },
  {
    icon: faLinkedinIn,
    title: "linkedin.com/HighCodeTeam",
  },
  {
    icon: faTelegram,
    title: "telegram.com/HighCodeTeam",
  },
  {
    icon: faWhatsapp,
    title: "whatsapp.com/HighCodeTeam",
  },
];

const Hero = () => {
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
    <div className="h-[100vh]">
      <section className="grid grid-cols-5 h-[100%] hero">
        {/* col 1 */}

        <div className="flex justify-center items-center col-span-1 h-[100%] ">
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
          <div className="text-red-600 flex flex-col items-center justify-center p-5 h-[100%] me-10">
            <div className="border border-gray-500 w-0 h-[80%]"></div>
            <div className="text-white rotate-90 mt-7 text-xs">See more</div>
            <div className="mt-7">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-gray-500 h-[10px]"
              />
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="col-span-3 flex justify-center items-center">
          <div className="">
            <div className="text-white text-[55px] font-bold">
              Unleash Your Imagination
            </div>
            <div className="text-white text-[30px] font-bold text-end ms-2">
              ,We handle the Code
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <Button
                className="text-white  border px-5 py-3 rounded-xl bg-blue-transparent text-sm hover:bg-cyan-800"
                variant="contained"
              >
                ContactUS
              </Button>
              <Button
                className="text-black border-black px-5 py-3 rounded-xl bg-white text-sm hover:bg-gray-200"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Get Start
              </Button>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="col-span-1 h-[100%]">
          <div className="text-red-600 flex items-center justify-center p-5 h-[100%]">
            <div className="border border-gray-500 w-0 h-[50%]"></div>
            <div className="ms-10 flex flex-col gap-10">
              {constactIcons.map((item) => {
                return (
                  <Tooltip title={item.title} arrow>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-gray-500 h-[10px] hover:text-[#00D1FF] cursor-pointer text-[20px]"
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
