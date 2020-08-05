import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../App.css";
import PrimaryButton from "./PrimaryButton";

export default function Start(props) {
  const [pulseAnimation, setPulse] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPulse("")
    }, 1000);
  });

  return (
    <Container className="appBackgroundColor primaryColor center whiteSpaceUnderNav startScreenHeightBugFix">
      <Row className="whitespaceBetweenNavStartTite">
        <Col>
          <h3>Let's Play</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Black Jack</h1>
        </Col>
      </Row>
      <Row>
        <Col
          className={`redCheque ${pulseAnimation}`}
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
      <Row>
        <Col>
          Click the chip to increase your bet, in increments of $5, up to your
          bank amount of ${props.money}
        </Col>
      </Row>
      <Row>
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
    </Container>
  );
}
