import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import projectMovie from '../resources/Movie-App.gif';
import projectDiscoverTracks from '../resources/Discover-Tracks-App.gif';
import projectDesignComparison from '../resources/designComp.gif';
import projectShopifyChallenge from '../resources/shopifyDesignChallenge.gif';
import zoomChatCaseStudy from '../resources/ZoomChat.png';
import figmaPrototype from '../resources/FigmaAppPrototype.png';
import dataVisualization from '../resources/DataVisualization.png';
import { animated, useSpring } from 'react-spring';
import Emoji from './Emoji';

// Archive
// {
//   link: "https://github.com/ryanPaul07/MovieManager",
//   languages: "REACT * BOOTSTRAP * omdbAPI",
//   imgSRC: projectMovie,
//   alt: "gif of my Movie Search Project website",
//   backgroundColour: "#fff5f5",
//   fontColour: "#cd3434",
//   disabled: false
// }

var projects = [
  {
    link: "https://drive.google.com/drive/folders/11b9kbzx8ZXB0XUViekqYGpGMK3uUOlZp?usp=sharing",
    languages: "ACM CHI papers Data Visualization * Research Paper",
    imgSRC: dataVisualization,
    alt: "First page of my research paper on Data Visualization using python",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://github.com/ryanPaul07/discovertracks",
    languages: "REACT * Spotify API * Tumblr API * OAuth 2.0",
    imgSRC: projectDiscoverTracks,
    alt: "gif of my Discover Tracks Project website",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/138564749/Flat-vs-Claymorphism-vs-Neumorphism?",
    languages: "Evolution of Design * Design Systems Review",
    imgSRC: projectDesignComparison,
    alt: "gif of my Flat vs Claymorphism vs Neumorphism design study",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/139533443/Shopify-Design-Challenge",
    languages: "Shopify Design Challenge * Case Study",
    imgSRC: projectShopifyChallenge,
    alt: "gif of my Shopify Design Challenge Case Study",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://www.figma.com/proto/FDh53glbDfHlfv0DgGzCYN/LAB05CIS*2170?node-id=2%3A4&starting-point-node-id=2%3A4",
    languages: "Sustainability App * Figma Prototype",
    imgSRC: figmaPrototype,
    alt: "Home page image of my Sustainable Citizens Figma App design",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "",
    languages: <Emoji label="locked" symbol="🔒" text="Zoom Chat Design * Case Study"/>,
    imgSRC: zoomChatCaseStudy,
    alt: "Landing page image of my Zoom Chat Design Case Study",
    backgroundColour: "#e9e3e3",
    fontColour: "#6a6565",
    disabled: true
  }
]


// disabled colours
// backgroundColour: "#e9e3e3",
// fontColour: "#6a6565",

function Projects() {

  const showProject = (project) => {
    if(!project.disabled)
      window.open(project.link);
  }

  const styles = useSpring({
    config: { duration: 300 },
    delay: 500,
    from: { opacity: 0, marginTop: 20},
    to: { opacity: 1, marginTop: 0 },
  })

  return (
    <Container fluid>
      <div className="page-styling">
        <p className="main-heading" style={{color: '#c11717'}}>Personal Projects</p>
        <div style={{margin: "20px 0 20px 0"}}>
          <p style={{color: '#cd3434', fontSize:"22px"}}>
          Here are some of the projects I’ve worked on, however all my development projects are available on <a className="project-github-link" href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer" style={{color: '#c11717', fontFamily: 'IBM Plex Serif', fontWeight: "bold" ,textDecoration: 'none'}}>Github</a> 
          </p>
        </div>
        <animated.div style={styles}>
          <div className="card-view" style={{justifyContent: "center"}}>
            {
              projects.map((project, i)=> {
                return <Card key={i} className="card-styling" style={{backgroundColor: project.backgroundColour, pointerEvents: project.disabled ? 'none' : 'auto'}} onClick={()=> showProject(project)}>
                  <CardContent>
                    <img className="card-img-styling" src={project.imgSRC} alt={project.alt}/>
                    <p className="card-content-styling" style={{color: project.fontColour}}>{project.languages}</p>
                  </CardContent>
                </Card>
              })
            }
          </div>
        </animated.div>
        
      </div>
    </Container>
  );
} 

export default Projects;