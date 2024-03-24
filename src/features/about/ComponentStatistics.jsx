import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTasks, FaSmile, FaCoffee } from "react-icons/fa";

const ComponentStatisticsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const CounterComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;
  color: var(--color-white);
  background: linear-gradient(to right, #607b96, #607b962e);
`;

const CounterIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CounterDescription = styled.div`
  font-size: 1rem;
`;

const CounterNumber = styled.div`
  font-size: 2.5rem;
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
    <ComponentStatisticsWrapper>
      <Counter
        icon={<FaTasks />}
        endValue={50}
        duration={2500}
        description="Number of projects done"
      />
      <Counter
        icon={<FaSmile />}
        endValue={23}
        duration={2500}
        description="Number of happy clients"
      />
      <Counter
        icon={<FaCoffee />}
        endValue={1000}
        duration={2500}
        description="Cups of coffee consumed"
      />
    </ComponentStatisticsWrapper>
  );
};

export default ComponentStatistics;
