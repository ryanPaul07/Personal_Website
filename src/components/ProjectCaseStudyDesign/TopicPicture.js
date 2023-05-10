import React, { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { animated, useSpring } from 'react-spring';

function TopicPicture(props) {
  const [height, setHeight] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const springProps = useSpring({ opacity: showImage ? 1 : 0 });

  const handleLoad = (event) => {
    const { height } = event.target;
    setHeight(height);
    setShowImage(true);
  };

  return (
    <div style={{display: "flex", alignItems: "center", margin: "40px 0 40px 0"}}>
        <animated.div style={springProps}>
          <LazyLoadImage src={props.projectImg} effect="blur" style={{width: "100% ", height: "auto", borderRadius: "5px"}} onLoad={handleLoad}/>
        </animated.div>
    </div>
  );
}

export default TopicPicture;