import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import CardArea from './CardArea';
import PrimaryButton from './PrimaryButton';

export default function PlayArea(props){
    return(
        <Container className="appBackgroundColor">
            <Row>
                <Col>
                    <CardArea bgColor ="dealerAreaColor" cardsGiven = {props.dealerCards} total={props.dealerTotal} tableTitle="Dealer" />
                    <CardArea bgColor = "playerAreaColor" cardsGiven={props.playerCards} total={props.playerTotal} tableTitle="Player" />
                </Col>
            </Row>
            <Row>
                <Col xs={4}><PrimaryButton size="sm" title="Hit" action={props.hit} /></Col>
                <Col xs={8}><p className="instructionText">Get another card. If your new total is over 17, you lose!</p></Col>
            </Row>
            <Row>
                <Col xs={4}><PrimaryButton size="sm" title="Stand" action={props.stand} /></Col>
                <Col xs={8}><p className="instructionText">Your turn ends. The dealer starts drawing cards!</p></Col>
            </Row> 
            <Row>
                <Col xs={4}><PrimaryButton size="sm" title="Double Down" action={props.doubleDown} /></Col>
                <Col xs={8}><p className="instructionText">Double your bet, get one card, and the dealer turn starts!</p></Col>
            </Row>
            <Row>
                <Col xs={4} className="smallRedCheque primaryColor">${props.bet}</Col>
                <Col xs={8}><p className="instructionText centerBetAmountText">Current Bet Amount!</p></Col>
            </Row>                                   
        </Container>
    );
}