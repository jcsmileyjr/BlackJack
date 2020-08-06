import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";
import CardArea from "./CardArea";
import PrimaryButton from "./PrimaryButton";

function ButtonChoice(props) {
  return (
    <Row>
      <Col xs={4}>
        <PrimaryButton
          size="smallButtonSize"
          title={props.title}
          action={props.action}
        />
      </Col>
      <Col xs={8}>
        <p className="instructionText">{props.text}</p>
      </Col>
    </Row>
  );
}

export default function PlayArea(props) {
  return (
    <Container className="appBackgroundColor">
      <Row>
        <Col 
          xs={{span:12}}
          sm={{span:8, offset:2}}
        >
          <CardArea
            bgColor="dealerAreaColor"
            cardsGiven={props.dealerCards}
            total={props.dealerTotal}
            tableTitle="Dealer"
          />
          <CardArea
            bgColor="playerAreaColor"
            cardsGiven={props.playerCards}
            total={props.playerTotal}
            tableTitle="Player"
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{span:12}}
          sm={{span:8, offset:2}}        
        >
          {props.playerTotal < 17 && (
            <ButtonChoice
              title="Hit"
              action={props.hit}
              text={"Get another card. If your new total is over 21, you lose!"}
            />
          )}

          <ButtonChoice
            title="Stand"
            action={props.stand}
            text={"Click to end your turn. The dealer starts drawing cards!"}
          />

          {props.playerTotal >= 17 && props.dealerCards.length <3 && props.playerCards.length === 2 && (
            <p className="primaryColor whiteSpaceUnderNav">You must stand if your total is greater then 17.</p>
          )

          }

          {props.playerTotal < 17 && (
            <ButtonChoice
              title={"Double Down"}
              action={props.doubleDown}
              text={"Double your bet, get one card, and the dealer turn starts!"}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
