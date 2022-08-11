import React from 'react';
import CaseStudyMainBanner from '../ProjectCaseStudyDesign/CaseStudyMainBanner';
import zoomChatCaseStudy from '../../resources/ZoomDesign.png';
import zoomViewsWireframe from '../ProjectAssets/ZoomChatDesign/Zoom Different Views.png'
import zoomTypingIndicator from '../ProjectAssets/ZoomChatDesign/Zoom Typing Indicator.png'
import TopicHeading from '../ProjectCaseStudyDesign/TopicHeading';
import TopicDescription from '../ProjectCaseStudyDesign/TopicDescription';
import SubTopicDescription from '../ProjectCaseStudyDesign/SubTopicDescription';
import TopicBody from '../ProjectCaseStudyDesign/TopicBody';
import TopicBodyHighlight from '../ProjectCaseStudyDesign/TopicBodyHighlight';
import TopicPicture from '../ProjectCaseStudyDesign/TopicPicture';
import Divider from '../ProjectCaseStudyDesign/Divider';
import ZoomSurvey from '../ProjectAssets/ZoomChatDesign/Zoom Survey Results.png'
import zoomFluidMessage from '../ProjectAssets/ZoomChatDesign/Zoom fluid message.png'
import TopicOverview from '../ProjectCaseStudyDesign/TopicOverview';
import zoomReplyDesign from '../ProjectAssets/ZoomChatDesign/Zoom Reply Design.png';
import zoomReplyingView from '../ProjectAssets/ZoomChatDesign/Zoom Different Reply View.png';
import zoomNotificationView from '../ProjectAssets/ZoomChatDesign/Zoom Different Notification View.png';
import zoomThreadDesign from '../ProjectAssets/ZoomChatDesign/Thread design.png';
import zoomFontDesign from '../ProjectAssets/ZoomChatDesign/Font design.png';
import zoomIconDesign from '../ProjectAssets/ZoomChatDesign/Icon design.png';
import zoomFinalDesignPrototype from '../ProjectAssets/ZoomChatDesign/Zoom Final Design Prototype.png';
import threadPrototype from '../ProjectAssets/ZoomChatDesign/Thread Prototype.mp4';
import TopicVideo from '../ProjectCaseStudyDesign/TopicVideo';
import ZoomSolution from '../ProjectAssets/ZoomChatDesign/Zoom solution summary.png';
import notificationPrototype from '../ProjectAssets/ZoomChatDesign/Notification Prototype.mp4';
import multiThreadPrototype from '../ProjectAssets/ZoomChatDesign/MultiThread Prototype.mp4';
import protoPersona from '../ProjectAssets/ZoomChatDesign/Proto Persona.png';
import finalScore from '../ProjectAssets/ZoomChatDesign/final score.png';
import TopicReflection from '../ProjectCaseStudyDesign/TopicReflection';


var reflection = [
  {
    point: 'Thinking Big and Iteration.',
    body: 'During the early stages of design, the focus shouldnt be on creating refined design solutions but rather should be about exploring various ideas. Using this mindset and iterating logically by using the data, will allow you to reach the right solution in the end.'
  },
  {
    point: 'Existing Design Systems are not your enemy.',
    body: 'For this case study I had to be mindful of the existing Zoom design language while integrating my design changes. Rather than finding ways to work around this, I focused on creating a consistent and fluid experience which will meet the users expectations for Zoom.'
  },
  {
    point: "Design isn’t always about creating something new (Jakob’s law).",
    body: "When thinking about creating a new experience for users, I always thought this meant reinventing the design wheel. However this isnt always the case as the focus should truly be on meeting user needs and if these needs are met by an existing design principle/system, then that's fine. "
  }
];

