import React, {useState, useEffect} from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../App.css";
import PrimaryButton from "./PrimaryButton";

export default function Results(props) {
  
const [pulseAnimation, setPulse] = useState("");
const [showSaveButton, setShowSaveButton] = useState(false);
const [playerName, setPlayerName] = useState("");

useEffect(() => {
  setTimeout(() => {
    setPulse("")
  }, 1000);
});

const saveUserToScoreboard = () => {
  setShowSaveButton(false)
}

  return (
    <Container className="resultsBackgroundColor  primaryColor center whiteSpaceUnderNav">
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
        <Col className="pull-right">
          <h5>Dealer</h5>
        </Col>
        <Col className="pull-left">
          <h5>{props.dealerTotal}</h5>
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col className="pull-right">
          <h5>Player</h5>
        </Col>
        <Col className="pull-left">
          <h5>{props.playerTotal}</h5>
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col
          className={`smallRedCheque primaryColor ${pulseAnimation}`}
          onClick={() => {
            props.addToBet();
            setPulse("pulseWhenClicked");
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
          <Link to="/play">
            <PrimaryButton
              size="largeButtonSize"
              title="Let's Play"
              action={props.start}
            />
          </Link>
        </Col>
      </Row>
      <Row className="whiteSpaceBetweenElements">
        <Col>
            <PrimaryButton
              size="largeButtonSize"
              title="Save to Scoreboard"
              action={() => setShowSaveButton(true)}
            />
        </Col>
      </Row>
      <Modal show={showSaveButton} onHide={() => setShowSaveButton(false)} >
          <Modal.Header closeButton>
            <Modal.Title>Add your name to the ScoreBoard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={playerName}  onChange={e => setPlayerName(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <PrimaryButton
              size="largeButtonSize"
              title="Save to Scoreboard"
              action={() => saveUserToScoreboard()}
            />
          </Modal.Footer>
      </Modal>
    </Container>
  );
}
