import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        {/* <div className="experience__frontend"> */}
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div className="experince__details">
                <h4>Search Engine Optimization</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div className="experince__details">
                <h4>Social Media Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div className="experince__details">
                <h4>Google Ads</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div className="experince__details">
                <h4>Meta ads</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Experience;
