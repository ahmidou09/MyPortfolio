import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 300px;
  margin: 0 auto;
`;

const FormcarryBlock = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

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
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Your first and last name"
        />
      </FormcarryBlock>

      <FormcarryBlock>
        <Label htmlFor="email">Your Email Address</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="john@doe.com"
        />
      </FormcarryBlock>

      <FormcarryBlock>
        <Label htmlFor="message">Your message</Label>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Enter your message..."
        />
      </FormcarryBlock>

      <FormcarryBlock>
        <Button type="submit">Send</Button>
      </FormcarryBlock>
    </Form>
  );
}

export default ContactForm;
