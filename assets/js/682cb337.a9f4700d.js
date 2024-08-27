"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[92555],{42585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(74848),s=t(28453);const r={},a="drand in substrate",l={id:"applications/pallet-drand-client",title:"drand in substrate",description:"- Team Name: The Bacon Beacon",source:"@site/applications/pallet-drand-client.md",sourceDirName:"applications",slug:"/applications/pallet-drand-client",permalink:"/applications/pallet-drand-client",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/pallet-drand-client.md",tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Create a Rust client library for drand",id:"milestone-1-create-a-rust-client-library-for-drand",level:3},{value:"Milestone 2: Build a Substrate pallet with a fully-featured/configured example chain",id:"milestone-2-build-a-substrate-pallet-with-a-fully-featuredconfigured-example-chain",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"drand-in-substrate",children:"drand in substrate"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," The Bacon Beacon"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," USDC 0x1C9e0bcA759e5Ec09246f4795310789b12F65a59"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Status:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/1271#issuecomment-1583321519",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(n.p,{children:["We are planning to integrate the ",(0,i.jsx)(n.a,{href:"https://drand.love/developer/",children:"drand"})," client into substrate."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Current sources of verifiable randomness in Substrate are limited, and developers need to rely on deriving randomness themselves, or by taking it from BABE."}),"\n",(0,i.jsx)(n.p,{children:"The clear disadvantage of deriving randomness by the application developers is that all information on the blockchain is public. Resultingly, randomness is more likely to be predictable and gameable, especially on standalone Substrate chains."}),"\n",(0,i.jsxs)(n.p,{children:["On the other hand, BABE provides two sources of randomness: public and private.\nPublic randomness is derivied once per epoch, and is easily verifiable by hashing all the VRF outputs from the previous epoch. Unfortunately, it is only computed once per epoch.\nPrivate randomness is computed by each validator in secret to determine when they'd produce blocks. It is published with each block, which is as often as is possible on a blockchain and is provably verifiable and secure. Unfortunately, the random values that the validators publish are known to these validators ",(0,i.jsx)(n.em,{children:"hours"})," in advance."]}),"\n",(0,i.jsxs)(n.p,{children:["Both of the above mentioned sources are internal: the randomness is derived from information ",(0,i.jsx)(n.em,{children:"within"})," the network.\nAnother approach is to take randomness from an external source, if that source can be proven to be secure."]}),"\n",(0,i.jsxs)(n.p,{children:["One such source is ",(0,i.jsx)(n.a,{href:"https://drand.love/about/",children:"drand"}),' (decentralised randomness beacon), which allows the participants "to produce collective, publicly verifiable, unbiased, unpredictable random values at fixed intervals".']}),"\n",(0,i.jsx)(n.p,{children:"In this project, we want to enable any Substrate project to consume publically, verifiable randomness from drand."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(n.p,{children:["Randomness needs to be retrieved from an HTTP API via a provider, which is itself either a member of the drand network, or a broadcaster of the randomness.\nIn either case, the pallet doesn't trust the provider blindly - instead, it can cryptographically verify the correctness of the randomness retrieved, by verifying it against the drand ",(0,i.jsx)(n.a,{href:"https://drand.love/developer/http-api/#chain-hash-info",children:"chain randomness information"})," contained in the Runtime. This chain intormation contains the network's well-known threshold public key, fixed interval for randomness generation, genesis time, and an initial random hash."]}),"\n",(0,i.jsxs)(n.p,{children:["This chain randomness information and an optional ",(0,i.jsx)(n.a,{href:"https://drand.love/developer/http-api/#chain-hash-public-round",children:"round"})," 'checkpoint' can be set in the chain's ",(0,i.jsx)(n.code,{children:"GenesisConfig"}),", allowing the network to immediately start using the randomness from the first block. If appropriate, the pallet can also contain a ",(0,i.jsx)(n.code,{children:"UpdateOrigin"})," ",(0,i.jsx)(n.code,{children:"Config"})," parameter, allowing the the beacon source to be modified by a trusted authority (eg. Council, Sudo, whitelisted account, etc) without a runtime update. Each round will be obtained via HTTP API calls made via an off-chain worker, and each round will be verified for cryptographic accuracy and timeliness before being consumable by the runtime."]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Where and how does your project fit into the ecosystem?"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A: It will be a Substrate pallet, likely with one of the standardized randomness trait interface in it's ",(0,i.jsx)(n.code,{children:"Config"}),", allowing it to be easily plugged into other pallets. It will also contain a standalone Substrate chain with the pallet, demonstraiting some concrete examples of how it can be used."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A: Parachains and standalone Substrate chains, dapps (especially ones using ZKPs), and anyone wanting to consume public randomness."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What need(s) does your project meet?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A: Providing verifiable, public randomness."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A: Not that we're aware of."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bacon"}),"\n",(0,i.jsx)(n.li,{children:"Ham"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Bacon"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:bacon.randomness.beacon@pm.me",children:"bacon.randomness.beacon@pm.me"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," N/A"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Ham"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Contact Method:"})," Github issues/discussion or Session ID ",(0,i.jsx)(n.code,{children:"05947ccb461b7e693282c71afea61ebe81e52abe8b99e03901d6e6c9af06f9ac51"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," N/A"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," N/A"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," N/A"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(n.p,{children:"Both team members have practical experience in developing cryptographic protocols (3 years combined) and Rust (4 years combined). We have completed the basic substrate tutorials for the purpose of preparing for this project. Apart from this information, we would like to keep the team's profiles private.\nWe believe that the quality of the project delivery will bear witness to our claims."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/random-bacon",children:"https://github.com/random-bacon"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(n.p,{children:["The public docs from ",(0,i.jsx)(n.a,{href:"https://drand.love/",children:"drand"})," serve best as technical introduction to what drand is, and how it can be integrated into existing projects. We will also use Github's Projects feature or Issues to create a backlog and task our progress publically."]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE (2 x half-time)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 28,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1-create-a-rust-client-library-for-drand",children:"Milestone 1: Create a Rust client library for drand"}),"\n",(0,i.jsxs)(n.p,{children:["While there exists one ",(0,i.jsx)(n.a,{href:"https://github.com/iprs-dev/drand-rs",children:"drand Rust client library"}),", it hasn't been updated in 2 years."]}),"\n",(0,i.jsx)(n.p,{children:"We will create a new Rust library that"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["includes ",(0,i.jsx)(n.code,{children:"no_std"})," support"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["complies and works with the APIs outlined ",(0,i.jsx)(n.a,{href:"https://github.com/drand/drand-client#api",children:"here"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"verifies the cryptogrpahic randomness"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"uses up-to-date dependencies"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"has a set of tests for asserting proper functionality and reducing bugs from future updates"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide ",(0,i.jsx)(n.strong,{children:"inline documentation"})," alongside the code, a README explaining how it can be used, and a few examples demonstrating it's concrete usage."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. We will use standardized testing methods so tests can be pragmatically executed and updated by anyone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"Drand client library"}),(0,i.jsx)(n.td,{children:"We will build out a drand client library with the requirements mentioned in the Milestoke 1 overview."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-2-build-a-substrate-pallet-with-a-fully-featuredconfigured-example-chain",children:"Milestone 2: Build a Substrate pallet with a fully-featured/configured example chain"}),"\n",(0,i.jsx)(n.p,{children:"We will write a Substrate pallet that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"implements the drand client library from Milestone 1"}),"\n",(0,i.jsx)(n.li,{children:"allows for the configuration and modification of the drand chain randomness information"}),"\n",(0,i.jsx)(n.li,{children:"utilized off-chain workers to fetch round information, and ensuring validator consensus about it"}),"\n",(0,i.jsx)(n.li,{children:"verifies the round information for cryptographic accuracy and timeliness"}),"\n",(0,i.jsx)(n.li,{children:"provides a pragmatic way for other pallets to source the randomness"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We will also build an example Substrate node that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"demonstrates a fully configured pallet-drand-client"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"demonstrates an example pallet utilizing all of its features"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will create ",(0,i.jsx)(n.strong,{children:"dedicated documentation in the repo"})," of how to use the code and a basic ",(0,i.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (example) spin up one of the Substrate nodes and interact with the chain in a way that utilized drand's randomness."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(n.td,{children:"Testing Guide"}),(0,i.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"Example pallet"}),(0,i.jsx)(n.td,{children:"We will create a pallet that integrates the drand client library from Milestone 1, and write a sample pallet that uses its features (eg. return a message from a list of messages at random, based on the public randomness it retrieves via the API)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(n.td,{children:"Randomness verification"}),(0,i.jsx)(n.td,{children:"The pallet will be able to verify round randomness via the chain randomness information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(n.td,{children:"Example chain"}),(0,i.jsx)(n.td,{children:"We spin up a testing chain to demonstrate how such a pallet works."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(n.p,{children:["Once randomness is available to Substrate developers, we would be interested to write a client that actually ",(0,i.jsx)(n.em,{children:"participates"})," in the drand protocol.\nIt may make sense for a common-good parachain to participate as a member of ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/League_of_entropy",children:"League of Entropy"}),".\nWe recognize the lack of accountability and other issues that can arise with an anonymous team maintaining such an important and foundational ecosystem component like a common-good parachain,, and we are open to discussion solutions relating to the development and maintenance of it."]}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," ",(0,i.jsx)(n.a,{href:"https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942",children:"https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942"})]}),"\n",(0,i.jsx)(n.p,{children:"Thank you for your time. We're looking forward to discussing this project with you."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);