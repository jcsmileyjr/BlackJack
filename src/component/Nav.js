import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

export default function Nav(props) {
  return (
    <Container>
      <Row className="navBackground">
        <Col xs={5} className="center primaryColor">Bet ${props.bet}</Col>
        <Col xs={7} className="center primaryColor">Funds ${props.money}</Col>
      </Row>
    </Container>
  );
}
