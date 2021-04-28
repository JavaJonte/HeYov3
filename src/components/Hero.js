import React from "react";
import { Button, Container } from "react-bootstrap";
import { useMobile } from './useMobile';
import Navbar from '../navbar/navbar';

const Hero = ({ handleLogout }) => {
  const isMobile = useMobile();

  return (
    <>
      {!isMobile &&  <Navbar /> }
      {isMobile && <div style={{position: "fixed", bottom:"0px", width: "100%"}}><Navbar /> </div>}

      <section className="hero">
        <Container className="logo-container">
          <h1 className="logo">HEYO!</h1>
        </Container>

        <Button onClick={handleLogout}>Log Out</Button>
      </section>
    </>
  );
};
export default Hero;
