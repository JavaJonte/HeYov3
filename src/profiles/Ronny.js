import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import ronny from '../profileicons/ronny.svg';
import johnny from '../profileicons/johnny.svg';
import rocky from '../profileicons/rocky.svg';
import kenny from '../profileicons/kenny.svg';
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
                        <Card.Img className="img" variant="top" width="103" height="103" src={ronny} alt="Ronny profile icon" />
                        <Card.Text className="name">Ronny 25</Card.Text>
                        <Card.Subtitle className="bio">
                        Hello! Jag gillar djur och natur. Tycker även om dator- och brädspel. 
                        Ses gärna för typ grill i skogen eller spelkväll :-) 
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
                            <Link to="/Kenny">
                            <img src={kenny} alt="Kenny" />
                            </Link>
                            <span className="buddyname">Kenny</span>
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
