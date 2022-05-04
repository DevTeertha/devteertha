import Link from "next/link";
import React from "react";
import basicInfo from "../../FakeDB/basicInfo.json";
const Footer = () => {
  return (
    <div className="bg_primaryLightBgColor">
      <div className="footer_container pt-16">
        <div className="md:container mx-auto">
          <div className="text-center">
            <h5 className="my_logo text-xl">
              <Link href="/">
                <a>
                  <span>Dev</span>
                  <span>Teertha</span>
                </a>
              </Link>
            </h5>
            <div>
              <ul className="flex flex-wrap justify-center items-center py-9 text-gray-300">
                <li className="px-5 md:border-r-2 md:border-gray-700">
                  <a className="common_underline_navLink" href="/">
                    Home
                  </a>
                </li>
                <li className="px-5">
                  <a className="common_underline_navLink" href="/">
                    About
                  </a>
                </li>
                <li className="px-5 md:border-x-2 md:border-gray-700">
                  <a className="common_underline_navLink" href="/">
                    Services
                  </a>
                </li>
                <li className="px-5">
                  <a className="common_underline_navLink" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="px-5 md:border-l-2 md:border-gray-700">
                  <a
                    className="common_underline_navLink"
                    href="/#contact_section"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div>
                <ul className="footer_social_icons flex justify-center items-center pb-9">
                  {basicInfo?.socialMedias.map((social, key) => {
                    return (
                      <li key={key} className="mx-2 my-5">
                        <a target="_blank" href={social.url}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <hr style={{ borderTop: "1px solid #9ca3af" }} />
            <p className="text-sm text-gray-700 py-3">
              &copy; Copyright {new Date().getFullYear()} DevTertha | All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
