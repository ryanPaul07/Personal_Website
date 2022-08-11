import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { useEffect } from 'react';
import {
  Link,
} from "react-router-dom";

import ZoomChatDesign from './ProjectCaseStudy/ZoomChatDesign.js';
import ParkingMeterDesignChallenge from './ProjectCaseStudy/ParkingMeterDesignChallenge.js';
import dataVisualization from '../resources/DataVisualization.png';
import DiscoverTracksPage from './ProjectCaseStudy/DiscoverTracksPage';


function Project() {
  let { projectId } = useParams();
  const [valid, setValid] = useState(true);

  useEffect(() => {
    console.log(projectId)

    if(projectId == "ZoomChatDesign" || projectId == "DiscoverTracksApp" || projectId == "ShopifyDesignChallenge")
      setValid(true);
    else {
      setValid(false);
    }
  }, [projectId, valid]);

  const renderProject = () => {
    switch(projectId) {
      case "ZoomChatDesign":   return <ZoomChatDesign />;
      case "ShopifyDesignChallenge":  return <ParkingMeterDesignChallenge />;
      case "DiscoverTracksApp": return <DiscoverTracksPage />;
      default: return null
    }
  }

  return (
    <div>
      { valid == true
        ? 
          <div>{renderProject()}</div>
        :
          <h4 style={{color: 'black'}}><center>404 Page not found :(. Lets head back to the website <Link to="/" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>here</Link></center></h4>
      }
    </div>
  );
} 

export default Project;