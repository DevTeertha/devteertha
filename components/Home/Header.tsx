import Image from "next/image";
import React from "react";
import { Typewriting } from "react-typewriting";
import profileImage from "../../assets/banner-right-img.png";
import basicInfo from "../../FakeDB/basicInfo.json";
import { TypewritingRenderArgs } from "../interfaces/interfaces";
const Header = () => {
  return (
    <>
      <section className="header_container pt-6">
        <div className="container mx-auto">
          <div className="grid items-center sm:grid-cols-1 lg:grid-cols-2">
            <div className="pt-3">
              <div>
                <h2 className="header_title">{basicInfo?.intro}</h2>
                <Typewriting strings={basicInfo?.title}>
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
                <p className="header_description">{basicInfo?.description}</p>
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
              {basicInfo?.socialMedias.map((social, key) => {
                return (
                  <li key={key} className="my-5">
                    <a target="_blank" href={social.url}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
