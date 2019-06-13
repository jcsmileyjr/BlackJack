import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';

export default function Nav(props){
    return(
        <Container>
            <Row className="navBackground">
                <Col className="center primaryColor">
                BlackJack
                </Col>
                <Col className="center primaryColor">
                    Funds ${props.money}
                </Col>
            </Row>
        </Container>
    );
}