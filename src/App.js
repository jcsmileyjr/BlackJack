import React, { Component } from 'react';

import './App.css';
import Nav from './component/Nav';
import Start from './component/Start';
import { Container, Row, Col } from 'react-bootstrap';

function StartGame(props){
  return(
    <Container>
      <Row>
        <Col  xs={{span:12}} 
              sm={{span:10, offset:1}}
              md={{span:8, offset:2}}
              lg={{span:6, offset:3}}
              xl={{span:6, offset:3}}>
          <Nav money={props.money} />
          <Start money={props.money} />        
        </Col>
      </Row>

    </Container>
  );
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      funds:100,
      startPlay: false,
    }
  }

  render(){
    return(
      <Container>
        {this.state.startPlay === false &&
        <StartGame money={this.state.funds} />
        }
      </Container>
    );
  }
}
export default App;
