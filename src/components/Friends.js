import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Container, Card} from "react-bootstrap";
import johnnyb from '../profileicons/johnnyb.svg';
import ronnyb from '../profileicons/ronnyb.svg';
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
                    <Link to="/Johnny"><img src={johnnyb}alt="Johnny" /></Link>  
                    Johnny 
                
                    <Link to="/Ronny"><img src={ronnyb} alt="Ronny"/></Link>
                    Ronny
                
                    <Link to="/Kenny"><img src={kenny} alt="Kenny"/></Link>
                    Kenny

                    <Link to="/Lenny"><img src={lenny} alt="Lenny"/></Link>
                    Lenny
                
                    <Link to="/Rocky"><img src={rocky} alt="Rocky"/></Link>
                    Rocky
                
                    <Link to="/Sonny"><img src={sonny} alt="Sonny"/></Link>
                    Sonny

                    <Link to="/Jeff"><img src={jeff} alt="Jeff"/></Link>
                    Jeff
                    </div>
            </Container>
        
    )
}
