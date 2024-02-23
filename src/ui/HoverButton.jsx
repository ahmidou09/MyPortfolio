import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HoverButton = ({ children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const calculatePosition = () => {
      gsap.set(button, {
        x: 0,
        y: 0,
        scale: 1,
      });
      const box = button.getBoundingClientRect();
      button.x = box.left + box.width * 0.5;
      button.y = box.top + box.height * 0.5;
      button.width = box.width;
      button.height = box.height;
    };

    const onMouseMove = (e) => {
      let hover = false;
      let hoverArea = button.hover ? 0.7 : 0.5;
      let x = e.clientX - button.x;
      let y = e.clientY - button.y;
      let distance = Math.sqrt(x * x + y * y);
      if (distance < button.width * hoverArea) {
        hover = true;
        if (!button.hover) {
          button.hover = true;
        }
        onHover(e.clientX, e.clientY);
      }

      if (!hover && button.hover) {
        onLeave();
        button.hover = false;
      }
    };

    const onHover = (x, y) => {
      gsap.to(button, {
        x: (x - button.x) * 0.4,
        y: (y - button.y) * 0.4,
        scale: 1.15,
        ease: "power2.out",
        duration: 0.4,
      });
      button.style.zIndex = 10;
    };

    const onLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "elastic.out(1.2, 0.4)",
        duration: 0.7,
      });
      button.style.zIndex = 1;
    };

    calculatePosition();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  return <span ref={buttonRef}>{children}</span>;
};

export default HoverButton;
