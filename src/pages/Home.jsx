import React from "react";
import { Container,Button } from "react-bootstrap";
import "../styles/Home.css"

const Home=()=>{
    return (
        <Container>
            <h1>Welcome to our page</h1>
            <p>Click to go</p>
            <Button variant="primary" type="submit">Get Started</Button>

        </Container>
    )
}
export default Home