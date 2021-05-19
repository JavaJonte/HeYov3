import React from 'react'
import { Button, Card } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import manne from '../profileicons/manne.svg';
import johnny from '../profileicons/johnny.svg';
import ronny from '../profileicons/ronny.svg';


export default function Profile({handleLogout}) {
  return (
      <>
            <div className="profilecard">
                <Card>
                    <Card.Body>
                        <Card.Title className="title">Profil</Card.Title>
                        <Card.Img className="img" variant="top" src={manne} alt="Manne profile icon" />
                        <Card.Text className="name">Manne 36</Card.Text>
                        <Card.Subtitle className="bio">
                            Tja! Manne här! Jag gillar att käka god mat och gamear gärna när jag
                            får tid över. Sugen på en bärs eller ska vi ba käka lunch? Hör av
                            dig!
                        </Card.Subtitle>
                        <Card.Text className="buddies">Hänger ofta med</Card.Text>
                        <figure className="nameforbuddies">
                            <Link to="/Johnny">
                            <img src={johnny} alt="Johnny" />
                            </Link>
                            <span className="buddyname">Johnny the Trucker</span>
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
                
        <div>
            <Button onClick={handleLogout}>Logga ut</Button>
        </div>
    </>
  );
}
