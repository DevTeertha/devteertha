import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const initialActiveState = {
    home: false,
    services: false,
    projects: false,
    about: false,
  };
  const [navbarActive, setNavbarActive] = useState(initialActiveState);
  return (
    <section className="navigation_container py-6">
      <div className="sm:container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="my_logo">
              <Link href="/">
                <a>
                  <span>Dev</span>
                  <span>Teertha</span>
                </a>
              </Link>
            </h5>
          </div>
          <div>
            <nav className="nav_menu">
              <div
                id="accordion-collapse"
                data-accordion="collapse"
                className="nav_menu_icon"
              >
                <h2 id="mobile-nav-collapse">
                  <button
                    type="button"
                    className="flex justify-between items-center p-5 w-full text-left"
                    data-accordion-target="#mobile-nav-collapse-body"
                    aria-expanded="true"
                    aria-controls="mobile-nav-collapse-body"
                  >
                    <i className="fa-solid fa-bars text-xl"></i>
                  </button>
                </h2>
              </div>
              <div className="w-full md:block md:w-auto">
                <ul className="nav_menu_ul flex items-center">
                  <li
                    onClick={() =>
                      setNavbarActive({ ...initialActiveState, home: true })
                    }
                    className={`mx-4 ${navbarActive.home && "nav_active"}`}
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={() =>
                      setNavbarActive({ ...initialActiveState, services: true })
                    }
                    className={`mx-4 ${navbarActive.services && "nav_active"}`}
                  >
                    <Link href="/#service_section">Services</Link>
                  </li>
                  <li
                    onClick={() =>
                      setNavbarActive({ ...initialActiveState, projects: true })
                    }
                    className={`mx-4 ${navbarActive.projects && "nav_active"}`}
                  >
                    <Link href="/#projects_section">Projects</Link>
                  </li>
                  <li
                    onClick={() =>
                      setNavbarActive({ ...initialActiveState, about: true })
                    }
                    className={`mx-4 ${navbarActive.about && "nav_active"}`}
                  >
                    <Link href="/">About</Link>
                  </li>
                  <li className="ml-10">
                    <Link href="#contact_section">
                      <a className="common_btn">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div
          id="mobile-nav-collapse-body"
          className="hidden"
          aria-labelledby="mobile-nav-collapse"
        >
          <ul className="nav_menu_ul_mobile">
            <li
              onClick={() =>
                setNavbarActive({ ...initialActiveState, home: true })
              }
              className={`${navbarActive.home && "nav_active"}`}
            >
              <Link href="/">
                <a className="text_dark">Home</a>
              </Link>
            </li>
            <li
              onClick={() =>
                setNavbarActive({
                  ...initialActiveState,
                  services: true,
                })
              }
              className={`${navbarActive.services && "nav_active"}`}
            >
              <Link href="/#service_section">
                <a className="text_dark">Services</a>
              </Link>
            </li>
            <li
              onClick={() =>
                setNavbarActive({
                  ...initialActiveState,
                  projects: true,
                })
              }
              className={`${navbarActive.projects && "nav_active"}`}
            >
              <Link href="/#projects_section">
                <a className="text_dark">Projects</a>
              </Link>
            </li>
            <li
              onClick={() =>
                setNavbarActive({
                  ...initialActiveState,
                  about: true,
                })
              }
              className={`${navbarActive.about && "nav_active"}`}
            >
              <Link href="/">
                <a className="text_dark">About</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="#contact_section">
                <a className="common_btn">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
