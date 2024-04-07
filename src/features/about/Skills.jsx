import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import MySkillsMobile from "./MySkillsMobile";
import MySkillsDesktop from "./MySkillsDesktop";

const Skills = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MySkillsMobile /> : <MySkillsDesktop />}</>;
};

export default Skills;
