"use client";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const navFooter = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "AboutUS",
    href: "/aboutUs",
  },
  {
    name: "ContactUS",
    href: "/contactUs",
  },
];
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

const Footer = () => {
  const [activeLink, setActiveLink] = useState("/");
  return (
    <section className="flex flex-col bg-gradient-to-r from-[#1e2923] to-black w-full p-5 mt-32">
      <div
        id="ready_toGrow"
        className="flex flex-col justify-center items-center text-white mt-10"
      >
        <div className="text-white font-bold lg:text-[100px] sm:text-[70px] text-[40px]">
          Ready to Grow ?
        </div>
        <p className="text-white text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          cupiditate
        </p>
        <div className="flex items-end mt-5">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            color=""
            className="mt-5 me-3"
            sx={{
              "& input": {
                color: "white",
              },
              "& label": {
                color: "white",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& label.Mui-focused": {
                color: "#5fb2ff",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#5fb2ff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E3E7",
                },
                "&:hover fieldset": {
                  borderColor: "#B2BAC2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6F7E8C",
                },
              },
            }}
          />
          <Button
            size="small"
            className="text-black border-black px-3 py-3 rounded-xl bg-white sm:text-[12px] text-[10px] hover:bg-gray-200 "
          >
            <span>ContactUS</span>
            <ArrowOutwardIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-28 mb-10">
        <div id="lable" className="md:col-span-1 col-span-3 md:text-end">
          <div className="text-white">HighCodeAgency</div>
        </div>
        <div id="navFooter" className="col-span-3 md:inline-block hidden">
          <ul className="flex gap-5 justify-center">
            {navFooter.map((item) => {
              return (
                <li>
                  <Link
                    href={item.href}
                    className={`${
                      activeLink === item.href ? "text-[#00D1FF]" : "text-white"
                    } hover:text-[#00D1FF] text-sm`}
                    // onClick={() => handleLinkClick("/")}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="social" className="md:col-span-1 col-span-2">
          <div className="flex gap-8 md:justify-start justify-end">
            {constactIcons.map((item) => {
              return (
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-gray-500 h-[10px] hover:text-[#00D1FF] cursor-pointer text-[20px]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
