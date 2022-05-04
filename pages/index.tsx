import type { NextPage } from "next";
import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Home/Contact/Contact";
import Header from "../components/Home/Header";
import Portfolio from "../components/Home/Projects/Projects";
import Service from "../components/Home/Service/Service";
import Skills from "../components/Home/Skills/Skills";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev Teertha</title>
      </Head>
      <main>
        <ScrollToTop smooth color="#fff">
          <i className="fa-solid fa-arrow-up"></i>
        </ScrollToTop>
        {/* <button className="scroll_top_btn">
          <i className="fa-solid fa-arrow-up"></i>
        </button> */}
        <div className="bg_primaryLightBgColor">
          {/* <Sticky
            position="top"
            stuckClasses="sticky"
            unstuckClasses="unsticky"
          >
          </Sticky> */}
          <Navbar />
          <header>
            <Header />
          </header>
          <section id="service_section" className="bg_white">
            <Service />
          </section>
          <section className="bg_white">
            <Skills />
          </section>
          <section id="projects_section" className="bg_primaryLightBgColor">
            <Portfolio />
          </section>
          <section id="contact_section" className="bg_white">
            <Contact />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
