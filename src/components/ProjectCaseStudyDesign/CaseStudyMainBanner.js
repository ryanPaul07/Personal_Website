import React from 'react';

function CaseStudyMainBanner(props) {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px"}}>
      <div style={{size: "26px", fontWeight: "600", marginBottom: "15px", letterSpacing: "-1px"}}>{props.projectName}</div>
      <img src={props.projectImg} style={{width: "100% ", borderRadius: "5px"}}/>
    </div>
  );
} 

export default CaseStudyMainBanner;