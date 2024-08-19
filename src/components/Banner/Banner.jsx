import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import bannerImgOne from "../../assets/images/banner/bn1.webp";
import bannerImgTwo from "../../assets/images/banner/bn2.webp";
import bannerImgThree from "../../assets/images/banner/bn3.webp";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100vh", // Full viewport height
      overflow: "hidden", // Hide overflow
      display: "flex",
      alignItems: "center", // Center vertically
      justifyContent: "center", // Center horizontally
      backgroundColor: "#F5F5F3", // Gray background color
    }}
  >
    <img
      src={imgSrc}
      alt={text}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover", // Cover the entire container
        objectPosition: "center", // Center the image
      }}
    />
    <div
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "450px",
        marginLeft: "20px", // Adjust margin as needed
        color: "#fff", // Text color for better contrast
        padding: "20px",
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem",
          color: "#fff",
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem",
          color: "#ddd",
        }}
      >
        {Subtext}
      </p>
      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Changing The Ideal Of Beauty",
      Subtext:
        "We focus on furnishing ladies with items that support their confidence and assist them with feeling wonderful and agreeable in skin.",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Help You Have A Beautiful Life",
      Subtext:
        "We focus on equipping women with items that help them achieve great skin",
      buttonLink: "/About",
      buttonText: "About-us",
    },
    {
      imgSrc: bannerImgThree,
      text: "GET UPDATE",
      Subtext:
        "Subscribe our newsletter and get discount 30% off ",
      buttonLink: "/Contact",
      buttonText: "Contact-us",
    },

    // Add more slides as needed
  ];

  return (
    <div className="w-full bg-white relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
