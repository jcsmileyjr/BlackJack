import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import '../App.css';

export default function Start(props){
    return(
        <Container className="appBackgroundColor orangeColor center">
            <Row><Col><h3>Are you ready to play</h3></Col></Row>
            <Row><Col><h1>Black Jack</h1></Col></Row>
            <Row>
                <Col    className="redCheque" 
                        onClick={() => {props.addToBet()}} 
                        xs={{span:9, offset:1}} 
                        sm={{span:8, offset:2}}
                        md={{span:6, offset:3}}
                        lg={{span:6, offset:3}}
                        xl={{span:6, offset:3}}
                         >
                            ${props.bet}
                </Col>
            </Row>
            <Row><Col>Click to increase your bet, in increments of $5, up to your bank amount of ${props.money}</Col></Row>
            <Row><Col><Button   variant="warning"
                                className="buttonTextStyle"
                                onClick={()=>{props.start()}} 
                                size="lg" >Let's Play</Button></Col></Row>
        </Container>
    );
}