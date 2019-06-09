import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import LetsPlayButton from './LetsPlayButton';

export default function Start(props){
    return(
        <Container className="appBackgroundColor orangeColor center">
            <Row><Col><h3>Are you ready to play</h3></Col></Row>
            <Row><Col><h1>Black Jack</h1></Col></Row>
            <Row className="redCheque"><Col>$5</Col></Row>
            <Row><Col>Click to increase by increments of $5 up to your ${props.money}</Col></Row>
            <Row><Col><LetsPlayButton /></Col></Row>
        </Container>
    );
}