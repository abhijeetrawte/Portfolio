import React from "react";
import "./About.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoMdSchool } from "react-icons/io";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years</small>
                <small>2 Companies</small>
              </article>
            </a> */}
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            {/* <a href="#services">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>3 Projects</small>
              </article>
            </a> */}
          </div>
          <p>
            Energetic and forward-thinking digital marketer with one year of hands-on experience in executing successful online strategies.
            Proficient in leveraging a variety of digital tools and tactics to enhance brand visibility, engage target audiences, and achieve tangible results. 
          </p>

          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
          <h2 className="subheading">Education</h2>
          <div className="about__cards">
            <article className="about__card mrt">
              <IoMdSchool className="about__icon" />
              <h5>MBA in Marketing </h5>
              <h6>2018-2020</h6>
              <small>The Institute of Chartered Financial Analyst of India </small>
            </article>
            <article className="about__card mrt">
              <IoMdSchool className="about__icon" />
              <h5>Hotel Management</h5>
              <h6>2014-2018</h6>
              <small>Shri Bala Saheb Institute of Hotel Management and Catering Technology</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
