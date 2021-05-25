import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import calendar from './calendar.svg';
import face from './face.svg';
import activities from './activities.svg';
import profile from './profile.svg'
import heyo from './heyo.svg'
import {useMobile} from '../components/useMobile';

 
const styles = {  
    margin: "-10px",
    background: "#FFF0E2",
    padding: "10px",
    width: "101%",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
  };
 
const Navbar = () => {
  const isMobile = useMobile();
 
  return (
      <section>
        <div style={styles}>
            <div><Link to="/friends"><img src={face} alt="friends" id="navbaricons" /></Link></div>
            <div><Link to="/activities"><img src={activities} alt="activities" id="navbaricons" /></Link></div>
            {!isMobile && <div><img src={heyo} style={{marginTop:"0px"}} alt="logo" id="navbaricons" /></div> }            
            <div><Link to="/calender"><img src={calendar} alt="calender" id="navbaricons" /></Link></div>
            <div><Link to="/profile"><img src={profile} alt="profile" id="navbaricons" /> </Link></div>
          </div>
      </section>
  )
}
 
export default Navbar