import React from 'react';

function TopicDescription(props) {

  return (
    <div style={{margin: "10px 0 15px 0",fontWeight: "700", fontSize: "32px", maxWidth:"75%", lineHeight:"0.8"}}>
      {props.topicDescription}
    </div>
  );
} 

export default TopicDescription;