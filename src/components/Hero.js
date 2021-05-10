import React from "react";
import { useMobile } from "./useMobile";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Container } from "react-bootstrap"
import EventList from "./EventList";
import EventForm from "./EventForm";
import Profile from "./Profile";
import Friends from "./Friends";
import Activities from "./Activities";
 
const Hero = ({ handleLogout }) => {
  return (
      <Nav>
        <Container className="logo-container">
          <h1 className="logo">HEYO!</h1>
        </Container>

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
                    <Profile handleLogout={handleLogout}/>
                </Route>
                <Route path="/friends">
                    <Friends />
                </Route>
            </Switch>
 
        </Nav>
    );
};
export default Hero