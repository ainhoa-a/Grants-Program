"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[233],{48110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=n(74848),l=n(28453);const s={},r="Dot Marketplace",d={id:"applications/dot_marketplace",title:"Dot Marketplace",description:"- Status: Open",source:"@site/applications/dot_marketplace.md",sourceDirName:"applications",slug:"/applications/dot_marketplace",permalink:"/applications/dot_marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/dot_marketplace.md",tags:[],version:"current",frontMatter:{}},o={},a=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"<strong>Overview</strong>",id:"overview",level:3},{value:"<strong>Project Details</strong>",id:"project-details",level:3},{value:"<strong>Repository Hierarchy</strong>",id:"repository-hierarchy",level:3},{value:"<strong>Ecosystem Fit</strong>",id:"ecosystem-fit",level:3},{value:"<strong>Team</strong> \ud83d\udc65",id:"team-",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"<strong>Legal Structure</strong>",id:"legal-structure",level:3},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:3},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:3},{value:"<strong>Team LinkedIn Profiles</strong>",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"<strong>Development Roadmap</strong>\ud83d\udd29",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"<strong>Milestone 1</strong>",id:"milestone-1",level:3},{value:"<strong>Milestone 2</strong>",id:"milestone-2",level:3},{value:"<strong>Milestone 3</strong>",id:"milestone-3",level:3},{value:"<strong>Additional Project Details</strong>",id:"additional-project-details",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dot-marketplace",children:"Dot Marketplace"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," Open"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Project Name:"})," Dot Marketplace"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Wow Labz"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xF13001401396AA866E8012f31fD939C7E83B8601"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Level:"})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:(0,i.jsx)(t.strong,{children:"Overview"})}),"\n",(0,i.jsx)(t.p,{children:"Dot Marketplace is a general purpose decentralised marketplace created as a Substrate pallet."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dot Marketplace can be used by any decentralised project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India buildathon (2021)."}),"\n",(0,i.jsx)(t.li,{children:"It would be directly integrated in Polkadot JS Apps where such marketplaces could be used to create bounties and tasks that could be fulfilled by community members."}),"\n",(0,i.jsx)(t.li,{children:"The inspiration for Dot Marketplace emerged from our own needs while building Yoda - a protocol that facilitates decentralised app development leveraging open data. Dot Marketplace would be used to create data, services and app marketplaces on Yoda, which would motivate us to maintain this project in the long run."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:(0,i.jsx)(t.strong,{children:"Project Details"})}),"\n",(0,i.jsxs)(t.p,{children:["The current scope of work involves two user types: ",(0,i.jsx)(t.strong,{children:"Customer"})," and ",(0,i.jsx)(t.strong,{children:"Service Provider (or Worker)"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Customer can post a task and invite bids from Service Providers to fulfill it."}),"\n",(0,i.jsx)(t.li,{children:"The Customer needs to deposit the budgeted amount in an escrow for the task to be published."}),"\n",(0,i.jsx)(t.li,{children:"The Service Provider needs to deposit some token to participate in a bid. If not shortlisted, this bid amount is returned."}),"\n",(0,i.jsx)(t.li,{children:"The Service Provider completes the task and submits it."}),"\n",(0,i.jsx)(t.li,{children:"The Customer accepts the work and the escrowed amount is credited to the Service Providers wallet."}),"\n",(0,i.jsx)(t.li,{children:"The Customer rates the Service Provider and visa versa."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"NOTE: If the Customer doesn't accept the work, a dispute is raised and it gets resolved in a decentralised court (out of current scope) which will be implemented in the next phase."}),"\n",(0,i.jsx)(t.p,{children:"The following diagrams highlight the workflow:"}),"\n",(0,i.jsx)(t.table,{children:(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Customer"})})})}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/11945179/125753620-e1b094dc-552e-4a4f-9826-23cbefe3a677.png",width:"600"}),"\n",(0,i.jsx)(t.table,{children:(0,i.jsx)(t.thead,{children:(0,i.jsx)(t.tr,{children:(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Service Provider (Worker)"})})})}),"\n",(0,i.jsx)("img",{src:"https://user-images.githubusercontent.com/11945179/125753635-1cc3170e-7a19-410e-a350-93f75a10e93f.png",width:"600"}),"\n",(0,i.jsx)(t.p,{children:"Dot Marketplace is being built as a Substrate pallet. It would include boilerplate code that parachain teams can customize as per their own requirements. We believe this project has the potential to transform community participation, engagement and governance in decentralized projects."}),"\n",(0,i.jsxs)(t.p,{children:["Dot Marketplace will also include frontend UI built on top of the ",(0,i.jsx)(t.code,{children:"substrate-front-end-template"}),", here is a snapshot of the same"]}),"\n",(0,i.jsx)(t.h3,{id:"repository-hierarchy",children:(0,i.jsx)(t.strong,{children:"Repository Hierarchy"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'\u251c\u2500\u2500 Dot Marketplace Network Node [link](https://github.com/WowLabz/tasking_backend)\n\u2502   \u251c\u2500\u2500 ./node ["Chainspecs for Node"]\n\u2502   \u251c\u2500\u2500 ./scripts [Packaging & Deployment Scripts]\n\u2502   \u251c\u2500\u2500 ./pallets/pallet-tasking [Pallets]\n\u2502   \u2502     \u2514\u2500\u2500 ./pallet-tasking \n\u2502   \u2502             \u2514\u2500\u2500 ./src/lib.rs [Tasking Pallet (being implemented)]\n\u2502   \u2514\u2500\u2500 ./runtime [Runtime Module]\n\u2502         \u2514\u2500\u2500 Included custom Tasking Pallet\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running:"}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:(0,i.jsx)(t.strong,{children:"Ecosystem Fit"})}),"\n",(0,i.jsxs)(t.p,{children:["We believe this work could be useful for: ",(0,i.jsx)(t.a,{href:"https://polkadot.network/",children:"Polkadot"}),", ",(0,i.jsx)(t.a,{href:"https://kusama.network/",children:"Kusama"}),", ",(0,i.jsx)(t.a,{href:"https://moonbeam.network/",children:"Moonbeam"})," and any Polkadot parachains/ parathreads interested in including a marketplace."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Almost all Parachains/ parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilising a marketplace like Dot Marketplace where technical, marketing or governance centric tasks can be published. And community members are invited to bid for and exectute them."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"List of Competitors"})}),"\n",(0,i.jsx)(t.p,{children:"Any product or services marketplace would qualify, here are some examples from outside the Polkadot/Kusama ecosystem."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.humanprotocol.org/",children:"Human Protocol"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://effect.ai/",children:"Effect Network"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://market.oceanprotocol.com/",children:"Ocean Protocol Market"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-",children:[(0,i.jsx)(t.strong,{children:"Team"})," \ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:(0,i.jsx)(t.strong,{children:"Team members"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Amit Singh (product manager)"}),"\n",(0,i.jsx)(t.li,{children:"Roshit Omanakuttan (technical architect)"}),"\n",(0,i.jsx)(t.li,{children:"Varun Gyanchandani (backend lead)"}),"\n",(0,i.jsx)(t.li,{children:"Loakesh Indiran (full stack dev)"}),"\n",(0,i.jsx)(t.li,{children:"Siddharth Teli (backend dev)"}),"\n",(0,i.jsx)(t.li,{children:"Bharath Kumar (tester)"}),"\n",(0,i.jsx)(t.li,{children:"Smita Ashok (tech content writer)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Amit Singh"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," amit (dot) singh (@) wowlabz.com"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://www.wowlabz.com/",children:"http://www.wowlabz.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Project Website"})," Dot marketplace website is under construction"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:(0,i.jsx)(t.strong,{children:"Legal Structure"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Wow Internet Labz Private Limited"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:(0,i.jsx)(t.strong,{children:"Team's experience"})}),"\n",(0,i.jsxs)(t.p,{children:["Dot Marketplace is being built by the team at Wow Labz.\nWow Labz is one of India's leading turnkey product development companies.\nYoda Protocol has been conceptualised and is being built by the team at Wow Labz. The team has previously built a decentralised storage protocol called Lake Network - ",(0,i.jsx)(t.a,{href:"https://lakenetwork.io/",children:"https://lakenetwork.io/"})," in addition to multiple dApps on Ethereum, Stellar, EOS and Hyperledger."]}),"\n",(0,i.jsxs)(t.p,{children:["A list of centralised apps published can be found ",(0,i.jsx)(t.a,{href:"https://www.wowlabz.com/work/",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:(0,i.jsx)(t.strong,{children:"Team Code Repos"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/orgs/WowLabz/projects",children:"https://github.com/orgs/WowLabz/projects"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"https://github.com/WowLabz/tasking_backend"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_frontend",children:"https://github.com/WowLabz/tasking_frontend"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles",children:(0,i.jsx)(t.strong,{children:"Team LinkedIn Profiles"})}),"\n",(0,i.jsx)(t.p,{children:"Profiles of the people working actively on Dot Marketplace"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/startupamit/",children:"Amit Singh"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/roshit/",children:"Roshit Omanakuttan"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/varunsays/",children:"Varun Gyanchandani"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/siddharthteli/",children:"Siddharth Teli"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/loakesh-indiran-8a2282140",children:"Loakesh Indiran"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/bharath-kumar-h-13a572126/",children:"Bharath Kumar"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/smita-ashok-823631175/",children:"Smita Ashok"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"Dot Marketplace POC was conceptualised and developed during the Polkadot India hackathon. The roadmap listed below comprises of new features that would help take the POC to a minimum viable product (MVP)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Here's a link to our ",(0,i.jsx)(t.a,{href:"https://youtu.be/xQNOkXQdDnQ",children:"Polkadot India Submission Video"})]}),"\n",(0,i.jsx)(t.li,{children:"We are in touch with Marcin and Raul from the Web 3 Grants and Treasuries team respectively"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap",children:[(0,i.jsx)(t.strong,{children:"Development Roadmap"}),"\ud83d\udd29"]}),"\n",(0,i.jsx)(t.p,{children:"The development of Dot Marketplace is already underway.\nFor the custom pallet (tasking) we are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Using various Substrate provided traits like - ",(0,i.jsx)(t.code,{children:"Currency"}),", ",(0,i.jsx)(t.code,{children:"ExistenceRequirement"}),", ",(0,i.jsx)(t.code,{children:"LockIdentifier"}),", ",(0,i.jsx)(t.code,{children:"LockableCurrency"}),", ",(0,i.jsx)(t.code,{children:"ReservableCurrency"})," and few more;"]}),"\n",(0,i.jsxs)(t.li,{children:["Using the pre-existing pallets like ",(0,i.jsx)(t.code,{children:"assets"}),", ",(0,i.jsx)(t.code,{children:"balances"})," and ",(0,i.jsx)(t.code,{children:"staking"}),";"]}),"\n",(0,i.jsxs)(t.li,{children:["Implementing custom structs like ",(0,i.jsx)(t.code,{children:"TaskDetails"})," and ",(0,i.jsx)(t.code,{children:"TransferDetails"}),". These in turn are used for various functionalities like ",(0,i.jsx)(t.code,{children:"create_task"}),", ",(0,i.jsx)(t.code,{children:"bid_task"}),", ",(0,i.jsx)(t.code,{children:"complete_task"})," and ",(0,i.jsx)(t.code,{children:"approve_task"}),". A special transfer money function is only initiated once the task cycle gets completed and the escrow funds are released to the worker."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"All the below mentioned milestones are going to be implemented and this application is going to be fully public."}),"\n",(0,i.jsx)(t.p,{children:"NOTE: A barebones UI would also be provided as a part of this submission to help the developer experience the functionality"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/4363536/129244239-c843d1c7-477f-48b0-8d65-068bd6df9661.gif",alt:"DotMarketplaceU"})}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  5.9125"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 18,920 USD (half of the development fee is financed by Yoda)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1",children:(0,i.jsx)(t.strong,{children:"Milestone 1"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PTE:"}),"  4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 3,220 USD    // rest is funded by Yoda"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The main deliverable for this milestone will be to allow a user to register via a registration form and link her wallet account along with role based switching from Service Provider view to Customer view and visa versa."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Number"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Deliverable"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0a"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"License"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0b"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"Documentation"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Testing Guide"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0d"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Docker Image"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Registration Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Form based user registration"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Wallet Linking"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for user to link their Math wallet, Guarda wallet or Polkadot Js apps with the account."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Profile Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for role based screens to ease the usability for users"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Frontend App"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supporting frontend UI to test the aforementioned functionality"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2",children:(0,i.jsx)(t.strong,{children:"Milestone 2"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PTE:"}),"  4"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7,440 USD    // rest is funded by Yoda"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In continuation to the previous work, we will be working on a rating system for both Customer and Service Provider. This rating will eventually be the motivating factor for performance in the network. It would also help in designing incentives in future."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Number"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Deliverable"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0a"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"License"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0b"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"Documentation"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Testing Guide"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0d"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Docker Image"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Rating Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for profile based rating using substrate balances, treasury and staking pallets to be integrated with our custom tasking pallet to weigh the user's performance and rewards based rating system."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Programmatic Wallet Transfer"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Substrate based Smart Contract transfer function for programmatic/automated transfer of tokens from one application/user to the other."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Asset Restrictions"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for the locking of assets by time"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Frontend App"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supporting frontend UI to test the aforementioned functionality"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3",children:(0,i.jsx)(t.strong,{children:"Milestone 3"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 3 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PTE:"}),"  5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 8,260 USD    // rest is funded by Yoda"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The deliverable for this milestone is that we will be providing a multi user scenario to test the functionality and integrate with storage and backend APIs for multipart data to be uploaded and downloaded."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Number"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Deliverable"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0a"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"License"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0b"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"https://github.com/WowLabz/tasking_backend",children:"Documentation"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Documentation of the entire pallet, a guide for developers forking the project including FAQ"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0c"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Testing Guide"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0d"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Docker Image"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Docker image of the build"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Multiuser Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for multiple Substrate seed users to test the functionality and make the task based transactions as per the Status mentioned. Substrate based Lockable currency for reserving user funds and allowing the escrow unlock after the approved status."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Tagging Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Support for smart tags with the user profiles for programmatic track/domain alignment in the future"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"File Transfer Module"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"API connections to cloud storage async upload/download of small files via Rocket"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Frontend App"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supporting frontend UI to test the aforementioned functionality"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Website"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Dedicated one page website for Dot Marketplace"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"6"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Article"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Website article sharing the motivation behind Dot Marketplace and how to make best use of it"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"additional-project-details",children:(0,i.jsx)(t.strong,{children:"Additional Project Details"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Technology stack being used","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rust, Substrate, React, Python, centralised cloud storage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"future-plans",children:(0,i.jsx)(t.strong,{children:"Future Plans"})}),"\n",(0,i.jsx)(t.p,{children:"Future releases of the Dot Marketplace include:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Phase"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Deliverable"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Decentralised Court"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A fully decentralised dispute resolution mechanism along with configurable rules for slashing and reputation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Milestone based submissions"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Making provisions to breakdown a project into multiple configurable milestones to allow parallel or sequential execution"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Decentralised Storage"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integration with IPFS or another decentralised storage platform"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:""}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website, Polkadot India Buildathon"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We have been working on this roadmap since we applied for the Web3 grant"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);