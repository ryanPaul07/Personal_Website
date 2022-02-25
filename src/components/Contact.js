import React from 'react';
import { Container } from '@material-ui/core';
import { AiOutlineGithub, AiOutlineDribbble, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return(
    <Container maxWidth="md">
      <div className="page-styling">
        <p className="main-heading" style={{color: '#a35fe6'}}>Contact</p>
        <div className="sub-page-styling">
          <a className="contact-link-styling" href="mailto: rpaul06@uoguelph.ca"><strong>Email</strong></a>
          <a className="contact-link-styling" href="https://github.com/ryanPaul07" target="_blank" rel="noopener noreferrer"><strong>Github</strong></a>
          <a className="contact-link-styling" href="https://www.linkedin.com/in/ryan-paul07/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;