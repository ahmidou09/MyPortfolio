import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const PanelWrapper = styled.div`
  background-color: var(--color-primary-3);
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
  color: var(--color-white);
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
    color: var(--color-white);
    right: 2.5rem;
    top: 50%;
    width: 2.2rem;
    height: 0.2rem;
    margin-top: -1px;
    background-color: var(--color-white);
  }

  &:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  ${(props) =>
    props.expanded &&
    css`
      color: #fff;

      &:before {
        transform: rotate(0deg);
      }
    `}
`;

const PanelInner = styled.div`
  overflow: hidden;
  will-change: height;
  transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const PanelContent = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-0);
  opacity: 1;
  transition: opacity 0.3s linear 0.18s;
`;

const Panel = ({ label, content, isActive, onClick }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    el.innerHTML = content;
    const height = el.clientHeight;
    document.body.removeChild(el);
    setHeight(height);
  }, [content]);

  return (
    <PanelWrapper>
      <PanelLabel onClick={onClick} expanded={isActive}>
        {label}
      </PanelLabel>
      <PanelInner style={{ height: isActive ? height + "px" : 0 }}>
        <PanelContent>{content}</PanelContent>
      </PanelInner>
    </PanelWrapper>
  );
};

export default Panel;
