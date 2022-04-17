import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="navigation_container py-6">
      <div className="container mx-auto">
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
                <li className="mx-4 nav_active">
                  <Link href="/">Home</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Services</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">About</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Portfolio</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Testimonials</Link>
                </li>
                <li className="mx-4">
                  <Link href="/">Blog</Link>
                </li>
                <li className="ml-10">
                  <Link href="/">
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
