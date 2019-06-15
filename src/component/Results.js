import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';

export default function Results(props){
    return(
        <Container className="appBackgroundColor primaryColor center">
            {props.gameResults === "win" &&
            <Row><Col><h1>You Win!!!</h1></Col></Row>
            }
            {props.gameResults === "lose" &&
            <Row><Col><h1>You Lose!!!</h1></Col></Row>
            }
            {props.gameResults === "push" &&
            <Row><Col><h1>It was a Tie</h1></Col></Row>
            }  
            <Row>
                <Col className="center">Dealer</Col>
                <Col className="center">{props.dealerTotal}</Col>
            </Row>
            <Row>
                <Col className="center">Player</Col>
                <Col className="center">{props.playerTotal}</Col>
            </Row>
            <Row className="center">
                <Col xs={12} className="smallRedCheque primaryColor">${props.bet}</Col>
                <Col xs={12} className="instructionText">Click to increase by increments of $5 up to your funds limit</Col>
            </Row>          
                                    
            
        </Container>
    );
}