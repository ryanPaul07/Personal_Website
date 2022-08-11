import React from 'react';

function TopicDescription(props) {

  return (
    <div style={{margin: "10px 0 10px 0",fontWeight: "700", fontSize: "32px"}}>
      {props.topicDescription}
    </div>
  );
} 

export default TopicDescription;