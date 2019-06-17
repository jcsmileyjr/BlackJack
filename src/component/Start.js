import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import PrimaryButton from './PrimaryButton';

export default function Start(props){
    return(
        <Container className="appBackgroundColor primaryColor center whiteSpaceUnderNav">
            <Row><Col><h3>Are you ready to play</h3></Col></Row>
            <Row><Col><h1>Black Jack</h1></Col></Row>
            <Row>
                <Col    className={`redCheque ${props.pulse}`}
                        onClick={() => {props.addToBet(); props.clickToPulse()}} 
                        xs={{span:9, offset:1}} 
                        sm={{span:8, offset:2}}
                        md={{span:6, offset:3}}
                        lg={{span:6, offset:3}}
                        xl={{span:6, offset:3}}
                         >
                            ${props.bet}
                </Col>
            </Row>
            <Row><Col>Click the chip to increase your bet, in increments of $5, up to your bank amount of ${props.money}</Col></Row>
            <Row><Col><PrimaryButton size="largeButtonSize" title="Let's Play" action={props.start} /></Col></Row>
        </Container>
    );
}