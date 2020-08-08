import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import styles from './style.css';

function Links() {
    return(
        <div>
        <Container className='container' style={styles.container}>
        <Row style={{marginBottom: '30px'}}>
            <Col xs={6} md={6}>
            <a href='https://www.linkedin.com/in/dahliaamade/'><img src='https://image.flaticon.com/icons/png/512/61/61109.png' alt='linkedin-icon' className='github' style={styles.github} /></a>
            </Col>
            <Col xs={6} md={6}>
            <a href='https://www.github.com/dahlia15'><img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='github-icon' className='github' style={styles.github} /></a>
            </Col>
        </Row>
        </Container>

        </div>
    )
};

export default Links;