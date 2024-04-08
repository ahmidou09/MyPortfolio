import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const PanelWrapper = styled.div`
  background-color: transparent;
  color: var(--color-white);
  margin-bottom: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PanelLabel = styled.button`
  position: relative;
  display: block;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 2.5rem 6rem 2.5rem 2.5rem;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--color-white-2);
  background-color: var(--color-primary-2);
  font-family: inherit;
  transition: color 0.2s linear;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    right: 2.5rem;
    top: 50%;
    width: 2.2rem;
    height: 0.2rem;
    margin-top: -1px;
    background-color: var(--color-white-2);
  }

  &:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  ${(props) =>
    props.expanded &&
    css`
      color: var(--color-purple-2);

      &:before {
        transform: rotate(0deg);
      }
    `}
`;

const PanelInner = styled.div`
  overflow: hidden;
  will-change: height;
  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  background-color: var(--color-primary-2);
`;

const PanelContent = styled.div`
  font-size: 2rem;
  color: var(--color-white-2);
  opacity: 1;
  transition: opacity 0.3s linear 0.18s;
  padding: 3rem 6rem;
  line-height: 1.5;

  p {
    margin-bottom: 2rem;
    margin-left: 3rem;
  }

  h5 {
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--color-white-2);
  }

  li {
    position: relative;
  }

  li::before {
    content: "✓";
    position: absolute;
    left: -3rem;
    top: 0;
    width: 2rem;
    height: 2rem;
    color: var(--color-primary-3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 4rem;
  }
`;

const Panel = ({ label, content, isActive, onClick }) => {
  const [height, setHeight] = useState(0);
  const panelContentRef = useRef(null);

  useEffect(() => {
    if (panelContentRef.current) {
      setHeight(panelContentRef.current.clientHeight);
    }
  }, [content]);

  return (
    <PanelWrapper>
      <PanelLabel onClick={onClick} expanded={isActive}>
        {label}
      </PanelLabel>
      <PanelInner style={{ height: isActive ? height + "px" : 0 }}>
        <PanelContent ref={panelContentRef}>{content}</PanelContent>
      </PanelInner>
    </PanelWrapper>
  );
};

export default Panel;
