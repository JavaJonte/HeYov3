import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import jeff from '../profileicons/jeff.svg';
import rocky from '../profileicons/rocky.svg';
import ronny from '../profileicons/ronny.svg';
import lenny from '../profileicons/lenny.svg';
import addcontact from '../profileicons/addcontact.svg';
import pew from '../profileicons/pew.svg';
import Module from "../components/SendFriendRequest";

export default function Johnny() {
  return (
      <>
            <div className="profilecard">
                <Card>
                    <Card.Body>
                        <Card.Title className="title">Profil</Card.Title>
                        <Card.Img className="img" variant="top" width="103" height="103" src={lenny} alt="Lenny profile icon" />
                        <Card.Text className="name">Lenny 28</Card.Text>
                        <Card.Subtitle className="bio">
                        Lenny heter jag! Gillar att vandra och klättra. 
                        Vill du ha en springkompis? Hör av dig. :)
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
                            <Link to="/Jeff">
                            <img src={jeff} alt="Jeff" />
                            </Link>
                            <span className="buddyname">Jeffster Jokester</span>
                        </figure>
                        

                    </Card.Body>
                    </Card>   
                </div>
                
    </>
  );
}
