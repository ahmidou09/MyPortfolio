import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";

// 2340 x 1200
// 580 x 800
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const CarouselMotionDiv = styled(motion.div)`
  display: flex;
  cursor: grab;
  align-items: top;

  &:active {
    cursor: grabbing;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 18 / 9;
  border-radius: 1rem;
  background-position: top;
  background-size: 100%;
`;

const DotsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.button`
  height: 12px;
  width: 12px;
  border-radius: 9999px;
  transition: background-color 0.2s;
`;

const GradientEdge = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  top: 0;
  width: 10vw;
  max-width: 100px;
`;

const SwipeCarousel = ({ imgs }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, imgs.length]); // Add imgs.length to the dependency array

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <Container>
      <CarouselMotionDiv
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <Images imgIndex={imgIndex} imgs={imgs} /> {/* Pass imgs prop here */}
      </CarouselMotionDiv>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />{" "}
      {/* Pass imgs prop here */}
      <GradientEdges />
    </Container>
  );
};

const Images = ({ imgIndex, imgs }) => {
  // Ensure imgs is received as a prop
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <ImageContainer
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={SPRING_OPTIONS}
        />
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs }) => {
  return (
    <DotsContainer>
      {imgs.map((_, idx) => (
        <Dot
          key={idx}
          onClick={() => setImgIndex(idx)}
          style={{
            backgroundColor:
              idx === imgIndex
                ? "var(--color-purple-1)"
                : "var(--color-white-2)",
            border: "none",
          }}
        />
      ))}
    </DotsContainer>
  );
};

const GradientEdges = () => {
  return (
    <>
      <GradientEdge
        style={{
          left: 0,
        }}
      />
      <GradientEdge
        style={{
          right: 0,
        }}
      />
    </>
  );
};

export default SwipeCarousel;
