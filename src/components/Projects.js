import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
// import projectMovie from '../resources/Movie-App.gif';
import projectDiscoverTracks from '../resources/DiscoverTracks.png';
import projectDesignComparison from '../resources/DesignSystem.png';
import projectShopifyChallenge from '../resources/ShopifyDesign.png';
import desktopOne from '../resources/Desktop - 1.png'
import zoomChatCaseStudy from '../resources/ZoomDesign.png';
import figmaPrototype from '../resources/FigmaDemo.png';
import dataVisualization from '../resources/DataVisualization.png';
import { animated, useSpring } from 'react-spring';
import { Tag } from 'carbon-components-react';
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
// main heading; #c11717
// text: #cd3434
// red:  #fff5f5 tile background color
// red: #cd3434 tile font color

var projects = [
  {
    link: "https://drive.google.com/drive/folders/11b9kbzx8ZXB0XUViekqYGpGMK3uUOlZp?usp=sharing",
    summary: "A research paper on helping other researchers. My paper looks at creating a data visualization tool to allow researchers to quickly gather historical information on their research topic, which I created for my CIS*4900 capstone class. This paper identifies the challenges researchers have when understanding their topic and shows the benefits of having information visualized.",
    tags: ['Research Paper', 'Data Visualization', 'Research','Python','Accessibility vs AI'],
    title: "ACM CHI papers Data Visualization",
    languages: "ACM CHI papers Data Visualization * Research Paper",
    imgSRC: dataVisualization,
    alt: "First page of my research paper on Data Visualization using python",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/144711585/Zoom-Chat-System-Case-Study?",
    summary: "A better zoom for students. Our case study looks at the shortcomings of the Zoom Chat systems for students and proposes changes which promotes more collaboration and engagement.",
    languages: "Zoom Chat Design * Case Study",
    tags: ['Case Study', 'Survey', 'Interviews', 'Usability Testing', 'Competitive Analysis', 'Lean UX'],
    title: "Zoom Chat Design",
    imgSRC: zoomChatCaseStudy,
    alt: "Landing page image of my Zoom Chat Design Case Study",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  {
    link: "https://github.com/ryanPaul07/discovertracks",
    summary: "How do you discover new music? With this project I wanted to take two of my hobbies, music and anime and join them into one. This web app creates a curated list of songs and anime visualizations to make music discovery more interesting.",
    tags: ['Web App', 'React', 'HTML/CSS/Javascript','Spotify API','Tumblr API'],
    title: "Discover Tracks App",
    languages: "REACT * Spotify API * Tumblr API * OAuth 2.0",
    imgSRC: projectDiscoverTracks,
    alt: "gif of my Discover Tracks Project website",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/138564749/Flat-vs-Claymorphism-vs-Neumorphism?",
    tags: ['Design Systems Review', 'Skeuomorphism', 'Flat/Material UI', 'Neumorphism', 'Claymorphism'],
    summary: "Each design system has a unique story it tells. The choices made, and the decisions taken are all based on the experience the design system is trying to create for the user. In this review I take a look at the evolution of design systems and specifically see what makes certain design systems more influential and better than others.",
    title: "Evolution of Design Systems",
    languages: "Evolution of Design * Design Systems Review",
    imgSRC: projectDesignComparison,
    alt: "gif of my Flat vs Claymorphism vs Neumorphism design study",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  {
    link: "https://www.behance.net/gallery/139533443/Shopify-Design-Challenge",
    summary: "Tackling an annoying problem with a fresh outlook. This project analyses how a parking meter which overlooks 6 parking spots would be designed for drivers and parking attendants.",
    tags: ['Case Study', 'Research','Wireframe','Competitive Analysis', 'Low Fidelity Prototype'],
    title: "Shopify Design Challenge",
    languages: "Shopify Design Challenge * Case Study",
    imgSRC: projectShopifyChallenge,
    alt: "gif of my Shopify Design Challenge Case Study",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  {
    link: "https://www.figma.com/proto/FDh53glbDfHlfv0DgGzCYN/LAB05CIS*2170?node-id=2%3A4&starting-point-node-id=2%3A4",
    summary: "A sustainability app but with a twist. This figma demo showcases how a sustainability app which has been subtly gamified looks like. The benefits of accomplishing weekly challenges and competing with friends creates more engagement and excitement for the user.",
    tags: ['Figma Demo', 'Colour Theory', 'Typography', 'High Fidelity Prototype'],
    title: "Sustainability Challenges App",
    languages: "Sustainability App * Figma Prototype",
    imgSRC: figmaPrototype,
    alt: "Home page image of my Sustainable Citizens Figma App design",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
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

  const styles = useSpring({
    config: { duration: 300 },
    delay: 500,
    from: { opacity: 0, marginTop: 20},
    to: { opacity: 1, marginTop: 0 },
  })

  return (
    <Container fluid>
      <div className="page-styling">
        <p className="main-heading" style={{color: 'black'}}>My Projects</p>
        <div style={{margin: "20px 0 20px 0"}}>
          <p style={{ fontSize:"22px", color: "#666666"}}>
          Here are some of the projects I’ve worked on, however all my development projects are available on <a className="project-github-link" href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>Github</a> 
          </p>
        </div>
        <animated.div style={styles}>
          <div className="card-view" style={{justifyContent: 'center'}}>
            {
              projects.map((project, i)=> {
                return <Card key={i} className="card-styling" style={{backgroundColor: "white", pointerEvents: project.disabled ? 'none' : 'auto'}} onClick={()=> showProject(project)}>
                  <CardContent className="card-style-big-view">
                    <img className="card-img-styling" src={project.imgSRC} alt={project.alt}/>
                    <div style={{width: '100%', height: "100%"}}>
                      <p className="card-content-styling large-view main-heading" style={{color: "black", height: '10%', fontSize: "1.3rem"}}><center>{project.languages}</center></p>
                      <p className="card-content-styling small-view main-heading" style={{color: "black", height: '10%', paddingLeft: "18px", fontSize: "1.3rem"}}>{project.title}</p>
                      <div className="small-view" style={{overflow: "auto", height: "65%", padding: "15px 15px 15px 18px"}}>
                        <p className="card-content-body-styling" >
                          {project.summary}
                        </p>
                          {/* {project.tags.map((tag) => {
                            return (
                              tag == project.tags[project.tags.length -1]
                                ? 
                                  <div className="tag-style" style={{ backgroundColor: "#a7f0ba", color: "#044317", borderColor: "#044317",}}>
                                    {tag}
                                  </div>
                                : 
                                  <div className="tag-style">
                                    {tag}
                                  </div>
                            )
                          })} */}
                      </div>
                      <div className="small-view" style={{height: "25%", padding: "0px 0px 5px 18px", overflow: "auto"}}>
                          {project.tags.map((tag) => {
                            return (
                              tag == project.tags[0]
                                ? 
                                  <div className="tag-style" style={{ backgroundColor: "#a7f0ba", color: "#044317", borderColor: "#044317",}}>
                                    {tag}
                                  </div>
                                : 
                                  <div className="tag-style">
                                    {tag}
                                  </div>
                            )
                          })}
                      </div>
                    </div>
                    
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