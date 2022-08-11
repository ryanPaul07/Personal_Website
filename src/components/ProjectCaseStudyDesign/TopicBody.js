import React from 'react';

function TopicBody(props) {

  return (
    <div style={{fontWeight: "400", fontSize: "18px"}}>
      {props.topicBody}
    </div>
  );
} 

export default TopicBody;