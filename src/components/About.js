import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineMail, AiOutlineBehanceSquare } from "react-icons/ai";
// import { Tile } from 'carbon-components-react';
import image from '../resources/IMG_1355 2.jpeg'
import { animated, useSpring } from 'react-spring';

function About() {

const styles = useSpring({
  config: { duration: 300 },
  delay: 500,
  from: { opacity: 0, marginTop: 20},
  to: { opacity: 1, marginTop: 0 },
})

return (
  <Container fluid>
    <div className="page-styling" id="home-page">
      <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
      <animated.div className="home-page-sub-image" style={styles}>
            <div>
              <img className="card-img-home-styling" src={image} alt="A art piece I created (blueandyellow)"/>
              <p className="card-content-styling" style={{color: '#666666'}}>Me enjoying life!</p>
            </div>
        </animated.div>
        <div className="about-page-sub-heading">
          <div id="sub-text-about">
          <p className="main-heading" style={{color: "black", marginBottom: "25px"}}>Hi Again!</p>
          <div style={{fontWeight: "500"}}>
            I am a product designer based in Toronto, Canada. I care about putting humans first and solving for their needs through an iterative design process.  
          </div>
          <br />
          <div style={{fontWeight: "400", fontSize: "18px"}}>
            As a designer with a computer science background, I have the perfect skillset to act as a bridge between the design and the development team. I use my 
            diverse background to make quick decisions which are goal oriented and mindful of technical constraints.
          </div>
          <br />
          <div style={{fontWeight: "400", fontSize: "18px"}}>
            When I am not solving a design problem, you will find me either drawing or watching an anime. I also enjoy playing sports such as soccer 
            and tennis and have recently started playing the piano as well
          </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
  );
} 

export default About;