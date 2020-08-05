import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";

export default function Footer(props) {
  const [winners, setWinners] = useState([]);

  useEffect(() => { displayWinners(); }, []);

  // Function to make API call to get list of names and funds, then sort it, and save the top three
  const displayWinners = async () => {
    const response = await fetch(`https://smiley-blackjack-game.netlify.app/.netlify/functions/getNames`);// API call to get the data from airtable.com
	const data = await response.json();// Extracts the JSON from the response.body and converts JSON string into a JavaScript object
    let winnerList = data.data.winners
    winnerList.sort(function(a, b){return b.fields.funds - a.fields.funds}); // sort data by funds from high to lowest
    const topWinners = winnerList.slice(0,3);// only get the top 3
    setWinners(topWinners);// store in component state
  }  

  return (
    <Container fluid className="footer-background">
      <Row>
        <Col className="center primaryColor">HIGH SCORES</Col>
      </Row>
      {
          winners.map((player, id) => {
            return(
              <Row key ={id}>
                <Col className="center primaryColor">{player.fields.Name}</Col>
                <Col className="center primaryColor">${player.fields.funds} </Col>
              </Row>
            );
          })
      }
    </Container>
  );
}