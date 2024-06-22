/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./hoverScroll.css";
import img1 from "../../Assets/projectSC/University-web.png";
import img2 from "../../Assets/projectSC/bohubrihi-edu.png";
import img3 from "../../Assets/projectSC/doctors-portal.png";
import img4 from "../../Assets/projectSC/event-manage.png";

const Projects = () => {
  return (
    <div className="container mx-auto my-10 font-serif">
      <h3 className="text-3xl border-l-4 border-green-600 pl-3 uppercase">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <a
          href="https://bubt-edu.netlify.app/"
          target="_blank"
          className="container"
        >
          <div className="row">
            <div className="col-md-4 col-md-offset-4 content">
              <div className="screen">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://mizanor21.github.io/bohubrihi_edu/"
          target="_blank"
          className="container"
        >
          <div className="row">
            <div className="col-md-4 col-md-offset-4 content">
              <div className="screen">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://doctors-portal-8ce56.web.app/"
          target="_blank"
          className="container"
        >
          <div className="row">
            <div className="col-md-4 col-md-offset-4 content">
              <div className="screen">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://event-manage2.netlify.app/"
          target="_blank"
          className="container"
        >
          <div className="row">
            <div className="col-md-4 col-md-offset-4 content">
              <div className="screen">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
