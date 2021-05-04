import React from 'react'
import { Button, Card } from "react-bootstrap";
import {BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import manne from '../profileicons/manne.svg';
import johnny from '../profileicons/johnny.svg';
import ronny from '../profileicons/ronny.svg';


export default function Profile({handleLogout}) {
  return (
      <>
            <div className="profilecard">
                <Card>
                    <Card.Body>
                        <Card.Title>Profil</Card.Title>
                        <Card.Img class="img" variant="top" src={manne} alt="Manne profile icon" />
                        <Card.Text class="name">Manne 36</Card.Text>
                        <Card.Subtitle>
                            Tja! Manne här! Jag gillar att käka god mat och gamear gärna när jag
                            får tid över. Sugen på en bärs eller ska vi ba käka lunch? Hör av
                            dig!
                        </Card.Subtitle>
                        <Card.Text class="buddies">Hänger ofta med</Card.Text>
                    </Card.Body>
                </Card>
                    <Switch>
                    <div><Link to="/Johnny"><img src={johnny}alt="Johnny" /></Link>  Johnny the Trucker</div>
                    </Switch>
                    <Switch>
                    <div><Link to="/Ronny"><img src={ronny} alt="Ronny"/></Link>  Ronny Booster</div>
                    </Switch>

                </div>
                
        <div>
            <Button onClick={handleLogout}>Logga ut</Button>
        </div>
    </>
  );
}
