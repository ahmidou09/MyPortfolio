import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";

const slider1 = [
  {
    color: "#1f6ebd",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#d6d9dc",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#902626",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#21242b",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
];

const slider2 = [
  {
    color: "#0fc80f",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#a4247d",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#308528",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
  {
    color: "#a74d18",
    src: "https://i.ibb.co/vLZ4tDL/1.png",
  },
];

const SlidingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <SlidingImagesContainer ref={container}>
      <Slider style={{ x: x1 }}>
        {slider1.map((project, index) => (
          <Project key={index} bgColor={project.color}>
            <ImageContainer>
              <img
                src={project.src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImageContainer>
          </Project>
        ))}
      </Slider>
      <Slider style={{ x: x2 }}>
        {slider2.map((project, index) => (
          <Project key={index} bgColor={project.color}>
            <ImageContainer>
              <img
                src={project.src}
                alt={`Slide ${index + 1 + slider1.length}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImageContainer>
          </Project>
        ))}
      </Slider>
    </SlidingImagesContainer>
  );
};

const SlidingImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  position: relative;
  z-index: 1;
`;

const Slider = styled(motion.div)`
  display: flex;
  position: relative;
  gap: 3vw;
  width: 120vw;
  left: -10vw;
`;

const Project = styled.div`
  padding: 2rem;
  width: 25%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default SlidingImages;
