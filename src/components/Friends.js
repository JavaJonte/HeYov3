import React from 'react'
import {BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { Container, Card, Row, Col } from "react-bootstrap";
import johnnyb from '../profileicons/johnnyb.svg';
import ronnyb from '../profileicons/ronnyb.svg';
import kenny from '../profileicons/kenny.svg';
import rocky from '../profileicons/rocky.svg';
import sonny from '../profileicons/sonny.svg';

export default function Friends() {
    return (
            <Container class="friends">
                <Card.Text>Mina vänner</Card.Text>
                <Switch>
                    <div><Link to="/Johnny"><img src={johnnyb}alt="Johnny" /></Link>  
                    <br/>Johnny</div>
                </Switch>
                <Switch>
                    <div><Link to="/Ronny"><img src={ronnyb} alt="Ronny"/></Link>
                    <br/>Ronny</div>
                </Switch>
                <Switch>
                    <div><Link to="/Kenny"><img src={kenny} alt="Kenny"/></Link>
                    <br/>Kenny</div>
                </Switch>
                <Switch>
                    <div><Link to="/Rocky"><img src={rocky} alt="Rocky"/></Link>
                    <br/>Rocky</div>
                </Switch>
                <Switch>
                    <div><Link to="/Sonny"><img src={sonny} alt="Sonny"/></Link>
                    <br/>Sonny</div>
                </Switch>
            </Container>
        
    )
}
