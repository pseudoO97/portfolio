import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Photoshop + Figma.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design print and digital marketing imagery.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Model creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Professional logo design.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Dynamic website creation.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Static website creation</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>App creation(Web and Mobile).</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Website creation with CMS (Wordpress or PrestaShop)</p>
            </li>
          </ul>
        </article>
        {/*End of Web DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
