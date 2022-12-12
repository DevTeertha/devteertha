import { Carousel } from "react-responsive-carousel";
const ProjectDetail = ({ projectDetails }: any) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-9">
          <div>
            <div style={{ position: "sticky", top: "113px" }}>
              <Carousel>
                {projectDetails?.images?.map((image: string, key: number) => {
                  return (
                    <div key={key}>
                      <img className="w-full" src={image} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-3xl font-semibold">
              {projectDetails?.name}{" "}
              <a
                className="common_btn_sm"
                target={"_blank"}
                href={projectDetails?.links?.live}
              >
                Live
              </a>
            </h1>
            <p className="text-gray-600 my-3">{projectDetails?.description}</p>
            <div className="py-5">
              {projectDetails?.links?.project?.client && (
                <a
                  className="common_underline_btn_sm"
                  href={projectDetails.links.project.client}
                >
                  Client
                </a>
              )}
              {projectDetails?.links?.project?.server && (
                <a
                  className="common_underline_btn_sm mx-5"
                  href={projectDetails.links.project.server}
                >
                  Server
                </a>
              )}
            </div>
            <div className="py-5">
              <h3 className="text-3xl font-semibold">Features:</h3>
              <ul className="mt-2">
                {projectDetails?.features?.map((feature: any, key: number) => {
                  return (
                    <li key={key}>
                      {key + 1}: {feature?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-5">
              <h3 className="text-3xl font-semibold">Technologies: </h3>
              <div className="mt-1">
                <h6 className="py-1 text-xl">
                  Front End:{" "}
                  {projectDetails?.technology?.frontend.map(
                    (tech: any, key: number) => {
                      return (
                        <span className="technology_box" key={key}>
                          {tech}
                        </span>
                      );
                    }
                  )}
                </h6>
                <h6 className="py-1 text-xl">
                  Back End:{" "}
                  {projectDetails?.technology?.backend?.map(
                    (tech: any, key: number) => {
                      return (
                        <span className="technology_box" key={key}>
                          {tech}
                        </span>
                      );
                    }
                  )}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
