import React from "react";
import { Button } from "react-bootstrap";
import { useMobile } from "./useMobile";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Link, useHistory } from "react-router-dom";
import EventList from "./EventList";
import EventForm from "./EventForm";


const Hero = ({ handleLogout }) => {
  const isMobile = useMobile();

  return (
    <>
      {!isMobile && <Navbar />}
      {isMobile && (
        <div style={{ position: "fixed", bottom: "0px", width: "100%" }}>
          <Navbar />{" "}
        </div>
      )}
      {/*Här ska finnas Routes till de olika ikoner i nav */}
      {/* Vi behöver göra auto-uppdatering utan att sidan laddas om, preventDefault?, useHistory, location.realo*/}
      <Router>
        <Switch>
          <Link exakt path="/calender" component={EventList} />
          <Link exakt path="/addevent" component={EventForm} />
        </Switch>
      </Router>

      <Button onClick={handleLogout}>Logga ut</Button>
    </>
  );
};
export default Hero;
