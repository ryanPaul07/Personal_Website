import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import projectMovie from '../resources/Movie-App.gif';
import projectDiscoverTracks from '../resources/Discover-Tracks-App.gif';

var projects = [{
    link: "https://github.com/ryanPaul07/MovieManager",
    languages: "REACT * BOOTSTRAP * omdbAPI",
    imgSRC: projectMovie,
    alt: "Movie Search Project"
  },
  {
    link: "https://github.com/ryanPaul07/discovertracks",
    languages: "REACT * Spotify API * Tumblr API * OAuth 2.0",
    imgSRC: projectDiscoverTracks,
    alt: "Discover Tracks Project"
  }
]

function Projects() {

  const showProject = (project) => {
    window.open(project.link);
  }

  return (
    <Container maxWidth="md">
      <div className="page-styling">
        <p className="main-heading" style={{color: '#e6695f'}}>Projects</p>
        <div style={{marginTop: "1em"}}>
          <p style={{color: "black", fontSize:"17px"}}>
          This page highlights some of the projects I have worked on, however all my other projects are available on <a className="project-github-link" href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer" style={{color: '#e6695f', fontWeight: "bold" ,textDecoration: 'none'}}>Github</a> 
          <br/>
          <br/>
          My goal with all my development work is to provide something valuable to the user, which is easy to use and understand but also to showcase my 
          skills and interests through my work. 
          </p>
        </div>
        <hr className="project-line"/>
        <div className="card-view">
          {
            projects.map((project, i)=> {
              return <Card key={i} className="card-styling" onClick={()=> showProject(project)}>
                <CardContent className="card-box-styling">
                  <img className="card-img-styling" src={project.imgSRC} alt={project.alt}/>
                  <p className="card-content-styling">{project.languages}</p>
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