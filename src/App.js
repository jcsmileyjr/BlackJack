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
          <PlayArea hit={props.hit}
                    stand = {props.stand}
                    doubleDown={props.doubleDown}
                    bet={props.bet}
                    dealerCards={props.dealerCards} 
                    playerCards={props.playerCards}
                    playerTotal={props.playerTotal} 
                    dealerTotal={props.dealerTotal} />        
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
          <Start start={props.start} money={props.money} bet={props.bet} addToBet={props.addToBet} />        
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
      currentBet: 5,
      dealerStack:[],
      playerStack:[],
      dealerDeckTotal:0,
      playerDeckTotal:0,
    }
  }

  componentDidMount() {
    this.dealCards();//Testing purposes
  }

  //At the beginning of the game the player is dealt 2 face up cards and the dealer one face up/one face down
  dealCards = () =>{

    let playerCards = [];
    const playerCard1 = Math.floor(Math.random() * (cards.length - 1)) + 1;
    let playerCard2 = Math.floor(Math.random() * (cards.length - 1)) + 1;

    if(playerCard2 === playerCard1){
      playerCard2 = Math.floor(Math.random() * (cards.length -1 )) + 1;
    }

    playerCards.push(cards[playerCard1]);
    playerCards.push(cards[playerCard2]);

    let dealerCards = [];
    const dealerCard1 = Math.floor(Math.random() * (cards.length -1 )) + 1;
//console.log("dealer: " + dealerCard1 + " player 1: " + playerCard1 + " player 2: " + playerCard2);
    dealerCards.push(cards[dealerCard1]);
    dealerCards.push(cards[0]);

    this.setState({ playerStack: playerCards, 
                    dealerStack:dealerCards,
                    playerDeckTotal: this.getCardPointsTotal(playerCards),
                    dealerDeckTotal:this.getCardPointsTotal(dealerCards)});
  }

  //Get a sum of all cards worth and update the state
  getCardPointsTotal = (deck)=>{
    console.table(deck);
    let total = 0;
    for(var i=0;i<deck.length;i++){
      if(deck[i].value === 11 && (total + 11) > 21){
        total += 2;
        break;
      }
      total += deck[i].value;
    }

    return total;
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

  //called from the start button on the Start Game component to start the game
  startGame = () =>{
    this.setState({startPlay:true});
  }

  playerHit = () =>{
    alert("Player Hit");
  }

  playerStand = () =>{
    alert("Player Stand");
  }

  playerDoubleDown = () =>{
    alert("Player Double Down");
  }

  render(){
    return(
      <Container>
        {this.state.startPlay === false &&
        <StartGame  money={this.state.funds}
                    start={this.startGame}
                    addToBet = {this.increaseBet}
                    bet={this.state.currentBet} />
        }
        {this.state.startPlay === true &&
          <PlayGame money={this.state.funds}
                    hit={this.playerHit}
                    stand={this.playerStand}
                    doubleDown={this.playerDoubleDown}
                    bet={this.state.currentBet}
                    dealerTotal = {this.state.dealerDeckTotal}
                    playerTotal = {this.state.playerDeckTotal} 
                    dealerCards={this.state.dealerStack} 
                    playerCards={this.state.playerStack} />
        }
      </Container>
    );
  }
}
export default App;
