import React, {useEffect} from 'react';
import { Container } from '@material-ui/core';

function NotFound() {
console.log('reahced not found s');

  return (
    <div style={{width: '100vw', height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h2 style={{color: '#6b26bd', fontFamily: 'IBM Plex Serif'}}><center>404 Page not found.</center></h2>
    </div>
  );
} 

export default NotFound;