import React from 'react';

function TopicReflection(props) {

  return (
    <div style={{width: "90%", margin: "0 auto"}}>
      {props.topicReflection.map(idea => {
        return (
          <div>
            <br />
            <div style={{fontWeight: "400", fontSize: "18px"}}>
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