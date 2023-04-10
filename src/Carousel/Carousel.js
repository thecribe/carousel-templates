import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [reset, setReset] = useState(true);

  const data = [
    {
      title: "James Lebron1",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
      img: "https://plus.unsplash.com/premium_photo-1663011441143-89f8c7e5e790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "James Lebron2",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "3Jeedes Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
      img: "https://plus.unsplash.com/premium_photo-1663011441143-89f8c7e5e790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "4James Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "5ames Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "",
      img: "https://plus.unsplash.com/premium_photo-1663011441143-89f8c7e5e790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (current < data.length - 1) {
        setCurrent(current + 1);
      } else if (current === data.length - 1) {
        setCurrent(0);
      }
    }, 9000);

    return () => {
      clearTimeout(timer1);
    };
  }, [reset, current, data.length]);

  const slideSwitchHandler = (index) => {
    setCurrent(index);
    setReset(!reset);
  };

  let carouselPost = data.map((post, index) => {
    let carouselClassname = ["slides"];

    if (index === current) {
      carouselClassname.push("current");
    }

    return (
      <li key={index} className={carouselClassname.join(" ")}>
        <div className="slides_Bg">
          <img src={post.img} alt="Slides background" width="100%" />
        </div>
        <div className="slides-container">
          <div className="slides-textBox">
            <h1>{post.title}</h1>
            <p>{post.paragraph}</p>
            {post.btnlink.length > 0 && (
              <p>
                <NavLink className="btn">Click for more</NavLink>
              </p>
            )}
          </div>
        </div>
      </li>
    );
  });

  let carousel_dots = data.map((post, index) => {
    let dotsClassname = ["dots"];
    if (index === current) {
      dotsClassname.push("dots_current");
    }
    return (
      <div
        key={index}
        className={dotsClassname.join(" ")}
        onClick={() => slideSwitchHandler(index)}
      ></div>
    );
  });

  let carousel_thumbnail = data.map((post, index) => {
    let thumbnail = ["thumbnail"];
    if (index === current) {
      thumbnail.push("thumbnail_current");
    }
    return (
      <div
        className={thumbnail.join(" ")}
        onClick={() => slideSwitchHandler(index)}
      >
        <img src={post.img} alt="Slides background" width="100%" />
      </div>
    );
  });

  return (
    <>
      <div>
        <ul className="carousel-container">
          <ul>{carouselPost}</ul>
          <div className="carousel-dots">{carousel_dots}</div>
          <div className="carousel-thumbnail">{carousel_thumbnail}</div>
        </ul>
      </div>
    </>
  );
};

export default Carousel;
