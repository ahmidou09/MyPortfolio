import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTasks, FaSmile, FaCoffee } from "react-icons/fa";

const CounterComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;
  color: var(--color-white);
  background: linear-gradient(to right, #4d5bce, #5565e8);
`;

const CounterIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CounterDescription = styled.div`
  font-size: 1rem;
`;

const CounterNumber = styled.div`
  font-size: 3.5rem;
`;

const Counter = ({ icon, endValue, duration, description }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCurrentValue(Math.floor(percentage * endValue));
      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);

    return () => {
      setCurrentValue(0);
    };
  }, [endValue, duration]);

  return (
    <CounterComponent>
      <CounterIcon>{icon}</CounterIcon>
      <CounterNumber>{currentValue}</CounterNumber>
      <CounterDescription>{description}</CounterDescription>
    </CounterComponent>
  );
};

const ComponentStatistics = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter
        icon={<FaTasks />}
        endValue={100}
        duration={2500}
        description="Number of projects done"
      />
      <Counter
        icon={<FaSmile />}
        endValue={50}
        duration={2500}
        description="Number of happy clients"
      />
      <Counter
        icon={<FaCoffee />}
        endValue={10000}
        duration={2500}
        description="Cups of coffee consumed"
      />
    </div>
  );
};

export default ComponentStatistics;
