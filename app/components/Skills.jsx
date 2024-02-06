"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleDot,
  faCircle,
  faCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

const page = ["home", "sec1", "sec2", "sec4"];

const skilData = [
  {
    no: "01",
    skill: ".BackEnd",
    feild: ".Developer",
    feildColor: "text-cyan-500",
    bgColor: "bg-[#638ac5]",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iste magnam asperiores nisi deleniti repellat vero omnisnatus fugiat saepe incidunt? Tempora delectus autemmollitia, similique reiciendis laboriosam voluptas culpaisci esse magni maxime",
  },
  {
    no: "02",
    skill: ".FrontEnd",
    feild: ".Developer",
    feildColor: "text-yellow-500",
    bgColor: "bg-[#63adc5]",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iste magnam asperiores nisi deleniti repellat vero omnisnatus fugiat saepe incidunt? Tempora delectus autemmollitia, similique reiciendis laboriosam voluptas culpaisci esse magni maxime",
  },
  {
    no: "03",
    skill: ".UI/UX",
    feild: ".Designer",
    feildColor: "text-red-500",
    bgColor: "bg-[#663e79]",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iste magnam asperiores nisi deleniti repellat vero omnisnatus fugiat saepe incidunt? Tempora delectus autemmollitia, similique reiciendis laboriosam voluptas culpaisci esse magni maxime",
  },
  {
    no: "04",
    skill: ".DevOps",
    feild: ".Engineer",
    feildColor: "text-blue-300",
    bgColor: "bg-[#4bbdb6]",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Iste magnam asperiores nisi deleniti repellat vero omnisnatus fugiat saepe incidunt? Tempora delectus autemmollitia, similique reiciendis laboriosam voluptas culpaisci esse magni maxime",
  },
];

//663e79 63adc5 638ac5 4bbdb6

const Skills = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <section className="bg-gray-900 bg-opacity-30 mt-32">
      <div className="h-[100%] rounded-md bg-gradient-to-r from-white to-gray-900 p-0.5 ms-2">
        <main className="grid grid-cols-8 bg-black rounded-md h-full">
          <div id="border" className="xl:inline-block hidden">
            <div className="flex justify-center  items-center col-span-1 ms-16 h-[100%]">
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

              <div className="text-red-600 flex flex-col items-center justify-center p-5 h-[100%] w-[10%]">
                <div className="flex flex-col ">
                  <div className="border border-gray-500 w-[20px] rotate-45"></div>
                  <div className="border border-gray-500 w-[20px] rotate-45 mt-1"></div>
                  <div className="border border-gray-500 w-[20px] rotate-45 mt-1"></div>
                </div>
                <div className="border border-gray-500 w-0 h-[80%] mt-2"></div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 col-span-8 flex justify-around items-center p-16 md:p-24">
            <div
              id="skill_cards"
              className="flex flex-wrap justify-center gap-20"
            >
              {skilData.map((item, idx) => {
                return (
                  <div
                    className={`max-w-[460px] p-5 ${item.bgColor} bg-opacity-30 rounded-3xl`}
                  >
                    <header>
                      <div className="text-white">
                        <span className="text-[32px] font-bold">{item.no}</span>
                        <span className="text-[32px]">{item.skill}</span>
                        <span className={`${item.feildColor}`}>
                          {item.feild}
                        </span>
                      </div>
                    </header>
                    <main className="mt-5">
                      <p className="text-white text-[12px]">{item.desc}</p>
                    </main>
                    <footer className="flex justify-end mt-5">
                      <Button
                        variant="outlined"
                        className="border border-white hover:border-white rounded-xl py-2 px-5 text-[10px] text-white bg-white bg-opacity-20"
                      >
                        Read more
                      </Button>
                    </footer>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
