import React from "react";
import { Button, Nav } from "react-bootstrap";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <Nav>
        <h2>HEYYOO DASHBORD DETTA SYNS INLOGGAT</h2>

        <Button onClick={handleLogout}>Log Out</Button>
      </Nav>
    </section>
  );
};
export default Hero;
