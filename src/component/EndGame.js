import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import '../App.css';
import Nav from './Nav';
import Results from './Results';

export default function EndGame(props){
    return(
      <Container>
        <Row>
          <Col  xs={{span:12}} 
                sm={{span:10, offset:1}}
                md={{span:8, offset:2}}
                lg={{span:6, offset:3}}
                xl={{span:6, offset:3}}>
            <Nav money={props.money} bet={props.bet} />
            <Results playerTotal={props.playerTotal}
                     gameResults = {props.gameResults}
                     addToBet={props.addToBet}
                     bet={props.bet} 
                     dealerTotal={props.dealerTotal} />
          </Col>
        </Row>
  
      </Container>
    );
  }