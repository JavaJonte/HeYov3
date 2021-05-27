import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import johnny from '../profileicons/johnny.svg';
import rocky from '../profileicons/rocky.svg';
import ronny from '../profileicons/ronny.svg';
import lenny from '../profileicons/lenny.svg';
import addcontact from '../profileicons/addcontact.svg';
import pew from '../profileicons/pew.svg';
import Module from "../components/SendFriendRequest";
import Test from '../components/Test';

export default function Johnny() {
  return (
      <>
      <br/>
      <Card.Title className="title">Profil</Card.Title>
            <div className="profilecard">
                <Card>
                    <Card.Body>
                        <Card.Img className="img" variant="top" width="103" height="103" src={johnny} alt="Johnny profile icon" />
                        <Card.Text className="name">Johnny 32</Card.Text>
                        <Card.Subtitle className="bio">
                        Tja! Johnny här! Jag gillar att käka god mat och gamear gärna när jag får tid över. 
                        Sugen på en bärs eller ska vi ba käka lunch? Hör av dig!
                        </Card.Subtitle>

                        <div className="othercontacticons" >
                        <Test />
                        </div>

                        <Card.Text className="buddies">Kontakter</Card.Text>
                        <figure className="nameforbuddies">
                            <Link to="/Rocky">
                            <img src={rocky} alt="Rocky" />
                            </Link>
                            <span className="buddyname">Rocky Racoon</span>
                        </figure>
                        <figure className="nameforbuddies">
                            <Link to="/Ronny">
                            <img src={ronny} alt="Ronny" />
                            </Link>
                            <span className="buddyname">Ronny Booster</span>
                        </figure>
                        <figure className="nameforbuddies">
                            <Link to="/Lenny">
                            <img src={lenny} alt="Lenny" />
                            </Link>
                            <span className="buddyname">Lenny Lindgren</span>
                        </figure>
                        

                    </Card.Body>
                    </Card>   
                </div>
                
    </>
  );
}
