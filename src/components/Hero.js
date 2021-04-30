import React from "react";
import { Button } from "react-bootstrap";
import { useMobile } from "./useMobile";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "./EventList";
import EventForm from "./EventForm";
import Profile from "./Profile";
import Friends from "./Friends";
import Activities from "./Activities";
 
const Hero = ({ handleLogout }) => {
<<<<<<< HEAD
  return (
    <section className="hero">
      <Nav>
        <Container className="logo-container">
          <h1 className="logo">HEYO!</h1>
        </Container>
=======
    const isMobile = useMobile();
 
    return (
        <Router>
            {!isMobile && <Navbar />}
            {isMobile && (
                <div style={{ position: "fixed", bottom: "0px", width: "100%" }} >
                    <Navbar />{" "}
                </div>
            )}
>>>>>>> main

            {/*Här finns Routes till de olika komponenter*/}
            <Switch>
                {/*TODO: Lägga in route för path"/" alltså hemsida*/}
                <Route path="/activities">
                    <Activities />
                </Route>
                <Route path="/calender">
                    <EventList />
                </Route>
                <Route path="/addevent">
                    <EventForm />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/friends">
                    <Friends />
                </Route>
            </Switch>
 
            <Button onClick={handleLogout}>Logga ut</Button>
        </Router>
    );
};
export default Hero;