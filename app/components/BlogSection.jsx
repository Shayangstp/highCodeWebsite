"use client";
import React, { useState, useEffect, useRef } from "react";
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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  const swiperRef = useRef(null);
  const swiper = useSwiper();

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

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
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
    <section className=" bg-black bg-opacity-20  p-5 mt-32">
      <main className="p-10 h-[100%]  rounded-md">
        <h1 className="text-white font-extrabold text-[90px] mb-16">
          OUR BLOG :
        </h1>
        <div className="slider-container w-full">
          <div className="flex">
            <Button
              variant="outlined"
              size="small"
              className=" border-cyan-500 text-gray-300 hover:text-white hover:border-cyan-300 rounded-xl me-2"
              // onClick={() => {
              //   swiper.slideNext();
              // }}
              onClick={slidePrev}
            >
              <span className="text-[13px]">
                <ArrowCircleLeftOutlinedIcon className="text-[50px] " />
              </span>
            </Button>
            <Swiper
              spaceBetween={40}
              slidesPerView="auto"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              // navigation={true}
              className="swiper-container"
              modules={[Pagination, Navigation]}
              ref={swiperRef}
              // breakpoints={{
              //   1920: {
              //     slidesPerView: 3,
              //   },
              //   1900: {
              //     slidesPerView: 1,
              //   },
              // }}
            >
              {items.map((item, index) => {
                return (
                  // <div>
                  <SwiperSlide
                    key={index}
                    virtualIndex={index}
                    className="m-0 p-0 max-w-[25%]"
                  >
                    <div className="border rounded-xl max-w-[100p%]">
                      <div
                        className={`p-4 border-b bg-[#a5974844] h-[100px] slider-item ${
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
                          className="text-cyan-500 hover:text-cyan-300 text-[12px] ms-2"
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </div>
                  </SwiperSlide>
                  // </div>
                );
              })}
            </Swiper>
            <Button
              variant="outlined"
              size="small"
              className=" border-cyan-500 text-gray-300 hover:text-white  hover:border-cyan-300 rounded-xl"
              onClick={slideNext}
            >
              <span className="text-[13px]">
                <ArrowCircleRightOutlinedIcon className="text-[50px]" />
              </span>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BlogSection;
