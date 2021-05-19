import React, { useState } from "react";
<<<<<<< HEAD
import { Container, Button } from "react-bootstrap";
import LoginSystem from "./LoginSystem";
=======
import { Button, Container } from "react-bootstrap";
>>>>>>> Tobbe
import fire from "../fire";
import Hero from "./Hero";
import LoginSystem from "./LoginSystem";

export const OnBoarding = () => {
<<<<<<< HEAD
  const [hasAccount, setHasAccount] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const handleLogin = () => {
    setHasAccount(true);
    setShowLoginForm(true);
  };

  const handleRegisterLogin = () => {
    setHasAccount(false);
    setShowLoginForm(true);
  };

  async function handleLogout () {
    const currentUser = Auth.userPool.getCurrentUser();
    await currentUser.signOut();
    console.log("denna?");
  };

  const hideLoginForm = () => {
    setShowLoginForm(false);
    setShowHero(true);
  };
  return (
    <>
      {!showHero && (
        <section className="login">
          <Container className="loginContainer">
            <Container className="btnContainer">
              <Button onClick={handleLogin}>
                &nbsp;&nbsp;&nbsp;LOGGA IN&nbsp;&nbsp;&nbsp;
              </Button>
              <p>
                Har du inget konto? <br />
                <span onClick={handleRegisterLogin}>Registrera dig här!</span>
              </p>
              {/* <div onClick={handleLogout}> 
            Logout
          </div> */}
=======
    const [hasAccount, setHasAccount] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showOnBoarding, setOnBoarding] = useState(true);
    const [showHero, setShowHero] = useState(window.localStorage.getItem("user"));

    const handleLogin = () => {
        setOnBoarding(false);
        setHasAccount(true);
        setShowLoginForm(true);
    };
    
    const handleRegisterLogin = () => {
        setHasAccount(false);
        setShowLoginForm(true);
        setOnBoarding(false);
    }

    const handleLogout = () => {
        fire.auth().signOut();
        window.localStorage.removeItem("user");
        window.location.href="/";
      };


    const hideLoginForm = () => {
        setShowLoginForm(false);
        setOnBoarding(false);
        setShowHero(true);
    }

    const isLogin = window.localStorage.getItem("user");

    return (
    <>
        {showOnBoarding && isLogin!="true" && <section className="login">
        <Container className="loginContainer">
            <Container className="btnContainer">
                <Button onClick={handleLogin}>&nbsp;&nbsp;&nbsp;LOGGA IN&nbsp;&nbsp;&nbsp;</Button>
                <p>
                    Har du inget konto? <br/>
                    <span onClick={handleRegisterLogin}>
                        Registrera dig här!
                    </span>
                </p>
>>>>>>> Tobbe
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
