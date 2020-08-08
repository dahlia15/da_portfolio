import React from 'react';
import {Redirect} from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class ContactForm extends React.Component {
    onSubmit = () => {
        var input = document.getElementById('field').value;
        if (input !== null) {
            return <Redirect to ="/" />
        }
    }

    render() {
        return(
            <Container>
                <Form>
                    <h5> let's work together </h5>
                    <h7> fill out the form below to get in touch </h7>
    
                <Row style={{marginTop: '25px'}}>
                    <Col>
                    <Form.Control id='field' input='text' placeholder="first name" />
                    </Col>
                    <Col>
                    <Form.Control id='field' input='text' placeholder="last name" />
                    </Col>
                </Row>
                <Row style={{marginTop: '10px'}}>
                    <Col>
                    <Form.Control id='field' input='text' placeholder="frontend@frontend.com" />
                    </Col>
                </Row>
                <Row style={{marginTop: '10px', marginBottom: '10px'}}>
                    <Col>
                    <Form.Control id='field' input='text' placeholder="tell me more ..." style={{height: '100px', overflow: 'scroll'}} />
                    </Col>
                </Row>
                <Button onClick={this.onSubmit} type="submit" style={{backgroundColor: 'darkslategrey', border: 'darkslategrey', marginBottom: '20px'}}>
                submit
                </Button>
                </Form>
            </Container>
        )
    }
}

export default ContactForm;
