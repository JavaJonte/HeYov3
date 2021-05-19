import React from "react";
import { Modal, Button } from "react-bootstrap";
import addcontact from "../profileicons/addcontact.svg";
import pew from "../profileicons/pew.svg";

function SendFriendRequest(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Module() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="addfriend" onClick={() => setModalShow(true)}>
        <img src={addcontact} width="45" alt="Add as a contact" />
      </Button>

      <Button className="addfriend" onClick>
        <img src={pew} width="45" alt="Poke" />
      </Button>

      <SendFriendRequest show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Module;
