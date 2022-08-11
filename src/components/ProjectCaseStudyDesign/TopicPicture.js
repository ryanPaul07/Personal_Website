import React from 'react';

function TopicPicture(props) {

  return (
    <div style={{display: "flex", alignItems: "center", margin: "40px 0 40px 0"}}>
      <img src={props.projectImg} style={{width: "100% ", borderRadius: "5px"}}/>
    </div>
  );
} 

export default TopicPicture;