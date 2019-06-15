import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';
import {cards} from './component/cardDeck';
import PlayGame from './component/PlayGame';
import StartGame from './component/StartGame';
import EndGame from './component/EndGame';
import { lookupService } from 'dns';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      funds:100,
      startPlay: false,
      results: false,
      winLose: "lose", 
      currentBet: 5,
      dealerStack:[],
      playerStack:[],
      dealerDeckTotal:0,
      playerDeckTotal:0,
    }
  }

  componentDidMount() {
    this.dealCards();//deal two cards to player and dealer at the begining of the game
  }

  //At the beginning of the game the player is dealt 2 face up cards and the dealer one face up/one face down
  dealCards = () =>{

    let playerCards = [];//array to create player's hand of random cards and assigned to playerStack state
    const playerCard1 = this.randomCard();//get a random card
    let playerCard2 = this.randomCard();//get a random cad

    //check if the both cards are the same, if so get another random card
    if(playerCard2 === playerCard1){
      playerCard2 = this.randomCard();
    }

    //create a temp array that will be used as the player hand and add each card
    playerCards.push(cards[playerCard1]);
    playerCards.push(cards[playerCard2]);

    //set the cards played valued to true
    cards[playerCard1].played = true;
    cards[playerCard2].played = true;

    let dealerCards = [];
    const dealerCard1 = this.randomCard();//get a random card for the dealer

    dealerCards.push(cards[dealerCard1]);//add the first card to the dealer hand
    dealerCards.push(cards[0]);//add the cover card to the dealer hand

    cards[dealerCard1].played = true;
    cards[0].played = true;

    this.setState({ playerStack: playerCards, 
                    dealerStack:dealerCards,
                    playerDeckTotal: this.getCardPointsTotal(playerCards),
                    dealerDeckTotal:this.getCardPointsTotal(dealerCards)});                                
  }

  //standard method for getting a random index of the cards array
  randomCard = () =>{
    return Math.floor(Math.random() * (cards.length -1 )) + 1;
  }

  //method use to add one card to either the player or dealer hand
  dealACard = (stackOfCards) =>{
    let hand = stackOfCards;//get the current array of card objects
    let cardNumber = this.randomCard();//get a random card index number

    //check if card have been played already
    if(cards[cardNumber].played){
      cardNumber = this.randomCard();
      cards[cardNumber].played = true;
    }else{
      cards[cardNumber].played = true;
    }

    hand.push(cards[cardNumber]);//add the card object from the cards array based on the index number
 
    this.setState({stackOfCards:hand});//update the current array of cards objects
    
  }

  //Get a sum of all cards worth and update the state
  getCardPointsTotal = (deck)=>{
    
    let total = 0;
    let foundAces = 0;

    //loop through each card adding the value to "total". Keep track of all values that is 11 to add up later
    for(var i=0;i<deck.length;i++){
      if(deck[i].value === 11){//if the value is a 11, track it but don't add
        foundAces ++; 
      }else {
        total += deck[i].value;//add the value to total
      }
      
    }

    if(foundAces > 0){//if the number of Aces is more then 0, 
      for(var j=0;j<foundAces;j++){//loop through the number of Aces
               
        if((total + 11) > 21){//if the total of all cards including the Ace is over 21, add the Ace as a 2
          total += 2;
        }else {
          total += 11;//if the total of all cards including the Ace is under 21, add the Ace as a 11
        }       
      }
    }


    return total;
  }

  //method to increase the bet amount up to the fund limit. If the bet amount is greater then fund
  //then the bet amount start over at 5.
  increaseBet = () =>{
    if(this.state.currentBet >= this.state.funds){
      this.setState({currentBet:5});     
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

  //Show the Results component
  endGame = () =>{
    let gameResults = "lose";

    if((this.state.playerDeckTotal <= 21 && this.state.playerDeckTotal > this.state.dealerDeckTotal) || (this.state.dealerDeckTotal > 21 && this.state.playerDeckTotal <= 21)){
      gameResults = "win";
    }else if(this.state.playerDeckTotal === this.state.dealerDeckTotal){
      gameResults = "push";
    }else{
      gameResults = "lose";
    }  
    //switch to the EndGame component with results of the game
    this.setState({results:true, startPlay:false, winLose:gameResults});
  }

  //deals cards to the dealer till get a soft 17 or one card over
  dealerHand = () =>{
    let hand = this.state.dealerStack;//get the current dealer's hand
    hand.pop();//uncover the card by removing the "cover" card 
    
    let currentTotal = this.state.dealerDeckTotal;//get current sum of dealer's hand

    //Add card to the dealer hand as long as the sum of the dealer's and is less then or equal to 17
    do{
      
      this.dealACard(this.state.dealerStack);//deal the dealer one card

      //update the dealer's hand total points
      this.setState({dealerDeckTotal: this.getCardPointsTotal(this.state.dealerStack)});  

      //update currentTotal
      currentTotal = this.getCardPointsTotal(this.state.dealerStack);

    }while(currentTotal < 17)
    
    setTimeout(()=>{this.endGame()}, 2000);
  }

  //Add a card to the player deck stack if the hand's sum is under or equal to 17
  playerHit = () =>{

    //if hand's sum is under or equal to 17 add one card
    if(this.state.playerDeckTotal <= 17){
      this.dealACard(this.state.playerStack);//deal the player one card
    }

    //update the player's hand total points
    this.setState({playerDeckTotal: this.getCardPointsTotal(this.state.playerStack)});    

    //Bug Fixed: need a up to date total
    const currentTotal = this.getCardPointsTotal(this.state.playerStack);

    //if hand's sum is greater then 17 then its the dealer turn
    if(currentTotal > 17){
      this.dealerHand();//get cards for the dealer
    }

  }

  //The player use their current points and allow the dealer to take a turn
  playerStand = () =>{
    this.dealerHand();   
  }

  //The player double their bet (or go all in), receive one card, and end their turn.
  playerDoubleDown = () =>{

    this.dealACard(this.state.playerStack);//deal the player one card 
    
    //update the player's hand total points
    this.setState({playerDeckTotal: this.getCardPointsTotal(this.state.playerStack)});
    
    //double the bet unless that amount is more then the player funds. If so, bet the entire funds amount
    if((this.state.currentBet*2) > this.state.funds){
        this.setState({currentBet:this.state.funds})
    }else{
      this.setState(previousState => ({
        currentBet: previousState.currentBet * 2,
      }));
    }

    this.dealerHand();//Deal the dealer a hand
  }

  render(){
    return(
      <Container>
        {this.state.startPlay === false && this.state.results ===false &&
        <StartGame  money={this.state.funds}
                    start={this.startGame}
                    addToBet = {this.increaseBet}
                    bet={this.state.currentBet} />
        }
        {this.state.startPlay === true && this.state.results ===false &&
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
        {this.state.results === true &&
          <EndGame  gameResults = {this.state.winLose}
                    bet={this.state.currentBet}
                    dealerTotal = {this.state.dealerDeckTotal}
                    playerTotal = {this.state.playerDeckTotal} />
        }
      </Container>
    );
  }
}
export default App;
