import type { NextPage } from "next";
import Head from "next/head";
import Sticky from "../components/Custom/Sticky";
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
        <div className="bg_primaryLightBgColor">
          <Sticky
            position="top"
            stuckClasses="sticky"
            unstuckClasses=""
            stuckStyles={{ color: "red" }}
            unstuckStyles={{ color: "blue" }}
          >
            <Navbar />
          </Sticky>
          <header>
            <Header />
          </header>
          <section id="service_section" className="bg_white">
            <Service />
          </section>
          <section>
            <Skills />
          </section>
          <section id="projects_section" className="bg_primaryColor">
            <Portfolio />
          </section>
          <section id="contact_section" className="bg_white">
            <Contact />
          </section>
          <footer className="bg_dark_primary">
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
