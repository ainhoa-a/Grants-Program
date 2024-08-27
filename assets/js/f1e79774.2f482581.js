"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[52197],{21616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);const r={},l="Pontem Network (VM).",o={id:"applications/pontem",title:"Pontem Network (VM).",description:"- Team Name: Dfinance (Wings Stiftung).",source:"@site/applications/pontem.md",sourceDirName:"applications",slug:"/applications/pontem",permalink:"/applications/pontem",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/pontem.md",tags:[],version:"current",frontMatter:{}},d={},a=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team\u2019s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Pre-Alpha version of Move pallet",id:"milestone-1---pre-alpha-version-of-move-pallet",level:3},{value:"Milestone 2 \u2014 Alpha version of Move pallet",id:"milestone-2--alpha-version-of-move-pallet",level:3},{value:"Milestone 3 \u2014 Beta version &amp; Ecosystem",id:"milestone-3--beta-version--ecosystem",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pontem-network-vm",children:"Pontem Network (VM)."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Dfinance (Wings Stiftung)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," 32AAAxmKJ9XxCsGSwt11oAuovCUHbgsgfY."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Pontem Network aims to bring the Move VM and Move language, and ecosystem around it to Polkadot."}),"\n",(0,i.jsx)(n.p,{children:"The Move language and the Move Virtual Machine, both developed by Facebook Libra, are among the safest technologies out there that enable the creation of smart contracts. While having built-in security by design such as resource-oriented architecture and formal verification, Move VM still severely lacks toolsets and documentation."}),"\n",(0,i.jsx)(n.p,{children:"We are going to create the Move pallet to make it possible for developers to publish their Move VM modules and execute scripts, also, we already built a rich toolset and documentation for Move language, so we will need only adopt it for Polkadot."}),"\n",(0,i.jsx)(n.p,{children:"This is where our team has a unique experience, due to over 2 years spent working with Move and building tools around it. We have been working closely with Libra (as recognized technical adopters) as part of the Dfinance project which is utilizing the Move language and Move VM in order to run safe and usable smart contracts."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.p,{children:"Implementation of Move VM pallet won't be an easy task, even taking into account our experience connecting Move VM with Cosmos SDK, achieved via integrating Move VM as GRPC service."}),"\n",(0,i.jsx)(n.p,{children:"In the case of Polkadot WASM Runtime we can\u2019t repeat the same approach with GRPC due to limitations of Runtime, but we can do a more elegant solution by utilizing Move VM inside Runtime. To be clear let\u2019s see our plan step by step."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Move VM and language written in Rust language and can be compiled to WASM, unfortunately we can\u2019t use crates that depend on runtime. We will create a stable working pallet by forking of Move VM/language and replace creates with ones we can use."}),"\n",(0,i.jsx)(n.li,{children:"We will make Move VM outputs (writesets) compatible with Polkadot key-value storage, as during our latest research we discovered it\u2019s not going to work \u201cout of the box\u201d and will require some time to build a solution. Same with address format SS58, and non VM balances."}),"\n",(0,i.jsx)(n.li,{children:"We need to make gas usage of Move VM compatible with Polkadot standards. At least by using the same units like other VMs/pallets using."}),"\n",(0,i.jsx)(n.li,{children:"Build a documentation around the Move pallet, adopt existing tools and docs about VM and language."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We already have rich experience in these topics because of our current Dfinance project, so far we developed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/dnode/tree/master/x/vm",children:"Cosmos SDK Move VM"})," module, brings Move VM to Cosmos SDK."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.dfinance.co/move_vm",children:"Documentation"})," of how to write your own Move modules and scripts on Dfinance network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=damirka.move-ide",children:"VSCode plugin"})," to write modules and scripts for both Libra and Dfinance network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/intellij-move",children:"IntelliJ plugin"})," for Move language."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/dvm",children:"Move VM"})," as a server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/move-tools",children:"Toolset"})," for Move language: dissembler, resources viewer, language server, executor."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/move-book",children:"Move Book"})," - the first book about Move."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/contracts",children:"DeFi contracts"})," framework on Move language."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Developers can be interested to build their DApps on Polkadot using Move technology stack, as it\u2019s a safe and useful language which is getting more and more adoption."}),"\n",(0,i.jsx)(n.li,{children:"Libra is developing and using Move, so Polkadot will have at least initial compatibility with Libra at least by allowing using the same modules in both networks."}),"\n",(0,i.jsx)(n.li,{children:"Flow - Crypto Kitties creators blockchain also going to utilize Move VM and language, also by creating new language on top of it - Cadence, which can be adopted to Polkadot later."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"team",children:"Team"}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Oleg Gaidukov - CTO."}),"\n",(0,i.jsx)(n.li,{children:"Boris Povod - R&D Lead and Blockchain developer."}),"\n",(0,i.jsx)(n.li,{children:"Alexander Kozlovsky - Rust developer and Rust community enthusiast."}),"\n",(0,i.jsx)(n.li,{children:"Dmitry Yakushev - Rust developer."}),"\n",(0,i.jsx)(n.li,{children:"Vitaly Rudko - Dev Ops."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Boris Povod"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:boris@dfinance.co",children:"boris@dfinance.co"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dfinance.co",children:"https://dfinance.co"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," Gubbelstasse 11, 6300 Zug, Switzerland"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," Wings Stiftung"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team\u2019s experience"}),"\n",(0,i.jsxs)(n.p,{children:["We are an experienced team, our current project is ",(0,i.jsx)(n.a,{href:"https://dfinance.co/",children:"Dfinance"}),", in the past we've launched ",(0,i.jsx)(n.a,{href:"https://wings.ai/",children:"Wings"})," platform, and before that we've developed ",(0,i.jsx)(n.a,{href:"https://github.com/borispovod/crypti-sources",children:"Crypti"})," (which became Lisk)."]}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/dnode/tree/master/x/vm",children:"Cosmos SDK Move VM"})," module, brings Move VM to Cosmos SDK."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/vscode-move-ide",children:"VSCode plugin"})," repository."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/intellij-move",children:"IntelliJ plugin"})," for Move language."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/dvm",children:"Move VM"})," as a server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dfinance/move-tools",children:"Toolset"})," for Move language: dissembler, resources viewer, language server, executor."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Contributions to other projects (Libra & Cosmos SDK):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/libra/libra/pull/4058",children:"https://github.com/libra/libra/pull/4058"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/libra/libra/pull/4053",children:"https://github.com/libra/libra/pull/4053"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/libra/libra/pull/3472",children:"https://github.com/libra/libra/pull/3472"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/libra/libra/pull/6116",children:"https://github.com/libra/libra/pull/6116"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/pull/6053",children:"https://github.com/cosmos/cosmos-sdk/pull/6053"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/ogaidukov/",children:"https://www.linkedin.com/in/ogaidukov/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/boris-povod-361a1b79/",children:"https://www.linkedin.com/in/boris-povod-361a1b79/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/a-koz/",children:"https://www.linkedin.com/in/a-koz/"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4 months."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Effort:"})," 357 days."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 1.4658 BTC."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1---pre-alpha-version-of-move-pallet",children:"Milestone 1 - Pre-Alpha version of Move pallet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1.5 month"]}),"\n",(0,i.jsxs)(n.li,{children:["Working days ",(0,i.jsx)(n.strong,{children:"x"})," ppl. ",(0,i.jsx)(n.strong,{children:":"})," 28 ",(0,i.jsx)(n.strong,{children:"x"})," 4"]}),"\n",(0,i.jsx)(n.li,{children:"Effort: 112 days"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 0.419 BTC"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0."}),(0,i.jsx)(n.td,{children:"Crates list"}),(0,i.jsx)(n.td,{children:"Building a list of crates we have to replace with analogues could work in runtime or make our own versions which can work in runtime also."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Crates developing"}),(0,i.jsx)(n.td,{children:"During our research we can use sp-std for part of cases, but unfortunately we will have to fork it and add additional functional or create our analogue crates contains missed functional."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Crates replace"}),(0,i.jsx)(n.td,{children:"Adopt Move VM for runtime using developed crates."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Move Pallet"}),(0,i.jsx)(n.td,{children:"Create a Polkadot pallet with Move VM inside. Alpha version, without processing of WriteSets."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Addresses support"}),(0,i.jsx)(n.td,{children:"Add support of SS58 addresses to Move VM."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"Compiler"}),(0,i.jsx)(n.td,{children:"Adopt compiler to compile modules/scripts for Move VM inside pallet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6."}),(0,i.jsx)(n.td,{children:"Unit-tests"}),(0,i.jsx)(n.td,{children:"Basic unit-tests coverage, at least 30%."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"Docker-compose to quickly launch standalone version of Move VM."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"Initial documentation how to run Move VM inside Pallet/standalone, execute scripts and publish modules."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-2--alpha-version-of-move-pallet",children:"Milestone 2 \u2014 Alpha version of Move pallet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1.5 month"]}),"\n",(0,i.jsxs)(n.li,{children:["Working days ",(0,i.jsx)(n.strong,{children:"x"})," ppl. ",(0,i.jsx)(n.strong,{children:":"})," 28 ",(0,i.jsx)(n.strong,{children:"x"})," 5"]}),"\n",(0,i.jsx)(n.li,{children:"Effort: 140 days"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 0.5508 BTC"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0."}),(0,i.jsx)(n.td,{children:"WriteSets processing"}),(0,i.jsx)(n.td,{children:"Process WriteSets from MoveVM to Polka storage. Read/Write operations, Del operations."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Events processing"}),(0,i.jsx)(n.td,{children:"Process Move events format to Polkadot one and publish them to block."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"Publish Transaction"}),(0,i.jsx)(n.td,{children:"Create a transaction type to support Move module publishing."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"Execute Arguments Parsing"}),(0,i.jsx)(n.td,{children:"To enable execute script transactions support we need to parse script arguments."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Standard Library"}),(0,i.jsx)(n.td,{children:"Move Standard Library Module adoption for Polkadot."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"Execute Transaction"}),(0,i.jsx)(n.td,{children:"Create a transaction type to execute Move scripts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6."}),(0,i.jsx)(n.td,{children:"Unit-tests"}),(0,i.jsx)(n.td,{children:"Cover 60% of the pallet functional with unit tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7."}),(0,i.jsx)(n.td,{children:"Resource viewer"}),(0,i.jsx)(n.td,{children:"Resource viewer to view Move resources from Substrate node storage."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-3--beta-version--ecosystem",children:"Milestone 3 \u2014 Beta version & Ecosystem"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:["Working days ",(0,i.jsx)(n.strong,{children:"x"})," ppl. ",(0,i.jsx)(n.strong,{children:":"})," 21 ",(0,i.jsx)(n.strong,{children:"x"})," 5"]}),"\n",(0,i.jsx)(n.li,{children:"Effort: 105 days"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 0.496 BTC"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0."}),(0,i.jsx)(n.td,{children:"Gas compatibility"}),(0,i.jsx)(n.td,{children:"Change VM gas usage units and math to make it compatible with Polkadot."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1."}),(0,i.jsx)(n.td,{children:"Non-VM balances compatibility"}),(0,i.jsx)(n.td,{children:"VM supports native coins inside smart contracts, example: DOT."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2."}),(0,i.jsx)(n.td,{children:"REST API"}),(0,i.jsx)(n.td,{children:"REST API to compile, publish/execute modules and scripts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3."}),(0,i.jsx)(n.td,{children:"RPC"}),(0,i.jsx)(n.td,{children:"RPC to publish/execute modules and scripts."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"Supplement documentation with all features we provided: txs, compilers, smart contracts examples."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5."}),(0,i.jsx)(n.td,{children:"Deployment of prod env"}),(0,i.jsx)(n.td,{children:"Spin up instances on the top of DigitalOcean/Kubernetes cluster, set an auto deploy etc."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6."}),(0,i.jsx)(n.td,{children:"disassembler adoption"}),(0,i.jsx)(n.td,{children:"Adopt current disassembler for Substrate node."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7."}),(0,i.jsx)(n.td,{children:"Unit-tests"}),(0,i.jsx)(n.td,{children:"Cover 85% of pallet functional with unit tests."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(n.p,{children:"Wings Stiftung plans to continue supporting Move ecosystem. We want to build a bridge between Polkadot and Libra as Parachain, and launch our Parachain with Move VM pallet inside. Also, we going to proceed with further development of toolset (Move debugger, unit-testing framework, etc.) and extend our Wallet with Polkadot-specific features."}),"\n",(0,i.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,i.jsxs)(n.p,{children:["Wings Stiftung will be as well supporting financially this project. We are going to apply to another Grant for the implementation of the ",(0,i.jsx)(n.a,{href:"https://pontem.network",children:"Pontem network"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);