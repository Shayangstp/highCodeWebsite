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

//663e79 63adc5 638ac5 4bbdb6

const Skills = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <section className="bg-gray-900 bg-opacity-30 h-[100vh] mt-32">
      <div className=" w-[99%] h-[100%] rounded-md bg-gradient-to-r from-white to-gray-900 p-0.5 ms-2">
        <main className="grid grid-cols-8 bg-black rounded-md h-full">
          <div id="border">
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
          <div className="col-span-7 flex justify-around items-center">
            <div id="first" className="flex flex-col gap-10">
              <div
                id="techlead"
                className="max-w-[400px] p-5 bg-[#663e79] bg-opacity-80 rounded-3xl ms-36"
              >
                <header>
                  <div className="text-white">
                    <span className="text-[32px] font-bold">03</span>
                    <span className="text-[32px]">.UI/UX</span>
                    <span className="text-red-500">.Designer</span>
                  </div>
                </header>
                <main className="mt-5">
                  <p className="text-white text-[12px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste magnam asperiores nisi deleniti repellat vero omnis
                    natus fugiat saepe incidunt? Tempora delectus autem
                    mollitia, similique reiciendis laboriosam voluptas culpa
                    adipisci esse magni maxime
                  </p>
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
              <div
                id="frontEnd"
                className="max-w-[460px] p-5 bg-[#63adc5] bg-opacity-30 rounded-3xl"
              >
                <header>
                  <div className="text-white">
                    <span className="text-[32px] font-bold">02</span>
                    <span className="text-[32px]">.FrontEnd</span>
                    <span className="text-yellow-500">.Developer</span>
                  </div>
                </header>
                <main className="mt-5">
                  <p className="text-white text-[12px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste magnam asperiores nisi deleniti repellat vero omnis
                    natus fugiat saepe incidunt? Tempora delectus autem
                    mollitia, similique reiciendis laboriosam voluptas culpa
                    adipisci esse magni maxime
                  </p>
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
            </div>
            <div id="second" className="flex flex-col gap-10">
              <div
                id="backend"
                className="max-w-[460px] p-5 bg-[#638ac5] bg-opacity-30 rounded-3xl me-36"
              >
                <header>
                  <div className="text-white">
                    <span className="text-[32px] font-bold">01</span>
                    <span className="text-[32px]">.BackEnd</span>
                    <span className="text-cyan-500">.Developer</span>
                  </div>
                </header>
                <main className="mt-5">
                  <p className="text-white text-[12px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste magnam asperiores nisi deleniti repellat vero omnis
                    natus fugiat saepe incidunt? Tempora delectus autem
                    mollitia, similique reiciendis laboriosam voluptas culpa
                    adipisci esse magni maxime
                  </p>
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
              <div
                id="uiUx"
                className="max-w-[400px] p-5 bg-[#4bbdb6] bg-opacity-30 rounded-3xl ms-36"
              >
                <header>
                  <div className="text-white">
                    <span className="text-[32px] font-bold">03</span>
                    <span className="text-[32px]">.UI/UX</span>
                    <span className="text-blue-300">.Designer</span>
                  </div>
                </header>
                <main className="mt-5">
                  <p className="text-white text-[12px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iste magnam asperiores nisi deleniti repellat vero omnis
                    natus fugiat saepe incidunt? Tempora delectus autem
                    mollitia, similique reiciendis laboriosam voluptas culpa
                    adipisci esse magni maxime
                  </p>
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
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Skills;
