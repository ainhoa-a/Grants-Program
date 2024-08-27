"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[86325],{88326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),s=t(28453);const r={},o="SCALE Codec Implementation",a={id:"applications/assemblyscript-scale-codec",title:"SCALE Codec Implementation",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/applications/assemblyscript-scale-codec.md",sourceDirName:"applications",slug:"/applications/assemblyscript-scale-codec",permalink:"/applications/assemblyscript-scale-codec",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/assemblyscript-scale-codec.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"scale-codec-implementation",children:"SCALE Codec Implementation"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proposer:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/LimeChain",children:"LimeChain"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"}),(0,i.jsx)(n.br,{}),"\n","bc1q8x95fuz6t767ugkn2vnwlz3e0q2rwc4xw9ede4 (when it comes to payment, let\u2019s test out the address with a small amount first)"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.p,{children:"SCALE is a lightweight codec for binary serialization and deserialization used in Substrate. Currently there are Rust, Python, Golang, C++ and JavaScript  implementations of the codec. The goal of the project is to deliver AssemblyScript implementation as a separate library."}),"\n",(0,i.jsx)(n.p,{children:"The library will be required for encoding/decoding Polkadot Wasm Executor <> Wasm Runtime blob calls and more specifically:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wasm Runtime blob compiled from AssemblyScript parsing runtime function calls from the Wasm executor."}),"\n",(0,i.jsx)(n.li,{children:"Wasm runtime blob compiled from AssemblyScript calling the Polkadot Runtime Environment API (Host API)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The library is a prerequisite for an AssemblyScript framework that generates runtimes or any runtime implemented in AssemblyScript loaded into a Polkadot Host."}),"\n",(0,i.jsx)(n.p,{children:"LimeChain is a blockchain-agnostic development company with a strong focus on developer tooling. We see Polkadot as an exciting technology and we hope to be able to help the developer community through various dev tools and implementations."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Members:"})," Daniel Ivanov, Lyubomir Kiprov, Christian Vesselinov"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"LinkedIn Profiles:"})," ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/daniel-k-ivanov/",children:"Daniel"}),", ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/lyubomir-kiprov/",children:"Lyubomir"}),", ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/chris-veselinov/",children:"Christian"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Code Repos:"})," ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Daniel-K-Ivanov",children:"https://github.com/Daniel-K-Ivanov"}),"; ",(0,i.jsx)(n.a,{href:"https://github.com/bakasura980",children:"https://github.com/bakasura980"}),"; ",(0,i.jsx)(n.a,{href:"https://github.com/thcrnk",children:"https://github.com/thcrnk"})]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://limechain.tech",children:"https://limechain.tech"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Legal Structure:"})," Legal Structure: LimeLabs Ltd., incorporated in Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team's Experience:"}),"\nSince 2017, LimeChain has worked on 50+ blockchain projects, including a strong track record of building developer tools for different protocols such as Ethereum, EOS, Aeternity and Corda. Some of the companies LimeChain has worked with are Celo, P&G, Raiffeisenbank, Status, Dapper Labs and Maker among others. The proposed developer team in particular also has experience with Substrate."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 17 days"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-time equivalent (FTE):"})," 1.5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 1.181 BTC"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 17 days"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"})," 1.5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 1.181 BTC"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Implementing the Library"}),(0,i.jsx)(n.td,{children:"Delivering a library that supports encoding/decoding the following types: fixed-width integers (signed and unsigned - 8, 16, 32, 64), bool, Big Int, Bool Array, Byte Array, Int Array, String Array, BigInt Array, Hash, Tuple."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Unit Tests"}),(0,i.jsx)(n.td,{children:"Provide unit tests for all of the supported types."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"README file describing how to import, use and run tests for the library."})]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(n.p,{children:"LimeChain hopes to become an important part of the Polkadot development ecosystem, supporting the network with different developer tools and integrations. AssemblyScript implementation of the SCALE Codec would be the company\u2019s first project on Polkadot, and along with a potential AssemblyScript implementation, would drastically help our team in its onboarding with the tech stack while adding value to the developer community right away."}),"\n",(0,i.jsx)(n.p,{children:"Although there are other implementations of the codec, each one of them serves different purposes. Each of these projects delivered the codec in different languages. We think that having AssemblyScript implementation of the codec will benefit the development of an AssemblyScript Runtime Generation framework."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Are there any teams who have already contributed (financially) to the project? No"}),"\n",(0,i.jsx)(n.li,{children:"Have you applied for other grants so far? Not in the Polkadot ecosystem. LimeChain has received and delivered on grants from The ETH Community Fund, Maker DAO and Aeternity."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);