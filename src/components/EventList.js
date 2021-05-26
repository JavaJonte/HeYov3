import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom' //De importerer behövs för att Routing ska fungera
import firebase from "../fire";
import Event from "./Event";
import Container from "react-bootstrap/Container";
import johnny from '../profileicons/johnny.svg';
import manne from '../profileicons/manne.svg';
import sonny from '../profileicons/sonny.svg';
import rocky from '../profileicons/rocky.svg';
import jeff from '../profileicons/jeff.svg';
import addtocalendar from '../profileicons/addtocalendar.svg';
import { Card} from "react-bootstrap";

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  const history = useHistory();

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
        <Card.Text className="title">Aktiviteter</Card.Text>
        <Link to="/addevent" id="addButton">
          Skapa aktivitet +
        </Link>
          </Container>
      {eventList.length !== 0 ? (
          eventList.map((event, index)=> <Event event={event} key={index} />)
        ) : (
          //Om aktivitetskalender är tom, visa följande på sidan:
          <div className="emptyCalendar">
          </div>
        )}
        
      <div className="eventcard">
      <h1>Brädspelskväll - 24/4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 16:00</h1>
      <h3>Schack och Backgammon hemma hos mig! Står för chips och några bärs ;)</h3>
      <h2>Värd</h2>
      <figure className="deltagare">
          <Link to="/Johnny">
            <img width="41" height="41" src={johnny} alt="Johnny" />
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
          <br/>
      <button className="addtocalendar" onClick>
            <img src={addtocalendar} alt="Add event to your calender" />
      </button>
    </div>

    <div className="eventcard">
      <h1>Grillkväll - 10/5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 18:00</h1>
      <h3>Ta med dig egen dryck och kött så bjuder jag på potatissallad! 
        Vi sitter på min altan, tänder grillen och har det gött helt enkelt! Väl mött</h3>
      <h2>Värd</h2>
      <figure className="deltagare">
          <Link to="/Rocky">
            <img width="41" height="41" src={rocky} alt="Rocky" />
          </Link>
      </figure>
      <h2>Deltagare</h2>
      <figure className="deltagare">
          <Link to="/Profile">
            <img width="41" height="41" src={manne} alt="Manne" />
          </Link>
          &nbsp; &nbsp; 
          <Link to="/Sonny">
            <img width="41" height="41" src={sonny} alt="Sonny" />
          </Link>
      </figure>
          <br/>
      <button className="addtocalendar" onClick={ () => {
          history.push("/calender/3");
      } }>
            <img src={addtocalendar} alt="Add event to your calender" />
      </button>
    </div>

    <div className="eventcard">
      <h1>Kräftskriva - 6/8&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 20:00</h1>
      <h3>Kidsen är hos svärföräldrarna så vi kör en kräftskiva! 
        Jag bjuder på dryck och västerbottenostpaj, så ta med er så mycket kräftor ni orkar! Tjoho!</h3>
      <h2>Värd</h2>
      <figure className="deltagare">
          <Link to="/Jeff">
            <img width="41" height="41" src={jeff} alt="Jeff" />
          </Link>
      </figure>
      <h2>Deltagare</h2>
      <figure className="deltagare">
          <Link to="/Sonny">
            <img width="41" height="41" src={sonny} alt="Sonny" />
          </Link>
          &nbsp; &nbsp; 
          <Link to="/Johnny">
            <img width="41" height="41" src={johnny} alt="Johnny" />
          </Link>
          &nbsp; &nbsp; 
          <Link to="/Rocky">
            <img width="41" height="41" src={rocky} alt="Rocky" />
          </Link>
      </figure>
          <br/>
      <button className="addtocalendar" onClick>
            <img src={addtocalendar} alt="Add event to your calender" />
      </button>
    </div>

      </div>
    </>
  );
}
