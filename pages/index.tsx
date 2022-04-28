import type { NextPage } from "next";
import Sticky from "react-sticky-el";
import Contact from "../components/Home/Contact/Contact";
import Header from "../components/Home/Header";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Service from "../components/Home/Service/Service";
import Skills from "../components/Home/Skills/Skills";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg_primaryLightBgColor">
        <Sticky topOffset={80}>
          <Navbar />
        </Sticky>
        <header>
          <Header />
        </header>
        <section className="bg_white">
          <Service />
        </section>
        <section>
          <Skills />
        </section>
        <section className="bg_primaryColor">
          <Portfolio />
        </section>
        <section className="bg_white">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
