import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const NavbarAnim = () => {
  gsap.to("nav", {
    css: {
      background: "rgba( 255, 255, 255, 0.02 )",
      border: "1px solid rgb(139, 139, 139)",
      backdropFilter: "blur( 7px )",
    },
    scrollTrigger: {
      trigger: ".main-div",
      start: "top top", // Trigger at the top of the nav element
      toggleActions: "play reverse play reverse", // Play the animation on scroll down and reverse on scroll up
    },
  });
};
