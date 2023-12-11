"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <li>
        <Link
          href="/"
          className={`flex items-center ${
            activeLink === "/" ? "text-[#00D1FF]" : "text-white"
          } hover:text-[#00D1FF] text-sm`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#services" ? "text-[#00D1FF]" : "text-white"
          } hover:text-[#00D1FF] text-sm`}
          onClick={() => handleLinkClick("#services")}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#AboutUS" ? "text-[#00D1FF]" : "text-white"
          } hover:text-[#00D1FF] text-sm`}
          onClick={() => handleLinkClick("#AboutUS")}
        >
          AboutUS
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`flex items-center ${
            activeLink === "#ContactUS" ? "text-[#00D1FF]" : "text-white"
          } hover:text-[#00D1FF] text-sm`}
          onClick={() => handleLinkClick("#ContactUS")}
        >
          ContactUS
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="bg-transparent border-none p-2">
      <div className="grid grid-cols-5 text-blue-gray-900">
        <div className="col-span-1 flex justify-center  p-2">
          <Link
            href="/"
            className="text-center ms-10 mr-4 cursor-pointer py-1.5 text-white"
          >
            HighCode
          </Link>
        </div>
        <div className="col-span-3 flex justify-center  p-2">
          <div className="hidden lg:block mt-2">{navList}</div>
        </div>
        <div className="">
          <div className="col-span-1 flex justify-center gap-x-1 p-2">
            <Button
              variant="text"
              size="md"
              className="hidden lg:inline-block text-white"
            >
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="md"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </div>
  );
};

export default Nav;
