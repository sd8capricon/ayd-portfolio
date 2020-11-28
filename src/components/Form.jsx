import React from 'react';
import { Button , Form } from 'react-bootstrap';

export default function ContactForm(props){
    return(
        <div>
            <Form className="contact-form" method="POST" action="https://ayda-portfolio-backend.herokuapp.com/send" data-aos={props.aos} data-aos-duration={props.duration}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required id="name" name="name" placeholder="Enter Your Name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control required id="number" name="number" placeholder="Enter Your Contact Number"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required id="email" name="email" placeholder="Enter Your Email eg:name@123.com"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control required id="subject" name="subject" placeholder="Enter Subject"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control required as="textarea" rows="4" id="message" name="message" placeholder="Enter Your Message Here"/>
                </Form.Group>
                <Button type="submit" variant="outline-light">Submit</Button>
            </Form>
        </div>
    );
}

                // <label>Name</label><br/>
                // <input required id="name" name="name"/><br/>
                // <label>email</label><br/>
                // <input required id="email" name="email"/><br/>
                // <label>Subject</label><br/>
                // <input required id="subject" name="subject"/><br/>
                // <label>message</label><br/>
                // <textarea required id="message" name="message"/><br/>