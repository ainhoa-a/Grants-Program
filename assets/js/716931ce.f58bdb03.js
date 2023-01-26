"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3013],{29134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=a(87462),n=(a(67294),a(3905));a(30828);const o={},r="Data Analysis Tools for Substrate-based Blockchains",i={unversionedId:"RFPs/Open/data_analysis_tools",id:"RFPs/Open/data_analysis_tools",title:"Data Analysis Tools for Substrate-based Blockchains",description:"Status:* Open",source:"@site/docs/RFPs/Open/data_analysis_tools.md",sourceDirName:"RFPs/Open",slug:"/RFPs/Open/data_analysis_tools",permalink:"/Grants-Program/RFPs/Open/data_analysis_tools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"BPF-based ink! smart contracts",permalink:"/Grants-Program/RFPs/Open/bpf-contracts"},next:{title:"Decentralized Security Marketplace",permalink:"/Grants-Program/RFPs/Open/decentralized-security-marketplace"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-analysis-tools-for-substrate-based-blockchains"},"Data Analysis Tools for Substrate-based Blockchains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dsm-w3f"},"dsm-w3f"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/michalisFr"},"michalisFr"))),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"Block Explorers are tools that index blockchain data and allow people to easily exhibit it using a web user interface. Examples of Block Explorers in the Polkadot/Kusama ecosystem are (not exhaustive) Subscan, Calamar, and Statescan. For common users, the features commonly found in block explorers are enough. However, for advanced users, the data analysis involves accessing many screens and following long paths through blockchain data."),(0,n.kt)("p",null,"For example, Accounts has some provenance information that is pretty difficult or currently impossible to extract in block explorers. The account reference counter, account balance reserved provenance (see: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/account-data-structures/"},"https://docs.substrate.io/reference/account-data-structures/"),"), and OpenGov delegations are examples of it. Some questions raised that use this data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Which transactions/accounts were responsible for the reserved balance in an account?"),(0,n.kt)("li",{parentName:"ul"},"What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?"),(0,n.kt)("li",{parentName:"ul"},"Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track, taking into account indirect delegations too (e.g. Account A delegates to Account B which delegates to Account C)?")),(0,n.kt)("p",null,"This information is useful and requested for actual heavy users of the Polkadot/Kusama ecosystem."),(0,n.kt)("p",null,"This RFP is not limited to the example above and intends to support other analyses. This RFP is also not limited to adding new features to the existent block explorer, as applicants can propose new analysis tools as well. Please notice that the intention here is not to create new block explorers that would have the same information, presented in the same way, as the current ones."),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("p",null,"The expected deliverables are the tool features that provide specific data analysis. The data analysis provided by the tool should be detailed in the deliverables. Each analysis should be dynamic, reflecting the current state of the blockchain, and be presented in a web user interface, in a way that advanced non-technical users can consume, i.e., the user does not need to have programming skills. Please list each data analysis that will be supported by the tool in the deliverables including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data analysis question. (ex: Which transactions were responsible to reserve the balance amount in an account?)"),(0,n.kt)("li",{parentName:"ul"},"The expected input for the data analysis (ex: an account)"),(0,n.kt)("li",{parentName:"ul"},"The expected output for the data analysis (ex: a set of transactions that made/removed a balance reserve in the input account)")),(0,n.kt)("p",null,"The proposed analysis should not overlap with existing ones if the information is easy to extract in block explorers of the Polkadot/Kusama ecosystem. They can, however, overlap if the information is not simple or can't intuitively be found by non-technical users in the current block explorers (ex. based on multiple steps in the block explorer or based on events data)."),(0,n.kt)("p",null,"The user interface provided should allow the users to make or find the questions that can be answered by the tool. The tools should NOT demand that users need to know or learn technical query languages such as SQL, GraphQL, or any other."))}d.isMDXComponent=!0}}]);