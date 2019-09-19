import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";
import Nav from "./Nav";
import PlayArea from "./PlayArea";

export default function PlayGame(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Nav money={props.money} bet={props.bet} />
          <PlayArea
            hit={props.hit}
            stand={props.stand}
            doubleDown={props.doubleDown}
            dealerCards={props.dealerCards}
            playerCards={props.playerCards}
            playerTotal={props.playerTotal}
            dealerTotal={props.dealerTotal}
          />
        </Col>
      </Row>
    </Container>
  );
}
