import React, { useEffect } from "react";
import "../../Styles/AboutSection.css";
import developer from "../../Images/Mustafa BW.png";
import { CursorAnim } from "../../Animations/CursorAnim";

export default function AboutSection() {
  useEffect(() => {
    CursorAnim();
  }, []);
  return (
    <section className="about-section">
      <div className="about-contents">
        <div className="about-text">
          <p className="cursor-scale">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="about-img">
          <img src={developer} alt="developer" />
        </div>
      </div>
    </section>
  );
}
