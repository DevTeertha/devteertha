import type { NextPage } from "next";
import Header from "../components/Home/Header";
import Service from "../components/Home/Service/Service";
import Skills from "../components/Home/Skills/Skills";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <header className="bg_primaryLightBgColor">
        <Navbar />
        <Header />
      </header>
      <section>
        <Service />
      </section>
      <section className="bg_primaryLightBgColor">
        <Skills />
      </section>
    </>
  );
};

export default Home;
