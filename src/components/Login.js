import React from "react";
import { Container, Button } from "react-bootstrap";


const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <Container className="loginContainer">
        <Container className="btnContainer">
          {hasAccount ? (
            <>
              <Button onClick={handleLogin}>&nbsp;&nbsp;&nbsp;LOGGA IN&nbsp;&nbsp;&nbsp;</Button>
              <p>
                Har du inget konto? 
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Registrera dig!
                </span>
              </p>
            </>
          ) : (
            <>
              <Button onClick={handleSignUp}>&nbsp;REGISTRERA&nbsp;</Button>
              <p>
                Har du redan ett konto?
                <span onClick={() => setHasAccount(!hasAccount)}>Logga in</span>
              </p>
            </>
          )}
        </Container>
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
      </Container>
    </section>
  );
};
export default Login;
