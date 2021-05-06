import React, { useState } from "react";
import { Container, Button } from "react-bootstrap"
import LoginSystem from "./LoginSystem";
import fire from "../fire";
import Hero from "./Hero"

export const OnBoarding = () => {
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
    }

    const handleLogout = () => {
        fire.auth().signOut();
      };

    const hideLoginForm = () => {
        setShowLoginForm(false);
        setShowHero(true);
    }
    return (
    <>
        {!showHero && <section className="login">
        <Container className="loginContainer">
            <Container className="btnContainer">
                <Button onClick={handleLogin}>&nbsp;&nbsp;&nbsp;LOGGA IN&nbsp;&nbsp;&nbsp;</Button>
                <p>
                    Har du inget konto? <br/>
                    <span onClick={handleRegisterLogin}>
                        Registrera dig!
                    </span>
                </p>
                {/* <div onClick={handleLogout}> 
            Logout
          </div> */}
            </Container>
        </Container>
        </section>}
        { showLoginForm &&
            <LoginSystem hasAccount={hasAccount} showLoginForm={hideLoginForm}/>
        }
        {showHero && <Hero handleLogout={handleLogout} />}
    </>
    );
}