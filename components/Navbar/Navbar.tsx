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
              <div className="nav_menu_icon">
                <i className="fa-solid fa-bars text-xl"></i>
              </div>
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
                {/* <li className="mx-4">
                  <Link href="/">Testimonials</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Blog</Link>
                </li> */}
                <li className="ml-10">
                  <Link href="#contact_section">
                    <a className="common_btn">Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
