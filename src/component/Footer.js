import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

export default function Footer(props) {
  return (
    <Container fluid className="footer-background">
      <Row>
        <Col className="center primaryColor">HIGH SCORES</Col>
      </Row>
      <Row >
        <Col className="center primaryColor">Wonderwoman</Col>
        <Col className="center primaryColor">$11000 </Col>
      </Row>
      <Row >
        <Col className="center primaryColor">Superman</Col>
        <Col className="center primaryColor">$10000 </Col>
      </Row>
      <Row >
        <Col className="center primaryColor">Ironman</Col>
        <Col className="center primaryColor">$9000 </Col>
      </Row>
    </Container>
  );
}