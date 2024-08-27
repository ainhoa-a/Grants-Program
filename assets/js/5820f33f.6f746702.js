"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[75044],{36397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const a={},s="Ares",o={id:"applications/ares_protocol",title:"Ares",description:"Proposer:* jiyilanzhou",source:"@site/applications/ares_protocol.md",sourceDirName:"applications",slug:"/applications/ares_protocol",permalink:"/applications/ares_protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ares_protocol.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1  \u2014 Implement ares low pallet",id:"milestone-1---implement-ares-low-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ares",children:"Ares"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Proposer:"})," ",(0,r.jsx)(t.a,{href:"https://github.com/jiyilanzhou",children:"jiyilanzhou"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment Address:"}),"  3EDZ47i4ro1cgGqjXsyduuYyLrUesCgekw"]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(t.p,{children:"Ares is a predictive machine project based on Substrate, with the trustless and verifiable under chain real data use a decentralized approach for smart contracts, parachain or other projects in the ecosystem of the Polkadot."}),"\n",(0,r.jsx)(t.p,{children:"It is a decentralized oracle network that consists of oracle pallet for parachain and validator, aggregator, reputation council pallet for Ares chain."}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Ares"})," consists of parachain plug-in, validator, aggregator, reputation council, proof of fraud. If parachain use our services, it needs to integrate our oracle pallet, The result of the request passed to the caller through a callback. We scan the parachain events caller about the pallet in our chain, use rpc or websocket request via off-chain worker, Aggregators randomly selected through VRF, which aggregates data from multiple sources. and submitted data to the parachain via extrinsic. Aggregators packing parachain extrinsic and receipts  in ares chain via off-chain worker."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img-blog.csdnimg.cn/2020103111230144.jpg",alt:"img"})}),"\n",(0,r.jsx)(t.p,{children:"Aggregator needs to pledge certain assets, Every time the aggregator submits a correct data, its reputation value will grow. The reputation value and pledge will be weighted, from which we choose the members of council. council can only approve and reject proof of fraud submitted by validator.\nDefault is to approve, the council does not need to work on every block, only needs to deal with disputes when validator fraud proof arise. Validator nodes can verify, if validator found the data is incorrect, submit proof of fraud to council. if council check up, ther it will reward validator and slash aggregator, its reputation will be degraded."}),"\n",(0,r.jsx)(t.p,{children:"The functions of aggregator committees are similar to Babe, and reputation council are likely Grandpa which finality the correctness of the data. Most nodes can become member of aggregators committees. It only takes few tokens to staking. The validator who submit proof of fraud need pay a small fee, it protects against DOS attacks."}),"\n",(0,r.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Ares"})," is designed as decentralized oracle network. First of all, ",(0,r.jsx)(t.code,{children:"Ares"})," will provide  basic ",(0,r.jsx)(t.code,{children:"ares"})," pallet runtime which allows substrate built parachain/blockchain to interact with."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["define ",(0,r.jsx)(t.code,{children:"ares Trait"})," which contain Event, Callback."]}),"\n",(0,r.jsx)(t.li,{children:"define storage operator, request, result and error types"}),"\n",(0,r.jsx)(t.li,{children:"request external data, contains parameters and methods for how to request them."}),"\n",(0,r.jsx)(t.li,{children:"describes how to integrate into parachain."}),"\n",(0,r.jsx)(t.li,{children:"Aggregator scans the extrinsic in the parachain, use off-chain worker requests the data, and submits result extrinsic to parachain."}),"\n",(0,r.jsx)(t.li,{children:"Aggregator packing parachain extrinsic and receipts on ares chain."}),"\n",(0,r.jsx)(t.li,{children:"Validator validate data and submit proof of fraud."}),"\n",(0,r.jsx)(t.li,{children:"Council reward and slash according to proof of fraud."}),"\n",(0,r.jsx)(t.li,{children:"Aggregator, Validator, Council use off-chain worker getting external data"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,r.jsx)(t.p,{children:"Although the Off-chain worker can do part of the oracle job, However it can't guarantee the authenticity and reliability of the data, Ares can provide randomness and correctness of data sources through multi-party data aggregation and anti-attack and auditing of data sources"}),"\n",(0,r.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,r.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Keric: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert."}),"\n",(0,r.jsx)(t.li,{children:"Eric: 20 years of experience in protocol stack formulation and development, research work related to big data and blockchain, and robot quantification experience."}),"\n",(0,r.jsx)(t.li,{children:"Daniel: 11 years of work experience in IoT software development and management, familiar with contract and DAPP development."}),"\n",(0,r.jsx)(t.li,{children:"Scott: More than 7 years of software development experience, proficient in /Java/Golang/node, etc. engaged in blockchain research and development, familiar with eos/eth."}),"\n",(0,r.jsx)(t.li,{children:"Andy Ray: 10 years of Internet entrepreneurship experience, 5 years of blockchain industry experience, proficient in the secondary market, economic model design."}),"\n",(0,r.jsx)(t.li,{children:"Fred: Over 13+ years of Embedded Network Technology Experience in multiple technological systems including Hardware networking, software networking, and server-side applications."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,r.jsx)(t.p,{children:"We implemented the POW + DPOS consensus integrated with ethereum, used tendermint to provide finality in blockchain system with golang. Recently, we implemented a rust pos blockchain, it  uses vrf select validators and libp2p network. We have enough experience to solve the centralization problem of Oracle."}),"\n",(0,r.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/aresprotocols/ares",children:"https://github.com/aresprotocols/ares"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"team-website",children:"Team Website"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.aresprotocol.io/",children:"https://www.aresprotocol.io/"})}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,r.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 weeks"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  1.5"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Total Costs:"})," 0.5 btc"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"milestone-1---implement-ares-low-pallet",children:"Milestone 1  \u2014 Implement ares low pallet"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Estimated Duration:"})," 3 weeks"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Costs:"})," 0.5 btc"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this milestone, We will implement ares oracle proof-of-concept, A oracle pallet for parallel chain calls."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Number"}),(0,r.jsx)(t.th,{children:"Deliverable"}),(0,r.jsx)(t.th,{children:"Specification"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1."}),(0,r.jsx)(t.td,{children:"oracle pallet"}),(0,r.jsx)(t.td,{children:"requested data, generated events, and callbacks to data, which implement aggregate price on chain, multi assets price and offchain work get price througth Data warehouse api, it use subsrate-node-template"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2."}),(0,r.jsx)(t.td,{children:"scanner"}),(0,r.jsx)(t.td,{children:"scanner parachain oracle request via block event, parse the specific request data\uff0cScanner is written in js"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3."}),(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"data warehouse returns the correct request data use http request\uff0c Data warehouse written in java and used js provide to on chain callback"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4."}),(0,r.jsx)(t.td,{children:"Testing"}),(0,r.jsx)(t.td,{children:"This milestone will have unit-test for pallet impemented, simulated all functions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5."}),(0,r.jsx)(t.td,{children:"example for demonstration"}),(0,r.jsx)(t.td,{children:"Provide  parachain oracle pallet integrate example, integrate videos and the front-end into the deliveries"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6."}),(0,r.jsx)(t.td,{children:"Documentation"}),(0,r.jsx)(t.td,{children:"We will provide parachain integrate oracle pallet documentation and  basic code example that show how developers use the pallet"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,r.jsxs)(t.p,{children:["If basic functions have been completed, ",(0,r.jsx)(t.code,{children:"Ares"})," will provide decentralized pallet, including:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Multiple data source weight calculation"}),"\n",(0,r.jsx)(t.li,{children:"Random aggregators using VRF"}),"\n",(0,r.jsx)(t.li,{children:"Proof of fraud verify based on BFT voting"}),"\n",(0,r.jsx)(t.li,{children:"Reputation council slash"}),"\n",(0,r.jsx)(t.li,{children:"Aggregator staking and Validator incentive"}),"\n",(0,r.jsx)(t.li,{children:"Authority management of aggregator submitted data"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,r.jsxs)(t.p,{children:["We expect any developer who is interested in ",(0,r.jsx)(t.code,{children:"Ares protocol"})," join us and build an efficient framework."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);