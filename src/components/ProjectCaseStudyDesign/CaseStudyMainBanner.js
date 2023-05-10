import React, { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { animated, useSpring } from 'react-spring';

function CaseStudyMainBanner(props) {
  const [height, setHeight] = useState(0);

  const handleLoad = (event) => {
    const { height } = event.target;
    setHeight(height);
  };

  const animation = useSpring({
    config: { duration: 300 },
    delay: 500,
    from: { opacity: 0, marginTop: 20},
    to: { opacity: 1, marginTop: 0 },
  });

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px"}}>
      <div style={{size: "26px", fontWeight: "600", marginBottom: "15px", letterSpacing: "-1px"}}>{props.projectName}</div>
      <animated.div style={animation}>
        <LazyLoadImage onLoad={handleLoad} src={props.projectImg} style={{width: "100% ", borderRadius: "5px"}}/>
      </animated.div>
    </div>
  );
} 

export default CaseStudyMainBanner;