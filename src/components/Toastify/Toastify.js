import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Toastify() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification successfully showed</strong>
        
          </Toast.Header>
          <Toast.Body>Woohoo, you've done amazing!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button className='btn btn-lg mt-3 btn-success text-center d-flex' onClick={() => setShow(true)}>Toast</Button>
      </Col>
    </Row>
  );
}

export default Toastify;