import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

export default function LetsPlayButton(props) {
  return (
    <Container>
      <Row>
        <Col>
          <button className="buttonTextStyle">Let's Play</button>
        </Col>
      </Row>
    </Container>
  );
}
