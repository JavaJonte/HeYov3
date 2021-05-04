import React from 'react'
import { Button } from "react-bootstrap";


export default function Profile({handleLogout}) {
  return (
    <div>
      <Button onClick={handleLogout}>Logga ut</Button>
    </div>
  );
}
