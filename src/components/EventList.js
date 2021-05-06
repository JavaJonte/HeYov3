import React, { useState, useEffect } from "react";
import firebase from "../fire";
import Event from "./Event";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import activities from "../navbar/activities.svg";

export default function EventList() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const eventRef = firebase.database().ref("Event");
    eventRef.on("value", (snapshot) => {
      const events = snapshot.val();
      const eventList = [];

      for (let id in events) {
        eventList.push({ id, ...events[id] });
      }
      console.log(eventList);
      setEventList(eventList);
    });
  }, []);

  return (
    <>
      <div className="webcontext">
          <Container>
        <Link to="/addevent" id="addButton">
          Skapa aktivitet +
        </Link>
          </Container>
        {eventList.length !== 0 ? (
          eventList.map((event, index) => <Event event={event} key={index} />)
        ) : (
          //Om aktivitetskalender är tom, visa följande på sidan:
          <div className="emptyCalendar">
            <Container>
              <h1>Min kalender</h1>
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
      </div>
    </>
  );
}
