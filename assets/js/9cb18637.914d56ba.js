"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[80400],{24584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={},a="Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance",r={id:"applications/DeepAccountAnalytics-PolkadotDataAlliance",title:"Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance",description:"- Team Name: Colorful Notion, Inc.",source:"@site/applications/DeepAccountAnalytics-PolkadotDataAlliance.md",sourceDirName:"applications",slug:"/applications/DeepAccountAnalytics-PolkadotDataAlliance",permalink:"/applications/DeepAccountAnalytics-PolkadotDataAlliance",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/DeepAccountAnalytics-PolkadotDataAlliance.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Abstract \ud83d\udcc4",id:"abstract-page_facing_up",level:2},{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members / Contact",id:"team-members--contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Three Tier Deep Account Analytics on Account References",id:"milestone-1--three-tier-deep-account-analytics-on-account-references",level:3},{value:"Milestone 2 \u2014 Three Tier Deep Account Analysis of Democracy+Staking+Nomination Pools",id:"milestone-2--three-tier-deep-account-analysis-of-democracystakingnomination-pools",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"web3-foundation-deep-account-analytics-in-three-tiers-for-the-polkadot-data-alliance",children:"Web3 Foundation Deep Account Analytics in Three Tiers for the Polkadot Data Alliance"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," Colorful Notion, Inc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address"})," ",(0,s.jsx)(n.code,{children:"0xEaf3223589Ed19bcd171875AC1D0F99D31A5969c"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"abstract-page_facing_up",children:["Abstract ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:["This proposal addresses outstanding ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/data_analysis_tools.md",children:"deep account analytics problems for the Web3 Foundation"}),".\nWe propse 3-tier solution:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tier 1. ",(0,s.jsx)(n.em,{children:"raw indexing"}),": Google BigQuery Public Datasets"]}),"\n",(0,s.jsxs)(n.li,{children:["Tier 2. ",(0,s.jsx)(n.em,{children:"deep indexing"}),": shared datasets delivered with Google Analytics Hub"]}),"\n",(0,s.jsxs)(n.li,{children:["Tier 3. ",(0,s.jsx)(n.em,{children:"dashboards"}),": the above indexed data in Apache Superset"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This proposal seeks to develop the above solution with the support of a Web3 Foundation grant, but critically addresses\nfuture maintainance a ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#",children:"Polkadot Data Alliance Bounty"}),"\nthat can support work on all 3 tiers with ",(0,s.jsx)(n.em,{children:"child bounties"})," for Polkadot Data Alliance contributors."]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:["This proposal is in response to the RFP ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/data_analysis_tools.md",children:"Data Analysis Tools for Substrate-based Blockchains"}),"\nwhich seeks to answer deep account analytics questions of:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Account References"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which transactions/accounts were responsible for the reserved balance in an account?"}),"\n",(0,s.jsx)(n.li,{children:"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"}),"\n",(0,s.jsx)(n.li,{children:"What are the pallets responsible for reserves/holds and locks/freezes on an account?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Democracy"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Staking/Nomination Pools"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)"}),"\n",(0,s.jsx)(n.li,{children:"Who are the top 10 nominators with the highest APR, and which validators do they have in common?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We call these ",(0,s.jsx)(n.em,{children:"deep analytics"}),' questions because to answer them requires significant "deep indexing" beyond "raw indexing", which cannot be done without intricate knowledge of Substrate.  Currently, these questions are difficult to answer without going through many pages in a block explorer like Polkaholic.io, and nearly impossible without doing some amount of data engineering.  The answers to the above questions ',(0,s.jsx)(n.em,{children:"could"})," be treated as new features to be developed in the context of block explorer like Polkaholic, or within special purpose UIs like polkassembly or staking.polkadot.network."]}),"\n",(0,s.jsxs)(n.p,{children:["We propose a different style of solution that we believe properly factorizes the following ",(0,s.jsx)(n.em,{children:"three"})," tiers:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tier 1. raw indexing - raw indexing of decoded blocks (blocks, extrinsics/calls, events, traces)"}),"\n",(0,s.jsx)(n.li,{children:"Tier 2. deep indexing - post-processing of raw indexed data"}),"\n",(0,s.jsx)(n.li,{children:"Tier 3. dashboards - situating the above with BI tools -- speci that does not require deep knowledge of the structure of the indexed data"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Typically, a block explorer or special purpose UI concerning chain\ndata blends all of these three tiers together -- and the maintainer of\nthe block explorer enjoys a community following (etherscan.io ).  But\noften when new deep analytics questions arise are not directly\navailable in an explorer, users with deep account analytics questions\nare left struggling and need custom answers only provided by data\nengineers and analytics engines -- covered by dashboard systems like\nDune Analytics.  In Dune Analytics, Tier 2 is covered by Dune Wizards\nand Tier 3 is covered with a customized front-end."}),"\n",(0,s.jsxs)(n.p,{children:["The solution we develop here is ",(0,s.jsx)(n.em,{children:"not"})," to make a long list of feature\nrequests for either block explorers or special purpose UIs to answer\nwith new functionality."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead, our solution to this problem is to separate the THREE TIERS within a ",(0,s.jsx)(n.em,{children:"genuinely collaborative"})," Polkadot Data Alliance:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Tier 1: raw indexing results in all blocks, extrinsics, events, traces delivered in Google Bigquery Public Datasets.  In May 2023, Colorful Notion, under the curation of Parity Data, onboarded a complete index of 70+ chains of Polkadot+Kusama into Google Public Datasets.  This is in the "crypto_polkadot" and "crypto_kusama" dataset, which anyone can access with this Analytics Hub link ',(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005/listings/polkadot_188057df28c?project=github-integration-295917",children:"here"})," and ",(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005/listings/kusama_1880581b627?project=github-integration-295917",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Tier 2: deep indexing can then be done by doing some amount of data engineering with the above raw deata, resulting in tables, views or materialized views that can also be shared with new datasets, which can also be shared with Analytics Hub."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tier 3: front-end engineering: given the above dataset, an open source BI tool (Apache Superset) can access ",(0,s.jsx)(n.em,{children:"multiple"})," datasets contributed by ",(0,s.jsx)(n.em,{children:"multiple"})," Polkadot Data Alliance members.  Recently, Parity Data shared this dataset of ",(0,s.jsx)(n.em,{children:"their"})," index of Polkadot, which enables a simple comparison between Parity Data's index and Colorful Notions' index."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We consider our approach a ",(0,s.jsx)(n.em,{children:"genuinely collaborative"}),' approach, because anyone can contribute at any of the 3 tiers -- providing raw indexes, deep indexes, or dashboards.  All dataset deliverables are public and the data processing itself is also reproducible in a "ETL" flow.  This should be contrast to a ',(0,s.jsx)(n.em,{children:"non-collaborative"})," approach where dataset is kept locked away unshared with the community, closed source and thus irreproducible."]}),"\n",(0,s.jsxs)(n.p,{children:["However, because all three tiers involve a certain amount of storage, compute and data engineering/data analyst man power, it is critical to not ",(0,s.jsx)(n.em,{children:"just"})," build the above three tiered solution,\nbut recognize that it needs ",(0,s.jsx)(n.strong,{children:"maintainence"}),".  The Web3 Foundation supports maintainence, but does not support the considerable cloud computing costs that Tier 1 and 2 require, nor the sort of solution that Tier 3 requires.  We thus propose that the above three tier architecture be situated ",(0,s.jsx)(n.em,{children:"in conjunction with"})," a ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#",children:"Polkadot Data Alliance bounty"}),", not just for ourselves at Colorful Notion, but for everyone equally commited to genuine collaboration a Polkadot Data Alliance."]}),"\n",(0,s.jsx)(n.p,{children:"It is believed that this collaborative framework can address many different problems other than deep analytics, and result in a more efficient allocation of Treasury funds and parachain resources: including an industry-wide multichain block explorer, ecosystem-wide XCM indexing, tracing tools, to name a few that our team has explored with some depth of seriousness."}),"\n",(0,s.jsx)(n.p,{children:"Much Tier 1 foundation has already been laid through our work and other indexers (Subquery, Subsquid, Subscan, web3go) in the ecosystem, who we hope will be able to contribute at Tier 1 [ideally within BigQuery so as to be directly usable as another source for Tier 2 and Tier 3]."}),"\n",(0,s.jsx)(n.p,{children:"But Tier 1 is not enough -- it is necessary to address Tier 2 and Tier 3 as well, and the Web3 Foundation RFP questions clearly illustrate the inadequacy of stopping with raw indexes and the need for deep indexing.  We believe a strong collaborative mindset is required to fully address these questions and numerous others the Substrate ecosystem asks comprehensively."}),"\n",(0,s.jsx)(n.p,{children:"The goal of this proposal is to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"address the Web3 Foundation's specific deep account analytics questions fully, specifically with three-tiered deliverables at Tier 1+2+3, using widely used tools of Google BigQuery and Apache Superset"}),"\n",(0,s.jsx)(n.li,{children:"demonstrate a viable financial path for our own maintainence for the above solution within the Web3 Foundation grant structure and the structure of the Polkadot Treasury using the Polkadot Data Bounty system"}),"\n",(0,s.jsxs)(n.li,{children:["form an alternate kind of deliverable for Web3 Foundation other than code that everyone can use: ",(0,s.jsx)(n.em,{children:"datasets"})," and ",(0,s.jsx)(n.em,{children:"dashboards"})," that everyone can use"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:'The "Account References" questions of'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which transactions/accounts were responsible for the reserved balance in an account?"}),"\n",(0,s.jsx)(n.li,{children:"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"}),"\n",(0,s.jsx)(n.li,{children:"What are the pallets responsible for reserves/holds and locks/freezes on an account?"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['are largely answerable through traces.  At the heart of every\nblockchain is a state transition function, where the state transitions\nfor any block are commonly called "traces" in blockchain engineering.\nSubstrate makes every trace visible through a\n',(0,s.jsx)(n.a,{href:"https://polkadot.js.org/docs/substrate/rpc/#traceblockblock-hash-targets-optiontext-storagekeys-optiontext-methods-optiontext-traceblockresponse",children:"state_traceBlock"}),'\nRPC function, which outputs every storage key-value map change in a\nre-execution of a single block.  This RPC call is considered "unsafe"\nas it requires compute time to regenerate.']}),"\n",(0,s.jsxs)(n.p,{children:["Polkaholic.io's indexer, when traces are available from an internal archive node, fetches traces and exposes them in the block explorer.\nFor example, here is the trace for ",(0,s.jsx)(n.a,{href:"https://polkaholic.io/trace/polkadot/15723663/",children:"Polkadot Block 15723663"})]}),"\n",(0,s.jsx)("img",{src:"https://cdn.polkaholic.io/screenshots/polkadot-trace.png"}),"\n",(0,s.jsxs)(n.p,{children:["The raw keys (e.g. ",(0,s.jsx)(n.code,{children:"0x26aa394eea5630e0...f1dbd372bbe532b1f8702b2a7e"}),") and values (e.g. ",(0,s.jsx)(n.code,{children:"0x01ab50050...000000000000"}),") are decoded using the chains type spec into"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Key: [ "12xtAYsRUrmbniiWQqJtECiBQrMn8AypQcXhnQAc6RB6XkLW" ]\nValue: {\n    "nonce": 348331,\n    "consumers": 2,\n    "providers": 1,\n    "sufficients": 0,\n    "data": \u2296{\n        "free": "0x000000000000000005785a9c9f9ad21b",\n        "reserved": 0,\n        "miscFrozen": "0x00000000000000000058d15e17628000",\n        "feeFrozen": "0x00000000000000000058d15e17628000"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and loaded into BigQuery as part of a publicly available ",(0,s.jsx)(n.a,{href:"https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005",children:"substrate-etl"}),", recently added to Google BigQuery's Public Datasets in May 2023."]}),"\n",(0,s.jsx)("img",{src:"https://cdn.polkaholic.io/screenshots/substrate-etl-trace.png"}),"\n",(0,s.jsx)(n.p,{children:"In Milestone 1, we will provide a 3 tier solution to deep account analytics on Account References.  Here is how the 3 tiers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tier 1 requires ",(0,s.jsx)(n.em,{children:"raw indexing"})," of traces.  Traces are critical to Colorful Notion's ",(0,s.jsx)(n.a,{href:"https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer",children:"XCM Indexing"})," and are important for parachain engineers to understand how the execution of a block, and are critical to the model producers, consumers and sufficients.   As raw traces form a very large dataset, to keep storage costs low, the indexer filters out pallets section/method that and exposes them in ",(0,s.jsx)(n.code,{children:"crypto_polkadot.traces0"})," (",(0,s.jsx)(n.a,{href:"https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/traces.json",children:"see schema"}),").  In particular, given how central accounts and native and non-native tokens are to blockchain usage, the indexer further decodes accounts and asset state into many additional columns like free, reserved and frozen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tier 2 requires ",(0,s.jsx)(n.em,{children:"deep indexing"})," of the above trace data, to analyze how certain attributes changed in ",(0,s.jsxs)(n.a,{href:"https://docs.google.com/spreadsheets/d/1jywN--pONmJqmbuASWDLNdBvsB86OuizJnQ72ijAXSU/edit#gid=704412439",children:["System",":Account"]})," holding account reference counters, account balance reserved provenance (see: ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/reference/account-data-structures/",children:"https://docs.substrate.io/reference/account-data-structures/"}),").  We have some preliminary work on this (see ",(0,s.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/1gZZOvH4BYk2QYlhzz9AvRxiR6mcYtgRz9VZluz1lwuU/edit#gid=1313769699",children:"this sheet"}),") and proved that, yes, it is indeed possible to uniquely identify the extrinsic id (but not call id) for every trace, and that the changes can be identified to build a new dataset every day."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tier 3 requires situating the above dataset into an Account Analysis Dashboard of ",(0,s.jsx)(n.a,{href:"https://analytics.polkaholic.io/dashboard/list/",children:"Apache Superset"}),".   Here we have a WASM Contract Explorer prototype:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"https://cdn.polkaholic.io/screenshots/deep-account-dashboard.png"}),"\n",(0,s.jsx)(n.p,{children:"We envision Milestone 1 focussed on Account References and then extended in Milestone 2 to Democracy+Staking deep analysis.  This will result in an Account Analysis Dashboard, with 3 or more account tabs exploring:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'"Account References" concerning deep indexing developed in Milestone 1'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['"Democracy" concerning deep indexing about ',(0,s.jsxs)(n.a,{href:"https://docs.google.com/spreadsheets/d/1hdvW5Kw3gwBnXqFskALX1_szdTf4pYL-SlbOqJ8tlO0/edit#gid=1803912396",children:["Democracy",":VotingOf"]})," developed in Milestone 2"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"direct":{"delegations":{"capital":0,"votes":0},"prior":[0,0],"votes":[[113,{"standard":{"vote":"0x81","balance":10000000000}}],[119,{"standard":{"vote":"0x82","balance":50000000000}}]]}}\n'})}),"\n",(0,s.jsx)(n.p,{children:"OR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{"delegating":{"balance":15000000000,"conviction":"Locked4x","delegations":{"capital":0,"votes":0},"prior":[0,0],"target":"15ZvLonEseaWZNy8LDkXXj3Y8bmAjxCjwvpy4pXWSL4nGSBs"}}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"Staking" concerning deep indexing about Staking and Nomination Pools, with the added complexity of stashing controller/accounts, developed in Milestone 2.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is straightforward to link these dashboards directly to polkaholic.io based the key (accountID/extrinsicID/...) and add filtering on any column present in the table with Apache Superset."}),"\n",(0,s.jsx)(n.p,{children:"Any UI can then link to this dashboard with the account ID, and the dashboard can link back to a block explorer."}),"\n",(0,s.jsx)(n.p,{children:"Once the dataset is made available, end users can build charts and dashboards with the same ease as they do in Excel or Google Sheets."}),"\n",(0,s.jsx)(n.p,{children:"The community dashboard can be used in the same way as Dune Analytics dashboards serves the EVM community."}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"While this proposal does not explicitly require collaboration on any of the 3 tiers, our intention is to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"set up a foundation where the Web3 Foundation could ask other teams to contribute datasets (Tier 2) and build dashboards (Tier 3) in the same way."}),"\n",(0,s.jsxs)(n.li,{children:["set up a repeatable model between Web3 Foundation and a Polkadot Data Alliance support data-oriented research (W3F) and ongoing maintenance (",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#",children:"Polkadot Data Bounty"}),") with child bounties"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members--contact",children:"Team members / Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Sourabh Niyogi / Michael Chung"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:sourabh@colorfulnotion.com",children:"sourabh@colorfulnotion.com"})," / ",(0,s.jsx)(n.a,{href:"mailto:michael@colorfulnotion.com",children:"michael@colorfulnotion.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"https://colorfulnotion.com",children:"https://colorfulnotion.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," 55 E 3rd Ave, San Mateo, CA 94401, USA"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Colorful Notion, Inc."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021 and substrate-etl since December 2022."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),\nmobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Sourabh spent time doing computational cognitive science and machine vision research at MIT, including\nin [Bayesian learning of verb meaning and causal laws](",(0,s.jsx)(n.a,{href:"https://scholar.google.com/citations?user=HHmGYdEAAAAJ&hl=en",children:"https://scholar.google.com/citations?user=HHmGYdEAAAAJ&hl=en"}),"]."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Michael hails from UC Berkeley with a degree in statistics and economics and leads deep indexing at Colorful Notion."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/colorfulnotion/substrate-etl",children:"substrate-etl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/colorfulnotion/polkaholic",children:"Polkaholic.io"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/colorfulnotion/xcm-global-registry",children:"XCM Global Asset Registry"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/sourabhniyogi",children:"Sourabh Niyogi"})," | ",(0,s.jsx)(n.a,{href:"https://github.com/mkchungs",children:"Michael Chung"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Summer 2022: Released Polkaholic.io, a fully working Substrate-first multichain block explorer."}),"\n",(0,s.jsx)(n.li,{children:"Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added EVM/WASM support."}),"\n",(0,s.jsx)(n.li,{children:"Winter/Spring 2023: Developed substrate-etl and XCM Global Asset Registry."}),"\n",(0,s.jsxs)(n.li,{children:["May 2023: Google included Polkadot + Kusama in ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/bigquery/public-data",children:"Google Public Datasets"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.p,{children:"This proposal aims to deliver on the three-tier architecture outlined in two milestones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Milestone 1 will develop ",(0,s.jsx)(n.code,{children:"System:Account"})," deep analytics."]}),"\n",(0,s.jsxs)(n.li,{children:["Milestone 2 will develop ",(0,s.jsx)(n.code,{children:"Democracy"}),", ",(0,s.jsx)(n.code,{children:"Staking"})," and ",(0,s.jsx)(n.code,{children:"NominationPools"})," deep analytics."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For each Milestone, there are 3 kinds of deliverables corresponding to the 3 tiers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Raw indexes, in the form of BigQuery datasets which are delivered"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Deep indexes, in the form of BigQuery dataset"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Dashboard publication, in the form of Apache Superset Dashboard"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All raw and deep indexing code will be made open source within the polkaholic and substrate-etl repo."}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  300 FTE hours [100 USD/hr]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--three-tier-deep-account-analytics-on-account-references",children:"Milestone 1 \u2014 Three Tier Deep Account Analytics on Account References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 8 weeks (ending 8/31/23)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  150 FTE hours [100 USD/hr]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"GNUv3 - polkaholic + substrate-etl repo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"Provide README on construction of 1+2+3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Manual Testing Guide"}),(0,s.jsx)(n.td,{children:"Manual testing guide with steps for using the application, with examples including expected inputs and outputs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Raw Indexing"}),(0,s.jsxs)(n.td,{children:["substrate-etl",":crypto_polkadot",".traces0 for 7/1/23 - 8/31/23"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Deep Indexing"}),(0,s.jsxs)(n.td,{children:["substrate-etl",":substrate",".accountreference0 and supporting datasets"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"Dashboard Publication"}),(0,s.jsx)(n.td,{children:'Superset dashboard tab: "Account Reference"'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["We will take this opportunity to deliver raw indexes on traces, deep indexes on account references and a dashboard on Account References hosted at ",(0,s.jsx)(n.a,{href:"https://analytics.polkaholic.io",children:"https://analytics.polkaholic.io"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Indexing + Dashboard Publication must be able to support deep analysis of ",(0,s.jsx)(n.strong,{children:"Account References"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Which transactions/accounts were responsible for the reserved balance in an account?"}),"\n",(0,s.jsx)(n.li,{children:"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"}),"\n",(0,s.jsx)(n.li,{children:"What are the pallets responsible for reserves/holds and locks/freezes on an account?"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2--three-tier-deep-account-analysis-of-democracystakingnomination-pools",children:"Milestone 2 \u2014 Three Tier Deep Account Analysis of Democracy+Staking+Nomination Pools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 8 weeks (ending 10/31/23)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  150 FTE hours [100 USD/hr]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"GNUv3 - polkaholic + substrate-etl repo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsx)(n.td,{children:"Document substrate-etl README on 1+2+3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Manual Testing Guide"}),(0,s.jsx)(n.td,{children:"Manual testing guide with steps for using the application, with examples including expected inputs and outputs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Raw Indexing"}),(0,s.jsx)(n.td,{children:"BigQuery Index substrate-etl.crypto_polkadot.traces0 9/1/2023-10/31/23 -- stashing accounts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Deep Indexing"}),(0,s.jsxs)(n.td,{children:["BigQuery substrate-etl",":substrate",".democracy_* substrate-etl",":substrate",".staking_* substrate-etl",":substrate",".nomination_pools_*"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"Dashboard Publication"}),(0,s.jsx)(n.td,{children:'Superset dashboard tabs: "Democracy", "Staking", "Nomination Pools"'})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"We will take this opportunity to address the complexity of stashing accounts by:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Deep Indexing.  Using the above tables in the views referencing  ",(0,s.jsx)(n.code,{children:"storage_staking_*, storage_nominationpools_*"})," tables"]}),"\n",(0,s.jsx)(n.li,{children:"Dashboard Publication.  Using the above, we can develop dashboards for Democracy+Staking+Nomination Pools"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Indexing + Dashboard Publication must be able to support deep analysis of Democracy and Staking/Nomination Pools pallets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Democracy: Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?"}),"\n",(0,s.jsx)(n.li,{children:"Staking/Nomination Pools: Who are all the nominators that nominated Validator X? (an inverse mapping basically of staking.nominators from validator -> nominators)  Who are the top 10 nominators with the highest APR, and which validators do they have in common?"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"Broadly, this proposal sets up a path for the Web3 Foundation to have Polkadot Data Alliance contributors deliver results for the Web3 Foundation itself and the community in the following ways:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"within the three-tier architecture, Polkadot Data Alliance contibutors can collaborate with Web3 Foundation and others in the Substrate community using raw indexes, published deep indexes, or building and extending dashboards.  Our technical choice for collaboration is BigQuery and Apache Superset but other choices may be equally viable or appropriate, by other teams."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["with the ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#",children:"Polkadot Data Alliance Bounty"})," and the ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program#hammer_and_wrench-maintenance-grants",children:"Web3 Foundation Maintance Grants"}),", there is a clear path to support both software maintainence ",(0,s.jsx)(n.em,{children:"and"})," hosting / data indexing infrastructure"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In followup work, we would expect to address the 3 tiers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"raw indexing: cover traces on a regular basis defined in child bounties"}),"\n",(0,s.jsx)(n.li,{children:"deep indexing: support the dataset deliverables on a regular basis"}),"\n",(0,s.jsx)(n.li,{children:"dashboards: maintain published dashboards developed, and host the Apache Superset"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We would welcome the challenge of doing followon high impact work, but hope that others in the Polkadot Data Alliance can follow this model as well."}),"\n",(0,s.jsxs)(n.p,{children:["We propose a child bounty to host Apache Superset instance at ",(0,s.jsx)(n.a,{href:"https://analytics.polkadot.network",children:"https://analytics.polkadot.network"})," or transfer this responsibility to a parent bounty curator."]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:["We request suitable Web3 Foundation members be identified as parent\nand child bounty curator candidates, and that the charter for the\nPolkadot Data Alliance be developed in a collaboration with Parity.\nThe Polkadot Data Alliance charter is ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We do not believe our participation (or anyone else's participation)\nin a Polkadot Data Alliance in providing deliverables at any of the\nthree tiers eliminates the possibility of doing further data\nprocessing for other sources of additional revenue.  Our goal is to be\nself-sufficient and not dependent on W3F Grants or Treasury funding,\nbut we hope our value and commitment to sharing and collaboration is\nrecognized by the community so we can be productive high impact\ncontributors."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);