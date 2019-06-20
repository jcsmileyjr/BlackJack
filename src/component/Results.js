import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";
import PrimaryButton from "./PrimaryButton";

export default function Results(props) {
  return (
    <Container className="appBackgroundColor primaryColor center whiteSpaceUnderNav">
      {props.gameResults === "win" && (
        <Row className="whiteSpaceBetweenElements">
          <Col>
            <h1>YOU WON!!!</h1>
          </Col>
        </Row>
      )}
      {props.gameResults === "lose" && (
        <Row className="whiteSpaceBetweenElements">
          <Col>
            <h1>You LOSE!!!</h1>
          </Col>
        </Row>
      )}
      {props.gameResults === "push" && (
        <Row className="whiteSpaceBetweenElements">
          <Col>
            <h1>It was a TIE</h1>
          </Col>
        </Row>
      )}
      <Row className="whiteSpaceBetweenElements">
        <Col className="center">
          <h5>Dealer</h5>
        </Col>
        <Col className="center">
          <h5>{props.dealerTotal}</h5>
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col className="center">
          <h5>Player</h5>
        </Col>
        <Col className="center">
          <h5>{props.playerTotal}</h5>
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col
          className={`smallRedCheque primaryColor ${props.pulse}`}
          onClick={() => {
            props.addToBet();
            props.clickToPulse();
          }}
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
          xl={{ span: 6, offset: 3 }}
        >
          ${props.bet}
        </Col>
      </Row>
      <Row className="center whiteSpaceBetweenElements">
        <Col xs={12} className="instructionText">
          Click the chip to increase your bet, in increments of $5, up to your
          funds limit
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col>
          <PrimaryButton
            size="largeButtonSize"
            title="Let's Play"
            action={props.start}
          />
        </Col>
      </Row>
    </Container>
  );
}
