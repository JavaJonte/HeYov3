import React from "react";
import { useMobile } from "./useMobile";
import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "./EventList";
import EventForm from "./EventForm";
import Profile from "./Profile";
import Friends from "./Friends";
import Calendar from "./Calendar";
import Johnny from "../profiles/Johnny";
import Ronny from "../profiles/Ronny";
import Rocky from "../profiles/Rocky";
import Lenny from "../profiles/Lenny";
import Sonny from "../profiles/Sonny";
import Kenny from "../profiles/Kenny";
import Jeff from "../profiles/Jeff";

const Hero = ({ handleLogout }) => {
    const isMobile = useMobile();
 
    return (
        <Router>
            {!isMobile && <Navbar />}
            {isMobile && (
                <div style={{ position: "fixed", bottom: "0px", width: "100%" }} >
                    <Navbar />{" "}
                </div>
            )}

            {/*Här finns Routes till de olika komponenter*/}
            <Switch>
                <Route exact path="/">
                    <EventList/>
                </Route>
                <Route path="/activities">
                    <EventList />
                </Route>
                <Route path="/calender">
                    <Calendar />
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
                <Route path="/Johnny">
                    <Johnny />
                </Route>
                <Route path="/Ronny">
                    <Ronny />
                </Route>
                <Route path="/Rocky">
                    <Rocky />
                </Route>
                <Route path="/Lenny">
                    <Lenny />
                </Route>
                <Route path="/Sonny">
                    <Sonny />
                </Route>
                <Route path="/Kenny">
                    <Kenny />
                </Route>
                <Route path="/Jeff">
                    <Jeff />
                </Route>
            </Switch>
 
        </Router>
    );
};
export default Hero;
