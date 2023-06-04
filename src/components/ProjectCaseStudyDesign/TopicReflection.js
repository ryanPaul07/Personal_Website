import React from 'react';

function TopicReflection(props) {

  return (
    <div style={{margin: "0 auto"}}>
      {props.topicReflection.map(idea => {
        return (
          <div>
            <br />
            <div style={{fontWeight: "400", fontSize: "18px", maxWidth:"75%"}}>
              <div style={{fontWeight: "400", fontSize: "18px", fontWeight: "bold", display: "inline-block"}}>{idea.point}</div>
              {" "}{idea.body}
            </div>
          </div>
        );
      })}
    </div>
  );
} 

export default TopicReflection;