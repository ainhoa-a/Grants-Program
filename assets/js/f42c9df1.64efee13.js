"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[64156],{13597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={},l="polkadot-java-client",d={id:"applications/java-client",title:"polkadot-java-client",description:"Proposer:* splix",source:"@site/applications/java-client.md",sourceDirName:"applications",slug:"/applications/java-client",permalink:"/applications/java-client",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/java-client.md",tags:[],version:"current",frontMatter:{}},a={},o=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Milestone 3",id:"milestone-3",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"polkadot-java-client",children:"polkadot-java-client"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," splix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"}),"  bc1qce0nvef6txyahe9xvrdjavvw7qemzvhyp4ux55"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.p,{children:"We propose the creation of a Java client library to access Polkadot based networks.\nWitch is the main target of JVM based server-side applications.\nJava, and JVM in general, are the de-facto standard platform used by an enterprise or large-scale internet services.\nIt's critical to have a JVM based client library to get adoption by enterprises."}),"\n",(0,s.jsxs)(n.p,{children:["We have extensive experience with booth blockchain, including Polkadot, and Java technologies.\nAs an example, we previously created a Java library for Ethereum called Etherjar ",(0,s.jsx)(n.a,{href:"https://github.com/emeraldpay/etherjar",children:"https://github.com/emeraldpay/etherjar"}),", and a have some implementation of Polkadot protocol in JVM with the project Moonbeam ",(0,s.jsx)(n.a,{href:"https://github.com/emeraldpay/moonbeam",children:"https://github.com/emeraldpay/moonbeam"}),".\nWe want to continue our work and create a JVM library targeting the Polkadot."]}),"\n",(0,s.jsx)(n.p,{children:"Please note that a full-featured client library is usually being involved during the whole lifetime of the target system (i.e., Polkadot).\nTherefore, as a result of the current project, we expect to build only an initial implementation, which should meet most of the current critical needs by a Java developer.\nBut over the following months, maybe even years, the library is going to be developed with advanced features."}),"\n",(0,s.jsx)(n.p,{children:"The main target is server-side Java 11, which is the current LTS release (2018-2023) of Java.\nBut in addition, we want to leave a possibility to support older versions and/or Android."}),"\n",(0,s.jsx)(n.p,{children:"The library is going to be released under the Apache 2 license.\nBuild artifacts are going to be published to a publicly accessible Maven repository, with Javadoc and documentation in the Github repo and/or on the company website."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Members:"})," Igor Artamonov"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LinkedIn Profiles:"})," ",(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/igorartamonov/",children:"https://www.linkedin.com/in/igorartamonov/"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Code Repos:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/splix",children:"https://github.com/splix"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/emeraldpay",children:"https://github.com/emeraldpay"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"https://emeraldpay.io",children:"https://emeraldpay.io"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Legal Structure:"})," personal address will be provided via the invoice form"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team's Experience:"})," About 20 years of mostly Java experience, 5 years of blockchain experience"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  0.8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 4.35 BTC"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsx)(n.p,{children:"Initial domain specific model, types and encoding."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 0.8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1.45 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"SS58 encoding"}),(0,s.jsx)(n.td,{children:"Java class to encode/decode with SS58"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"SCALE coded"}),(0,s.jsx)(n.td,{children:"Java class to encode/decode with SCALE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Base types"}),(0,s.jsx)(n.td,{children:"Java classes to hold and operate Address, Hash, and DOT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Unit Tests"}),(0,s.jsx)(n.td,{children:"Unit tests covering at least 75% of the code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"A standalone document, describing usage"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2",children:"Milestone 2"}),"\n",(0,s.jsx)(n.p,{children:"Client for HTTP JSON RPC. With the focus on the following APIs: chain, contracts, and state."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 0.8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1.45 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"HTTP Client"}),(0,s.jsx)(n.td,{children:"A Java wrapper around standard HTTP JSON RPC, to read current state needed by a typical service"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Example App"}),(0,s.jsx)(n.td,{children:"An example app that accesses a node and prints the current status of the blockchain to the console"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Unit Tests"}),(0,s.jsx)(n.td,{children:"Unit tests covering at least 75% of the code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"A standalone document, describing usage"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-3",children:"Milestone 3"}),"\n",(0,s.jsx)(n.p,{children:"Modules to read, create and broadcast extrinsic.\nPlus the API module which should provide access to the following APIs: account, author, and payment."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 0.8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 1.45 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1."}),(0,s.jsx)(n.td,{children:"schnorrkel/sr25519 module"}),(0,s.jsx)(n.td,{children:"Wrapper around Rust crypto library"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2."}),(0,s.jsx)(n.td,{children:"Signing and signature validation module"}),(0,s.jsx)(n.td,{children:"Java classes to sign data or verify an existing signature"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3."}),(0,s.jsx)(n.td,{children:"Example App"}),(0,s.jsx)(n.td,{children:"An example app to create and broadcast an extrinsic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4."}),(0,s.jsx)(n.td,{children:"Unit Tests"}),(0,s.jsx)(n.td,{children:"Unit tests covering at least 75% of the code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"A standalone document, describing usage"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);