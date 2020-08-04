import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";
import Nav from "./Nav";
import Start from "./Start";
import Footer from "./Footer";

export default function StartGame(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Nav money={props.money} bet={props.bet} />
          <Start
            start={props.start}
            money={props.money}
            pulse={props.pulse}
            clickToPulse={props.clickToPulse}
            bet={props.bet}
            addToBet={props.addToBet}
          />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
