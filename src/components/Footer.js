import React from 'react';
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineMail, AiOutlineBehanceSquare } from "react-icons/ai";
import Emoji from './Emoji';

function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div  style={{position:"relative", margin: "55px 0 0 0"}}>
      <div style={{backgroundColor: "white", width: "100%", margin: "0", padding: "10px", display: "flex", justifyContent: "center"}}>
        <div  className="footer" id="home-page-icons">
          <div style={{color: "#3E3E3E", fontWeight: "500", fontSize: "14px", display: "flex", alignItems: "center", height: "100%", marginRight: "30px"}}>
            Build with ❤️ in Canada.
          </div>
          <AiOutlineGithub style={{color: "#3E3E3E"}} className="icon-design" onClick={() => openInNewTab('https://github.com/ryanPaul07')}/>
          <AiOutlineDribbble style={{color: "#3E3E3E"}} className="icon-design" onClick={() => openInNewTab('https://dribbble.com/RyanPaul')}/>
          <AiOutlineLinkedin style={{color: "#3E3E3E"}} className="icon-design" onClick={() => openInNewTab('https://www.linkedin.com/in/ryan-paul07/')}/>
          <AiOutlineBehanceSquare style={{color: "#3E3E3E"}} className="icon-design" onClick={() => openInNewTab('https://www.behance.net/ryanpaul13')}/>
          <AiOutlineMail style={{color: "#3E3E3E"}} className="icon-design" onClick={() => openInNewTab('mailto: rpaul06@uoguelph.ca')}/>
        </div>
      </div>
    </div>
  );
} 

export default Footer;