import React from 'react';

function TopicHeading(props) {

  return (
    <div style={{margin: "10px 0 10px 0", textTransform: "uppercase", fontWeight: "300", fontSize: "14px", letterSpacing: "4px"}}>
      {props.topicName}
    </div>
  );
} 

export default TopicHeading;