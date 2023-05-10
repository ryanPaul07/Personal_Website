import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineMail, AiOutlineBehanceSquare } from "react-icons/ai";
// import { Tile } from 'carbon-components-react';
import image from '../resources/Hamburg, Germany.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
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
              <LazyLoadImage className="card-img-home-styling" src={image} alt="Picture of me Smiling in Hamburg, Germany"/>
              <p className="card-content-styling" style={{color: '#666666'}}>Hamburg, Germany - my latest adventure!</p>
            </div>
        </animated.div>
        <div className="about-page-sub-heading">
          <div id="sub-text-about">
          <p className="main-heading" style={{color: "black", marginBottom: "25px"}}>Hi Again! 👋🏼</p>
          <div style={{fontWeight: "500"}}>
            I prioritize simple solutions for complex tasks in my designs, utilizing a human-centred approach.   
          </div>
          <br />
          <div style={{fontWeight: "400", fontSize: "18px"}}>
          As a current Masters student in Computer Science, specializing in Human Computer Interaction and Accessibility, I possess a distinct 
          skill set that effectively bridges the gap between research, design and development. By leveraging my diverse background, I strive to make 
          well-informed decisions that account for technical limitations while prioritizing user-centered design principles.
          </div>
          <br />
          <div style={{fontWeight: "400", fontSize: "18px"}}>
          When I'm not tinkering with design projects, you'll often find me immersing myself in TV shows or movies.
          </div>
          <br />
          <br />
          <div style={{fontWeight: "600", fontSize: "20px", color:"black"}}>
            Here are some Awards I have won!
          </div>
          <br />
          <div style={{fontWeight: "400", fontSize: "18px"}}>
          
              <b>CHI 2023 Accepted Paper:</b> Selected as one of 26 position papers for the <a href="https://cui.acm.org/workshops/CHI2023/" target="_blank" rel="noopener noreferrer" style={{color: '#666666', textDecoration: 'underline', fontStyle: 'italic'}}>CUI@CHI Workshop</a> at the ACM CHI 2023 Conference.
              <br/>
              <br/>
              <b>Queen Elizabeth II Graduate Scholarship in Science and Technology (QEII-GSST):</b> Received a $15,000 scholarship based on academic excellence, research ability and potential, and leadership abilities.
              <br/>
              <br/>
              <b>Graduate Tuition Scholarship:</b> Received a $16,000 scholarship based on academic excellence, as determined by the College Awards Committee at the University of Guelph.
          </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
  );
} 

export default About;