function ZoomChatDesign() {

  return (
    <div>
      <CaseStudyMainBanner projectName="Zoom Chat Design" projectImg={zoomFinalDesignPrototype} />
      <TopicHeading topicName="Overview" />
      <TopicOverview team="(Ryan Paul), Umer Ahmed, Suraj Goraya, Indeep Farma, Laiba Mustafa" role="Lead UX Research, Lead UI/UX Design, Web Developer" tools="Figma, Microsoft Survey, Pen and Paper, React" timeline="Sep 2021 - Dec 2021 (Revised Jul 2022)"/>
      <Divider />
      <TopicHeading topicName="Problem" />
      <TopicDescription topicDescription="Zoom has failed to create an engaging environment for all students to learn online."/>
      <TopicBody topicBody="As classes shifted online due to the pandemic, the environment in which students learned also changed. Collaboration between students became non-existent and students felt more isolated than ever." />
      <Divider />
      <TopicHeading topicName="Solution" />
      <TopicDescription topicDescription="Uninterrupted, Transparent and Continued Conversations are key."/>
      <TopicPicture projectImg={ZoomSolution} />
      <Divider />
      <TopicHeading topicName="Expectations" />
      <TopicDescription topicDescription="What this project is and What to expect."/>
      <TopicBody topicBody="This case study was a milestone project for our CIS 4300 Human Computer Interaction class. We were tasked with finding ways to improve Zoom, to make it more helpful for university students. This was our main prompt and we were expected to create a solution which wouldn't distract from the current zoom design language." />
      <br />
      <TopicBodyHighlight topicBodyHighlight="This case study shows my updated approach to our original submission." />
      <Divider />
      <TopicHeading topicName="Initial Survey" />
      <TopicDescription topicDescription="Uncovering Hidden Opportunities"/>
      <TopicBody topicBody="To get a better understanding of the problem and student thoughts, we conducted a survey with 83 student responses and created a persona which reflected our findings. Our results highlighted an opportunity for there to be a more fluid environment for students to learn. Specifically those students who couldn't talk, but still wanted to be a part of the conversation and contribute to discussions." />
      <TopicPicture projectImg={ZoomSurvey} />
      <TopicPicture projectImg={protoPersona} />
      <TopicHeading topicName="Main Insights" /> 
      <TopicDescription topicDescription="Students value a chat system which creates undisturbed conversations."/>
      <TopicBody topicBody="Using the existing survey results and combining them with more online research, I have organized my findings into 3 main insights."/>
      <br />
      <SubTopicDescription topicDescription="Consistency"/>
      <TopicBody topicBody="Students value a consistent and clean chat interface which will not distract them while navigating through different screens. Every student has their own viewing preference which is why it is important to create a well balanced chat interface which integrates with the video."/>
      {/* <TopicPicture projectImg={zoomConsistency} /> */}
      <TopicPicture projectImg={zoomViewsWireframe} />
      <SubTopicDescription topicDescription="Transparency"/>
      <TopicBody topicBody="Students want to know if their questions or statements are being acknowledged. Having a layer of transparency creates more conversation and subtly lets the students know that there will be a response soon."/>
      {/* <TopicPicture projectImg={zoomTransparency} /> */}
      <TopicPicture projectImg={zoomTypingIndicator} />
      <SubTopicDescription topicDescription="Continuity"/>
      <TopicBody topicBody="A simple and linear threaded reply system creates a sense of continuity which makes the chat conversations easier to follow and promotes more participation."/>
      <TopicPicture projectImg={zoomFluidMessage} />
      {/* <TopicPicture projectImg={zoomContinuity} /> */}
      <Divider />
      <TopicHeading topicName="Design" />
      <TopicDescription topicDescription="Balancing priorities for a fluid chat experience" />
      <TopicBody topicBody="To create a fluid chat experience for students using zoom, I focused on creating fast and easily intuitive interactions."/>
      <TopicPicture projectImg={zoomReplyDesign} />
      <TopicPicture projectImg={zoomReplyingView} />
      <TopicPicture projectImg={zoomNotificationView} />
      <Divider />
      <TopicHeading topicName="Branding" />
      <TopicDescription topicDescription="Paying attention to the small details" />
      <TopicBody topicBody="The overall goal with the branding for this new design was to integrate these changes with the zoom design system effectively, while also prioritizing student needs. This meant I had to utilize certain color choices, use specific fonts and make mindful overall design decisions."/>
      <br />
      <SubTopicDescription topicDescription="Creating an Identity"/>
      <TopicBody topicBody="The first and most prominent design change is the new thread based reply system. The threads themselves are used to quickly grab the students attention through a unique design. The colors show if a student is directly involved with a message. If a thread is blue that means the student is part of the conversation. Otherwise, other students in the meeting are using the reply feature."/>
      <br />
      <TopicBody topicBody="Having this differentiation is important as it focuses the users attention on the meeting, unless they reply themselevs."/>
      <TopicPicture projectImg={zoomThreadDesign} />
      <SubTopicDescription topicDescription="Simple Typography"/>
      <TopicBody topicBody="The typography highlights the simplistic approach I adopted to keep the view less congested and more focused on legibility. The ‘Lato’ font is the default Zoom font used within their chat system, so having this font and working around it was necessary. For titles I used a sans-serif font with a bold weight to make it easily distinguishable at glance to make interactions quicker."/>
      <TopicPicture projectImg={zoomFontDesign} />
      <SubTopicDescription topicDescription="Clean Icons"/>
      <TopicBody topicBody="To follow zoom’s design language and keep a fluid user experience, I decided to use outline icons with wide inner spacing to make them more recognizable. Furthermore for the hover-state/selected-state, the icons will be filled in. Finally for the reply button, based on the user feedback, having a solid reply button was more natural and easily distinguishable."/>
      <TopicPicture projectImg={zoomIconDesign} />
      <TopicHeading topicName="Final Design" />
      <TopicDescription topicDescription="Threaded Response" />
      <TopicVideo vidName={threadPrototype}/>
      <TopicDescription topicDescription="Notifications" />
      <TopicVideo vidName={notificationPrototype}/>
      <TopicDescription topicDescription="Multi-threaded Response" />
      <TopicVideo vidName={multiThreadPrototype}/>
      <Divider />
      <TopicHeading topicName="Feedback + Reflection" />
      <TopicDescription topicDescription="Final Score" />
      <TopicBody topicBody="Our overall grade for this project was 94%. This was one of the highest in the class and received praise from our professor and fellow students as well."/>
      <TopicPicture projectImg={finalScore} />
      <TopicDescription topicDescription="Reflecting On My Work" />
      <TopicBody topicBody="I am grateful to work through this problem again as I got the chance to refine and improve on my visual design skills this time around. This project allowed me to reflect on my overall ux process and helped me understand how I can improve going forward. Furthermore, working alone made me accountable for every decision and was a great way for me to reflect on my working habits. Looking at some things I’ve learned from this case study:"/>
      <TopicReflection topicReflection={reflection} />
      <Divider />
    </div>
  );
} 

export default ZoomChatDesign;