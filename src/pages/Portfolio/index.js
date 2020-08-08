import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./style.css";
import Links from '../../components/Links';
import employee from '../employee-dir.png';
import murder from '../murder-squad.png';
import recs from '../recs-park.png';
import notes from '../note-taker.png';


function Portfolio() {
    return(
        <Container>
            <Row>
                <Col>
                <a href='https://github.com/dahlia15/project2'><img src={murder} alt='murder-squad' className="sliderimg" style={styles.sliderimg}/></a>
                </Col>
                <Col>
                <a href='https://github.com/dahlia15/Project3-RecParks'><img src={recs} alt='recs-park' className="sliderimg" style={styles.sliderimg}/></a>
                </Col>
            </Row>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                <a href='https://github.com/dahlia15/Employee_Dir_HW-19'><img src={employee} alt='employee-dir' className="sliderimg" style={styles.sliderimg}/></a>
                </Col>
                <Col>
                <a href='https://github.com/dahlia15/Homework-11'><img src={notes} alt='notes-app' className="sliderimg" style={styles.sliderimg}/></a>
                </Col>
            </Row>
            <Links />
        </Container>
    )
}

export default Portfolio;

{/* <AliceCarousel autoPlay autoPlayInterval="6000">
<a href='https://github.com/dahlia15/project2'><img src={murder} alt='murder-squad' className="sliderimg" style={styles.sliderimg}/></a>
<a href='https://github.com/dahlia15/Project3-RecParks'><img src={recs} alt='recs-park' className="sliderimg" style={styles.sliderimg}/></a>
<a href='https://github.com/dahlia15/Employee_Dir_HW-19'><img src={employee} alt='employee-dir' className="sliderimg" style={styles.sliderimg}/></a>
</AliceCarousel> */}