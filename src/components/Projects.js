import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import projectMovie from '../resources/Movie-App.gif';
import projectDiscoverTracks from '../resources/Discover-Tracks-App.gif';
import projectDesignComparison from '../resources/designComp.gif';
import projectShopifyChallenge from '../resources/shopifyDesignChallenge.gif'

var projects = [{
    link: "https://github.com/ryanPaul07/MovieManager",
    languages: "REACT * BOOTSTRAP * omdbAPI",
    imgSRC: projectMovie,
    alt: "Movie Search Project",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://github.com/ryanPaul07/discovertracks",
    languages: "REACT * Spotify API * Tumblr API * OAuth 2.0",
    imgSRC: projectDiscoverTracks,
    alt: "Discover Tracks Project",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/138564749/Flat-vs-Claymorphism-vs-Neumorphism?",
    languages: "Design * UI/UX * HCI",
    imgSRC: projectDesignComparison,
    alt: "Flat vs Claymorphism vs Neumorphism",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/139533443/Shopify-Design-Challenge",
    languages: "Shopify Design Challenge * Wireframe",
    imgSRC: projectShopifyChallenge,
    alt: "Shopify Design Challenge",
    backgroundColour: "#fff5f5",
    fontColour: "#cd3434",
    disabled: false
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

  return (
    <Container fluid>
      <div className="page-styling">
        <p className="main-heading" style={{color: '#c11717'}}>Personal Projects</p>
        <div style={{margin: "20px 0 20px 0"}}>
          <p style={{color: '#cd3434', fontSize:"22px"}}>
          Here are some of the projects I’ve worked on, however all my other projects are available on <a className="project-github-link" href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer" style={{color: '#c11717', fontFamily: 'IBM Plex Serif', fontWeight: "bold" ,textDecoration: 'none'}}>Github</a> 
          </p>
        </div>
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
      </div>
    </Container>
  );
} 

export default Projects;