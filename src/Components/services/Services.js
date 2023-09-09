import React from "react";
import "./Services.css";
// import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>My Work</h5>
      <h2>Experience</h2>
      <div className="container services_container">
        {/* 1 */}
        <article className="service">
          <div className="service_head">
            <h3>Innovation4U</h3>
            <h6>2022-2023</h6>
            <h5 color="text-light">Digital Marketing Specialist</h5>
          </div>
          <ul className="service_list">
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Develop and implement digital strategies aligned with business objectives.</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Manage and optimize paid advertising campaigns on various platforms. </p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Creating contents for blogs, social media and email campaigns.</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Monitor analytics and leverage SEO techniques to improve website visibility.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>ICICI BANK</h3>
            <h6>2021-2022</h6>
            <h5 color="text-light">Wealth Relationship Manager</h5>
          </div>
          <ul className="service_list">
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Build client relationships and understand financial goals.</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Provide personalized financial advice and tailored strategies.</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Identify cross-selling opportunities for additional services.</p>
            </li>
            <li>
              {/* <BiCheck className="service_list-icon" /> */}
              <p>Conduct portfolio reviews and risk assessments.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
}

export default Services;
