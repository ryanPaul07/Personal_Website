import React from 'react';

function TopicOverview(props) {

  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
      <div style={{width: "200px", marginTop: "8px"}}>
        <div style={{fontWeight: "600", fontSize: "24px"}}>Team</div>
        <div style={{fontWeight: "400", fontSize: "18px"}}>{props.team}</div>
      </div>
      <div style={{width: "200px", marginTop: "8px"}}>
        <div style={{fontWeight: "600", fontSize: "24px"}}>Role</div>
        <div style={{fontWeight: "400", fontSize: "18px"}}>{props.role}</div>
      </div>
      <div style={{width: "200px", marginTop: "8px"}}>
        <div style={{fontWeight: "600", fontSize: "24px"}}>Tools</div>
        <div style={{fontWeight: "400", fontSize: "18px"}}>{props.tools}</div>
      </div>
      <div style={{width: "200px", marginTop: "8px"}}>
        <div style={{fontWeight: "600", fontSize: "24px"}}>Timeline</div>
        <div style={{fontWeight: "400", fontSize: "18px"}}>{props.timeline}</div>
      </div>
    </div>
  );
} 

export default TopicOverview;