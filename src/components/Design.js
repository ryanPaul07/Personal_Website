import React, { useEffect, useRef } from 'react'
import { Container, Card, CardContent } from '@material-ui/core';
import Apathy from '../resources/Apathy.png';
import Ryan from '../resources/ryan.png';
import Bean from '../resources/bean.png';
import SocisLogo from '../resources/SocisDesign(Mac).png';

var design = [{
  imgSRC: Apathy,
  alt: "Apathy"
},
{
  imgSRC: Ryan,
  alt: "Ryan"
},
{
  imgSRC: Bean,
  alt: "Bean"
},
{
  imgSRC: SocisLogo,
  alt: "Socis Logo"
}
]

function Design() {

  return (
    <div >
      <Container maxWidth="md">
        <div className="page-styling">
          <p className="main-heading" style={{color: '#FFE24D'}}>Design</p>
          <div style={{marginTop: "1em"}}>
            <p style={{color: "white", fontSize:"17px", }}>
            This page is dedicated to the things I like to do outside of coding. I enjoy making art and 
            always value the impact an art piece has on me. Furthermore, I understand the importance of 
            having a well put together website/brand. Which is why I try to create meaningful and purposeful 
            experiences for the user. Likewise, below you will find some of the digital art pieces and designs 
            I have created in my exploration of art and design. (More to come soon)
            </p>
          </div>
          <hr className="design-line"/>
          <div className="card-view">
            {
              design.map((piece,index) => {
                return <Card style={{maxHeight: piece.height}}key={index} className="card-styling-design">
                  <CardContent className="card-box-styling">
                    <img className="card-img-styling" src={piece.imgSRC} alt={piece.alt}/>
                  </CardContent>
                </Card>
              })
            }
          </div>
          
          <style jsx="true" global="true">{`
            body{
              font-family: sans-serif;
              font-size: 35px;
              background-color: #454040 !important;
              color: white;
              transition: background-color 1s ease-in-out;
            }
          `}</style>
        </div>
      </Container>
    </div>
    
  )
}

export default Design;