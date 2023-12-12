import React, { useEffect } from "react";
import "../../Styles/Home.css";
import { CursorAnim } from "../../Animations/CursorAnim";
import { NavbarAnim } from "../../Animations/NavbarAnim";

export default function Home() {
  useEffect(() => {
    CursorAnim();
    NavbarAnim();
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-contents">
        <span>hello</span>
        <span className="cursor-scale">Let's scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
