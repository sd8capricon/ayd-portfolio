import React from 'react';
import { Card } from "react-bootstrap";

export default function Services(props){
    return(
        <div>
            <Card as="li">
                <Card.Body>
                    <h5>{props.service}</h5>
                    <p><em>{props.description}</em></p>
                </Card.Body>
            </Card>
            <hr/>
        </div>
    );
}