import React from 'react';
import '../App.css';
import { Container, Card, CardContent, Button } from '@material-ui/core';
import image from '../resources/Movie-App.gif'

function Home() {
  return (
    <Container maxWidth="md">
      <div className="page-styling" id="home-page">
        {/* <p className="main-heading" style={{color: '#6c83ea'}}>Ryan Paul</p> */}
        <div style={{fontWeight: "bold", color: '#6c83ea', display: "flex", margin: "10px 10px 25px 10px", fontSize: "0.8em"}}>I like to code and make art.</div>
        {/* <Button variant="outlined" color="secondary">
          Resume
        </Button> */}
        {/* <Card className="card-styling">
          <CardContent className="card-box-styling">
            <img className="card-img-styling" src={image} alt="Image of me"/>
            <p className="card-content-styling">Ryan Paul</p>
          </CardContent>
        </Card> */}
        {/* <div style={{fontSize: "25px",fontWeight: "bold", color: 'rgb(155 107 240)', display: "flex", margin: "10px 10px 10px 10px"}}>Status: Working on some cool stuff </div> */}
      </div>
    </Container>
    );
} 

export default Home;