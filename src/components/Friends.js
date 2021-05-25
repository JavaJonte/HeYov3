import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Container, Card} from "react-bootstrap";
import johnny from '../profileicons/johnny.svg';
import ronny from '../profileicons/ronny.svg';
import kenny from '../profileicons/kenny.svg';
import rocky from '../profileicons/rocky.svg';
import sonny from '../profileicons/sonny.svg';
import lenny from '../profileicons/lenny.svg';
import jeff from '../profileicons/jeff.svg';

export default function Friends() {
    return (
      <Container>
        <Card.Text className="title">Mina vänner</Card.Text>
        <div className="myfriends">
          <figure>
            <Link to="/Johnny">
              <img src={johnny} alt="Johnny" width="77" height="77" />
            </Link>
            <figcaption>Johnny</figcaption>
          </figure>

          <figure>
            <Link to="/Ronny">
              <img src={ronny} alt="Ronny" width="77" height="77"/>
            </Link>
            <figcaption>Ronny</figcaption>
          </figure>

          <figure>
            <Link to="/Kenny">
              <img src={kenny} alt="Kenny" width="77" height="77"/>
            </Link>
            <figcaption>Kenny</figcaption>
          </figure>

          <figure>
            <Link to="/Lenny">
              <img src={lenny} alt="Lenny" width="77" height="77"/>
            </Link>
            <figcaption>Lenny</figcaption>
          </figure>

          <figure>
            <Link to="/Rocky">
              <img src={rocky} alt="Rocky" width="77" height="77"/>
            </Link>
            <figcaption>Rocky</figcaption>
          </figure>

          <figure>
            <Link to="/Sonny">
              <img src={sonny} alt="Sonny" width="77" height="77"/>
            </Link>
            <figcaption>Sonny</figcaption>
          </figure>

          <figure>
            <Link to="/Jeff">
              <img src={jeff} alt="Jeff" width="77" height="77"/>
            </Link>
            <figcaption>Jeff</figcaption>
          </figure>
        </div>
      </Container>
    );
}
