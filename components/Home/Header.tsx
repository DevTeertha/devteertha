import Image from "next/image";
import React from "react";
import profileImage from "../../assets/banner-right-img.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <section className="h-screen bg_primaryLightBgColor">
      <Navbar />
      <section className="header_container py-5">
        <div className="container mx-auto">
          <div className="grid items-center sm:grid-cols-1 lg:grid-cols-2">
            <div className="py-3">
              <div>
                <h2 className="header_title">Hello, I Am</h2>
                <h1 className="header_name text_primaryColor">Dev Teertha</h1>
                <div className="flex items-center">
                  <div>
                    <button className="hireme_btn common_btn">Hire Me</button>
                  </div>
                  <div className="ml-5">
                    <a href="/" className="common_underline_btn">
                      See My Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="animation_moveXY">
                <Image src={profileImage} alt="profileImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
