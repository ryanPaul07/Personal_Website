import React from 'react';

function TopicBodyHighlight(props) {

  return (
    <div style={{display: "inline-block", fontWeight: "400", fontSize: "18px"}}>
      <span style={{backgroundColor: "#dbdbfb"}}>{props.topicBodyHighlight}</span>
    </div>
  );
} 

export default TopicBodyHighlight;