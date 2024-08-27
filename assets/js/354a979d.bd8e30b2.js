"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[85721],{23747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const r={},a="AssetHub NFT Indexer",o={id:"applications/kodadot_assethub_nft_indexer_statemine_statemint",title:"AssetHub NFT Indexer",description:"- Team Name:  KodaDot",source:"@site/applications/kodadot_assethub_nft_indexer_statemine_statemint.md",sourceDirName:"applications",slug:"/applications/kodadot_assethub_nft_indexer_statemine_statemint",permalink:"/applications/kodadot_assethub_nft_indexer_statemine_statemint",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/kodadot_assethub_nft_indexer_statemine_statemint.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture \ud83c\udfd7",id:"architecture-",level:4},{value:"Technology Stack \ud83d\udcbb",id:"technology-stack-",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members (In order of joining time)",id:"team-members-in-order-of-joining-time",level:3},{value:"Contact \ud83d\udcde",id:"contact-",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team GitHub accounts \ud83e\uddd1\u200d\ud83d\udcbb",id:"team-github-accounts-",level:4},{value:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-linkedin-profiles-",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - AssetHub Indexer Implementation first part",id:"milestone-1---assethub-indexer-implementation-first-part",level:2},{value:"Future Plans \ud83d\udd2d",id:"future-plans-",level:2},{value:"Additional Information  \u2795",id:"additional-information--",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"assethub-nft-indexer",children:"AssetHub NFT Indexer"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"}),"  KodaDot"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"}),"  FIAT (as per email communcation on 29th January 2024 at 15:03 CET)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program#baby_chick-level-2",children:"Level"}),":"]}),"  2"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The AssetHub Indexer is a GraphQL service designed to streamline the interaction with Uniques, NFT non-fungible assets, and fungible assets on AssetHubs (Statemine/Statemint). This service is specifically tailored to serve as a robust data layer for NFT-oriented dApps, leveraging the simplicity of GraphQL and REST API."}),"\n",(0,i.jsx)(t.p,{children:"In the current landscape, developers face challenges interacting with Uniques and Assets on Statemine due to the complexity and time-consuming nature of querying fungible and non-fungible assets on AssetHub. AssetHub Indexer aims to address these challenges by providing a user-friendly GraphQL interface, thus reducing the time and effort required to query these assets."}),"\n",(0,i.jsx)(t.p,{children:"The key advantages of the AssetHub Indexer include\nits focus on ease of use,\nversatility for a broad range of use cases, and\nits commitment to bringing Statemine utilization & documentation closer to developers.\nFurthermore, the AssetHub Indexer is a completely decentralized, open-source solution that respects user privacy by not collecting user data."}),"\n",(0,i.jsx)(t.p,{children:"By reducing the time required to query assets and providing a more user-friendly interface, the AssetHub Indexer aims to foster the growth and development of the Web 3.0 ecosystem in Polkadot."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"The AssetHub Indexer is a state-of-the-art infrastructure tool designed to address developers' challenges when querying NFTs from the chain. Currently, developers are limited to querying NFTs in batches from RPC nodes, which can be time-consuming and inefficient for customer-facing products. This limitation often results in long waiting times and heavy device data loads."}),"\n",(0,i.jsxs)(t.p,{children:["To overcome these challenges, we have developed the AssetHub Indexer. This tool leverages the power of GraphQL to provide a more efficient and user-friendly interface for developers. With the AssetHub Indexer, developers can easily query NFTs and build on top of the new ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/master/frame/nfts/src/lib.rs",children:"NFTs pallet by Parity"}),", opening up a wide range of potential use cases, such as creating ",(0,i.jsx)(t.a,{href:"https://fandom.deno.dev",children:"fandom shops"})," for art."]}),"\n",(0,i.jsx)(t.p,{children:"Recognizing that many web developers may not have extensive experience with GraphQL, we have also built a TypeScript-based SDK that can be easily imported into any existing project. This SDK simplifies interacting with Uniques and Assets on Statemine, making it more accessible for developers of all skill levels."}),"\n",(0,i.jsx)(t.p,{children:"The AssetHub Indexer uses TypeScript and leverages the Squid framework (ArrowSquid) for data processing. It interacts with a Postgres database and provides a GraphQL interface for querying data. The project structure includes directories for generated model/server definitions, server extensions, data type definitions, and mapping modules. It also uses environment variables defined in a .env file or supplied by a shell for configuration."}),"\n",(0,i.jsx)(t.p,{children:"Currently, the AssetHub Indexer allows developers to interact with Uniques and Assets on Statemine using GraphQL. The project is designed to be as simple as possible, ensuring all tasks can be done quickly and without extended searching. We aim to reduce the time necessary to query fungible and non-fungible assets on AssetHub, making it easier for developers to build innovative and user-friendly decentralized apps."}),"\n",(0,i.jsx)(t.h4,{id:"architecture-",children:"Architecture \ud83c\udfd7"}),"\n",(0,i.jsx)(t.p,{children:"The architecture of the AssetHub Indexer is designed with simplicity and efficiency in mind, ensuring a seamless interaction with Uniques and Assets on Statemine."}),"\n",(0,i.jsx)(t.p,{children:"At the core of our architecture is TypeScript, a statically typed superset of JavaScript that adds optional types to the language. TypeScript ensures robustness and reliability in our codebase, allowing us to catch errors early in the development process and write more maintainable code."}),"\n",(0,i.jsx)(t.p,{children:"To handle data processing, we leverage the ArrowSquid framework. ArrowSquid is a powerful tool allowing us to process and index blockchain data efficiently. It provides a set of utilities for defining and running data processing tasks, making handling complex data processing requirements easier."}),"\n",(0,i.jsx)(t.p,{children:"Our project interacts with a Postgres database, a powerful, open-source object-relational database system that uses and extends the SQL language. Postgres provides us with the robustness, scalability, and performance we need to handle large amounts of data."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/SyLxL56uh.jpg",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"On the architectural level, we have a few layers, as described in the picture above.\nWe need to obtain the data for the correct function of our indexer. AssetHub indexer combines the SubSquid archive (the pre-indexed storage) and RPC node for the new data. When the indexer obtains a new event, it is automatically processed by the defined handler. As previously mentioned, we processed data stored in the Postgres DB."}),"\n",(0,i.jsx)(t.p,{children:"To expose the data to clients, we provide a GraphQL interface. GraphQL is a query language for APIs and a runtime for executing those queries with our existing data. It allows clients to ask for exactly what they need and nothing more, making it easier to evolve and enabling powerful developer tools."}),"\n",(0,i.jsx)(t.p,{children:"The project structure is organized into several key directories. The 'src/generated' directory contains model/server definitions created by codegen. The 'src/server-extension' directory contains a module with custom type-graphql-based resolvers. The 'src/types' directory contains data type definitions for chain events and extrinsics created by typegen. The 'src/mappings' directory contains the mapping module. The 'lib' directory contains compiled js files, reflecting the structure of the 'src' directory."}),"\n",(0,i.jsx)(t.p,{children:"Finally, the project configures environment variables, defined in a .env file or supplied by a shell. This approach allows us to easily manage and change the configuration without altering the codebase."}),"\n",(0,i.jsxs)(t.p,{children:["The second state-of-the-art is our Client-first SDK called Uniquery. As we can see in the picture below, the only thing that client applications need to do is import the Uniquery package via ESM/CJS (Javascript targets). Once we have the Uniquery package, we can access query builder implementation (such as ",(0,i.jsx)(t.code,{children:"client.getCollectionById(id)"}),"). Additionally, because many developers are familiar with REST API, we build a similar fetch strategy without needing a third party (every client fetches data directly from SubSquid). The REST looks like this: ",(0,i.jsx)(t.code,{children:"$fetch(/collectionById/${id})."})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://hackmd.io/_uploads/HkMKagJt3.png",alt:""})}),"\n",(0,i.jsx)(t.h4,{id:"technology-stack-",children:"Technology Stack \ud83d\udcbb"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TypeScript"}),"\n",(0,i.jsx)(t.li,{children:"Node.js"}),"\n",(0,i.jsx)(t.li,{children:"Docker"}),"\n",(0,i.jsx)(t.li,{children:"SubSquid (ArrowSquid for Substrate)"}),"\n",(0,i.jsx)(t.li,{children:"Postgres"}),"\n",(0,i.jsx)(t.li,{children:"GraphQL"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"The AssetHub Indexer is a crucial addition to the Polkadot and Substrate SDK ecosystem. It addresses the challenges developers often encounter when building on top of runtime pallets, particularly when interacting with Uniques, NFTs, and Assets on Statemine. The AssetHub Indexer provides a comprehensive NFT-oriented data solution, simplifying the development process and enhancing the efficiency of dApps within the ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"Our solution stands out within the Polkadot and Substrate SDK ecosystem due to its user-friendly GraphQL interface and TypeScript-based SDK. These features streamline interaction with Uniques and Assets on Statemine, reducing the complexity of querying these assets."}),"\n",(0,i.jsxs)(t.p,{children:["Moreover, the AssetHub Indexer is designed to be versatile, supporting a broad range of use cases. Developers can also leverage our ",(0,i.jsx)(t.a,{href:"https://github.com/kodadot/sub-scaffold",children:"sub-scaffold UI"})," template to bootstrap their projects quickly. This template, a forkable Substrate dev stack focused on rapid product iterations, accelerates the development process and allows developers to focus on creating innovative and user-friendly dApps, rather than getting bogged down in the initial setup."]}),"\n",(0,i.jsxs)(t.p,{children:["Our target audience for this proposal includes Web3 projects and blockchain developers, whether they are just starting out or already established within the Polkadot and Substrate SDK ecosystem. We believe the AssetHub Indexer can provide significant value to these developers, enabling them to build more efficient and user-friendly dApps like ",(0,i.jsx)(t.a,{href:"https://kodadot.xyz/",children:"KodaDot"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["AssetHub also plays significant for the ",(0,i.jsx)(t.a,{href:"https://kodadot.xyz/",children:"KodaDot"})," NFT marketplace, which is one of the main consumers for this indexer. Thanks to that, developers can find real-world examples of how to effectively make GraphQL queries and learn more about using Uniquery."]}),"\n",(0,i.jsxs)(t.p,{children:["Regarding competition within the Polkadot and Substrate SDK ecosystem, the AssetHub Indexer differentiates itself through its focus on NFT-oriented data solutions, user-friendly interface, and commitment to simplifying the development process. Including the sub-scaffold UI template further sets it apart, providing developers with a ready-to-use foundation for their projects. Moreover, the AssetHub Indexer is already being utilized by ",(0,i.jsx)(t.a,{href:"https://twitter.com/SubsocialChain/status/1674435226334904320",children:"Subsocial"})," and KodaDot, demonstrating its practical application and effectiveness. We plan to further promote the indexer within the ecosystem to onboard new developers and explore new solutions. These factors position the AssetHub Indexer as a unique and valuable tool within the Polkadot and Substrate SDK ecosystem, ultimately serving as a Common Good solution."]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members-in-order-of-joining-time",children:"Team members (In order of joining time)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Matej Nem\u010dek - Project Lead"}),"\n",(0,i.jsx)(t.li,{children:"Viktor Vala\u0161t\xedn - Developer"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact-",children:"Contact \ud83d\udcde"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"}),"  Matej Nem\u010dek"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"}),"  ",(0,i.jsx)(t.a,{href:"mailto:matej.nemcek@geefu.net",children:"matej.nemcek@geefu.net"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"}),"  Proletarska cesta 4, 1000 Ljubljana, Slovenia, Europe"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"}),"  GenArt, Matej Nem\u010dek s.p."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Matej Nem\u010dek"})," is the Founder and CEO of ",(0,i.jsx)(t.a,{href:"https://kodadot.xyz/",children:"KodaDot"}),". He has been instrumental in the growth and development of KodaDot, leading the team to create the best end-user experience on the Asset hub. Matej's leadership and vision have been pivotal in transforming KodaDot into a collaborative hub where creators, developers, and community members work collectively for decision-making."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Viktor Vala\u0161t\xedn"}),", also known as Viki Val, is the Co-founder of KodaDot. He is responsible for the technical aspects of the project. Viktor has been working on implementing MoonBeam and MoonRiver NFT EVM smart contracts and enabling read-only access to existing components for seamless end-user interaction. His technical expertise has been crucial in successfully launching the Basilisk NFT Marketplace pallet in the Fall of 2022."]}),"\n",(0,i.jsxs)(t.p,{children:["Matej and Viktor are strongly committed to the Polkadot ecosystem and have demonstrated their ability to deliver high-quality, impactful projects. They bring a wealth of knowledge and experience to the AssetHub Indexer project. Their work has earned KodaDot the number one rank as a decentralized dapp in the Polkadot ecosystem on ",(0,i.jsx)(t.a,{href:"https://github.com/topics/polkadot",children:"Github"}),". You can read more about their work and KodaDot's contributions to the Polkadot ecosystem on the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-nft-projects#kodadot",children:"Polkadot Wiki"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/kodadot/stick",children:"https://github.com/kodadot/stick"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/kodadot/nft-gallery",children:"https://github.com/kodadot/nft-gallery"})}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"team-github-accounts-",children:"Team GitHub accounts \ud83e\uddd1\u200d\ud83d\udcbb"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/vikiival",children:"Viktor Vala\u0161t\xedn"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/yangwao",children:"Matej Nem\u010dek"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-",children:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://linkedin.com/in/mnemcek/",children:"Matej Nemcek"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://linkedin.com/in/vikival/",children:"Viktor Valastin"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/kodadot/stick/milestone/1",children:"github.com/kodadot/stick/milestone/1"})," - Milestone 1 track"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/kodadot/stick",children:"github.com/kodadot/stick"})," This is the repo for AssetHub Indexer."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/kodadot/uniquery",children:"github.com/kodadot/uniquery"})," This is the repo for SDK."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"}),"  3 months \u231b\ufe0f"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"}),"  30,000 USD \ud83d\udcb0"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"milestone-1---assethub-indexer-implementation-first-part",children:"Milestone 1 - AssetHub Indexer Implementation first part"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"}),"  3 months \u231b\ufe0f"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 30,000 USD \ud83d\udcb0"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sequence"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a."}),(0,i.jsx)(t.td,{children:"Licensing"}),(0,i.jsx)(t.td,{children:"MIT License will be applicable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Comprehensive inline code documentation and an explicit README file to guide the project setup and execution."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0c."}),(0,i.jsx)(t.td,{children:"Test Guidelines"}),(0,i.jsx)(t.td,{children:"Testing will cover major functionality with unit tests and provide a guide for executing these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0d."}),(0,i.jsx)(t.td,{children:"Docker Integration"}),(0,i.jsx)(t.td,{children:"A Dockerfile will enable the project to run within a Docker container."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1a."}),(0,i.jsx)(t.td,{children:"Backward Compatibility Maintenance"}),(0,i.jsx)(t.td,{children:"Ensuring backward compatibility with current Uniques v1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1b."}),(0,i.jsx)(t.td,{children:"Collection Schema Development"}),(0,i.jsx)(t.td,{children:"Development of a GraphQL schema entity that represents the collection."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1c."}),(0,i.jsx)(t.td,{children:"NFT Schema Development"}),(0,i.jsx)(t.td,{children:"Formulation and creation of a GraphQL schema entity representing Non-fungible tokens."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Unique v1.1 Handlers"}),(0,i.jsx)(t.td,{children:"Implement a handlers to index buy, set_price events from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3."}),(0,i.jsx)(t.td,{children:"NFT Pallet Handlers"}),(0,i.jsx)(t.td,{children:"Handler created for indexing create, mint, buy, set_price, transfer, burn events from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4a."}),(0,i.jsx)(t.td,{children:"On-chain Attributes Schema Design"}),(0,i.jsx)(t.td,{children:"Development and design of a GraphQL schema entity representing on-chain attributes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4b."}),(0,i.jsx)(t.td,{children:"On-chain Attributes Handlers"}),(0,i.jsx)(t.td,{children:"Implementing a four handlers to index the creation and deletion of metadata set for collection and NFT from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5a."}),(0,i.jsx)(t.td,{children:"Metadata Schema Development"}),(0,i.jsx)(t.td,{children:"Creating and designing a GraphQL schema entity representing metadata."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5b."}),(0,i.jsx)(t.td,{children:"Metadata Handlers"}),(0,i.jsx)(t.td,{children:"Implementing a four handlers to index the creation and deletion of an attribute for collection and NFT from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5c."}),(0,i.jsx)(t.td,{children:"Metadata IPFS Integration Handler"}),(0,i.jsx)(t.td,{children:"Design a handler to retrieve IPFS Metadata from the IPFS network."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5d."}),(0,i.jsx)(t.td,{children:"Metadata IPFS Unification Handler"}),(0,i.jsx)(t.td,{children:"Design and integrate the library to uniform IPFS metadata into one format (OpenSea,TZIP-16,ERC-5773, FXhash)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6a."}),(0,i.jsx)(t.td,{children:"NFT Royalties Schema Integration"}),(0,i.jsx)(t.td,{children:"Design and include royalty support within the GraphQL schema."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6b."}),(0,i.jsx)(t.td,{children:"NFT Royalties Addition Handler"}),(0,i.jsx)(t.td,{children:"Implement a handler to add royalty into NFT."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6c."}),(0,i.jsx)(t.td,{children:"NFT Royalties PAYOUT Handler"}),(0,i.jsx)(t.td,{children:"Creation of handler to index royalty payout events from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7a."}),(0,i.jsx)(t.td,{children:"Fungible Assets Schema Creation"}),(0,i.jsx)(t.td,{children:"Design and formulation of a GraphQL schema entity representing fungible assets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7b."}),(0,i.jsx)(t.td,{children:"Fungible Assets Force Creation"}),(0,i.jsx)(t.td,{children:"Handlers will be developed to add system tokens like KSM/DOT into fungible assets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7c."}),(0,i.jsx)(t.td,{children:"Fungible Assets CREATE Event"}),(0,i.jsx)(t.td,{children:"An event handler for indexing the creation of a fungible event from a chain, such as (RMRK/USDT) will be developed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7d."}),(0,i.jsx)(t.td,{children:"Metadata Support for Fungible Assets"}),(0,i.jsx)(t.td,{children:"Implement a handler to add metadata to a fungible asset event from the chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7e."}),(0,i.jsx)(t.td,{children:"Fungible Asset Allowlist Setup"}),(0,i.jsx)(t.td,{children:"Setting up allows list-based indexing of fungible assets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8a."}),(0,i.jsx)(t.td,{children:"Data Views Development"}),(0,i.jsx)(t.td,{children:"Construction of data views for efficient access to indexed data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8b."}),(0,i.jsx)(t.td,{children:"Implementing Metadata Caching Layer"}),(0,i.jsx)(t.td,{children:"Develop and retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"9."}),(0,i.jsx)(t.td,{children:"Transfer of Collection Ownership"}),(0,i.jsx)(t.td,{children:"Incorporate functionality to transfer collection ownership."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10a."}),(0,i.jsx)(t.td,{children:"Collection settings Schema Design"}),(0,i.jsx)(t.td,{children:"Development and design of a GraphQL schema entity representing Collection settings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"10b."}),(0,i.jsx)(t.td,{children:"Collection settings handler"}),(0,i.jsx)(t.td,{children:"Implement a handler to add collection settings into data"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans-",children:"Future Plans \ud83d\udd2d"}),"\n",(0,i.jsx)(t.p,{children:"Upon the successful deployment of the AssetHub Indexer, our team plans to continue refining and expanding its capabilities in response to user feedback and technological advancements. We have outlined several key enhancements and upgrades that we aim to implement:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Development of an explorer to facilitate navigation within the NFT ecosystem."}),"\n",(0,i.jsx)(t.li,{children:"Introduction of collections functionality for systematic organization of NFTs."}),"\n",(0,i.jsx)(t.li,{children:"Creation of view modules to visually present NFT details."}),"\n",(0,i.jsx)(t.li,{children:"Establishment of user profiles to enable personalized user interfaces."}),"\n",(0,i.jsx)(t.li,{children:"Incorporation of constituent elements for individual NFT representation."}),"\n",(0,i.jsx)(t.li,{children:"Implement action components for functionalities like LIST, SEND, BUY, MINT, BURN, and Atomic Swap."}),"\n",(0,i.jsx)(t.li,{children:"Development of comprehensive statistical representations and analytics mechanisms."}),"\n",(0,i.jsx)(t.li,{children:"Introduction of rankings to highlight top-performing users, collections, or items."}),"\n",(0,i.jsx)(t.li,{children:"Personalization of the user interface to enhance the user experience."}),"\n",(0,i.jsx)(t.li,{children:"Maintenance of compatibility with runtime upgrades and changes in the Kusama/Statemine ecosystem."}),"\n",(0,i.jsx)(t.li,{children:"Regular updates to keep up with Substrate for continuous system enhancement."}),"\n",(0,i.jsx)(t.li,{children:"Management of upgrades to parachain runtime versions, including indexer enhancements and related costs."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"additional-information--",children:"Additional Information  \u2795"}),"\n",(0,i.jsxs)(t.p,{children:["The AssetHub Indexer project continues our team's various projects and implementations in the Polkadot ecosystem. We have already attracted interest from developers within the Polkadot and Kusama ecosystems. Notably, we have in 2019 previously received a grant from the W3F for creating Vue.js UI utilities, components, and libraries, details of which can be found ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Vuejs_ui-components.md",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This previous grant allowed us to reimplement keyring into Vue.js & TypeScript, demonstrating our hands-on experience with the polkadot.js.org/common utilities. The result of this work can be seen in the ",(0,i.jsx)(t.a,{href:"https://subkey.netlify.com/",children:"web-based Subkey"})," tool."]}),"\n",(0,i.jsx)(t.p,{children:"We learned about the Grants Program through a personal recommendation. We believe that our project aligns well with the program's goals, and we are excited about the potential to further contribute to the Polkadot ecosystem."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);