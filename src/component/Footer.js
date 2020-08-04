import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

export default function Footer(props) {
  useEffect(() => { testing(); }, []);

  const testing = async () => {
    const response = await fetch(`api/getNames`);
	const data = await response.json();// Extracts the JSON from the response.body and converts JSON string into a JavaScript object
    console.log(data.data.winners)
  }  

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