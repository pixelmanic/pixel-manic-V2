import gsap from "gsap";

export const CursorAnim = () => {
  const body = document.querySelector(".App")
  const cursor = document.querySelector(".cursor");
  const cursorScale = document.querySelectorAll(".cursor-scale");
  let mouseX = 0;
  let mouseY = 0;
  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, { css: { left: mouseX, top: mouseY } });
    },
  });
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // mouse on webPage opacity start

  body.addEventListener("mouseenter", function () {
    cursor.classList.add("mouse-in");
  });
  
  body.addEventListener("mouseleave", function () {
    cursor.classList.remove("mouse-in");
  });

  // mouse on webPage opacity ends  
  
  // Cursor Hover Effects starts

  cursorScale.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
    });
    link.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
    });
  });

  // Cursor Hover Effects ends
};
