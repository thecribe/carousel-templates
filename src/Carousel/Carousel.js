import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [reset, setReset] = useState(true);

  const data = [
    {
      title: "James Lebron1",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
    },
    {
      title: "James Lebron2",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
    },
    {
      title: "3Jeedes Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
    },
    {
      title: "4James Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "google.com",
    },
    {
      title: "5ames Lebron",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      btnlink: "",
    },
  ];

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (current < data.length - 1) {
        setCurrent(current + 1);
      } else if (current === data.length - 1) {
        setCurrent(0);
      }
    }, 5000);

    return () => {
      clearTimeout(timer1);
    };
  }, [reset, current]);

  let carouselPost = data.map((post, index) => {
    let carouselClassname = ["slides"];

    if (index === current) {
      carouselClassname.push("current");
    }

    return (
      <li key={index} className={carouselClassname.join(" ")}>
        <div className="slides-container">
          <h1>{post.title}</h1>
          <p>{post.paragraph}</p>
          {post.btnlink.length > 0 && <button>Click for more</button>}
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
        onClick={() => {
          setCurrent(index);
          setReset(!reset);
        }}
      ></div>
    );
  });

  return (
    <>
      <div>
        {/* <ul>{carouselPost}</ul> */}
        <ul className="carousel-container">
          <ul>{carouselPost}</ul>
          <div className="carousel-dots">{carousel_dots}</div>
        </ul>
      </div>
    </>
  );
};

export default Carousel;
