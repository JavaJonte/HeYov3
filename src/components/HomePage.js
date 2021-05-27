import React from "react";
import { Container } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container>
      <h1 className="landing-h1">
        <br/>
        <br/>
        <br/>
        Friends,<br></br> {/* FIXA CSSEN */}
        old & new <br></br>
        lets hang out!
      </h1>
      <h2 className="landing-h2">
        HEYO är tjänsten för dig som vill hålla kontakten med gamla vänner och
        träffa nya.
      </h2>
      <p className="right-quote">
        “Så sjukt kul sätt att kunna planera saker med vänner på.”
      </p>

      <p className="left-quote">
        “Sen jag skaffade Heyo! har jag träffat så många nya härliga människor.”
      </p>

      <Container>
        <p className="footer">
          Om HEYO! <br></br>
          Kontakt: heyo@info.com <br></br>{" "}
          {/*Styla denna och padda in den snyggt så den ser lik ut mot prototyp*/}
          copiright blabla 2021
        </p>
      </Container>
    </Container>
  );
}
