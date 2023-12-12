import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const HeroAnim = () => {};

export const AboutAnim = () => {};

export const ShowAnim = () => {};

export const ProjectAnim = () => {
  const projectsBox = document.querySelector(".projects-box");

  function getScrollAmount() {
    let proBoxWidth = projectsBox.scrollWidth;
    return -(proBoxWidth - window.innerWidth)
  }

  const projTween = gsap.to(projectsBox,{
    x: getScrollAmount,
    duration:3,
    ease:"none"
  });

  ScrollTrigger.create({
    trigger:".project-section",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: projTween,
    scrub:1,
    invalidateOnRefresh:true,
    markers:true
  })

};