"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[13256],{87415:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=i(74848),t=i(28453);const r={},l="Validators selection",a={id:"applications/validators_selection",title:"Validators selection",description:"- Team Name: Optymalizacja AI Grzegorz Miebs",source:"@site/applications/validators_selection.md",sourceDirName:"applications",slug:"/applications/validators_selection",permalink:"/applications/validators_selection",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/validators_selection.md",tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Basic functionality",id:"milestone-1-example--basic-functionality",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"validators-selection",children:"Validators selection"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Optymalizacja AI Grzegorz Miebs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," bc1qtcjq0jpcup43ny5e66f6kuvcn9pyhamguecsgu BTC"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:["Response to an RFP ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/rfps/validator-selection-algorithm.md",title:"validator-selection-algorithm.md",children:"validator-selection-algorithm"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This project aims to create a decision-support tool aiding nominators in selecting validators based on their individual preferences. These preferences are expressed in a very easy and intuitive way by performing pairwise comparisons. A nominator has to answer several times (around 6) which one out of two present validators they prefer. Based on these comparisons a mathematical model reflecting the nominator's preference is created. Finally, the model is used to rank validators.\r\nI was already involved in a research phase of this project hence I'd like to make a final version."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:"The aim of this project is only a backend. The final result will be a Python flask application exposing its functionality via RESTful API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Functionality"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Providing a pair of validators for comparison"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"previous comparisons"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Output:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"next pair"}),"\n",(0,s.jsx)(n.li,{children:"current model\u2019s quality"}),"\n",(0,s.jsx)(n.li,{children:"current model"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Providing a ranking for a given model"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"model"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Output:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ranking of validators"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accepting new data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"validators.csv file that contains information of recent era data from trusted sources"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"This application will be used in a validators selection phase, thus all nominators are its audience. The project makes the selection process easier and more robust. To the best of my knowledge, there isn't a similar project."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Grzegorz Miebs"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Grzegorz Miebs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:grzegorz.miebs@protonmail.ch",children:"grzegorz.miebs@protonmail.ch"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Website:"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," Poland, Poznan 61-853, Wierzbowa 2/22"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Optymalizacja AI Grzegorz Miebs"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:["I have 4 years of industry experience as a data scientist and 6 years of academic experience in a multicriteria decision support field.\r\nThe most relevant project is of course study regarding this topic with the preprint available here: ",(0,s.jsx)(n.a,{href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515",children:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"}),"\r\nOther related projects:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multicriteria job planning for bus and tram drivers for the public transport system of Pozna\u0144"}),"\n",(0,s.jsxs)(n.li,{children:["Selection of a sustainable third-party reverse logistics provider ",(0,s.jsx)(n.a,{href:"https://doi.org/10.1016/j.omega.2018.05.007",children:"https://doi.org/10.1016/j.omega.2018.05.007"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/miepsik",children:"https://github.com/miepsik"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/grzegorz-miebs/",children:"https://www.linkedin.com/in/grzegorz-miebs/"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["preprint ",(0,s.jsx)(n.a,{href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515",children:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 30 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  1FTE"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 9,000 USD"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1-example--basic-functionality",children:"Milestone 1 Example \u2014 Basic functionality"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  20 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 6,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsxs)(n.td,{children:["We will publish an ",(0,s.jsx)(n.strong,{children:"article"}),"/workshop that explains how this algorithm works and how to use the software"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Next pair"}),(0,s.jsx)(n.td,{children:"Develop an algorithm for efficient calculations of the next pair to be compared to maximize the model\u2019s information gain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Ranking calculation"}),(0,s.jsx)(n.td,{children:"Develop an algorithm calculating a score for each validator"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"New data"}),(0,s.jsx)(n.td,{children:"Develop a function for the data preprocessing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(n.td,{children:"Internal testing"}),(0,s.jsx)(n.td,{children:"Unit tests covering the functionality and logic"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2-testing",children:"Milestone 2 (Testing)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  10 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 3000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0c."}),(0,s.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0d."}),(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0e."}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsxs)(n.td,{children:["We will publish an ",(0,s.jsx)(n.strong,{children:"article"}),"/workshop that explains how this algorithm works and how to use the software"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Deployment"}),(0,s.jsx)(n.td,{children:"Deploy the code on a test server provided by the Grants Team or by myself."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Test live environment"}),(0,s.jsx)(n.td,{children:"Test the server efficiency by checking an average response time for each endpoint and provide a report"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Polishing"}),(0,s.jsx)(n.td,{children:"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"The possible extensions are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"analysis of the obtained results and nominators' preferences"}),"\n",(0,s.jsx)(n.li,{children:"capturing drift of preferences and just updating the model instead of repeating the whole pairwise comparison procedure"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Personal recommendation"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);