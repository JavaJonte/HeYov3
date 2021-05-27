import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import fire from "../fire";
import Hero from "./Hero";
import LoginSystem from "./LoginSystem";
import HomePage from "./HomePage"

export const OnBoarding = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showOnBoarding, setOnBoarding] = useState(true);
  const [showHero, setShowHero] = useState(window.localStorage.getItem("user"));

  const handleLogin = () => {
    setOnBoarding(false);
    setHasAccount(true);
    setShowLoginForm(true);
  };

  const handleLogout = () => {
    fire.auth().signOut();
    window.localStorage.removeItem("user");
    window.location.href="/";               //testtest
  };
  const handleRegisterLogin = () => {
    setHasAccount(false);
    setShowLoginForm(true);
    setOnBoarding(false);
  };

  const hideLoginForm = () => {
    setShowLoginForm(false);
    setOnBoarding(false);
    setShowHero(true);
  };

  const isLogin = window.localStorage.getItem("user");

  return (
    <>
      {showOnBoarding && isLogin != "true" && (
        <section className="login">
          <Container className="loginContainer">
            <Container className="btnContainer">
                <div className="heyo">HEYO!</div>
                <Button onClick={handleLogin}>&nbsp;&nbsp;&nbsp;LOGGA IN&nbsp;&nbsp;&nbsp;</Button>
                <p>
                    Har du inget konto? <br/>
                    <span onClick={handleRegisterLogin}>
                        Registrera dig här!
                    </span>
                </p>
            </Container>
            
          </Container>
        </section>
      )}
      {showLoginForm && (
        <LoginSystem hasAccount={hasAccount} showLoginForm={hideLoginForm} />
      )}
      {showHero && <Hero handleLogout={handleLogout} />}
    </>
  );
};
