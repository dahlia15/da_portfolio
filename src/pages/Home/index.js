import React from 'react';
import { Container } from "react-bootstrap";
import Welcome from '../../components/Welcome';
import Bio from '../../components/Bio';
import Links from '../../components/Links';

function Home() {
    return(
        <Container>
        <Welcome />
        <Bio />
        <Links />
        </Container>
    )
}

export default Home;