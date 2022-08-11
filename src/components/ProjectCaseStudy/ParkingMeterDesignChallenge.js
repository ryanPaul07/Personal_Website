import React from 'react';
import CaseStudyMainBanner from '../ProjectCaseStudyDesign/CaseStudyMainBanner';
import projectShopifyChallenge from '../../resources/ShopifyDesign.png';
import TopicHeading from '../ProjectCaseStudyDesign/TopicHeading';
import TopicDescription from '../ProjectCaseStudyDesign/TopicDescription';

function ParkingMeterDesignChallenge() {

  return (
    <div>
      <CaseStudyMainBanner projectName="Shopify Design Challenge" projectImg={projectShopifyChallenge}/>
      <TopicHeading topicName="Disclaimer"/>
      <div style={{fontSize: "24px"}}>This case study is still under development on this website, in the mean time check out a version of the case study <a className="project-github-link" href="https://www.behance.net/gallery/139533443/Shopify-Design-Challenge" target="_blank" rel="noopener noreferrer" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>here</a></div>
    </div>
  );
} 

export default ParkingMeterDesignChallenge;