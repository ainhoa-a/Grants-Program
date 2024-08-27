"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[80631],{47487:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(74848),s=i(28453);const r={},o="CoinFabrik On Ink Integration Tests 3",d={id:"applications/CoinFabrik_On_Ink_Integration_Tests_3",title:"CoinFabrik On Ink Integration Tests 3",description:"- Team Name: CoinFabrik (Nektra S.A)",source:"@site/applications/CoinFabrik_On_Ink_Integration_Tests_3.md",sourceDirName:"applications",slug:"/applications/CoinFabrik_On_Ink_Integration_Tests_3",permalink:"/applications/CoinFabrik_On_Ink_Integration_Tests_3",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/CoinFabrik_On_Ink_Integration_Tests_3.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Execution",id:"milestone-1-execution",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"coinfabrik-on-ink-integration-tests-3",children:"CoinFabrik On Ink Integration Tests 3"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," CoinFabrik (Nektra S.A)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"We have discovered that integration tests for ink! contracts lack some of the functionalities, or present implementation differences, when compared to E2E testing."}),"\n",(0,t.jsx)(n.p,{children:"Integration tests run significantly faster than E2E (end-to-end) tests. If a full range of functionalities were provided, it could reduce testing and QA times."}),"\n",(0,t.jsxs)(n.p,{children:["Our intention is to ",(0,t.jsx)(n.code,{children:"flatten the anvil"})," of ink! integration testing. With a properly flattened anvil, quality tools can be built."]}),"\n",(0,t.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsxs)(n.p,{children:["We have conducted a comprehensive analysis to identify any missing functionalities in integration tests and implementation differences with E2E tests, and to propose and develop new testing features based on our findings. This analysis was carried as part of two previous grants (",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/998",children:"link1"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/1043",children:"link2"}),"). As part of the latter grant, we have developed and resolved the issues with some of the functions with implementation differences or missing implementations: ",(0,t.jsx)(n.code,{children:"default_accounts()"}),", ",(0,t.jsx)(n.code,{children:"set_contract_storage()"})," and ",(0,t.jsx)(n.code,{children:"instantiate_contract()"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["With this new grant, our objective is to implement our findings. Specifically, we aim to address functions in integration testing that have missing implementations or show differences when compared to e2e tests. We will add our contributions into the ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink",children:"ink! project repository"})," following existing ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md",children:"contribution guidelines"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsx)(n.p,{children:"Having a comprehensive set of functionalities available for integration tests would bring numerous benefits to the entire community, including improved reliability, code quality and maturity, and faster feedback loops."}),"\n",(0,t.jsxs)(n.p,{children:["Integration tests are useful during their development and they are quicker than E2E tests. We learned this while working on fuzzing detection techniques during the ",(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/web3-grant",children:"Proof of Concept of Scout"}),", which we performed in collaboration with ",(0,t.jsx)(n.a,{href:"https://lafhis.dc.uba.ar/home",children:"researchers from the University of Buenos Aires"}),". We believe that having a complete set of functionalities for integration tests would be useful for other teams working in the development of ink! smart contracts."]}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ariel Wassbein, Head of Research."}),"\n",(0,t.jsx)(n.li,{children:"Valeria Caracciolo, Business Development."}),"\n",(0,t.jsx)(n.li,{children:"CoinFabrik's development and QA teams."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Name:"})," Valeria Caracciolo"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:valeria.caracciolo@coinfabrik.com",children:"valeria.caracciolo@coinfabrik.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Website:"})," ",(0,t.jsx)(n.a,{href:"https://www.coinfabrik.com/",children:"https://www.coinfabrik.com/"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Address:"})," Dr. Emilio Ravignani 2394, C1425 CABA, Argentina"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Legal Entity:"})," Nektra S.A"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(n.p,{children:"We are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 200 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL."}),"\n",(0,t.jsx)(n.p,{children:"Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires."}),"\n",(0,t.jsx)(n.p,{children:"As well, CoinFabrik has been providing Quality Assurance as a service to development teams, accumulating valuable expertise in the field for a considerable period of time. Our clients highly appreciate this service, and as a result, we are eager to expand our capabilities to the ink! ecosystem."}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik",children:"https://github.com/CoinFabrik"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/on-ink_implementations",children:"https://github.com/CoinFabrik/on-ink_implementations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/on-ink-integration-tests",children:"https://github.com/CoinFabrik/on-ink-integration-tests"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/scout",children:"https://github.com/CoinFabrik/scout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/web3-grant",children:"https://github.com/CoinFabrik/web3-grant"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/arielwaissbein/",children:"https://www.linkedin.com/in/arielwaissbein/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/valeriacaracciolo/",children:"https://www.linkedin.com/in/valeriacaracciolo/"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,t.jsxs)(n.p,{children:["We have identified and analyzed 24 functions exposed for their usage in integration and E2E tests in the file ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/crates/ink/src/env_access.rs",children:"env_access.rs"})," of the ink! repository.  We documented these functions and provided test cases comparing their behaviour in integration and end-to-end tests. This analysis can be found in our ",(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/on-ink-integration-tests",children:"analysis repository"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Of these 24 functions, 4 functions showed behaviour differences when comparing their implementations for integration and e2e tests, 9 showed missing implementations for integration tests and the remaining 11 functions showed a consistent implementation across both environments."}),"\n",(0,t.jsx)(n.p,{children:"In the table below, we provide the status of each function after the developments and analysis made in our previous milestones."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Table 1: Status of functions exposed in integration and e2e testing environments."})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Issue Number"}),(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Implemented Integration Tests"}),(0,t.jsx)(n.th,{children:"Implemented E2E Tests"}),(0,t.jsx)(n.th,{children:"Status"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"default_accounts()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:["Implementation Difference Corrected. ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/pull/1955",children:"Pull request performed"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"set_contract_storage()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:["Missing limitation on Integration Testing Implemented. ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/pull/1961",children:"Pull request performed"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"invoke_contract_delegate()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"invoke_contract()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"gas_left()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing. Unfeasible Implementation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"set_code_hash()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"instantiate_contract()"}),(0,t.jsxs)(n.td,{children:["No. ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/pull/1963",children:"Pull request performed"}),"."]}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:["Missing Function Implementation on Integration Testing Performed. ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/pull/1963",children:"Pull request performed"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"caller_is_origin()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"code_hash()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"own_code_hash()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"call_runtime()"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Missing Function Implementation on Integration Testing. Unfeasible Implementation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"caller()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"transferred_value()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"weight_to_fee()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Implementation Difference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"block_timestamp()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"account_id()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17"}),(0,t.jsx)(n.td,{children:"balance()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Implementation Difference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"block_number()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"minimum_balance()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"terminate_contract()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"21"}),(0,t.jsx)(n.td,{children:"transfer()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"hash_bytes()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"hash_encoded()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"24"}),(0,t.jsx)(n.td,{children:"ecdsa_recover()"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Ok. No difference observed in testing."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In this milestone, we will develop the remaining functions that either lack implementations in integration tests or exhibit differences in implementation when compared to E2E tests. However, we will make exceptions for ",(0,t.jsx)(n.code,{children:"gas_left()"})," and ",(0,t.jsx)(n.code,{children:"call_runtime()"}),", as our analysis has deemed implementing these functions in integration tests unfeasible."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Observations for function ",(0,t.jsx)(n.code,{children:"weight_to_fee()"}),":"]})}),"\n",(0,t.jsxs)(n.p,{children:["For the function ",(0,t.jsx)(n.code,{children:"weight_to_fee()"}),", we have observed in the ",(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf",children:"milestone report of our previous grant delivery"})," and in the provided ",(0,t.jsx)(n.a,{href:"https://github.com/CoinFabrik/on-ink-integration-tests/tree/main/test-cases/weight-to-fee",children:"test case"})," that the value obtained in e2e tests is fixed at 0 and cannot be modified. This incorrect behaviour of ",(0,t.jsx)(n.code,{children:"weight_to_fee()"})," in E2E tests is also observed in paritytech/substrate-contracts-node."]}),"\n",(0,t.jsxs)(n.p,{children:["We have reviewed the function ",(0,t.jsx)(n.code,{children:"weight_to_fee()"})," and found that it has multiple implementations. This complexity makes it challenging to identify which implementation is responsible for the E2E tests, especially given that the large size of the runtime significantly slows down debugging."]}),"\n",(0,t.jsx)(n.p,{children:"To address this issue, we will submit an initial report to the ink! development team in the first week of this milestone and collaborate to devise an implementation plan. If we deem a resolution feasible, we will include it as part of this milestone."}),"\n",(0,t.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4 weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  4 FTE (0.50 Project Manager, 0.50 Tech Lead, 1 Full time Sr Rust Developer, 1 Full Time SemiSr Rust Developer, 1 Full Time QA Specialist)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"}),"  30,000 USD"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"milestone-1-execution",children:"Milestone 1: Execution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"})," 4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"MIT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0b."}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsxs)(n.td,{children:["We will write a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. This report will focus on the the functions to be implemented in this milestone, corresponding to issues ",(0,t.jsx)(n.code,{children:"3-invoke_contract_delegate()"}),", ",(0,t.jsx)(n.code,{children:"4-invoke_contract()"}),", ",(0,t.jsx)(n.code,{children:"6-set_code_hash()"}),", ",(0,t.jsx)(n.code,{children:"8-caller_is_origin()"}),",  ",(0,t.jsx)(n.code,{children:"9-code_hash()"}),", ",(0,t.jsx)(n.code,{children:"10-own_code_hash()"}),", and ",(0,t.jsx)(n.code,{children:"17-balance()"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"In the first week of this milestone, we will contact the ink! development team to provide an initial report on ",(0,t.jsx)(n.code,{children:"14-weight_to_fee()"}),", documenting our efforts to identify the source of its implementation issues and seeking collaboration to assess the feasibility of resolving them. We will document any progress and implementations related to ",(0,t.jsx)(n.code,{children:"14-weight_to_fee()"})," in our final milestone report.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"We will document any additional work that was required in order to ensure consistency between integration and e2e tests.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If applicable, we will suggest additional tests outside of the scope of this milestone. Particularly, for functions declared outside of the ",(0,t.jsx)(n.code,{children:"env_access.rs"})," file, but that could be related to integration or e2e testing."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0c."}),(0,t.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,t.jsxs)(n.td,{children:["The newly developed functionalities will be documented and tested following existing ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md",children:"contribution guidelines"}),". A testing guide will be included."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0d."}),(0,t.jsx)(n.td,{children:"Docker"}),(0,t.jsx)(n.td,{children:"Does not apply at this stage."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0e."}),(0,t.jsx)(n.td,{children:"Article"}),(0,t.jsxs)(n.td,{children:["We will publish an updated report summary in our blog at ",(0,t.jsx)(n.a,{href:"https://blog.coinfabrik.com/",children:"https://blog.coinfabrik.com/"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"1"})}),(0,t.jsx)(n.td,{children:"Development"}),(0,t.jsxs)(n.td,{children:["We will implement the missing functionalities or resolve implementation differences for function issues ",(0,t.jsx)(n.code,{children:"3-invoke_contract_delegate()"}),", ",(0,t.jsx)(n.code,{children:"4-invoke_contract()"}),", ",(0,t.jsx)(n.code,{children:"6-set_code_hash()"}),", ",(0,t.jsx)(n.code,{children:"8-caller_is_origin()"}),",  ",(0,t.jsx)(n.code,{children:"9-code_hash()"}),", ",(0,t.jsx)(n.code,{children:"10-own_code_hash()"})," and ",(0,t.jsx)(n.code,{children:"17-balance()"}),".",(0,t.jsx)("br",{}),"We will also make the necessary changes to address the issues highlighted in our initial report on ",(0,t.jsx)(n.code,{children:"14-weight_to_fee()"}),", provided that these changes are deemed feasible during our discussions with the ink! development team.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"All these implementations or modifications will be pushed into the ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink",children:"ink! project repository"}),"  following existing ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md",children:"contribution guidelines"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If applicable, we will develop additional tests or make ad hoc improvements to the ink codebase necessary for the completion of this milestone. Particularly for functions declared outside the ",(0,t.jsx)(n.code,{children:"env_access.rs"})," file that might be related to integration or end-to-end testing."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2"})}),(0,t.jsx)(n.td,{children:"Quality Assurance"}),(0,t.jsxs)(n.td,{children:["We will adhere to existing ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md",children:"contribution guidelines"})," and add necessary tests to integrate the new implemented or corrected functions to the  ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink",children:"ink! project repository"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"Moving forward, we have two projects in mind:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Research and develop an advanced testing automation solution for ink! smart contracts."}),"\n",(0,t.jsxs)(n.li,{children:["Improve our open source bug-detection tool ",(0,t.jsx)(n.a,{href:"https://coinfabrik.github.io/scout/",children:"Scout"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,t.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result."]}),"\n",(0,t.jsx)(n.p,{children:"During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);