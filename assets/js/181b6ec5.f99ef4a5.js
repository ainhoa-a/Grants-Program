"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[66398],{20313:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(74848),t=i(28453);const r={},a="BrightTreasury",o={id:"applications/bright_treasury",title:"BrightTreasury",description:"Team Name:* Bright Inventions",source:"@site/applications/bright_treasury.md",sourceDirName:"applications",slug:"/applications/bright_treasury",permalink:"/applications/bright_treasury",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/bright_treasury.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Idea creating &amp; Proposal submission &amp; in-app logins",id:"milestone-1--idea-creating--proposal-submission--in-app-logins",level:3},{value:"Out of scope: council voting",id:"out-of-scope-council-voting",level:4},{value:"Milestone 2 \u2014 discussions panel &amp; treasury overview &amp; multiple networks",id:"milestone-2--discussions-panel--treasury-overview--multiple-networks",level:3},{value:"Milestone 3 \u2014 Bounties &amp; in-app history",id:"milestone-3--bounties--in-app-history",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2}];function h(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"brighttreasury",children:"BrightTreasury"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Team Name:"})," Bright Inventions"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Payment Address:"})," 0xC1bE52Df4d34f86594cFaF69D374e2C48194d1cC"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/bright_treasury_logo%20(1).png",alt:"BrightTreasury logo"})}),"\n",(0,n.jsx)(s.p,{children:"BrightTreasury - a web app for handling the network treasury module."}),"\n",(0,n.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"The aim of the BrightTreasury project is to create a standalone web application along with a PWA representation that would allow performing basic actions on the Treasury module of Polkadot and Kusama Substrate networks (with a potential to support any Substrate-based network with Treasury module). It would allow a more intuitive and lightweight flow of submitting proposals as well as an overview of the Treasury related actions."}),"\n",(0,n.jsx)(s.p,{children:"Our focus will be on the regular user\u2019s actions rather than the council perspective for this first release. We want to attract more professionals who could contribute to the community with their ideas and skills but at the same time may not be as fluent in blockchain customs and terminology."}),"\n",(0,n.jsx)(s.p,{children:"Based on the discussions with the Substrate networks\u2019 users and council members as well as analysis of the comments under Polkadot and Kusama proposal submissions, we identified areas that caused most issues in the Treasury funding process from the user\u2019s perspective. The main needs that were brought up were:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"more intuitive proposal submission flow, with clearer indication of a proposal idea being subject to the community discussion, before submitting to blockchain and committing with bond funds"}),"\n",(0,n.jsx)(s.li,{children:"one place for following the submitted proposals, their status and the results of motions"}),"\n",(0,n.jsx)(s.li,{children:"a unified discussion forum to leave comments about submitted proposals as well as their draft versions (ideas)"}),"\n",(0,n.jsx)(s.li,{children:"implementation of the new bounties funding mechanism"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Following these needs, we propose a solution that will benefit the Substrate chains communities."}),"\n",(0,n.jsx)(s.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(s.p,{children:"The application will have the proposal lifecycle as its main focus - starting from a more approachable proposal definition, clearly stated two phases of the submission (an Idea for preliminary discussion and the formal Proposal after blockchain confirmation) followed by an intuitive overview of the submitted proposals and their state."}),"\n",(0,n.jsx)(s.p,{children:"Technology stack: NestJS and React"}),"\n",(0,n.jsx)(s.p,{children:"In addition to the currently available functionality within the Treasury module, we plan to introduce supplementary features that can benefit the user experience."}),"\n",(0,n.jsxs)(s.p,{children:["What is more, as we understand that visual aspects are crucial when talking about user experience, we have prepared the clickable designs that illustrate the main flow we wish to implement. Please find it under the following link: ",(0,n.jsx)(s.a,{href:"https://xd.adobe.com/view/0bb66d6e-5797-40bc-aa29-c6f71131f402-5ee5/",children:"https://xd.adobe.com/view/0bb66d6e-5797-40bc-aa29-c6f71131f402-5ee5/"})]}),"\n",(0,n.jsx)(s.p,{children:"Features will include:"}),"\n",(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Treasury overview"}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Summarise treasury info"}),(0,n.jsx)("li",{children:"Display spend period stats"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.11.07.png",alt:"Spend period stats"})}),(0,n.jsx)("li",{children:"Show ideas/proposals details"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.12.15.png",alt:"Show ideas/proposals list details"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.13.18.png",alt:"Show ideas/proposals details"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Link to proposal details in other services"}),(0,n.jsx)("li",{children:"Milestones"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.15.56.png",alt:"Milestones"})}),(0,n.jsx)("li",{children:"Link to in-app proposal details with discussion"}),(0,n.jsx)("li",{children:"Related motions"}),(0,n.jsx)("li",{children:"Subject of proposal"}),(0,n.jsx)("li",{children:"Reason of proposal"}),(0,n.jsx)("li",{children:"Reward and bound"}),(0,n.jsx)("li",{children:"Proposer\u2019s information"}),(0,n.jsx)("li",{children:"Portfolio"}),(0,n.jsx)("li",{children:"Nets of submission"})]}),(0,n.jsx)("li",{children:"Show approved proposals "})]}),(0,n.jsx)("li",{children:"Submit proposal"}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Submit an idea - for discussion"}),(0,n.jsx)("li",{children:"Submit a proposal to blockchain"})]}),(0,n.jsx)("li",{children:"Integrated motions overview"}),(0,n.jsx)("li",{children:"Switching between networks (+ an overview of proposals shared between Substrate chains)"}),(0,n.jsx)("li",{children:"Login in-app"}),(0,n.jsx)("li",{children:"History in-app (past proposals accepted/rejected)"}),(0,n.jsx)("li",{children:"Bounties"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.16.53.png",alt:"Bounties"})}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Add a new bounty "}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.21.03.png",alt:"Bounties"})}),(0,n.jsx)("li",{children:"Nominate a bounty curator"}),(0,n.jsx)("li",{children:"Set a bounty status"}),(0,n.jsx)("li",{children:"Reward a bounty"})]}),(0,n.jsx)("li",{children:"Mobile responsive UI (tablet & phone) & Progressive Web App (PWA)"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.22.41.png",alt:"Tablet"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/bright/bright-treasury-proposal-src/blob/main/Screenshot%202021-01-29%20at%2013.23.23.png",alt:"Mobile"})})]}),"\n",(0,n.jsx)(s.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(s.p,{children:"Currently, the Treasury module is a part of the general network management tool. We plan to separate it and develop an independent service, with a more streamlined and intuitive flow and presentation. Such a platform would be more approachable for the users from outside of the blockchain community and have a potential for simpler promotion of the Treasury funded actions."}),"\n",(0,n.jsx)(s.p,{children:"Main distinguishing features:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"a more intuitive, two-step flow for submitting proposals (Idea -> Proposal)"}),"\n",(0,n.jsx)(s.li,{children:"in-app module for more detailed proposal descriptions (like adding milestones) connected with proposal related discussion and - reporting progress on approved proposals"}),"\n",(0,n.jsx)(s.li,{children:"clear overview of the submitted proposals matched with derived motions and their results"}),"\n",(0,n.jsx)(s.li,{children:"historical overview of the past spending periods\u2019 proposals that were submitted using the app"}),"\n",(0,n.jsx)(s.li,{children:"the first app with dedicated bounties implementation"}),"\n",(0,n.jsx)(s.li,{children:"in-app login"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"team",children:"Team"}),"\n",(0,n.jsx)(s.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Agnieszka Olszewska - Technical Lead, blockchain specialist"}),"\n",(0,n.jsx)(s.li,{children:"Alisa Kashytska - UI/UX design"}),"\n",(0,n.jsx)(s.li,{children:"Szymon Miloch - fullstack developer"}),"\n",(0,n.jsx)(s.li,{children:"Daniel Makurat - fullstack developer, blockchain specialist"}),"\n",(0,n.jsx)(s.li,{children:"Katarzyna \u0141ukasiewicz - Project Manager"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Katarzyna \u0141ukasiewicz:"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contact Email:"})," ",(0,n.jsx)(s.a,{href:"mailto:katarzyna.lukasiewicz@brightinventions.pl",children:"katarzyna.lukasiewicz@brightinventions.pl"})]}),"\n",(0,n.jsxs)(s.li,{children:["Website ",(0,n.jsx)(s.a,{href:"https://brightinventions.pl/",children:"https://brightinventions.pl/"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsx)(s.p,{children:"Bright Inventions is a limited liability company based in Gdansk, Poland. Company was founded in 2012 by Daniel Makurat and Micha\u0142 \u0141ukasiewicz."}),"\n",(0,n.jsx)(s.p,{children:"Full address details:"}),"\n",(0,n.jsx)(s.p,{children:"Bright Inventions Sp. z o. o."}),"\n",(0,n.jsx)(s.p,{children:"ul. Jana Matejki 12"}),"\n",(0,n.jsx)(s.p,{children:"80-232 Gda\u0144sk, Poland"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"mailto:info@brightinventions.pl",children:"info@brightinventions.pl"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"http://www.brightinventions.pl",children:"www.brightinventions.pl"})}),"\n",(0,n.jsx)(s.p,{children:"Company registration number: 0000687244"}),"\n",(0,n.jsx)(s.p,{children:"VAT EU: PL5842761920"}),"\n",(0,n.jsx)(s.p,{children:"REGON: 367805647"}),"\n",(0,n.jsx)(s.p,{children:"Bright Inventions is a team of 50 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms."}),"\n",(0,n.jsx)(s.p,{children:"We believe that building a software product is about people working together in a collective way. By offering complex support \u2013 mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process."}),"\n",(0,n.jsx)(s.p,{children:"We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always  aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide."}),"\n",(0,n.jsx)(s.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Agnieszka -  she is a senior backend developer with main interest in data modelling. She started her software development career 10 years ago and from then she began discovering a lot of new technologies. Among them there are JavaScript, TypeScript, React, Postgres, Node.js, NestJS. Most recently she\u2019s been engaged in developing blockchain based solutions with Substrate."}),"\n",(0,n.jsx)(s.li,{children:"Alisa - a UI/UX designer with a passion for digging deep into the product domain and understanding the user's perspective. She has worked on the design for multiple web/mobile solutions and lately has been responsible for UI redesign of Parity Building Blocks Android and web apps."}),"\n",(0,n.jsx)(s.li,{children:"Szymon - a positive and ambitious software developer who has developed a passion for both Android and web, with experience in Kotlin, React, Node.js and Nest.js among other technologies. Always open to opportunities and projects where he can find something new to learn. Experienced in working in international teams."}),"\n",(0,n.jsx)(s.li,{children:"Daniel - his main areas of experience is development of data processing software and configurations. He develops in TypeScript, Node.js, NestJS. He\u2019s been a part of the development teams working on blockchain solutions for Parity projects."}),"\n",(0,n.jsx)(s.li,{children:"Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/bright/bright-tresury",children:"https://github.com/bright/bright-tresury"})}),"\n",(0,n.jsx)(s.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/agnieszka-olszewska-502613143/",children:"https://www.linkedin.com/in/agnieszka-olszewska-502613143/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/alisa-kashytska-a38417b1/",children:"https://www.linkedin.com/in/alisa-kashytska-a38417b1/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/szymon-miloch/",children:"https://www.linkedin.com/in/szymon-miloch/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/daniel-makurat-b7b5a026/",children:"https://www.linkedin.com/in/daniel-makurat-b7b5a026/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/katarzyna-%C5%82ukasiewicz-b473901aa/",children:"https://www.linkedin.com/in/katarzyna-\u0142ukasiewicz-b473901aa/"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,n.jsx)(s.p,{children:"The development of the specified user stories will be broken into 3 milestones, each taking 1 month to complete."}),"\n",(0,n.jsx)(s.p,{children:"Definition of Done for each user story:"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Unit tests passed"}),(0,n.jsx)("li",{children:"Code has been reviewed by peer"}),(0,n.jsx)("li",{children:"Acceptance criteria were met"}),(0,n.jsx)("li",{children:"Internal QA has been performed"}),(0,n.jsx)("li",{children:"Documentation has been written"}),(0,n.jsx)("li",{children:"Screens are responsive and prepared both for desktop and PWA (mobile and tablet)"}),(0,n.jsx)("li",{children:"Browser compatibility"}),(0,n.jsx)("ul",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("li",{children:"Chrome from 70 upwards"}),"\n\xa0\xa0\t   ",(0,n.jsx)("li",{children:"Safari from 12 upwards"}),"\n",(0,n.jsx)("li",{children:"Firefox from 57 upwards"}),"\n\xa0\xa0\xa0\t   ",(0,n.jsx)("li",{children:"Edge from 42 upwards"})]})})]}),"\n",(0,n.jsx)(s.p,{children:"At the end of each milestone:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The user stories listed for the given milestone have been implemented both on frontend and backed and the DoD criteria were met, allowing the user to perform the defined actions"}),"\n",(0,n.jsx)(s.li,{children:"The functionality has been deployed to stage environment, accessible for testing purposes"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Total Estimated Duration: 3 months"}),"\n",(0,n.jsx)(s.li,{children:"Full-time equivalent (FTE): 1"}),"\n",(0,n.jsx)(s.li,{children:"Total Costs: 28 500 DAI"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"milestone-1--idea-creating--proposal-submission--in-app-logins",children:"Milestone 1 \u2014 Idea creating & Proposal submission & in-app logins"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Estimated Duration: 1 month"}),"\n",(0,n.jsx)(s.li,{children:"FTE: 1.1 FTE"}),"\n",(0,n.jsx)(s.li,{children:"Costs: 10 450 DAI"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The main goal of this milestone is to implement the core flow of the app, that is the Proposal lifecycle. As a result the user will be able to create an Idea, add all the necessary details, create Milestones for an Idea, make it public and decide to submit the Idea to the blockchain, turning it into a formal Proposal. The status of the Proposal will be then updated based on the data returning from the API. To perform these actions a user will need to be logged in, however browsing through ideas and proposals will be available to everyone."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number"}),(0,n.jsx)(s.th,{children:"Deliverable"}),(0,n.jsx)(s.th,{children:"Specification"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0a."}),(0,n.jsx)(s.td,{children:"License"}),(0,n.jsx)(s.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0b."}),(0,n.jsx)(s.td,{children:"Documentation"}),(0,n.jsx)(s.td,{children:"We will provide inline documentation of the code and a basic tutorial that explains how to set up and run the project."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0c."}),(0,n.jsx)(s.td,{children:"Testing Guide"}),(0,n.jsx)(s.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1."}),(0,n.jsx)(s.td,{children:"User Story 1"}),(0,n.jsx)(s.td,{children:"As a user, I can sign up and sign in to the app"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2."}),(0,n.jsx)(s.td,{children:"User Story 2"}),(0,n.jsx)(s.td,{children:"As a logged in user, I can create an idea and publish it or save as a draft."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3."}),(0,n.jsx)(s.td,{children:"User Story 3"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can edit my draft idea and publish it to the community for viewing"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4."}),(0,n.jsx)(s.td,{children:"User story 4"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can edit my idea."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5."}),(0,n.jsx)(s.td,{children:"User story 5"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can add/edit/remove milestones."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6."}),(0,n.jsx)(s.td,{children:"User story 6"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can submit my idea as a proposal (signing and submitting one transaction)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"7."}),(0,n.jsx)(s.td,{children:"User story 7"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can turn each milestone separately to a proposal (signing and submitting a separate transaction for each milestone). One milestone at a time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"8."}),(0,n.jsx)(s.td,{children:"User story 8"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can edit my ideas as long as the proposal is not closed (rejected or submitted)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"9."}),(0,n.jsx)(s.td,{children:"User story 9"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view all ideas."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"10."}),(0,n.jsx)(s.td,{children:"User story 10"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view details of an idea."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11."}),(0,n.jsx)(s.td,{children:"User story 11"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view the details of proposals and their votings. (In this milestone, there will be no in-app history of transactions made outside of the app. Once a proposal is rewarded, it\u2019s voting result will not be visible in the app. This will be available in the milestone 3)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12."}),(0,n.jsx)(s.td,{children:"User story 12"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view proposals list\xa0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13."}),(0,n.jsx)(s.td,{children:"User story 13"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view the details & status of proposals"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14."}),(0,n.jsx)(s.td,{children:"Stage environment"}),(0,n.jsx)(s.td,{children:"We will provide an online staging environment with a local Polkadot node to demonstrate the full functionality of our app."})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"out-of-scope-council-voting",children:"Out of scope: council voting"}),"\n",(0,n.jsx)(s.h3,{id:"milestone-2--discussions-panel--treasury-overview--multiple-networks",children:"Milestone 2 \u2014 discussions panel & treasury overview & multiple networks"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Estimated Duration: 1 month"}),"\n",(0,n.jsx)(s.li,{children:"FTE: 0.9 FTE"}),"\n",(0,n.jsx)(s.li,{children:"Costs: 8 550 DAI"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The goal of this milestone is to add more features to the ideas and proposals handling. The ideas as well as proposals will have the discussion functionality added and it will be possible to add them to multiple networks as well, as the representation of multiple blockchain networks feature will also be implemented at this stage. What is more, an overview of the treasury statistics will be presented for each network respectively."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number"}),(0,n.jsx)(s.th,{children:"Deliverable"}),(0,n.jsx)(s.th,{children:"Specification"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1."}),(0,n.jsx)(s.td,{children:"User story 14"}),(0,n.jsx)(s.td,{children:"As a user, I can switch between networks and see data for the selected network."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2."}),(0,n.jsx)(s.td,{children:"User story 15"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can add an idea and milestones to multiple networks."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3."}),(0,n.jsx)(s.td,{children:"User story 16"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can submit my proposal into multiple networks (signing and submitting one transaction for each added network)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4."}),(0,n.jsx)(s.td,{children:"User story 17"}),(0,n.jsx)(s.td,{children:"As an idea owner, I can submit each milestone separately as a proposal into multiple networks (signing and submitting a separate transaction for each milestone for each added network). One milestone at a time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5."}),(0,n.jsx)(s.td,{children:"User story 18"}),(0,n.jsx)(s.td,{children:"As a user, I can view stats of the treasury module"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6."}),(0,n.jsx)(s.td,{children:"User story 19"}),(0,n.jsx)(s.td,{children:"As a logged in user I can discuss the idea."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"7."}),(0,n.jsx)(s.td,{children:"User story 20"}),(0,n.jsx)(s.td,{children:"As a logged in user I can see notification about new comments (in my idea and in ideas I have discussed on)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"8."}),(0,n.jsx)(s.td,{children:"User story 21"}),(0,n.jsx)(s.td,{children:"As a logged in user I can get email notifications about new comments (in my idea and in ideas I have discussed on)"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"milestone-3--bounties--in-app-history",children:"Milestone 3 \u2014 Bounties & in-app history"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Estimated Duration: 1 month"}),"\n",(0,n.jsx)(s.li,{children:"FTE: 1 FTE"}),"\n",(0,n.jsx)(s.li,{children:"Costs: 9 500 DAI"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The main goal of this milestone is implementation of the bounties mechanism. Users will be able to add and browse through bounties, votings for their curators and check the current status. The curators will be able to accept (or reject) their nominations and manage the bounty\u2019s status. Additionally, in this milestone we plan to add a basic integration with Polkassembly. It will be possible to see the description of a proposal/bounty published on Polkassembly. We will also include the history feature based on the data from Polkassembly, which would allow users to browse through closed proposals and bounties, in addition to in-app ideas. What is more, we plan to prepare the Milestone 1 and 2 features for production environment and deploy them,  so they would be already fully functional to the Polkadot and Kusama proposals."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number"}),(0,n.jsx)(s.th,{children:"Deliverable"}),(0,n.jsx)(s.th,{children:"Specification"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1."}),(0,n.jsx)(s.td,{children:"User story 22"}),(0,n.jsx)(s.td,{children:"As a logged in user I can create a bounty proposal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2."}),(0,n.jsx)(s.td,{children:"User story 23"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view voting on approving/rejecting the proposal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3."}),(0,n.jsx)(s.td,{children:"User story 24"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view proposed curator and voting on assigning them"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4."}),(0,n.jsx)(s.td,{children:"User story 25"}),(0,n.jsx)(s.td,{children:"As a curator I can accept the nomination"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5."}),(0,n.jsx)(s.td,{children:"User story 26"}),(0,n.jsx)(s.td,{children:"As a curator I can reject the nomination"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6."}),(0,n.jsx)(s.td,{children:"User story 27"}),(0,n.jsx)(s.td,{children:"As a curator I can award the bounty with a chosen beneficiary"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"7."}),(0,n.jsx)(s.td,{children:"User story 28"}),(0,n.jsx)(s.td,{children:"As a curator I can extend expiry date of a bounty"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"8."}),(0,n.jsx)(s.td,{children:"User story 29"}),(0,n.jsx)(s.td,{children:"As a user I can claim the payout of the bounty (the reserved amount will be paid out to the beneficiary account)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"9."}),(0,n.jsx)(s.td,{children:"User story 30"}),(0,n.jsx)(s.td,{children:"As an unlogged user I can view the bounty proposal status"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"10."}),(0,n.jsx)(s.td,{children:"User story 31"}),(0,n.jsx)(s.td,{children:"As a curator I can edit the contextual info of a bounty (title, description, people who do the work) and report progress."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11."}),(0,n.jsx)(s.td,{children:"User story 32"}),(0,n.jsx)(s.td,{children:"As a user, I can view the details and voting history of closed proposals (only for Polkadot and Kusama networks)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12."}),(0,n.jsx)(s.td,{children:"User story 33"}),(0,n.jsx)(s.td,{children:"As a user, I can view the details and voting history of closed bounties  (only for Polkadot and Kusama networks)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13."}),(0,n.jsx)(s.td,{children:"User story 34"}),(0,n.jsx)(s.td,{children:"As a user I can see the proposal\u2019s description published on Polkassembly."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14."}),(0,n.jsx)(s.td,{children:"User story 35"}),(0,n.jsx)(s.td,{children:"As a user I can see the bounty\u2019s description published on Polkassembly."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"15."}),(0,n.jsx)(s.td,{children:"User story 36"}),(0,n.jsx)(s.td,{children:"As a user I can use the Milestone 1 and Milestone 2 features in production environment"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"16."}),(0,n.jsx)(s.td,{children:"User story 37"}),(0,n.jsx)(s.td,{children:"As a user I cannot edit my idea once the associated proposal is closed (rewarded or rejected)"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"community-engagement",children:"Community engagement"}),"\n",(0,n.jsx)(s.p,{children:"It is our priority to make the BrightTreasury app a living part of the community\u2019s life and as such, we plan on several informational activities such as:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["We want to ask Polkadot blog team to kindly agree on us publishing two articles on their blog (",(0,n.jsx)(s.a,{href:"https://polkadot.network/blog/",children:"https://polkadot.network/blog/"}),"): one at the beginning of the project, second as a tutorial at the end of the project"]}),"\n",(0,n.jsx)(s.li,{children:"We will also submit an article to Medium at the end of the project, presenting the application and its potential contribution"}),"\n",(0,n.jsxs)(s.li,{children:["Two blog posts on our Bright Inventions blog ",(0,n.jsx)(s.a,{href:"https://brightinventions.pl/blog",children:"https://brightinventions.pl/blog"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(s.p,{children:"In future, we plan to include a Tips mechanism as well, with a similar intuitive approach."}),"\n",(0,n.jsx)(s.p,{children:"What is more, we would like to further integrate with Polkassembly to allow a two-way communication. We plan to display proposals and bounties created using BirghtTreasury (along with their details and discussions) in Polkassembly as well and update any changes in both services."})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);