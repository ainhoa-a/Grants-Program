"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5682],{41322:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(74848),o=n(28453);const s={},r="Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)",l={id:"applications/Zombienet-Explorer",title:"Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)",description:"- Team Name: Colorful Notion",source:"@site/applications/Zombienet-Explorer.md",sourceDirName:"applications",slug:"/applications/Zombienet-Explorer",permalink:"/applications/Zombienet-Explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Zombienet-Explorer.md",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members / Contact",id:"team-members--contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Core Zombienet Explorer Code, Working Zombienet Explorer for 2 EVM+WASM parachains",id:"milestone-1--core-zombienet-explorer-code-working-zombienet-explorer-for-2-evmwasm-parachains",level:3},{value:"Milestone 2 \u2014 Chainparser Refactor, 3 parachains, 30 TOML",id:"milestone-2--chainparser-refactor-3-parachains-30-toml",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"zombienet-explorer-multi-chain-substrate-block-explorer-based-on-polkaholicio",children:"Zombienet Explorer: Multi-Chain Substrate Block Explorer (based on Polkaholic.io)"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Team Name:"})," Colorful Notion"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Status:"})," Terminated"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:[(0,t.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/paritytech/zombienet",children:"Zombienet"})," is a cli tool to easily spawn ephemeral Polkadot/Substrate networks and perform tests against them. A single ZombieNet is set up with a single toml file and parachain binaries (eg astar-collator, moonbeam, acala, etc.)."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer",children:"Zombienet Explorer"})," indexes a Zombienet using purely local setup (just Mysql, no external HTTP API calls unless you use a non-standard flag). It is based off Colorful Notions' ",(0,t.jsx)(i.a,{href:"https://polkaholic.io",children:"Polkaholic.io"})," which has been running as a public Multi-Chain Block explorer  for 5 months.  Key features are basically same basic multichain block explorer interface as Polkaholic.io, but running on spawned Zombienets instead of Polkadot + Kusama chains, specifically:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"EVM support (basic evm txn input/logs decoding only)"}),"\n",(0,t.jsx)(i.li,{children:"WASM support"}),"\n",(0,t.jsx)(i.li,{children:"linking and visualizing different XCM messages / extrinsics"}),"\n",(0,t.jsx)(i.li,{children:"simple Mysql analytics"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:'The approach Polkaholic.io has taken is an "indexing" approach, where all chain activity is analyzed from multiple chains and stored in MySQL across multiple chains.  This is complementary to the approach taken by polkadot.js.org\'s reference app, where a single endpoint is probed in real-time.'}),"\n",(0,t.jsxs)(i.p,{children:["While Colorful Notion's polkaholic.io website utilizes production-grade GCP components (BigQuery, BigTable, US/EU/AS LoadBalancer, etc.) for its backend, ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer",children:"Zombienet Explorer"})," pours all data into Mysql, which makes it easy for developers to modify/customize it for their own purposes, perform Mysql analytics, and make their own contributions."]}),"\n",(0,t.jsx)(i.p,{children:"Colorful Notion would like to seek Web3F Level 2 funding to develop Zombienet explorer to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"support new Substrate developers developing new parachains"}),"\n",(0,t.jsx)(i.li,{children:"support existing parachains achieve XCM interoperability with fellow parachains"}),"\n",(0,t.jsx)(i.li,{children:"support EVM + WASM + Dapp developers generally develop and debug complex XCM extrinsics"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer",children:"Zombienet Explorer README"})," for details. Here's a summary of how it works:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:['The deployment of Zombienet is based off a single TOML file (e.g. Shibuya, Moonbase) and binaries for the chains, resulting in "/tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json"\n',(0,t.jsx)(i.img,{src:"https://cdn.polkaholic.io/screenshots/zn-setup.png",alt:"Zombienet"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:'The Zombienet explorer uses the same TOML input and a "zombie.json" config generated, and is initiated with a "docker-compose up" operation (launches Mysql + Tempo Docker containers) followed by'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"node explorer.js moonbase.toml /tmp/zombie-eb7506e58308cc12e5c2906ffd894759_-1437039-m0Kjx84Yxy8y/zombie.json\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Then, blocks, traces, extrinsics, EVM logs, XCM messages  for all chains are crawled/indexed from local WS Endpoints in realtime.  Mysql tables support each chain."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Zombienet explorer is initiated with:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"node index.js\nnode api.js\n"})}),"\n",(0,t.jsx)(i.p,{children:"This shows the same explorer interface as on Polkaholic.io, except with the Zombienet instead of Polkadot/Kusama and their parachains:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://cdn.polkaholic.io/screenshots/zn-chains.png",alt:"Zombienet Explorer"})}),"\n",(0,t.jsxs)(i.p,{children:["with blocks, tx/extrinsics, EVM/WASM contracts, accounts, and XCM activity.  See ",(0,t.jsx)(i.a,{href:"https://polkaholic.io",children:"Polkaholic.io"})," for a fully working Multichain Substrate Block Explorer."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://cdn.polkaholic.io/screenshots/zn-block.png",alt:"Zombienet Explorer Block Page"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"XCM Messages, XCM Transfers and XCM Remote Executions are matched in real time and stored in Mysql tables in the same way as on Polkaholic.io, except all locally."}),"\n",(0,t.jsxs)(i.li,{children:['As XCM Extrinsics go through their journey, distributed tracing Jaeger/Tempo spans are submitted, with "traceids" keyed in by unfinalized/finalized extrinsic IDs.   Here is a ',(0,t.jsx)(i.a,{href:"https://polkaholic.io/tx/0x09093671a6d2d6633b29c3801035b55c1f7752428b50a012c8f0ba292f652dc1",children:"Simple XCM Transfer"})," and ",(0,t.jsx)(i.a,{href:"https://xcmscan.polkaholic.io/trace/8ef6d6763145e984?uiEmbed=v0",children:"Distributed Trace of Ext"}),"; ",(0,t.jsx)(i.a,{href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer",children:"XCM Transfers"})," show all the XCM Transfers like that in one place (there are lots now, in 2022)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://polkaholic.io/tx/0xc7b650144ae76221937c055dceb19e73cd8969ce007206e0e18661f968ffdbf7",children:"Moonbase Alpha Remote Execution Tx using System 5004"})," and ",(0,t.jsx)(i.a,{href:"https://xcmscan.polkaholic.io/trace/24301f35ee2e7d83",children:"Distributed Trace of Tx"}),"; ",(0,t.jsx)(i.a,{href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransact",children:"XCM Remote Executions"})," show all the XCM Remote executions in one place (there aren't many yet, but should be more in 2023); Sample screeshots of Remote Execution follow --"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["(a) Transaction Details\n",(0,t.jsx)(i.img,{src:"https://cdn.polkaholic.io/screenshots/zn-remoteexecution-tx-details.png",alt:"Zombienet Remote Execution Transaction Details"})]}),"\n",(0,t.jsx)(i.p,{children:"(b) Distributed Tracing"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://cdn.polkaholic.io/screenshots/zn-remoteexecution-distributedtracing.png",alt:"Zombienet Remote Execution Distributed Tracing"})}),"\n",(0,t.jsx)(i.p,{children:"Zombienet Explorer will have all of Polkaholic.io's fully working multi-chain UI + APIs*, except all done locally for the purposes of substrate parachain engineering."}),"\n",(0,t.jsx)(i.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsxs)(i.p,{children:["The Polkadot ecosystem benefits from a network of interoperable substrate parachains, each of which use XCM to interact with one another.  Zombienet makes it easy for substrate developer to rapidly test their own parachain and also test connectivity with fellow parachains.  Developers start with polkadot.js extremely power app, but this was architected for a ",(0,t.jsx)(i.em,{children:"single"})," endpoint rather than arbitrary numbers of chains."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"XCM"})}),"\n",(0,t.jsxs)(i.p,{children:["With XCM enabling complex multi hop interactions between multiple chains, it is challenging to reason about the flow of an XCM operation by switching between single chain views.  Our initial attempts to index XCM Transfers were overfitted to just asset transfers using DMP/UMP/HRMP (which dominate almost all XCM messages\nnow), but in response to an earlier draft of this proposal, we were challenged with how one could visualize ",(0,t.jsx)(i.em,{children:"multiple"}),' legs of an XCM\noperation.  Because some XCM instructions can contain XCM messages themselves recursively, and may "Transact" encoded call, there may be\nmany different chains initiated by a single extrinsic generating a "tree" of activity.   After seeing a few cases of ump/dmp and transact in the wild, it became clear that the "XCM Transfer" approach would not be too simplistic.']}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Distributed Tracing + Remote Execution"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Zombienet incorporates Distributed Tracing tools from ",(0,t.jsx)(i.a,{href:"https://github.com/grafana/tempo",children:"Grafana Tempo+Jaegar"}),', which are well matched to XCM\'s recursion capabilities.  At present, reasoning about what is going on between chains is accomplished by looking at a lot of raw logs and undecoded messages between chains.  Substrate chains that operate as "shards" or on each others unique functionality will increasingly rely on remote execution, but this future cannot be realized until tools exist.  Zombienet with Zombienet explorer aims to serve this goal.']}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Open source LCD"})}),"\n",(0,t.jsx)(i.p,{children:"Having an open-source Zombienet explorer using lowest common denominator code (Nodejs + Mysql, not React Typescript or BigTable) may support faster analytics, and more extensibility. Someone who knows only a bit of Javascript+SQL and completed their first Substrate pallet should be able to add their own chain indexing and user interface to Zombienet Explorer and do simple mysql analytics.  We have about 5-10 key big classes so Level 7 fellows aren't required to achieve this goal."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Zombienet"})}),"\n",(0,t.jsxs)(i.p,{children:["After adding XCM Remote Execution indexing for Moonbase Alpha/Beta, we thought it would be possible to do a Shiden-Moonriver bidirectional remote execution (using Astar remote_transact and Moonbeam 5004 System Contract), but there is significant complexity in derived accounts in this case.  Astar's Dino Pacandi led us to explore XCM Remote Execution within Zombienet following ",(0,t.jsx)(i.a,{href:"https://github.com/AstarNetwork/Astar/tree/master/third-party/zombienet",children:"this"}),"; Moonbeam's Gorka provided 2 Moonbase configuration included ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml",children:"here"}),". From this effort, it became clear that complex XCM interoperabilty testing between parachains would be done in ZombieNet and a more extensible ZombieNet explorer would be required."]}),"\n",(0,t.jsxs)(i.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(i.h3,{id:"team-members--contact",children:"Team members / Contact"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Contact Name:"})," Sourabh Niyogi / Michael Chung"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Contact Email:"})," ",(0,t.jsx)(i.a,{href:"mailto:sourabh@colorfulnotion.com",children:"sourabh@colorfulnotion.com"})," / ",(0,t.jsx)(i.a,{href:"mailto:michael@colorfulnotion.com",children:"michael@colorfulnotion.com"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Website:"})," ",(0,t.jsx)(i.a,{href:"https://polkaholic.io",children:"https://polkaholic.io"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Registered Address:"})," 55 E 3rd Ave, San Mateo, CA 94401, USA"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Registered Legal Entity:"})," Colorful Notion, Inc."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(i.p,{children:"Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021.  Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),  mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).  Sourabh has founded social + web advertising startups (Social Media Networks) in the SF Bay and spent time doing computational cognitive science and machine vision research at MIT.  Michael hails from UC Berkeley."}),"\n",(0,t.jsx)(i.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer",children:"Zombienet Explorer"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/polkaholic",children:"Polkaholic.io"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/docs.polkaholic.io",children:"Polkaholic.io API"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/sourabhniyogi",children:"Sourabh Niyogi"})," | ",(0,t.jsx)(i.a,{href:"https://github.com/mkchungs",children:"Michael Chung"})]}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Summer 2022: Released Polkaholic.io, a fully working block explorer that currently shows initial UI + API implementations, including indexing across 50+ chains.  Submitted this Web3F proposal in July."}),"\n",(0,t.jsx)(i.li,{children:"Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added  EVM/WASM support. Submitted first Treasury proposal to Kusama (8 ayes, 0 nays, did not pass yet) + Polkadot."}),"\n",(0,t.jsx)(i.li,{children:'Early November 2022: Successfully demonstrated Moonbase Alpha/Beta Remote execution and "full recursion" in Jaeger/Tempo XCM Timelines on Polkaholic.io.'}),"\n",(0,t.jsxs)(i.li,{children:["Late November 2022: Initiated testing Remote Execution with ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/shibuya.toml",children:"2 Astar ZombieNet"})," (thanks to Dino Pacandi) + ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer/blob/main/moonbase.toml",children:"2 Moonbeam Zombienet"})," (thanks to from Gorka/Alberto/Yann] and initiated ",(0,t.jsx)(i.a,{href:"https://github.com/colorfulnotion/zombienet-explorer",children:"Zombienet Explorer repo"})]}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(i.p,{children:"Zombienet Explorer code is a simplified version of Polkaholic.io run entirely in a local environment (local Mysql, pure Docker).  Most of the engineering work thus consists of deleting all code that is useless, documenting what remains to support Substrate devparachain contributions, and testing that the Zombienet explorer is useful specifically to support parachain developers testing their single chain, and multiple chains interacting with other with XCM Transfers and Remote Executions in EVM + WASM contexts."}),"\n",(0,t.jsx)(i.p,{children:"Beyond having a clean and well documented Zombienet Explorer code base, we have 2 key demonstrations:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Demonstrate Moonbase EVM TransactThroughSigned Remote Execution call via 5004 System Contract in Zombienet"}),"\n",(0,t.jsx)(i.li,{children:"Demonstrate Shibuya WASM Contracts Remote Execution call or with EVM remote_transact call in Zombienet\nThese demonstrations allow us to really test both the basics (can we show EVM Blocks, Contracts, XCM Messages, XCM Transfers, Remote Executions in a way that improves development) and the full utility of using Distributed testing."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Total Estimated Duration:"})," 8-10 weeks"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Full-Time Equivalent (FTE):"})," 2.0 FTE"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Total Costs:"})," 30,000 USD."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"milestone-1--core-zombienet-explorer-code-working-zombienet-explorer-for-2-evmwasm-parachains",children:"Milestone 1 \u2014 Core Zombienet Explorer Code, Working Zombienet Explorer for 2 EVM+WASM parachains"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Estimated duration:"})," 4-5 weeks"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"FTE:"}),"  2.0 FTE"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(i.th,{children:"Deliverable"}),(0,t.jsx)(i.th,{children:"Specification"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(i.td,{children:"License"}),(0,t.jsx)(i.td,{children:"GNUv3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(i.td,{children:"Documentation"}),(0,t.jsxs)(i.td,{children:["Provide: (a) ",(0,t.jsx)(i.strong,{children:"inline documentation"})," of the core crawling and indexing processes (b) how to setup Zombienet Explorer using Docker compose for Astar + Moonbem chains"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,t.jsx)(i.td,{children:"Testing Guide"}),(0,t.jsx)(i.td,{children:"Update README showing how to do remote executions between 2 Moonbase parachains and 2 Shibuya parachains within Zombienet, and visualize them with Jaeger"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,t.jsx)(i.td,{children:"Docker"}),(0,t.jsx)(i.td,{children:"Docker compose file composed of mysql, Jaeger/tempo setup"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(i.td,{children:"Zombienet Explorer Site Areas"}),(0,t.jsx)(i.td,{children:"Development of Polkaholic.io Core Site Functionality."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,t.jsx)(i.td,{children:"Support for Distributed Tracing"}),(0,t.jsx)(i.td,{children:"Development of Jaeger/tempo tracing."})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891",children:"Zombienet Substrate Block Explorer - Milestone 1"})]}),"\n",(0,t.jsx)(i.h3,{id:"milestone-2--chainparser-refactor-3-parachains-30-toml",children:"Milestone 2 \u2014 Chainparser Refactor, 3 parachains, 30 TOML"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Estimated duration:"})," 4-5 weeks"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"FTE:"}),"  2.0 FTE"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,t.jsx)(i.th,{children:"Deliverable"}),(0,t.jsx)(i.th,{children:"Specification"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,t.jsx)(i.td,{children:"License"}),(0,t.jsx)(i.td,{children:"GNUv3"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,t.jsx)(i.td,{children:"Documentation"}),(0,t.jsxs)(i.td,{children:["Provide ",(0,t.jsx)(i.strong,{children:"inline documentation"})," for (a) all working chain parsers (b) XCM indexing mechanics"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,t.jsx)(i.td,{children:"Testing Guide"}),(0,t.jsx)(i.td,{children:"Update README of how the chain parsers actually work, with astar (WASM) + moonbeam (EVM) as core examples."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,t.jsx)(i.td,{children:"Docker"}),(0,t.jsx)(i.td,{children:"Docker compose file composed of mysql, Jaeger/tempo setup."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,t.jsx)(i.td,{children:"Support for 2 Parachain Parsers"}),(0,t.jsx)(i.td,{children:"Development of 2 Parachain Parsers: Astar + Moonbeam"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,t.jsx)(i.td,{children:"Test 20 Zombienet Configs"}),(0,t.jsx)(i.td,{children:"Generate a report of our attempts to have working single parachain TOML beyond Shibuya + Moonbase with 20 TOMLs, using binaries available from our full nodes"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"In the construction of Polkaholic.io, we have implemented generic parsers for popular pallets used by multiple chains (e.g. xTokens, polkadotXcm, xcmPallet, tokens, asset, system etc, assetRegistry) but found it was difficult to do this for all parachains: there is just too much custom activity."}),"\n",(0,t.jsxs)(i.p,{children:["In our vision, parser for commonly-shared pallet only ",(0,t.jsx)(i.em,{children:"needs"})," to be implemented once. Developers are welcomed to submit PR for commonly-shared generic parsers which have high impact. In addition, each parachain team can also tweak certain aspect of the indexing machinery + supporting UI for their own parachain by building a chain-specific parser for their own purposes and adding it to Zombienet Explorer."]}),"\n",(0,t.jsx)(i.p,{children:"We will develop 2 representative parachain parsers: Moonbeam + Astar that demonstrate how substrate developers can extend the Zombienet explorer to support their own pallets and parachins."}),"\n",(0,t.jsxs)(i.p,{children:["We will also test 20 Zombienet configurations using recently compiled binaries.  See ",(0,t.jsx)(i.a,{href:"https://docs.google.com/spreadsheets/d/1xfcmlh-q_tRuf4wQDvv2c_pZQTJEu71KVk1N59pXgXs/edit#gid=323796891",children:"Zombienet Substrate Block Explorer - Milestone 2"})," for an exhaustive list."]}),"\n",(0,t.jsx)(i.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(i.p,{children:"Colorful Notion aims to see this project have contributions from as many Substrate parachain teams as possible, similar to how parachains submit PR to Polkadot.js, except specifically with chain parsers + UI views added by more parachains.  Our expectation is that by having parachain specific code developed by parachains, we may have this functionality brought back into Polkaholic.io's multichain block explorer and other projects that need to do analytics/UI."}),"\n",(0,t.jsx)(i.p,{children:"With sufficient interest as different parachain teams instrument their parachains for XCM interoperability, we would welcome doing follow on work on:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"XCMv3"}),"\n",(0,t.jsx)(i.li,{children:"modeling weights, gas used and fees"}),"\n",(0,t.jsx)(i.li,{children:"improving distributed traces to have additional utility"}),"\n",(0,t.jsx)(i.li,{children:"XCM remote execution tools"}),"\n"]}),"\n",(0,t.jsxs)(i.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Bill Laboon of Web3F recommended we develop a XCM call graph UI which led us down the distributed tracing route.  See also: supporting this RFP for ",(0,t.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/xcm-tool.md",children:"XCM library & tools"})]}),"\n",(0,t.jsxs)(i.li,{children:["Polkaholic directly addresses RFP for a ",(0,t.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/multi-chain-block-explorer.md",children:"Multi-Chain Block Explorer"})]}),"\n",(0,t.jsxs)(i.li,{children:["Colorful Notion submitted a Treasury Proposal to ",(0,t.jsx)(i.a,{href:"https://kusama.polkassembly.io/motion/555",children:"Kusama"})," + Polkadot and would like to have Polkaholic.io supported by Treasury."]}),"\n",(0,t.jsx)(i.li,{children:"Colorful Notion welcomes active collaborations with parachains in Zombienet, especially in the area of distributed tracing, remote execution, XCM interoperability between EVM+WASM oriented shards, and chain-specific block explorers"}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);