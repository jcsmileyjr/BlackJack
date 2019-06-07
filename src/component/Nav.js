import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';

export default function Nav(props){
    return(
        <Container>
            <Row>
                <Col className="center orangeColor">
                Bob
                </Col>
                <Col className="center orangeColor">
                    Funds ${props.money}
                </Col>
            </Row>
        </Container>
    );
}