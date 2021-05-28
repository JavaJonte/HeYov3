import React from "react";
import { Container } from "react-bootstrap";


const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <section className="login">
        <Container className="loginContainer">
          
          <Container className="btnContainer2">
          <div className="heyoo">HEYO!</div>
          <label>E-post</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <p className="errorMsg">{emailError}</p>
          <label>Lösenord</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p> 
          <button className="button1" onClick={hasAccount ? handleLogin : handleSignUp}> Go!  </button>
        </Container>
        </Container>
        
      </section>
      
    </>
  );
};
export default Login;
