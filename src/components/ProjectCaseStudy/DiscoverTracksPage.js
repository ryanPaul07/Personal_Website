import React from 'react';
import CaseStudyMainBanner from '../ProjectCaseStudyDesign/CaseStudyMainBanner';
import discoverTracks from '../../resources/DiscoverTracks.png';
import TopicHeading from '../ProjectCaseStudyDesign/TopicHeading';
import TopicDescription from '../ProjectCaseStudyDesign/TopicDescription';

function DiscoverTracksPage() {

  return (
    <div>
      <CaseStudyMainBanner projectName="Discover Tracks" projectImg={discoverTracks}/>
      <TopicHeading topicName="Disclaimer"/>
      <div style={{fontSize: "24px"}}>This case study is still under development on this website, in the mean time check out the project <a className="project-github-link" href="https://ryanpaul07.github.io/discovertracks/" target="_blank" rel="noopener noreferrer" style={{color: '#4295db', fontWeight: "bold" ,textDecoration: 'none'}}>here</a></div>
    </div>
  );
} 

export default DiscoverTracksPage;