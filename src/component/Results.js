import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import PrimaryButton from './PrimaryButton';

export default function Results(props){
    return(
        <Container className="appBackgroundColor primaryColor center">
            {props.gameResults === "win" &&
            <Row className="whiteSpaceBetweenElements"><Col><h1>YOU WON!!!</h1></Col></Row>
            }
            {props.gameResults === "lose" &&
            <Row className="whiteSpaceBetweenElements"><Col><h1>You LOSE!!!</h1></Col></Row>
            }
            {props.gameResults === "push" &&
            <Row className="whiteSpaceBetweenElements"><Col><h1>It was a TIE</h1></Col></Row>
            }  
            <Row className="whiteSpaceBetweenElements">
                <Col className="center">Dealer</Col>
                <Col className="center">{props.dealerTotal}</Col>
            </Row>
            <Row className="whiteSpaceBetweenElements">
                <Col className="center">Player</Col>
                <Col className="center">{props.playerTotal}</Col>
            </Row>            
            <Row className="whiteSpaceBetweenElements">
                <Col    className="smallRedCheque primaryColor" 
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
            <Row className="center whiteSpaceBetweenElements">
                <Col xs={12} className="instructionText">Click to increase by increments of $5 up to your funds limit</Col>
            </Row>   
            <Row className="whiteSpaceBetweenElements"><Col><PrimaryButton size="lg" title="Let's Play" action={props.start} /></Col></Row>       
                                    
            
        </Container>
    );
}