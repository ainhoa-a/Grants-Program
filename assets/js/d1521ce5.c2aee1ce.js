"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[89001],{3838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const r={},o="Browser based IDE for ink! Smart Contracts",a={id:"docs/RFPs/IDE_for_ink_Smart_Contracts",title:"Browser based IDE for ink! Smart Contracts",description:"This Request for Proposals is currently considered under development, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team.",source:"@site/docs/RFPs/IDE_for_ink_Smart_Contracts.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/IDE_for_ink_Smart_Contracts",permalink:"/docs/RFPs/IDE_for_ink_Smart_Contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/IDE_for_ink_Smart_Contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Requests for Proposals",permalink:"/docs/rfps"},next:{title:"RFP: ISO 20022",permalink:"/docs/RFPs/ISO_20022"}},c={},l=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables",id:"deliverables",level:2}];function d(e){const t={a:"a",admonition:"admonition",del:"del",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"browser-based-ide-for-ink-smart-contracts",children:"Browser based IDE for ink! Smart Contracts"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["This Request for Proposals is currently considered ",(0,s.jsx)(t.strong,{children:"under development"}),", meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it\u2019s better to double check this with the grants team."]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/ink-playground-ide-improvements.md",children:"Under Development 1"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/sandoxio/sandox",children:"Implemented"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/Noc2",children:"David Hawig"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink",children:"ink!"})," is a domain-specific language for writing smart contracts in Rust and compiles to Wasm code. You can deploy ink! contracts on parachains that support the contracts pallet, as well as on stand-alone blockchains built with Substrate."]}),"\n",(0,s.jsxs)(t.p,{children:["The goal of this RFP is to find teams that would like to maintain the browser-based ink! Playground for editing, compiling & sharing ink! smart contracts. ",(0,s.jsx)(t.a,{href:"https://ink-playground.substrate.io/",children:"ink! Playground"}),", previously maintained by Parity, utilizes Typescript, React, Docker, and ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco Editor"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Useful resources:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://use.ink/",children:"ink!"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.del,{children:(0,s.jsx)(t.a,{href:"https://ink-playground.substrate.io",children:"ink-playground"})})," (no longer hosted)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.del,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground",children:"GitHub ink-playground"})})," (no longer hosted)"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/blockchain-it-hr/ink-remix-plugin",children:"GitHub: ink! Remix plugin"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"deliverables",children:"Deliverables"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend to initially apply for a ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program#pencil-process",children:"regular grant"})," to fix the following issues and make the playground compatible with different versions of ink! as well as automatic updates:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground/issues/427",children:"https://github.com/paritytech/ink-playground/issues/427"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground/issues/197",children:"https://github.com/paritytech/ink-playground/issues/197"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground/issues/460",children:"https://github.com/paritytech/ink-playground/issues/460"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-playground/issues/428",children:"https://github.com/paritytech/ink-playground/issues/428"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After this we would sign a ",(0,s.jsx)(t.a,{href:"https://w3f.github.io/Grants-Program/docs/maintenance",children:"maintenance grant"}),", which allows a more flexible structure and roadmap. The list of issues and features to be covered by the grant should be discussed with the previous maintainers and the community, but it is generally up to the applying team to come up with a milestone and delivery structure."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);