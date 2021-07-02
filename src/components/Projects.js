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