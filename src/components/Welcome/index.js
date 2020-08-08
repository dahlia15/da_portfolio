import React from 'react';
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import styles from './style.css';

function Welcome() {
    return(
        <div>
        <Container>
        <Row>
            <Col>
            <Jumbotron className='jumbo' style={styles.jumbo}>
            <h4>dahlia amade</h4>
            <h6>full stack developer || front-end focus</h6>
            <h6> <i class="fas fa-map-marker-alt"></i> los angeles, ca </h6>
            </Jumbotron>
            </Col>
        </Row>
        </Container>

        </div>
    )
};

export default Welcome;