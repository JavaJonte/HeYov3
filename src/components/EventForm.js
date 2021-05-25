import React, { useState } from "react";
import fire from "../fire";
import firebase from "../fire";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleTextarea = (e) => {
    setTextarea(e.target.value);
  };

  const createEvent = () => {
    const eventRef = firebase.database().ref("Event");

    const event = {
      title,
      date,
      time,
      textarea,
    };
    setTitle("");
    setDate("");
    setTime("");
    setTextarea("");
    eventRef.push(event);
  };

  return (
    <div className="addForm">
      <br />
      &nbsp; &nbsp; &nbsp; Skriv in aktivitetens namn
      <br />
      <input
        className="formtext"
        type="text"
        onChange={handleTitle}
        value={title}
      />
      <br />
      <br />
      &nbsp; &nbsp; &nbsp; Välj datum
      <br />
      <input
        className="formtext"
        type="date"
        onChange={handleDate}
        value={date}
      />
      <br />
      <br />
      &nbsp; &nbsp; &nbsp; Välj tid
      <br />
      <input
        className="formtext"
        type="time"
        onChange={handleTime}
        value={time}
      />
      <br />
      <br />
      &nbsp; &nbsp; &nbsp; Beskriv aktiviteten
      <br />
      <input
        className="formtextarea"
        type="textarea"
        maxLength="500"
        placeholder="max 500 tecken"
        onChange={handleTextarea}
        value={textarea}
      />
      <br />
      <br />
      <button className="addInForm" onClick={createEvent}>
        &nbsp; &nbsp; &nbsp; Skapa &nbsp; &nbsp; &nbsp;
      </button>
    </div>
  );
}
