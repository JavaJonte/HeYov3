import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import johnny from '../profileicons/johnny.svg';
import rocky from '../profileicons/rocky.svg';
import ronny from '../profileicons/ronny.svg';
import sonny from '../profileicons/sonny.svg';
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
                        <Card.Img className="img" variant="top" width="103" height="103" src={sonny} alt="Sonny profile icon" />
                        <Card.Text className="name">Sonny 40</Card.Text>
                        <Card.Subtitle className="bio">
                        Hej! Sonny var namnet. Gillar god mat och ett gott vin till det. 
                        Många skulle nog kalla mig livsnjutare! Brädspel är ett stort intresse, Carcassonne och Catan är favoriterna. 
                        </Card.Subtitle>

                        <div className="othercontacticons" >
                        <Module />
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
                            <Link to="/Johnny">
                            <img src={johnny} alt="Johnny" />
                            </Link>
                            <span className="buddyname">Johnny the Trucker</span>
                        </figure>
                        

                    </Card.Body>
                    </Card>   
                </div>
                
    </>
  );
}
