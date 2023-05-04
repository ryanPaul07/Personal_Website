import React from 'react';
import { Container, Card, CardContent } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';
import { BsArrowUpRightSquare } from "react-icons/bs";

var texts = [
  {
    number: "01",
    link: "https://cui.acm.org/workshops/CHI2023/pdfs/paul_CUI@CHI_2023_Accessibility_Conversational_Agents.pdf",
    summary: "Is it possible to use chatbots to motivate software developers to prioritize and value accessibility principles during software creation?",
    title: "Improving Software Developer Awareness of Web Accessibility using CUIs",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
  },
  {
    number: "02",
    link: "https://drive.google.com/drive/folders/11b9kbzx8ZXB0XUViekqYGpGMK3uUOlZp?usp=sharing",
    summary: "A research paper on helping other researchers. A data visualization tool to allow researchers to quickly gather historical information on their research topic.",
    title: "ACM CHI papers Data Visualization",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
  },
  {
    number: "03",
    link: "https://www.behance.net/gallery/138564749/Flat-vs-Claymorphism-vs-Neumorphism?",
    summary: "Each design system has a unique story it tells. The choices made, and the decisions taken are all based on the experience the design system is trying to create for the user.",
    title: "Evolution of Design Systems",
    backgroundColour: "#f5f2fc",
    fontColour: "#491d8b",
  }
]

function Writing() {

  const styles = useSpring({
    config: { duration: 300 },
    delay: 500,
    from: { opacity: 0, marginTop: 20},
    to: { opacity: 1, marginTop: 0 },
  })

  const showProject = (project) => {
    window.open(project.link);
  }

  return (
    <Container fluid>
      <div className="page-styling">
        <p className="main-heading" style={{color: 'black'}}>Writing 🖋️</p>
          <div style={{margin: "20px 0 20px 0"}}>
            <p style={{ fontSize:"22px", color: "#666666"}}>
              Here you will find some of my ideas and beliefs about design and technology.    
            </p>
          </div>
            <animated.div style={styles}>
              <div className="card-view" >
                {
                  texts.map((project, i)=> {
                    return <Card key={i} className="card-styling" style={{backgroundColor: "white", minWidth: "20rem", maxWidth: "20rem", height: "16rem"}} onClick={()=> showProject(project)}>
                      <CardContent className="card-style-big-view">
                        <div style={{display: "flex", flexDirection: "column"}}>
                          <div className="card-content-styling" style={{display: "flex", flexDirection: "column", color: "black", fontSize: "1.1rem", paddingBottom: "10px"}}>
                            <div style={{fontSize: "1.8rem", marginBottom: "12px"}}>{project.number}</div>
                            <div>{project.title}</div>
                            {/* <BsArrowUpRightSquare size={30} className="icon-design"/> */}
                          </div>
                          <div className="card-content-body-styling" style={{fontWeight: "300", color: "#666666"}}>{project.summary}</div>
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

export default Writing;