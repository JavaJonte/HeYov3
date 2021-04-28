import React from "react";
import { Button, Nav, Container } from "react-bootstrap";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <Nav>
        <Container className="logo-container">
          <h1 className="logo">HEYO!</h1>
        </Container>

        <Button onClick={handleLogout}>Log Out</Button>
      </Nav>
    </section>
  );
};
export default Hero;
