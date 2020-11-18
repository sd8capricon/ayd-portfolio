import React from 'react';
import {Media} from 'react-bootstrap';

export default function Services(props){
    return(
        <div>
            <Media as="li">
                <Media.Body>
                    <h5>{props.service}</h5>
                    <p><em>{props.description}</em></p>
                </Media.Body>
            </Media>
            <hr/>
        </div>
    );
}