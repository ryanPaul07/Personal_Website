(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/Movie-App.c255f653.gif"},53:function(e,t,a){e.exports=a.p+"static/media/Discover-Tracks-App.dd95cef9.gif"},62:function(e,t,a){e.exports=a(73)},67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=(a(67),a(42),a(25)),s=a(4),c=a(18),m=a(117),d=a(111),h=["#6c83ea","#e6695f","#85d582","#a35fe6"];var u=function(e){var t=o.a.useState(0),a=Object(l.a)(t,2),r=a[0],i=a[1],u=Object(s.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent",width:"100%","& > span":{borderRadius:"10px",maxWidth:40,width:"100%",backgroundColor:h[r]}}})((function(e){return o.a.createElement(m.a,Object.assign({},e,{TabIndicatorProps:{children:o.a.createElement("span",null)}}))})),p=Object(s.a)((function(e){return{root:{fontFamily:"'Lato', sans-serif","&:focus":{opacity:1}}}}))((function(e){return o.a.createElement(d.a,Object.assign({disableRipple:!0},e))}));return Object(n.useEffect)((function(){var e=window.location.href.split("/");switch(e[e.length-1]){case"home":i(0);break;case"projects":i(1);break;case"wtr":i(2);break;case"contact":i(3)}}),[]),o.a.createElement("div",null,o.a.createElement(u,{value:r,onChange:function(e,t){i(t)}},o.a.createElement(p,{label:"Home",name:"ryanpaul",to:"/",component:c.c}),o.a.createElement(p,{label:"Projects",to:"/projects",component:c.c}),o.a.createElement(p,{label:"WTR",to:"/wtr",component:c.c}),o.a.createElement(p,{label:"Contact",to:"/contact",component:c.c})))},p=a(112),g=a(43),w=a.n(g);var b=function(){return o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("div",{className:"page-styling",id:"home-page"},o.a.createElement("div",{style:{fontWeight:"bold",color:"#6c83ea",display:"flex",margin:"10px 10px 25px 10px",fontSize:"0.8em"}},"I like to code and make art.")))};var f=function(){return o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("div",{className:"page-styling"},o.a.createElement("p",{className:"main-heading",style:{color:"#85d582"}},"About"),o.a.createElement("div",{className:"text-box"},o.a.createElement("p",null))))},y=a(113),v=a(114),E=a(53),k=a.n(E),x=[{link:"https://github.com/ryanPaul07/MovieManager",languages:"REACT * BOOTSTRAP * omdbAPI",imgSRC:w.a,alt:"Movie Search Project"},{link:"https://github.com/ryanPaul07/discovertracks",languages:"REACT * Spotify API * Tumblr API * OAuth 2.0",imgSRC:k.a,alt:"Discover Tracks Project"}];var j=function(){return o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("div",{className:"page-styling"},o.a.createElement("p",{className:"main-heading",style:{color:"#e6695f"}},"Projects"),o.a.createElement("div",{className:"card-view"},x.map((function(e,t){return o.a.createElement(y.a,{key:t,className:"card-styling",onClick:function(){return function(e){window.open(e.link)}(e)}},o.a.createElement(v.a,{className:"card-box-styling"},o.a.createElement("img",{className:"card-img-styling",src:e.imgSRC,alt:e.alt}),o.a.createElement("p",{className:"card-content-styling"},e.languages)))})))))};var I=function(){return o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("div",{className:"page-styling"},o.a.createElement("p",{className:"main-heading",style:{color:"#a35fe6"}},"Contact"),o.a.createElement("div",{className:"sub-page-styling"},o.a.createElement("a",{className:"contact-link-styling",href:"mailto: rpaul06@uoguelph.ca"},o.a.createElement("strong",null,"Email")),o.a.createElement("a",{className:"contact-link-styling",href:"https://github.com/ryanPaul07",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("strong",null,"Github")),o.a.createElement("a",{className:"contact-link-styling",href:"https://www.linkedin.com/in/ryan-paul07/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("strong",null,"LinkedIn")))))};var N=function(){return console.log("reahced not found s"),o.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("h1",{style:{color:"#e6695f"}},"404 page not found : ("))},C=a(115),O=a(118),S=a(116);function T(){return{display:"flex",alignItems:"center",justifyContent:"center"}}var W=Object(C.a)((function(e){return{paper:{position:"absolute",overflowY:"scroll",width:"80vw",height:"90vh",backgroundColor:"#f8f0dc",padding:e.spacing(2,4,3)}}})),M=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch",backgroundColor:"#85d582"}}}})),R=Object(s.a)({root:{"& label.Mui-focused":{color:"#85d582",fontWeight:"bold"},"& .MuiInput-underline:after":{borderBottomColor:"#85d582"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#85d582"},"&:hover fieldset":{borderColor:"#85d582"},"&.Mui-focused fieldset":{borderColor:"#85d582"}}}})(S.a);var A=function(){var e=W(),t=(M(),Object(n.useState)(!1)),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(""),c=Object(l.a)(s,2),m=c[0],d=c[1],h=o.a.useState(T),u=Object(l.a)(h,1)[0],g=o.a.useState(!1),w=Object(l.a)(g,2),b=w[0],f=w[1],E=function(e){"legacy"==e?window.open("https://ryanpaul07.github.io/Work_Term_Report/"):f(!0)};Object(n.useEffect)((function(){"wtr"==m&&(i(!0),d(""))}),[m]);var k=o.a.createElement("div",{className:e.paper},o.a.createElement("h2",{id:"work-term-report-3-4",style:{fontWeight:"bold",color:"rgb(255 94 94)",fontSize:"1em",paddingBottom:"15px",textDecoration:"underline"}},"Term 3/4: Kenna"),o.a.createElement("div",{id:"work-done-at-kenna",style:{fontSize:"0.55em",fontFamily:"'Roboto Mono', monospace",color:"#7f7e7b"}},o.a.createElement("div",{style:{fontWeight:"bold",fontStyle:"italic",color:"#f5a4a4",paddingBottom:"5px"}},"Introduction"),"For my 3rd and 4th work term, I had the pleasure of working at Kenna as a Web application developer. Kenna located in Mississauga, is a market solutions company dedicated to helping businesses create a more seamless and unified experience for their customers. My role involved me working on various projects; however, my focus was on helping to create a better user experience for customers by making simple and elegant websites accessible by everyone. This included making contributions in both the front-end and back-end.",o.a.createElement("br",null),o.a.createElement("div",{className:"wtr-heading-styling"},"Goals"),"My goals for this internship aligned a lot with the goals Kenna has as a company. As along with my goals of personal growth and gaining more work experience with React, Node and SQL; I wanted to understand the customer more and bring \u201ccustomer first thinking\u201d into my design and development process. I wanted to reach those goals by working closely with my supervisor and having weekly one on one meetings and daily team meetings to improve my technical skills, but also to be efficient with my time and time management. My first goal was to bring design thinking into my development process as at the end of the day we are developing products which are going to be consumed by customers. This was especially important for me to learn now as having this skill will benefit me a lot in the future. By working on various projects which users were going to interact with, I was able to get a better idea of how the customers think and was able to implement those ideas into my design process. My second goal was to improve my technical skills with React, Node and SQL, since this was the technology stack Kenna used and I personally wanted to gain professional experience with these languages as well. Most of the projects I worked on were in React or Node and I also got the chance to work on some SQL as well. This experience will be great for the future as now I feel more confident and comfortable working with these languages.",o.a.createElement("br",null),o.a.createElement("div",{className:"wtr-heading-styling"},"Project"),"I worked on various projects throughout my 8-month term however, I want to highlight my contributions towards the Crop Intentions Webpage. The Crop Intentions Webpage was an app which I worked on near the end of my internship, but I believe that it was a project which allowed me to improve my skills massively. I was part of a 5-member team which was tasked with creating a website for customers under a short time frame. Using the requirements given by the account team, I was able to translate tasks into working code in under a short period of time. This allowed me to be more efficient with my code and turn ambiguous requirements into functional and easy to read code. Furthermore, working on a project under a deadline made me improve my communication skills as well. I was more open with the team about the work I did and always communicated my concerns or issues I had with the requirements. This translated into the work being completed faster and bugs being detected sooner. From a technical standpoint I was able to improve my React and state management skills with this project. Since most of the app used dynamic data, I was able to structure the front-end code in a way which would make the app more reusable. This allowed for the app to be easy to maintain with less interdependencies. Furthermore, the app can also be used for many other similar websites as a template since the data is so dynamic. Working through this project allowed me to work with a lot of data and learn how to manage and present that data is a user friendly fassion.",o.a.createElement("br",null),o.a.createElement("div",{className:"wtr-heading-styling"},"Conclusion"),"Overall, my time spent at Kenna allowed me to greatly improve my skills as a developer and as a person. I got the opportunity to work with some amazing people who were dedicated and passionate about the work they did. This translated within the work environment and made even an online workplace fun. I was able to achieve the goals I set out for myself, but also learned some new skills which I didn\u2019t know about before. In the end this opportunity allowed me to become more confident in myself as a developer through the valuable experience and gave me the platform to continue to grow.",o.a.createElement("br",null),o.a.createElement("div",{className:"wtr-heading-styling"},"Acknowledgements"),"Nicholas Paul, Tom Palos, Joel Levinson, Andrew McCallum, Werner Anders, Manish Lakhotia, Apurv Samant, Kaustubh Jaju"));return o.a.createElement(p.a,{maxWidth:"md"},o.a.createElement("div",{className:"page-styling"},o.a.createElement("p",{className:"main-heading",style:{color:"#85d582",paddingBottom:"15px"}},"Work Term Report"),0==r?o.a.createElement("div",{style:{marginLeft:"20px"}},o.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},o.a.createElement(R,{id:"standard-basic",label:"Password",type:"password",onChange:function(e){d(e.target.value)}}))):o.a.createElement("div",{className:"text-box"},o.a.createElement(y.a,{className:"card-styling",style:{display:"inline-block"},onClick:function(){return E("legacy")}},o.a.createElement(v.a,{className:"card-box-styling",style:{padding:"10px"}},o.a.createElement("div",{style:{fontWeight:"bold",color:"rgb(251 128 65)",display:"flex",fontSize:"0.8em"}},o.a.createElement("p",{style:{marginRight:"5px"}},"TERM 1/2"),o.a.createElement("p",{style:{color:"rgb(214 203 199)"}},"(Old Website)")))),o.a.createElement(y.a,{className:"card-styling",style:{display:"inline-block"},onClick:function(){return E("modal")}},o.a.createElement(v.a,{className:"card-box-styling",style:{padding:"10px"}},o.a.createElement("div",{style:{fontWeight:"bold",color:"rgb(255 94 94)",fontSize:"0.8em"}},"TERM 3/4")))),o.a.createElement(O.a,{open:b,onClose:function(){f(!1)},"aria-labelledby":"work-term-report-3-4","aria-describedby":"work-done-at-kenna",style:u},k)))},P=a(10);var B=Object(P.g)((function(e){e.history;var t=window.location.href.split("/"),a=t[t.length-1];return o.a.createElement("div",{className:"App"},""==a||"about"==a||"projects"==a||"contact"==a||"wtr"==a?o.a.createElement(c.b,null,o.a.createElement(u,null),o.a.createElement(P.d,null,o.a.createElement(P.b,{path:"/",exact:!0,component:b}),o.a.createElement(P.b,{path:"/about",component:f}),o.a.createElement(P.b,{path:"/projects",component:j}),o.a.createElement(P.b,{path:"/wtr",component:A}),o.a.createElement(P.b,{path:"/contact",component:I}))):o.a.createElement(c.b,null,o.a.createElement(P.d,null,o.a.createElement(P.b,{path:"/404",component:N}),o.a.createElement(P.a,{from:"*",to:"/404"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.7f14b0f3.chunk.js.map