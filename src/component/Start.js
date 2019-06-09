import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import '../App.css';

export default function Start(props){
    return(
        <Container className="appBackgroundColor orangeColor center">
            <Row><Col><h3>Are you ready to play</h3></Col></Row>
            <Row><Col><h1>Black Jack</h1></Col></Row>
            <Row className="redCheque"><Col>$5</Col></Row>
            <Row><Col>Click to increase by increments of $5 up to your ${props.money}</Col></Row>
            <Row><Col><Button   variant="warning"
                                className="buttonTextStyle" 
                                size="lg" >Let's Play</Button></Col></Row>
        </Container>
    );
}