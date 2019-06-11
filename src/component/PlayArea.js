import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import CardArea from './CardArea';

export default function PlayArea(props){
    return(
        <Container className="appBackgroundColor">
            <Row>
                <Col>
                    <CardArea bgColor ="dealerAreaColor" />
                    <CardArea bgColor = "playerAreaColor" />
                </Col>
            </Row>
        </Container>
    );
}