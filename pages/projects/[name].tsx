import Head from "next/head";
import React from "react";
import Sticky from "../../components/Custom/Sticky";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Home/Contact/Contact";
import ProjectDetail from "../../components/Home/Projects/ProjectDetail";
import Navbar from "../../components/Navbar/Navbar";
import projects from "../../FakeDB/projects.json";

const ProjectDetails = ({ projectDetails }: any) => {
  return (
    <>
      <Head>
        <title>{projectDetails?.name}</title>
      </Head>
      <main>
        <Sticky
          position="top"
          stuckClasses="sticky"
          unstuckClasses=""
          stuckStyles={{ color: "red" }}
          unstuckStyles={{ color: "blue" }}
        >
          <Navbar />
        </Sticky>
        <ProjectDetail projectDetails={projectDetails} />
        <Contact />
        <footer className="bg_dark_primary">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default ProjectDetails;

export async function getStaticPaths() {
  return {
    paths: projects.portfolios.map((portfolio) => ({
      params: { name: portfolio.name },
    })),
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({ params }: any) {
  const projectDetails = projects.portfolios.find(
    (project: any, key: number) => project.name === params.name
  );
  return {
    props: { projectDetails }, // will be passed to the page component as props
  };
}
