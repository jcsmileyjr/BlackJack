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
            {props.playerTotal < 17 &&
            <Row>
                <Col xs={4}><PrimaryButton size="smallButtonSize" title="Hit" action={props.hit} /></Col>
                <Col xs={8}><p className="instructionText">Get another card. If your new total is over 17, you lose!</p></Col>
            </Row>            
            }

            <Row>
                <Col xs={4}><PrimaryButton size="smallButtonSize" title="Stand" action={props.stand} /></Col>
                <Col xs={8}><p className="instructionText">Click to end your turn. The dealer starts drawing cards!</p></Col>
            </Row>

            {props.playerTotal < 17 &&
            <Row>
                <Col xs={4}><PrimaryButton size="smallButtonSize" title="Double Down" action={props.doubleDown} /></Col>
                <Col xs={8}><p className="instructionText">Double your bet, get one card, and the dealer turn starts!</p></Col>
            </Row>            
            } 
                                   
        </Container>
    );
}