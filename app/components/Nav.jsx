"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
        <div className="lg:col-span-1 flex justify-center  p-2">
          <Link
            href="/"
            className="text-center ms-10 mr-4 cursor-pointer py-1.5 text-white"
          >
            HighCode
          </Link>
        </div>
        <div className="lg:col-span-3 flex justify-center  p-2">
          <div className="hidden lg:block mt-2">{navList}</div>
        </div>
        <div className="">
          <div className="flex justify-center gap-x-3 p-2">
            <Button
              variant="outlined"
              size="middle"
              className="hidden lg:inline-block text-white border border-gray-500 hover:border-cyan-300 px-4 rounded-lg"
            >
              <span className="text-[12px]">Log In</span>
            </Button>
            <Button
              size="small"
              className="hidden lg:inline-block bg-gray-800 text-white rounded-lg px-4 hover:text-cyan-300"
            >
              <span className="text-[12px]">Sign in</span>
            </Button>
            {/* the drwer */}
            <div className="col-span-5 lg:col-span-0">
              <div className="bg-transparent lg:hidden flex justify-between w-[100vw]">
                <Link
                  href="/"
                  className="text-center ms-10 mr-4 cursor-pointer py-1.5 text-white"
                >
                  HighCode
                </Link>
                <IconButton
                  className="text-white me-10"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <Menu />
                </IconButton>
              </div>

              <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                <div className="bg-gray-900 h-[100vh]">
                  <header className="text-white p-4 mt-3">
                    <div className="flex justify-between">
                      <h3>Menu</h3>
                      <div className="flex gap-1">
                        <Button
                          variant="text"
                          size="middle"
                          className=" text-white border border-gray-500 hover:text-cyan-300 px-4 rounded-lg"
                        >
                          <span className="text-[12px]">Log In</span>
                        </Button>
                        <Button
                          variant="text"
                          size="small"
                          className=" text-white border border-gray-500 hover:text-cyan-300 px-4 rounded-lg"
                        >
                          <span className="text-[12px]">Sign in</span>
                        </Button>
                      </div>
                    </div>
                    <div className="border w-100 mt-4"></div>
                  </header>
                  <List className="w-[300px] flex flex-col text-white">
                    <ListItem
                      button
                      onClick={toggleDrawer}
                      className="hover:bg-cyan-600"
                    >
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={toggleDrawer}
                      className="hover:bg-cyan-600"
                    >
                      <ListItemText primary="About" />
                    </ListItem>

                    <ListItem
                      button
                      onClick={toggleDrawer}
                      className="hover:bg-cyan-600"
                    >
                      <ListItemText primary="Contact" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
