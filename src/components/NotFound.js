import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from '@material-ui/core';

function NotFound() {
console.log('reahced not found s');

  return (
    <div style={{width: '100vw', height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h4 style={{color: 'black'}}><center>404 Page not found :(. Lets head back to the website <Link to="/" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>here</Link></center></h4>
    </div>
  );
} 

export default NotFound;