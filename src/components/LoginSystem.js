import Login from "./Login";
import { useState} from "react";
import fire from "../fire";
import Hero from './Hero';

const LoginSystem = ({ hasAccount, showLoginForm }) => {
  const [user, setUser] = useState(localStorage.getItem('user'));
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
    console.log(password, email)
    fire
      .auth()
      .signInWithEmailAndPassword(email, password).then((token)=>{
        setUser(true);
        localStorage.setItem('user');
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
      .createUserWithEmailAndPassword(email, password).then((token)=>{
        setUser("true");
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

  const handleLogout = () => {
    localStorage.removeItem('user');
    // fire.auth().signOut();
  };

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
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
          handleLogout={handleLogout}
        />
        )}
    </div>
  );
};

export default LoginSystem;
