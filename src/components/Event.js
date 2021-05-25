import React from "react";
import firebase from "../fire";
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import manne from '../profileicons/manne.svg';
import sonny from '../profileicons/sonny.svg';
import rocky from '../profileicons/rocky.svg';
import removecalendar from '../profileicons/removecalendar.svg';

export default function Event({ event }) {
  const deleteEvent = () => {
    const eventRef = firebase.database().ref("Event").child(event.id);
    eventRef.remove();
  };

  console.log(event);

  return (
    <div className="eventcard">
      <h1>{event.title} - {event.date}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{event.time}</h1>
      <h3>{event.textarea}</h3>
      <h2>Värd</h2>
      <figure className="deltagare">
          <Link to="/Profile">
            <img width="41" height="41" src={manne} alt="Manne" />
          </Link>
      </figure>
      <h2>Deltagare</h2>
      <figure className="deltagare">
          <Link to="/Sonny">
            <img width="41" height="41" src={sonny} alt="Sonny" />
          </Link>
          &nbsp; &nbsp; 
          <Link to="/Rocky">
            <img width="41" height="41" src={rocky} alt="Rocky" />
          </Link>
      </figure>
      <br/>
      <button className="deleteButton" src onClick={deleteEvent}>
      <img src={removecalendar} width="48" height="34" alt="Add as a contact" />
      </button>

    </div>
  );
}