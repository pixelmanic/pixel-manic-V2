import React, { useEffect } from "react";
import "../../Styles/ProjectSection.css";
import mrlens from "../../Images/harry-cunningham-7L2h4zTYiNI-unsplash.png";
import movieMania from "../../Images/movie-mania.png";
import cardAnim from "../../Images/card-anim.png";
import pixelManicV1 from "../../Images/pixelManic v1.png";
import { CursorAnim } from "../../Animations/CursorAnim";
import { ProjectAnim } from "../../Animations/HomeAnim";

export default function ProjectSection() {
  useEffect(() => {
    CursorAnim();
    ProjectAnim();
  }, []);
  return (
    <section className="project-section">
      <span className="project-heading">Projects</span>
      <div className="projects-box">
        <div className="project-box">
          <a
            href="https://github.com/pixelmanic/mr-lens-production.git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mrlens}
              className="cursor-scale"
              alt="Mr lens production"
            />
          </a>
          <div className="proj-one-txt">
            <span>Mr Lens Production</span>
            <span>React-GSAP</span>
          </div>
        </div>
        <div className="project-box box-two">
          <a
            href="https://github.com/pixelmanic/full_stack_react_movie_website.git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={movieMania}
              className="cursor-scale"
              alt="Mr lens productin"
            />
          </a>
          <div className="proj-one-txt">
            <span>Movie-mania</span>
            <span>MERN</span>
          </div>
        </div>
        <div className="project-box box-three">
          <a
            href="https://github.com/pixelmanic/modern-landing-page.git"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cardAnim} className="cursor-scale" alt="Card Animation" />
          </a>
          <div className="proj-one-txt">
            <span>Card Animation</span>
            <span>React-GSAP</span>
          </div>
        </div>
        <div className="project-box box-four">
          <a
            href="https://github.com/pixelmanic/pixelmanic-portfolio.git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={pixelManicV1}
              className="cursor-scale"
              alt="Pixel Manic V1"
            />
          </a>
          <div className="proj-one-txt">
            <span>Pixel Manic V1</span>
            <span>React-GSAP</span>
          </div>
        </div>
        <div className="project-box">
          <a href="https://pixelmanic.com/" target="_blank" rel="noreferrer">
            <img
              src={pixelManicV1}
              className="cursor-scale"
              alt="Pixel Manic V2"
            />
          </a>
          <div className="proj-one-txt">
            <span>Pixel Manic V2</span>
            <span>React-GSAP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
