import React from 'react';
import Popup from 'reactjs-popup';
import { Modal, Button } from "react-bootstrap";
import 'reactjs-popup/dist/index.css';
import addcontact from "../profileicons/addcontact.svg";
 
export default () => (
  <Popup trigger={<button> <img src={addcontact} width="45" alt="Add as a contact" /> </button>} position="top">
    <div>
       <Button>Add friend</Button>
       <hr></hr>
       <Button>Close</Button>
    </div>
  </Popup>
);