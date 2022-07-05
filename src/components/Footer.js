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
      <div style={{backgroundColor: "#454546", width: "100%", margin: "0", padding: "10px", display: "flex", justifyContent: "center"}}>
        <div  className="footer" id="home-page-icons">
          <div style={{fontWeight: "300", fontSize: "16px", display: "flex", alignItems: "center", height: "100%", marginRight: "30px"}}>
            Build with ❤️ in React.
          </div>
          <AiOutlineGithub className="icon-design" onClick={() => openInNewTab('https://github.com/ryanPaul07')}/>
          <AiOutlineDribbble className="icon-design" onClick={() => openInNewTab('https://dribbble.com/RyanPaul')}/>
          <AiOutlineLinkedin className="icon-design" onClick={() => openInNewTab('https://www.linkedin.com/in/ryan-paul07/')}/>
          <AiOutlineBehanceSquare className="icon-design" onClick={() => openInNewTab('https://www.behance.net/ryanpaul13')}/>
          <AiOutlineMail className="icon-design" onClick={() => openInNewTab('mailto: rpaul06@uoguelph.ca')}/>
        </div>
      </div>
    </div>
  );
} 

export default Footer;