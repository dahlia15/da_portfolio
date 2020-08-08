import React, {Component} from 'react';
import { Container } from "react-bootstrap";
import ContactForm from '../../components/Form';
import Links from '../../components/Links';

function Contact() {
    return(
        <Container>
        <ContactForm />
        <Links />
        </Container>
    )
}

export default Contact;