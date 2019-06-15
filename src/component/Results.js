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
            
        </Container>
    );
}