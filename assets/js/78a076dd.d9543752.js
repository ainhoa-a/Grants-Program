"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[21306],{94720:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),i=t(28453);const a={},r="User Account Access Security Analysis for Wallets",o={id:"docs/RFPs/user-account-access-analysis",title:"User Account Access Security Analysis for Wallets",description:"This Request for Proposal is currently open, meaning we are actively looking for (additional) teams to apply for it.",source:"@site/docs/RFPs/user-account-access-analysis.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/user-account-access-analysis",permalink:"/docs/RFPs/user-account-access-analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/user-account-access-analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Designing Upchain: A framework for securing Substrate software update systems",permalink:"/docs/RFPs/uptane-for-substrate-design-and-scope"},next:{title:"RFP: Validator Selection Algorithm",permalink:"/docs/RFPs/validator-selection-algorithm"}},c={},l=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"user-account-access-security-analysis-for-wallets",children:"User Account Access Security Analysis for Wallets"})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["This Request for Proposal is currently ",(0,n.jsx)(s.em,{children:"open"}),", meaning we are actively looking for (additional) teams to apply for it."]})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Status:"})," Open"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Proposer:"})," ",(0,n.jsx)(s.a,{href:"https://github.com/bhargavbh",children:"Bhargav Bhatt"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/Noc2",children:"David Hawig"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Objectives"})," Security analysis of the user interface of Polkadot Wallets, particularly account access and recovery."]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,n.jsxs)(s.p,{children:["Security is as strong as its weakest link. More often than not, it's the users (humans) that are the most vulnerable point in the system. This proposal aims to comprehensively analyse the security of user-facing protocols of Polkadot. In particular, Polkadot\u2019s account generation and access is quite complex for users in the ecosystem. Several non-conventional mechanisms for account access like ",(0,n.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn-account-multisig",children:"multi-signatures"}),", intent-specific ",(0,n.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn-proxies",children:"proxies"}),", and ",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/recovery",children:"social recovery mechanisms"})," provide interesting functionalities but also result in non-trivial user experiences."]}),"\n",(0,n.jsxs)(s.p,{children:["The proposal intends to first formally model the account generation, access, backup, and recovery mechanism for popular Polkadot wallets considering human-interactions as part of the system. Secondly, a comprehensive security analysis (automated or otherwise) is warranted to detect loop-holes in account access by the user, covering features like multi-signatures and anonymous proxies. A systematic technique for modelling and analysing account access is described in the paper ",(0,n.jsx)(s.a,{href:"https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf",children:"'User Account Access Graphs'"}),". The security analysis should focus on detecting unauthorised access across attack surfaces, and also detect possible scenarios of genuine users being locked-out of the account. This analysis may also lead to detecting redundancies in the authentication process and streamlining the user experience."]}),"\n",(0,n.jsxs)(s.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,n.jsx)(s.p,{children:"The project is well-suited to be completed as a Bachelor's Thesis/ Master's Thesis/ Internship at an academic institute in collaboration with the Research Team at Web3 Foundation. The deliverables are just a template and can be modified taking into consideration the interests of the appplicant."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number"}),(0,n.jsx)(s.th,{children:"Deliverable"}),(0,n.jsx)(s.th,{children:"Specification"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0a."}),(0,n.jsx)(s.td,{children:"License"}),(0,n.jsx)(s.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0b."}),(0,n.jsx)(s.td,{children:"Documentation"}),(0,n.jsx)(s.td,{children:"Document describing the threat model, scope of the analysis, and  description of the approach/methodology used."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Analysis Report"}),(0,n.jsxs)(s.td,{children:["Security analysis report of the current account generation, access, back-up, and restoring mechanism used in popular Polkadot wallets like ",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/extension/",children:"Polkadot-JS Browser Extension"}),", ",(0,n.jsx)(s.a,{href:"https://docs.substrate.io/reference/command-line-tools/subkey/",children:"subkey"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/polkadot-js/ui",children:"Polkadot-JS UI"}),", ",(0,n.jsx)(s.a,{href:"https://www.parity.io/technologies/signer/",children:"Parity Signer"}),", ",(0,n.jsx)(s.a,{href:"https://www.talisman.xyz/",children:"Talisman"})," etc. The analysis should also take into consideration features like multi-signatures, stashing, proxies, and anonymous proxies. The analysis includes: 1) sound and complete detection of unauthorised access; 2) minimal counterexamples for exploits if any; 3) lockout risks for users"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Analysis Report"}),(0,n.jsx)(s.td,{children:"Possible improvements in usability (e.g., getting rid of redundant authentication layers during restoration) stemming from the analysis should be documented."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Models/Code"}),(0,n.jsx)(s.td,{children:"Models developed to formalise and analyse the different wallets. Code and set-up for automated analysis, if any."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Engagements"}),(0,n.jsx)(s.td,{children:"Engage with the Web3 Foundation teams to validate the correctness of models and the specifications."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);