import React from "react";
import { Typewriting } from "react-typewriting";
import basicInfo from "../../FakeDB/basicInfo.json";
import { TypewritingRenderArgs } from "../interfaces/interfaces";
const Header = () => {
  return (
    <>
      <section className="header_container py-16">
        <div className="container mx-auto">
          <div className="grid items-center sm:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 py-5">
              <div className="animate__animated animate__fadeInLeft">
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
                    <a
                      target={"_blank"}
                      href="https://drive.google.com/file/d/1U8sRiGqP4N_KXz9FjcWu6dBRqMzdHoM9/view?usp=sharing"
                    >
                      <img src="/images/button_gear.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className="py-5">
              <div className="header_image_container">
                <img
                  data-aos="fade-left"
                  className="animation_moveX"
                  src={basicInfo.image}
                  alt="profileImage"
                />
                <div className="header_img_card1"></div>
                <div className="header_img_card2"></div>
              </div>
            </div>
          </div>
          <div className="social_icons_container">
            <ul className="footer_social_icons">
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
