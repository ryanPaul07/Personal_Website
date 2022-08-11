import React from 'react';

function TopicVideo(props) {

  return (
    <div style={{display: "flex", alignItems: "center", margin: "40px 0 40px 0"}}>
      <video  style={{width: "100%"}} autoPlay loop muted>
        <source src={props.vidName} type="video/mp4" />
      </video>
    </div>
  );
} 

export default TopicVideo;