import React from 'react'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Activities() {
    return (
        <div className="webcontext">
        <Container>
          <Link to="/addevent" id="addButton">
            Skapa aktivitet +
          </Link>
        </Container>
      </div>
    );
}
