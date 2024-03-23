import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          label={panel.label}
          content={panel.content}
          isActive={activeTab === index}
          onClick={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
