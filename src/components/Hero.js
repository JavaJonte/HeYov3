import React from "react";
import { Button } from "react-bootstrap";
import { useMobile } from './useMobile';
import Navbar from '../navbar/navbar';

const Hero = ({ handleLogout }) => {
  const isMobile = useMobile();

  return (
    <>
      {!isMobile &&  <Navbar /> }
      {isMobile && <div style={{position: "fixed", bottom:"0px", width: "100%"}}><Navbar /> </div>}

      {/*Här ska finnas Route till activities */}

        <Button onClick={handleLogout}>Log Out</Button>
    </>
  );
};
export default Hero;
