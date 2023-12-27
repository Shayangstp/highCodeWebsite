"use client";
import React, { useState, useEffect, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCircleDot,
  faCircle,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import "react-horizontal-scrolling-menu/dist/styles.css";

const blogData = [
  {
    id: 1,
    title: "Top 5 things web sites must have !! 1",
    titleColor: "87A548",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 2,
    title: "How buy Domain ?? 2",
    titleColor: "3B464B",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 3,
    title: "How start to be programmer the mindset 3",
    titleColor: "3B464B",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 4,
    title: "How start to be programmer the mindset 4",
    titleColor: "3B464B",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 5,
    title: "How start to be programmer the mindset 5",
    titleColor: "3B464B",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
  {
    id: 6,
    title: "How start to be programmer the mindset 6",
    titleColor: "3B464B",
    content:
      "design efficient solutions, and implement robust software systems. Effective communication and teamwork are key strengths of the team, as they frequently collaborate, share are key",
  },
];

const BlogSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [items, setItems] = useState(blogData);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const RightArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
      <Button
        variant="outlined"
        size="small"
        className=" border-cyan-500 text-gray-300 hover:text-white hover:border-cyan-300 rounded-xl"
        // onClick={goPrevious}
        onClick={() => scrollPrev()}
        // disabled={isFirstItemVisible}
      >
        <span className="text-[13px]">
          <ArrowCircleRightOutlinedIcon className="text-[50px] " />
        </span>
      </Button>
    );
  };

  const LeftArrow = () => {
    const { scrollNext, isFirstItemVisible } = useContext(VisibilityContext);

    return (
      <Button
        variant="outlined"
        size="small"
        className=" border-cyan-500 text-gray-300 hover:text-white  hover:border-cyan-300 rounded-xl"
        // onClick={goNext}
        onClick={() => scrollNext()}
        // disabled={isFirstItemVisible}
      >
        <span className="text-[13px]">
          <ArrowCircleLeftOutlinedIcon className="text-[50px]" />
        </span>
      </Button>
    );
  };

  function CardRender({ onClick, selected, item, itemId }) {
    const visibility = useContext(VisibilityContext);

    return (
      <div
        onClick={() => onClick(visibility)}
        tabIndex={0}
        style={{ height: "300px", width: "30%" }}
        className={`border-2 rounded-xl bg-black me-2 ms-2`}
      >
        <div className={`p-4 border bg-[#a5974844] h-[100px] slider-item`}>
          <div className="font-bold text-[18px] text-white">{item.title}</div>
        </div>
        <CardContent>
          <p className="text-white">{item.title}</p>
        </CardContent>
        <CardActions className="ms-2 mb-2">
          <Button
            size="small"
            variant="outlined"
            className="text-cyan-500 hover:text-cyan-300 text-[12px]"
          >
            Share
          </Button>
          <Button
            size="small"
            variant="outlined"
            className="text-cyan-500 hover:text-cyan-300 text-[12px]"
          >
            Learn More
          </Button>
        </CardActions>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
    );
  }

  const isItemSelected = (id) => !!selected.find((el) => el === id);
  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  // const goNext = () => {
  //   setStartIndex((prevIndex) =>
  //     prevIndex === 0 ? blogData.length - 1 : prevIndex - 1
  //   );
  // };

  // const goPrevious = () => {
  //   setStartIndex((prevIndex) => (prevIndex + 1) % blogData.length);
  // };

  const visibleBlogs = [
    blogData[startIndex],
    blogData[(startIndex + 1) % blogData.length],
    blogData[(startIndex + 2) % blogData.length],
  ];

  // const visibleBlogs = blogData.slice(startIndex, startIndex + 3);

  return (
    <section className=" bg-black bg-opacity-20   w-full p-5 mt-16">
      <main className="p-10 w-full h-[100%]  rounded-md">
        <div className="slider-container w-full">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map((item, index) => {
              return (
                <CardRender
                  itemId={item.id}
                  // className={`border-2 rounded-xl max-h-[500px] bg-black me-2 ms-2`}
                  onClick={handleClick(item.id)}
                  selected={isItemSelected(item.id)}
                  item={item}
                  key={item.id}
                >
                  {/* <div
                    className={`p-4 border bg-[#a5974844] h-[100px] slider-item ${
                      index === 1 ? "active" : ""
                    }`}
                  >
                    <div className="font-bold text-[18px] text-white">
                      {item.title}
                    </div>
                  </div>
                  <CardContent>
                    <p className="text-white">{item.content}</p>
                  </CardContent>
                  <CardActions className="ms-2 mb-2">
                    <Button
                      size="small"
                      variant="outlined"
                      className="text-cyan-500 hover:text-cyan-300 text-[12px]"
                    >
                      Share
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      className="text-cyan-500 hover:text-cyan-300 text-[12px]"
                    >
                      Learn More
                    </Button>
                  </CardActions> */}
                </CardRender>
              );
            })}
          </ScrollMenu>
        </div>
      </main>
    </section>
  );
};

export default BlogSection;
