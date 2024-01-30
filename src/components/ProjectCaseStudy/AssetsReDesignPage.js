import React from 'react';
import CaseStudyMainBanner from '../ProjectCaseStudyDesign/CaseStudyMainBanner';
import assets24 from '../../resources/Assets2024.png';
import TopicHeading from '../ProjectCaseStudyDesign/TopicHeading';
import TopicDescription from '../ProjectCaseStudyDesign/TopicDescription';
import Divider from '../ProjectCaseStudyDesign/Divider';
import TopicOverview from '../ProjectCaseStudyDesign/TopicOverview';

function AssetsReDesignPage() {

  return (
    <div>
      <CaseStudyMainBanner projectName="Revamping the Assets Conference Website" projectImg={assets24}/>
      <TopicHeading topicName="Overview"/>
      <TopicOverview team="(Ryan Paul), Suraj Goraya, Ananya Thukral, Jaipreet Singh" role="Lead Designer" tools="Figma" timeline="In Progress"/>
      <Divider />
      <TopicHeading topicName="Disclaimer"/>
      <div style={{fontSize: "24px"}}>This case study is currently locked. Please feel free to <a className="project-github-link" href="mailto:paulryan229@gmail.com" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>contact me</a> to learn more and explore the details behind this project.</div>
    </div>
  );
} 

export default AssetsReDesignPage;