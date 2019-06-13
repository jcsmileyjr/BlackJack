import React from 'react';
import { Container, Button} from 'react-bootstrap';

import '../App.css';

export default function PrimaryButton(props){
    return(
        <Container>
            <Button     variant="warning"
                        className="buttonTextStyle"
                        onClick={()=>{props.start()}} 
                        size={props.size} >
                {props.title}
            </Button>
        </Container>
    );
}