import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';

export default function Start(props){
    return(
        <Container>
            <Row><Col className="center"><h3>Are you ready to play</h3></Col></Row>
            <Row><Col className="center"><h1>Black Jack</h1></Col></Row>
            <Row className="center redCheque orangeColor"><Col>$5</Col></Row>
        </Container>
    );
}