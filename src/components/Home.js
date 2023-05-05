import React from 'react';
import '../App.css';
import { Container } from '@material-ui/core';
import { BsArrowDownCircle } from "react-icons/bs";
// import { Tile } from 'carbon-components-react';
import image from '../resources/blueandyellow.png'
import { animated, useSpring } from 'react-spring';
import projectShopifyChallenge from '../resources/ShopifyDesign.png';
import zoomChatCaseStudy from '../resources/ZoomDesign.png';
import { Card, CardContent } from '@material-ui/core';

import {
  Link,
  useRouteMatch,
} from "react-router-dom";

var projects = [
  {
    pageRoute: 'ZoomChatDesign',
    link: "https://www.behance.net/gallery/144711585/Zoom-Chat-System-Case-Study?",
    summary: "A better zoom for students. My updated case study looks at the shortcomings of the Zoom Chat systems for students and proposes a new chat system which promotes more collaboration and engagement.",
    languages: "Zoom Chat Design * Case Study",
    tags: ['Case Study', 'UI/UX', 'High Fidelity', 'Lean UX'],
    title: "Zoom Chat Design",
    imgSRC: zoomChatCaseStudy,
    alt: "Landing page image of my Zoom Chat Design Case Study",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
    disabled: false
  },
  // {
  //   pageRoute: 'ShopifyDesignChallenge',
  //   link: "https://www.behance.net/gallery/139533443/Shopify-Design-Challenge",
  //   summary: "Tackling an annoying problem with a fresh outlook. This project analyses how a parking meter which overlooks 6 parking spots would be designed for drivers and parking attendants.",
  //   tags: ['Case Study','Wireframe','Competitive Analysis'],
  //   title: "Shopify Design Challenge",
  //   languages: "Shopify Design Challenge * Case Study",
  //   imgSRC: projectShopifyChallenge,
  //   alt: "gif of my Shopify Design Challenge Case Study",
  //   backgroundColour: "#f5f2fc",
  //   fontColour: "#491d8b",
  //   disabled: false
  // }
]


function Home() {
  let {path, url} = useRouteMatch()

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
      <div className="page-styling" id="home-page">
        
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <div className="home-page-sub-heading">
          <p className="main-heading" style={{color: "black", marginBottom: "10px"}}>Hi, I'm Ryan ✨</p>
            <div id="sub-text">
              <div>
              I am a passionate Masters student specializing in Human-computer interaction, committed to creating a more user-friendly and welcoming digital space for all.
              </div>
              {/* <Button variant="outlined" color="secondary">
                Resume
              </Button>*/}
              {/* <br />
              <div style={{fontWeight: "400", fontSize: "18px"}}>
                I recently completed my undergraduate research project which looks at data visualization for ACM CHI paper which you can view <a className="project-github-link" href="https://drive.google.com/drive/folders/11b9kbzx8ZXB0XUViekqYGpGMK3uUOlZp?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>here</a>
                . Also you can check
                out some of my featured projects below!
              </div>
              <div style={{margin: "10px 0px 0px 0px"}}>
                <BsArrowDownCircle />
              </div> */}
            </div>
            
            {/* <div id="home-page-icons">
            <BsArrowDownCircle />
              <AiOutlineGithub className="icon-design" onClick={() => openInNewTab('https://github.com/ryanPaul07')}/>
              <AiOutlineDribbble className="icon-design" onClick={() => openInNewTab('https://dribbble.com/RyanPaul')}/>
              <AiOutlineLinkedin className="icon-design" onClick={() => openInNewTab('https://www.linkedin.com/in/ryan-paul07/')}/>
              <AiOutlineBehanceSquare className="icon-design" onClick={() => openInNewTab('https://www.behance.net/ryanpaul13')}/>
              <AiOutlineMail className="icon-design" onClick={() => openInNewTab('mailto: rpaul06@uoguelph.ca')}/>
              
            </div> */}
            
          </div>
          {/* <animated.div className="home-page-sub-image" style={styles}>
              <div>
                <img className="card-img-home-styling" src={image} alt="A art piece I created (blueandyellow)"/>
                <p className="card-content-styling" style={{color: '#666666'}}>blue and yellow - 2022</p>
              </div>
          </animated.div> */}
        </div>
      </div>
      <div style={{fontSize: "12px", color: "#414141", fontWeight: "800", textDecoration: "underline", letterSpacing: "2px", marginBottom: "20px"}}>
        FEATURED
      </div>
      <animated.div style={styles}>
          <div className="card-view" style={{justifyContent: 'center'}}>
            {
              projects.map((project, i)=> {
                return <Card key={i} className="card-styling" style={{backgroundColor: "white", pointerEvents: project.disabled ? 'none' : 'auto'}}>
                  <Link to={`projects/${project.pageRoute}`} style={{textDecoration: 'none'}}>
                  <CardContent className="card-style-big-view">
                    <img className="card-img-styling" src={project.imgSRC} alt={project.alt}/>
                    <div style={{width: '100%', height: "100%"}}>
                      <p className="card-content-styling large-view main-heading" style={{color: "black", height: '10%', fontSize: "1.3rem"}}><center>{project.languages}</center></p>
                      <p className="card-content-styling small-view main-heading" style={{color: "black", height: '10%', paddingLeft: "18px", fontSize: "1.3rem"}}>{project.title}</p>
                      <div className="small-view" style={{overflow: "auto", height: "65%", padding: "15px 15px 15px 18px"}}>
                        <p className="card-content-body-styling" >
                          {project.summary}
                        </p>
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
                  </Link>
                </Card>
              })
            }
          </div>
        </animated.div>
      
    </Container>
    );
} 

export default Home;