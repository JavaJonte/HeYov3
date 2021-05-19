<<<<<<< HEAD
import Login from "./Login";
import { useState } from "react";
import fire from "../fire";
import Hero from "./Hero";
=======
import { useState } from "react";
import fire from "../fire";
import Login from "./Login";
>>>>>>> Tobbe

const LoginSystem = ({ hasAccount, showLoginForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    console.log(password, email);
    fire
      .auth()
<<<<<<< HEAD
      .signInWithEmailAndPassword(email, password)
      .then((token) => {
        setUser("true");
=======
      .signInWithEmailAndPassword(email, password).then((token)=>{
        localStorage.setItem('user', "true");
>>>>>>> Tobbe
        showLoginForm();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
<<<<<<< HEAD
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        setUser("true");
=======
      .createUserWithEmailAndPassword(email, password).then((token)=>{
        localStorage.setItem("user", "true");
>>>>>>> Tobbe
        showLoginForm();
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };


  return (
    <div className="App">
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
<<<<<<< HEAD
      )}
=======
>>>>>>> Tobbe
    </div>
  );
};

export default LoginSystem;
