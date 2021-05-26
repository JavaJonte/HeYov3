import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import kenny from '../profileicons/kenny.svg';
import jeff from '../profileicons/jeff.svg';
import ronny from '../profileicons/ronny.svg';
import lenny from '../profileicons/lenny.svg';
import addcontact from '../profileicons/addcontact.svg';
import pew from '../profileicons/pew.svg';
import Module from "../components/SendFriendRequest";

export default function Johnny() {
  return (
      <>
      <br/>
      <Card.Title className="title">Profil</Card.Title>
            <div className="profilecard">
                <Card>
                    <Card.Body>
                        <Card.Img className="img" variant="top" width="103" height="103" src={kenny} alt="Kenny profile icon" />
                        <Card.Text className="name">Kenny 39</Card.Text>
                        <Card.Subtitle className="bio">
                        Halloj! Gillar att rimma. Och också att simma. 
                        Mat ska rökas, så som i en dimma. Nödrim är inte min grej, vi hörs - hej! 
                        </Card.Subtitle>

                        <div className="othercontacticons" >
                        <Module />
                        </div>

                        <Card.Text className="buddies">Kontakter</Card.Text>
                        <figure className="nameforbuddies">
                            <Link to="/Jeff">
                            <img src={jeff} alt="Jeff" />
                            </Link>
                            <span className="buddyname">Jeffster Jokester</span>
                        </figure>
                        <figure className="nameforbuddies">
                            <Link to="/Lenny">
                            <img src={lenny} alt="Lenny" />
                            </Link>
                            <span className="buddyname">Lenny Lindgren</span>
                        </figure>
                        <figure className="nameforbuddies">
                            <Link to="/Ronny">
                            <img src={ronny} alt="Ronny" />
                            </Link>
                            <span className="buddyname">Ronny Booster</span>
                        </figure>
                    </Card.Body>
                    </Card>   
                </div>
                
    </>
  );
}
