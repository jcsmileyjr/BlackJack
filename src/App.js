import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import Nav from './component/Nav';
import Start from './component/Start';
import PlayArea from './component/PlayArea';


function PlayGame(props){
  return(
    <Container>
      <Row>
        <Col  xs={{span:12}} 
              sm={{span:10, offset:1}}
              md={{span:8, offset:2}}
              lg={{span:6, offset:3}}
              xl={{span:6, offset:3}}>
          <Nav money={props.money} />
          <PlayArea />        
        </Col>
      </Row>

    </Container>
  );
}

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
          <Start money={props.money} bet={props.bet} addToBet={props.addToBet} />        
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
      startPlay: true,
      currentBet: 5,
    }
  }

  //method to increase the bet amount up to the fund limit. If the bet amount is greater then fund
  //then the bet amount start over at 5.
  increaseBet = () =>{
    if(this.state.currentBet >= this.state.funds){
      this.setState(previousState => ({
        currentBet: 5,
      }));      
    }else {
      this.setState(previousState => ({
        currentBet: previousState.currentBet + 5,
      }));
    }
  }  

  render(){
    return(
      <Container>
        {this.state.startPlay === false &&
        <StartGame  money={this.state.funds} 
                    addToBet = {this.increaseBet}
                    bet={this.state.currentBet} />
        }
        {this.state.startPlay === true &&
          <PlayGame money={this.state.funds} />
        }
      </Container>
    );
  }
}
export default App;
