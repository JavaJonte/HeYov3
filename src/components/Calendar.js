import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Link, Switch, Route, useParams } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import firebase from "../fire";
import Event from "./Event";
import Container from "react-bootstrap/Container";
import activities from '../navbar/activities.svg';
import { Card} from "react-bootstrap";

export default function Calendar() {
  const [eventList, setEventList] = useState([]);
  const {user} = useParams();

  useEffect(() => {
    const eventRef = firebase.database().ref("Event");
    eventRef.on("value", (snapshot) => {
      const events = snapshot.val();
      const eventList = [];

      for (let id in events) {
        eventList.push({ id, ...events[id] });
      }

      if (user === "1"){
        eventList.push({id: 1000,title:"Grillkväll",date: "10/5",time: "18:00", textarea: "Ta med dig egen dryck och kött så bjuder jag på potatissallad! Vi sitter på min altan, tänder grillen och har det gött helt enkelt! Väl mött"});
      }
      console.log(eventList);
      setEventList(eventList);
    });
  }, []);

    return (
        <div className="webcontext">
        <Container>
        <Card.Text className="title">Min kalender</Card.Text>
        <Link to="/addevent" id="addButton">
            Skapa aktivitet +
          </Link>
          
          {eventList.length !== 0 && user === "1" ? (
          eventList.map((event, index)=> <Event event={event} key={index} />)
        ) : (
          //Om aktivitetskalender är tom, visa följande på sidan:
          <div className="emptyCalendar">
          <Container>
            <h2>
              Du har inga kommande aktiviteter än. Kolla vad dina vänner
              pysslar med för att se om det finns något att haka på!
            </h2>
            <br />
            <img src={activities} id="callogo" alt="Calendar SVG" />
            <br />
            <br />
            <br />
            <h2>
              Eller varför inte själv skapa en aktivitet att bjuda in dina
              polers till!
            </h2>
          </Container>
        </div>
        )}
        </Container>
      </div>
    );
}
