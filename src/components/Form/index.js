import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
    return(
        <Container>
            <Form>
                <h5> let's work together </h5>
                <h7> fill out the form below to get in touch </h7>

            <Row style={{marginTop: '25px'}}>
                <Col>
                <Form.Control placeholder="first name" />
                </Col>
                <Col>
                <Form.Control placeholder="last name" />
                </Col>
            </Row>
            <Row style={{marginTop: '10px'}}>
                <Col>
                <Form.Control placeholder="frontend@frontend.com" />
                </Col>
            </Row>
            <Row style={{marginTop: '10px', marginBottom: '10px'}}>
                <Col>
                <Form.Control placeholder="tell me more ..." style={{height: '100px', overflow: 'scroll'}} />
                </Col>
            </Row>
            <Button type="submit" style={{backgroundColor: 'darkslategrey', border: 'darkslategrey', marginBottom: '20px'}}>
            submit
            </Button>
            </Form>
        </Container>
    )
};

export default ContactForm;
