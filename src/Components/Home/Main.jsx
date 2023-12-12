import React, { useEffect } from "react";
import "../../Styles/Main.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutSection from "./AboutSection";
import { NavbarAnim } from "../../Animations/NavbarAnim";
import ShowSection from "./ShowSection";
import ProjectSection from "./ProjectSection";
import Prefooter from "./Prefooter";

export default function Main() {
  useEffect(()=>{
    NavbarAnim()
  },[])
  return (
    <main className="main-div">
      <div className="background-lines">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />
      <Home />
      <AboutSection />
      <ShowSection />
      <ProjectSection />
      <Prefooter />
    </main>
  );
}
  