import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const Form = styled.form``;
const FormcarryBlock = styled.div`
  position: relative;
  width: 40rem;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Label = styled.label`
  transition: 0.5s;
  position: absolute;
  top: ${({ $hasContent }) => ($hasContent ? "-20px" : "0")};
  left: 0;
  font-size: ${({ $hasContent }) => ($hasContent ? "12px" : "16px")};
  color: ${({ $hasContent }) =>
    $hasContent ? "var(--color-purple-1)" : "var(--color-white)"};
  padding: 10px 0;
  pointer-events: none;
  transition: 0.5s;
`;

const inputStyles = css`
  width: 100%;
  padding: 1rem 0;
  font-size: 1.6rem;
  color: var(--color-white);
  margin-bottom: 6rem;
  border: none;
  border-bottom: 1px solid var(--color-white);
  outline: none;
  background: transparent;

  &:focus ~ label {
    top: -20px;
    left: 0;
    color: var(--color-purple-1);
    font-size: 12px;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
`;

const btnAnim1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const btnAnim2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const btnAnim3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const btnAnim4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  border: none;
  padding: 10px 20px;
  color: var(--color-purple-1);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 4rem;
  letter-spacing: 4px;

  @media screen and (max-width: 720px) {
    margin-top: 0;
  }

  &:hover {
    background: var(--color-purple-1);
    color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 0 5px var(--color-purple-1), 0 0 25px var(--color-purple-1),
      0 0 50px var(--color-purple-1), 0 0 100px var(--color-purple-1);
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-purple-1));
    animation: ${btnAnim1} 1s linear infinite;
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--color-purple-1));
    animation: ${btnAnim2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--color-purple-1));
    animation: ${btnAnim3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--color-purple-1));
    animation: ${btnAnim4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  console.log(error);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/uVqNaFy0niZ", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <FormcarryBlock>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          required
        />
        <Label htmlFor="name" $hasContent={name.length > 0}>
          Full Name
        </Label>
      </FormcarryBlock>

      <FormcarryBlock>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required
        />
        <Label htmlFor="email" $hasContent={email.length > 0}>
          Your Email Address
        </Label>
      </FormcarryBlock>

      <FormcarryBlock>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          required
        />
        <Label htmlFor="message" $hasContent={message.length > 0}>
          Your message
        </Label>
      </FormcarryBlock>

      <FormcarryBlock>
        <Button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Send
        </Button>
      </FormcarryBlock>
    </Form>
  );
}

export default ContactForm;
