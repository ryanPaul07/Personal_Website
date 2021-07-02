import React, {useEffect} from 'react';
import { Container } from '@material-ui/core';

function NotFound() {
console.log('reahced not found s');

  return (
    <div style={{width: '100vw', height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{color: '#e6695f'}}>404 page not found : (</h1>
    </div>
  );
} 

export default NotFound;