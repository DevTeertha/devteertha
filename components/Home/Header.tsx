import Image from "next/image";
import React from "react";
import { Typewriting } from "react-typewriting";
import profileImage from "../../assets/banner-right-img.png";
import { TypewritingRenderArgs } from "../interfaces/interfaces";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <section className="bg_primaryLightBgColor">
      <Navbar />
      <section className="header_container pt-6">
        <div className="container mx-auto">
          <div className="grid items-center sm:grid-cols-1 lg:grid-cols-2">
            <div className="pt-3">
              <div>
                <h2 className="header_title">Hello, I Am</h2>
                <Typewriting
                  strings={[
                    "Tertha Dev Sarker",
                    "Front End Developer",
                    "Software Engineer",
                  ]}
                >
                  {({
                    currentText,
                    fullCurrentText,
                  }: TypewritingRenderArgs) => (
                    <h1
                      aria-label={fullCurrentText}
                      className="header_name text_primaryColor"
                    >
                      {currentText}
                    </h1>
                  )}
                </Typewriting>
                <p className="header_description">
                  I'm a professional Front End Developer. I like to learn new
                  technology. I'm fast learner.
                </p>
                <div className="flex items-center">
                  <div>
                    <button className="hireme_btn common_btn">Hire Me</button>
                  </div>
                  <div className="ml-6">
                    <a href="/" className="common_underline_btn">
                      See My Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <div className="header_image_container">
                <Image
                  className="animation_moveX"
                  src={profileImage}
                  alt="profileImage"
                />
                <div className="header_img_card1"></div>
                <div className="header_img_card2"></div>
              </div>
            </div>
          </div>
          <div className="social_icons_container">
            <ul>
              <li className="my-5">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="my-5">
                <a href="#" className="fa-brands fa-linkedin-in"></a>
              </li>
              <li className="my-5">
                <a href="#" className="fa-brands fa-github"></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
