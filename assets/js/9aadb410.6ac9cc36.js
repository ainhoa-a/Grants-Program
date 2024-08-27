"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[80071],{20978:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(74848),t=i(28453);const r={},l="RFP: Validator Selection Algorithm",o={id:"docs/RFPs/validator-selection-algorithm",title:"RFP: Validator Selection Algorithm",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/validator-selection-algorithm.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/validator-selection-algorithm",permalink:"/docs/RFPs/validator-selection-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/validator-selection-algorithm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"User Account Access Security Analysis for Wallets",permalink:"/docs/RFPs/user-account-access-analysis"},next:{title:"polkadot-validator-setup maintenance",permalink:"/docs/RFPs/validator-setup-maintenance"}},d={},c=[{value:"Project Description",id:"project-description",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rfp-validator-selection-algorithm",children:"RFP: Validator Selection Algorithm"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This Request for Proposals is ",(0,s.jsx)(n.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Status:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/validators_selection.md",children:"Closed"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/jonasW3F",children:"jonasW3F"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-description",children:"Project Description"}),"\n",(0,s.jsxs)(n.p,{children:["Together with colleagues from academia, we developed an interactive process for nominations to better find suitable validators and the study is published ",(0,s.jsx)(n.a,{href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515",children:"here"}),". The process is non-opinionated, which means that we do not have any opinion on any validator ex ante. The score of a validator is purely derived by the choices of the nominators."]}),"\n",(0,s.jsx)(n.p,{children:"After having validated the results in the study, I'd like to see this implemented. For that, we need to set up a proper backend that exposes an API for other services to connect to."}),"\n",(0,s.jsxs)(n.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.p,{children:"The aim of this project is only a backend. The final result will be a Python flask application exposing its functionality via RESTful API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Functionality"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Providing a pair of validators for comparison"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"previous comparisons"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Output:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"next pair"}),"\n",(0,s.jsx)(n.li,{children:"current model\u2019s quality"}),"\n",(0,s.jsx)(n.li,{children:"current model"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Providing a ranking for a given model"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"model"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Output:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ranking of validators"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accepting new data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Input:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"validators.csv file that contains information of recent era data from trusted sources"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Requirements"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux system with python 3 and listed packages installed"}),"\n",(0,s.jsx)(n.li,{children:"2GB of RAM"}),"\n",(0,s.jsx)(n.li,{children:"GPU (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Network configuration allowing for communication on a selected port"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Testing"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Test if the code behaves as expected."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 6 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  30 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 9000 USD (provisional)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1-implementation",children:"Milestone 1 (Implementation)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 4 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  20 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 6000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Next pair"}),(0,s.jsx)(n.td,{children:"Develop an algorithm for efficient calculations of the next pair to be compared to maximize the model\u2019s information gain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Ranking calculation"}),(0,s.jsx)(n.td,{children:"Develop an algorithm calculating a score for each validator"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"New data"}),(0,s.jsx)(n.td,{children:"Develop a function for the data preprocessing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Internal testing"}),(0,s.jsx)(n.td,{children:"Unit tests covering the functionality and logic"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2-testing",children:"Milestone 2 (Testing)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 2 weeks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  10 days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 3000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"Deployment"}),(0,s.jsx)(n.td,{children:"Deploy the code on a provided server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Test live environment"}),(0,s.jsx)(n.td,{children:"Test the server efficiency and provide a report"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Polishing"}),(0,s.jsx)(n.td,{children:"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);