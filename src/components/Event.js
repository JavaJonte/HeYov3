import React from "react";
import firebase from "../fire";

export default function Event({ event }) {
  const deleteEvent = () => {
    const eventRef = firebase.database().ref("Event").child(event.id);
    eventRef.remove();
  };

  console.log(event);

  return (
    <div className="eventcard">
      <h1>{event.title}</h1>
      <h2>
        {event.date}, {event.time}
      </h2>
      <h3>{event.textarea}</h3>
      <button className="deleteButton" onClick={deleteEvent}>
        Ta bort aktivitet
      </button>
    </div>
  );
}