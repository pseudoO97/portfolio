import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/nodejs.jpg";
import IMG2 from "../../assets/nestjs.jpg";
import IMG3 from "../../assets/reactjs.jpg";
import IMG4 from "../../assets/flutter.jpg";
import IMG5 from "../../assets/portfolio5.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a project for Discord Boot Devloped with Nodejs . . .</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pseudoO97/ChocoBot"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is Api project For Book Devloped with Nestjs . . .</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pseudoO97/bookapi"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>
            Authantification with page sign in and sign up with email
            Verfication and Reset password . . .
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pseudoO97/WebApp"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>
            This project is an application usign fullet technologie (Dart) . . .{" "}
          </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pseudoO97/flutterApp"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;