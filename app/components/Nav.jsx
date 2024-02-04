"use client";
import React, { useState, useEffect, useDeferredValue } from "react";
import { useTheme } from "next-themes";
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
  Divider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { social } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log(resolvedTheme);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-10">
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
    <div className="bg-transparent p-2">
      <div
        id="navExpand"
        className="xl:grid grid-cols-5 text-blue-gray-900 hidden"
      >
        <div className="xl:col-span-1 hidden xl:flex xl:justify-center p-2">
          <Link
            href="/"
            className="text-center xl:ms-10 xl:mr-4 cursor-pointer py-1.5 text-white dark:text-red-500"
          >
            HighCode
          </Link>
        </div>
        <div className="xl:col-span-3 flex justify-center  p-2">
          <div className="hidden xl:block mt-2">{navList}</div>
        </div>
        <div className="">
          <div className="flex justify-center gap-x-3 p-2">
            <Button
              variant="outlined"
              size="middle"
              className="hidden xl:inline-block text-white border border-gray-500 hover:border-cyan-300 px-4 rounded-lg"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {/* <span className="text-[12px]">Log In</span> */}
              {theme === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </Button>
            <Button
              id="i18"
              size="small"
              className="hidden xl:inline-block bg-gray-800 text-white rounded-lg px-4 hover:text-cyan-300"
            >
              <GTranslateIcon />
            </Button>
            {/* the drwer */}
          </div>
        </div>
      </div>
      <div className="text-blue-gray-900 xl:hidden">
        <div className="bg-transparent xl:hidden flex justify-between">
          <Link
            href="/"
            className="inline-block xl:hidden text-center ms-10 mr-4 cursor-pointer py-1.5 text-white dark:text-red-500"
          >
            HighCode
          </Link>
          <IconButton
            className="text-white"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
        </div>
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
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                >
                  {theme === "dark" ? (
                    <LightModeIcon fontSize="small" />
                  ) : (
                    <DarkModeIcon fontSize="small" />
                  )}
                </Button>
                <Button
                  variant="text"
                  size="small"
                  className=" text-white border border-gray-500 hover:text-cyan-300 px-4 rounded-lg"
                >
                  <GTranslateIcon />
                </Button>
              </div>
            </div>
            <div className="border w-100 mt-4"></div>
          </header>
          <List className="w-[300px] flex flex-col text-white">
            <ListItem
              onClick={toggleDrawer}
              className="hover:bg-cyan-600 cursor-pointer"
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              onClick={toggleDrawer}
              className="hover:bg-cyan-600 cursor-pointer"
            >
              <ListItemText primary="About" />
            </ListItem>

            <ListItem
              onClick={toggleDrawer}
              className="hover:bg-cyan-600 cursor-pointer"
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Divider className="bg-white w-[90%] mx-auto" />
          <div
            id="social"
            className="flex justify-center gap-10 mt-5 text-[20px]"
          >
            {social.map((item, idx) => {
              return (
                <div
                  className="text-white hover:text-cyan-400 cursor-pointer
                "
                >
                  <FontAwesomeIcon key={idx} icon={item.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
