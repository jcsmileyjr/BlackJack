import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import {cards} from './component/cardDeck';
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
          <PlayArea dealerCards={props.dealerCards} playerCards={props.playerCards} />        
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
      dealerStack:[],
      playerStack:[],
    }
  }

  componentDidMount() {
    this.dealCards();//Testing
  }

  //At the beginning of the game the player is dealt 2 face up cards and the dealer one face up/one face down
  dealCards = () =>{

    let playerCards = [];
    const playerCard1 = Math.floor(Math.random() * cards.length) + 1;
    let playerCard2 = Math.floor(Math.random() * cards.length) + 1;

    if(playerCard2 === playerCard1){
      playerCard2 = Math.floor(Math.random() * cards.length) + 1;
    }

    playerCards.push(cards[playerCard1]);
    playerCards.push(cards[playerCard2]);

    let dealerCards = [];
    const dealerCard1 = Math.floor(Math.random() * cards.length) + 1;

    dealerCards.push(cards[dealerCard1]);
    dealerCards.push(cards[0]);

    this.setState({playerStack: playerCards, dealerStack:dealerCards});
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
          <PlayGame money={this.state.funds} dealerCards={this.state.dealerStack} playerCards={this.state.playerStack} />
        }
      </Container>
    );
  }
}
export default App;
