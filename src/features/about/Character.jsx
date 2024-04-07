import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

const ParagraphContainer = styled(motion.p)`
  display: flex;
  font-size: 6rem;
  line-height: 1;
  padding: 4rem;
  max-width: 120rem;
  color: var(--color-primary-1);
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    font-size: 3rem;
  }
`;

const WordSpan = styled.span`
  position: relative;
  margin-right: 12px;
  margin-top: 12px;
`;

const ShadowSpan = styled.span`
  position: absolute;
  opacity: 20%;
`;

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <ParagraphContainer ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </ParagraphContainer>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <WordSpan>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </WordSpan>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <ShadowSpan>{children}</ShadowSpan>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
