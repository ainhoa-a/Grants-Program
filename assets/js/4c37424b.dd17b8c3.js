"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[13046],{51271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(74848),t=s(28453);const o={},a="Sub-consensus mechanism",l={id:"docs/RFPs/sub-consensus",title:"Sub-consensus mechanism",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/sub-consensus.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/sub-consensus",permalink:"/docs/RFPs/sub-consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/sub-consensus.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Front-End for Staking Rewards Collector",permalink:"/docs/RFPs/staking-rewards-collector-front-end"},next:{title:"Uncollateralized Stablecoin Research",permalink:"/docs/RFPs/uncollateralized-stablecoin-research"}},r={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Summary",id:"summary",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1 - Research and technical specification",id:"milestone-1---research-and-technical-specification",level:3},{value:"Milestone 2 - PoC",id:"milestone-2---poc",level:3}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sub-consensus-mechanism",children:"Sub-consensus mechanism"})}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment."})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Status:"})," Closed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proposer:"})," mmagician, laboon"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Projects you think this work could be useful for:"})," All parachains"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Parachain dApps suffer from long confirmation times due to the time taken for the Relay Chain to issue an on-chain verification of the parachain blocks. This proposal aims at providing an alternative mechanism for providing parachain users with an alternative, probabilistic sub-consensus mechanism."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.p,{children:"Currently the time taken from collator producing a block on a parachain, to that block becoming finalised, is prohibitive to some applications deployed on the parachain. What we'd like to introduce is a mechanism for parachain collators to achieve consensus among themselves on the \"best\" block. This mechanism would most likely be realised as an additional runtime module in which all collators can (but don't have to) participate, thus providing a faster way for the users of parachain applications to see quasi-finalised blocks -> note that this sub-consensus on parachains will have no effect on the decision of relay chain validators' votes and can at times diverge from the outcome on the relay chain.\nShould this mechanism be opt-in for collators, they could be incentivised to participate honestly by bonding a small stake, that is later slashed (the stick) in case a relay-chain-finalised-block causes a reorg on the sub-consensus mechanism. Conversely, the carrot would be a small reward paid out by the parachain governance (tied to the decision by that governance to include such a module)"}),"\n",(0,i.jsxs)(n.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 40,000 DAI"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1---research-and-technical-specification",children:"Milestone 1 - Research and technical specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 20,000 DAI"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While normally the Grants Program doesn't fund the research phase, in this case a comprehensive write-up should proceed the implementation and should be subject to acceptance."}),"\n",(0,i.jsx)(n.p,{children:"At the end of the milestone, a detailed document should contain, at a minimum, the following parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"summary of the current technical implementation and its limitations"}),"\n",(0,i.jsx)(n.li,{children:"technical proposal, including full specification of any pallets needed, as well as necessary changes (if any) to upstream substrate/cumulus repositories"}),"\n",(0,i.jsx)(n.li,{children:"security analysis of the proposed solution"}),"\n",(0,i.jsx)(n.li,{children:"summary of adoption of the proposed solution by a parachain team (either case study or general guidelines)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-2---poc",children:"Milestone 2 - PoC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 20,000 DAI"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A proof of concept implementation of the proposed solution, or a full-fledged delivery.\nThe scope of this milestone is highly dependant on the proposal submitted in M1."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(96540);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);