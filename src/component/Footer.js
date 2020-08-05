import React, {useEffect, useState} from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import "../App.css";
import PrimaryButton from "./PrimaryButton";

export default function Footer(props) {
  const [winners, setWinners] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => { displayWinners(); }, []);

  // Function to make API call to get list of names and funds, then sort it, and save the top three
  const displayWinners = async () => {
    const response = await fetch(`api/getNames`);// API call to get the data from airtable.com
	  const data = await response.json();// Extracts the JSON from the response.body and converts JSON string into a JavaScript object
    let winnerList = data.data.winners
    winnerList.sort(function(a, b){return b.fields.funds - a.fields.funds}); // sort data by funds from high to lowest
    setPlayers(winnerList);
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
      <Row>
        <Col className="center">
            <PrimaryButton
              size="largeButtonSize"
              title="View ScoreBoard"
              action={() => setShowSaveButton(true)}
            />
        </Col>
      </Row>
      <Modal show={showSaveButton} onHide={() => setShowSaveButton(false)} className="scoreboardBackground" >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Row>
            <Col className="center"><h1>ScoreBoard</h1></Col>
          </Row>
          {
              players.map((player, id) => {
                return(
                  <Row key ={id}>
                    <Col className="center">{player.fields.Name}</Col>
                    <Col className="center">${player.fields.funds} </Col>
                  </Row>
                );
              })
          }
          </Modal.Body>
      </Modal>
    </Container>
  );
}