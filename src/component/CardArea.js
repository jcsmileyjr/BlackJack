import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "../App.css";

function Card(props) {
  return (
    <Container className="cardStyle playArea">
      <Row>
        <Col>
          <Image src={props.cardValue} rounded fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default function CardArea(props) {
  return (
    <Container className={`playArea ${props.bgColor}`}>
      <Row>
        <Col className="center" xs={10}>
          <h5>{props.tableTitle}</h5>
        </Col>
        <Col className="center" xs={2}>
          <h5>{props.total}</h5>
        </Col>
      </Row>
      <Row>
        {props.cardsGiven.map(function(deck, id) {
          return <Card key={id} cardValue={deck.pic} />;
        })}
      </Row>
    </Container>
  );
}
