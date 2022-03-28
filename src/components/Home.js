import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { Tile } from 'carbon-components-react';
import image from '../resources/blueandyellow.png'
import { animated, useSpring } from 'react-spring';


function Home() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const styles = useSpring({
    config: { duration: 300 },
    delay: 500,
    from: { opacity: 0, marginTop: 20},
    to: { opacity: 1, marginTop: 0 },
  })

  return (
    <Container fluid>
      <div className="page-styling" id="home-page">
        <p className="main-heading" style={{color: '#1c36ad'}}>Hi, I'm Ryan Paul!</p>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", height: "60vh"}}>
          <div className="home-page-sub-heading">
            <div id="sub-text">
            I’m a software engineer with experience in creating beautiful applications with a focus on accessibility. 
            I am passionate about using design and technology to create meaningful experiences for users which are impactful and goal oriented.
              {/* <Button variant="outlined" color="secondary">
                Resume
              </Button>*/}
            </div>
            <div id="home-page-icons">
              <AiOutlineGithub className="icon-design" onClick={() => openInNewTab('https://github.com/ryanPaul07')}/>
              <AiOutlineDribbble className="icon-design" onClick={() => openInNewTab('https://dribbble.com/RyanPaul')}/>
              <AiOutlineLinkedin className="icon-design" onClick={() => openInNewTab('https://www.linkedin.com/in/ryan-paul07/')}/>
              <AiOutlineMail className="icon-design" onClick={() => openInNewTab('mailto: rpaul06@uoguelph.ca')}/>
            </div>
            
          </div>
          <animated.div className="home-page-sub-image" style={styles}>
              <Tile>
                <img className="card-img-styling" src={image} alt="A art piece I created (blueandyellow)"/>
                <p className="card-content-styling" style={{color: '#1c36ad'}}>blue and yellow - 2022</p>
              </Tile>
          </animated.div>
        </div>
      </div>
    </Container>
    );
} 

export default Home;