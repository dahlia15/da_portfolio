import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";
import styles from './style.css';

function Bio() {
    return(
        <div>
        <Container>
        <Jumbotron>
        <p className='bio' style={styles.bio}> after working with a team of web developers to integrate 3D modiface technology with an exisiting consumer facing digital tool, my interest for web development was piqued. upon completing a <b>full stack web development</b> course through columbia university + triology, i am eager to pivot and explore <b>entry level front end development roles</b>. i have a passion for the front end, but still possess a deep understanding of the back end. here is a sample of a basic react app created for the purposes of this role. </p>
        </Jumbotron>    
        </Container>
        </div>
    )
};

export default Bio;