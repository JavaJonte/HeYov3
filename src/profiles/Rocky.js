import React from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import sonny from '../profileicons/sonny.svg';
import rocky from '../profileicons/rocky.svg';
import ronny from '../profileicons/ronny.svg';
import johnny from '../profileicons/johnny.svg';
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
                        <Card.Img className="img" variant="top" width="103" height="103" src={rocky} alt="Rocky profile icon" />
                        <Card.Text className="name">Rocky 38</Card.Text>
                        <Card.Subtitle className="bio">
                        Hej! Anders, 38 bor i Solna med sambo. 
                        Supernörd när det kommer till gamla noir-filmer. Hörs!
                        </Card.Subtitle>

                        <div className="othercontacticons" >
                        <Module />
                        </div>

                        <Card.Text className="buddies">Kontakter</Card.Text>
                        <figure className="nameforbuddies">
                            <Link to="/Sonny">
                            <img src={sonny} alt="Sonny" />
                            </Link>
                            <span className="buddyname">Sonny Sonett</span>
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
                            <span className="buddyname">Johnny the Trucket</span>
                        </figure>
                        

                    </Card.Body>
                    </Card>   
                </div>
                
    </>
  );
}
