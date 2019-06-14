import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import Nav from './Nav';
import Start from './Start';

export default function StartGame(props){
    return(
      <Container>
        <Row>
          <Col  xs={{span:12}} 
                sm={{span:10, offset:1}}
                md={{span:8, offset:2}}
                lg={{span:6, offset:3}}
                xl={{span:6, offset:3}}>
            <Nav money={props.money} bet={props.bet} />
            <Start start={props.start} money={props.money} bet={props.bet} addToBet={props.addToBet} />        
          </Col>
        </Row>
  
      </Container>
    );
  }