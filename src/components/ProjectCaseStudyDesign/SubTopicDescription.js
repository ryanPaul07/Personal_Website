import React from 'react';

function SubTopicDescription(props) {

  return (
    <div style={{margin: "10px 0 10px 0",fontWeight: "600", fontSize: "26px", letterSpacing: "-1PX"}}>
      {props.topicDescription}
    </div>
  );
} 

export default SubTopicDescription;