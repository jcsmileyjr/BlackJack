import React from "react";
import { Container, Button } from "react-bootstrap";

import "../App.css";

export default function PrimaryButton(props) {
  return (
    <Container>
      <Button
        variant="warning"
        className={`buttonTextStyle ${props.size}`}
        onClick={() => {
          props.action();
        }}
      >
        {props.title}
      </Button>
    </Container>
  );
}
