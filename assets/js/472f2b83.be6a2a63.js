"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[30211],{80595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453);const s={},o="Typechain-Polkadot Follow-up",a={id:"applications/typechain-polkadot-follow-up",title:"Typechain-Polkadot Follow-up",description:"- Team Name: 727.ventures",source:"@site/applications/typechain-polkadot-follow-up.md",sourceDirName:"applications",slug:"/applications/typechain-polkadot-follow-up",permalink:"/applications/typechain-polkadot-follow-up",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/typechain-polkadot-follow-up.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Usage of Typechain-compiler",id:"usage-of-typechain-compiler",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Previous work",id:"previous-work",level:2},{value:"Milestone 1 - MVP, first application and testing.",id:"milestone-1---mvp-first-application-and-testing",level:3},{value:"Current work - Scope of this grant",id:"current-work---scope-of-this-grant",level:2},{value:"Milestone 2 - Full coverage for ABIs\u2019 types. Contracts deployment.",id:"milestone-2---full-coverage-for-abis-types-contracts-deployment",level:3},{value:"Future work",id:"future-work",level:2},{value:"Milestone 3 - High-level improvements, flexibility and simplifying of usage",id:"milestone-3---high-level-improvements-flexibility-and-simplifying-of-usage",level:3},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"typechain-polkadot-follow-up",children:"Typechain-Polkadot Follow-up"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/727-Ventures",children:"727.ventures"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," ERC 20 (DAI):\n0x352F779203202c99699CdA8cc95adF06CcC8abEf"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Nowadays, when technologies are growing faster and faster, we should think about optimizing different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations."}),"\n",(0,i.jsx)(t.p,{children:"When a smart contract is being written, the front-end developer receives its file representation in the Application Binary Interface (ABI) format. One ABI per each contract, a new ABI for every contract update."}),"\n",(0,i.jsx)(t.p,{children:"Information about how to interact with a contract (methods names, arguments & returns types, etc.) is included in this ABI file. It is not relatively human-readable, so extracting that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript."}),"\n",(0,i.jsx)(t.p,{children:"Interaction with blockchain is done with the polkadot.js library, which only has abstract definitions for the contract in use. Thus users' code cannot be typesafe. And Typechain-Polkadot can change it."}),"\n",(0,i.jsxs)(t.p,{children:["This Grant is a follow-up to the previous grant, ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/992",children:"Typechain-Polkadot"}),"..\nWe have decided to add a new tool that will help developers easily integrate typechain to their projects. It will also be compatible with Redspot (if redspot was used for compiler projects, you could just leave most of the things).\nWe have some updates on our team, so check them out. And also, we did more work on Milestone 1 than we thought, so now it'll be easier to add new features to the project, so we considered to reestimate our time."]}),"\n",(0,i.jsx)(t.h3,{id:"usage-of-typechain-compiler",children:"Usage of Typechain-compiler"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    npx typechain-compiler --config config.json\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Also, you can set some additional arguments like ",(0,i.jsx)(t.code,{children:"--noCompile"}),", ",(0,i.jsx)(t.code,{children:"--noTypechain"}),", ",(0,i.jsx)(t.code,{children:"--release"})]}),"\n",(0,i.jsx)(t.p,{children:"Config interface will be something like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"export interface Config {\n    projectFiles: string[]; // Path to all project files, everystring in glob format\n    skipLinting : boolean; // Skip linting of project files\n    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)\n    typechainGeneratedPath : string; // Path to typechain generated folder\n}\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output."}),"\n",(0,i.jsx)(t.p,{children:"Given that a front-end developer needs to do this with every contract update, the such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI."}),"\n",(0,i.jsxs)(t.p,{children:["When contract descriptions come both with ABI and source code (",(0,i.jsx)(t.code,{children:"*.contract"})," files), our tool will provide means for deployment as well."]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Where and how does your project fit into the ecosystem?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There is a whole side to every project in the ecosystem - that is, the front-end side of contract integration - that will find a use for Typechain-Polkadot during the development process."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Who is your target audience?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Our main target audience is front-end and smart-contract developers of Polkadot projects."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"What need(s) does your project meet?"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Our project speeds up the front-end integration of Polkadot/Substrate/Kusama contracts. As well as brings type safety to developers' code when dealing with contracts. For smart contract developers, it simplifies integration test writing."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["No, we are the first project of the kind in the ecosystem. However, in the Solidity ecosystem, a similar project already exists, ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/typechain",children:"Typechain"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Markian Ivanichok"})," (\u0421EO of 727.ventures)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Fedor Lebed"})," (Head of Operations | 727.ventures)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Green Baneling"})," (Blockchain Core Rust Engineer | 727.ventures)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Varex Silver"})," (Blockchain developer | 727.ventures)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Artem Lech"})," (Blockchain developer | 727.ventures)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Fedor Lebed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:feder.lebed@727.ventures",children:"fedor.lebed@727.ventures"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"727.ventures",children:"727.ventures"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," The registered office shall be in Coastal Building, Wickham\u2019s\nCay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Seven2seven Ventures Ltd"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Markian Ivanichok"}),"\nCEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Fedor Lebed"}),"\nFedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.\nFedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Green Baneling"}),"\nBlockchain Core Developer\nPrimary programming languages are: C++, Go, Rust"]}),"\n",(0,i.jsx)(t.p,{children:"Finished the faculty of applied mathematics(Master's degree). Participated in programming competitions during education. Has worked as a programmer for around six years."}),"\n",(0,i.jsx)(t.p,{children:"Was a freelancer the first year, creating an application for IOS(Swift), and creating modules for the desktop application on C++. After that, I spent two years in a company that created software for TV devices(C++/ Haxe). After which, for three years, working on different blockchain projects(C++/Go/Rust/Solidity/Js)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Varex Silver"}),"\nBlockchain Developer."]}),"\n",(0,i.jsx)(t.p,{children:"Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++).\nWas a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Artem Lech"}),"\nBlockchain Developer."]}),"\n",(0,i.jsx)(t.p,{children:"Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript)."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/727-Ventures",children:"https://github.com/727-Ventures"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/xgreenx",children:"https://github.com/xgreenx"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/varex83",children:"https://github.com/varex83"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Artemka374",children:"https://github.com/Artemka374"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/mivanichok/",children:"https://www.linkedin.com/in/mivanichok/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/toma-sadova/",children:"https://www.linkedin.com/in/toma-sadova/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/bogdan-ogorodniy/",children:"https://www.linkedin.com/in/bogdan-ogorodniy/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/artem-fomiuk-31249b226/",children:"https://www.linkedin.com/in/artem-fomiuk-31249b226/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/727-Ventures/typechain-polkadot",children:"The project"})," is already a work-in-progress."]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"We have decided to describe a full roadmap of a Typechain here, with estimates. However, the funding we request at this stage is for milestone 2."}),"\n",(0,i.jsx)(t.h2,{id:"previous-work",children:"Previous work"}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1---mvp-first-application-and-testing",children:"Milestone 1 - MVP, first application and testing."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 8 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 44,800 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"MIT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will provide TypeScript code examples of this package in use, inline documentation, JSDoc, and the description of its features."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"TS Types"}),(0,i.jsx)(t.td,{children:"We will research & match types from ABI to TypeScript, compatible with polkadot{.js} v8 library. Separately, for methods' arguments and return values. Files with types definition will be generated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Runtime Code"}),(0,i.jsxs)(t.td,{children:["Prepare output(its draft can be seen in ",(0,i.jsx)(t.a,{href:"https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#generated-code-draft",children:"technical specification"}),") of runtime code with contracts' methods implementation. At this point we have minimal viable coverage of the ABI types, original methods' names, and general types for methods' options, without specifics for contract's namespaces."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Testing"}),(0,i.jsx)(t.td,{children:"Minimal coverage of PSP22 contract with integration tests. We will be testing correctness of the derived types of the arguments and return values."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"NPM Packaging"}),(0,i.jsx)(t.td,{children:"Prepare the repository to work through CLI as a package. In TypeScript, as is, without translation to JavaScript. We will publish the package to NPM repository and provide set-up instructions (i.e. for installation, input & output)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"current-work---scope-of-this-grant",children:"Current work - Scope of this grant"}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2---full-coverage-for-abis-types-contracts-deployment",children:"Milestone 2 - Full coverage for ABIs\u2019 types. Contracts deployment."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 7.5 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"})," 2.5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 52,500 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"MIT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"Cover new-added features in documentation and usage examples. Prepare generated code to have more informative IDE hints based on TSDoc and the output type system (if needed)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Investigation & Refactoring"}),(0,i.jsx)(t.td,{children:"Broaden types definitions for methods arguments and return values (to full coverage). Also, refactor project structure to monorepo for future development"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Parser & generators modules"}),(0,i.jsx)(t.td,{children:"Design and implement a new parser module for ABI JSON to work with different versions of the ABI. Parser's output structure serves as an input for generators. Refactor, replace inline generation with the parser to generator flow."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Contract deployment"}),(0,i.jsxs)(t.td,{children:["Add availability to deploy contracts with ",(0,i.jsx)(t.code,{children:"Constructors"})," field, using ",(0,i.jsx)(t.code,{children:"*.contract"})," files."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4a"}),(0,i.jsx)(t.td,{children:"Contract classes extension"}),(0,i.jsx)(t.td,{children:"Extend generated contract classes with valuable properties ordinarily available on the contract (e.g., address, name, signer, etc.). Also, provide the ability to change signer and contract address easily without creating a new contract manually."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4b"}),(0,i.jsx)(t.td,{children:"Methods' names"}),(0,i.jsxs)(t.td,{children:["Format methods' names in the output from the original ",(0,i.jsx)(t.code,{children:"MethodTrait::method_name"})," to a more user-friendly ",(0,i.jsx)(t.code,{children:"methodName"})," naming scheme while resolving overlap in formatted names."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5"}),(0,i.jsx)(t.td,{children:"Testing"}),(0,i.jsx)(t.td,{children:"Complete coverage of PSP22 contract with integration tests. Both for contract usage and deployment. We will be testing arguments' & return values' types' correctness."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6"}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article that explains features of Typechain, how to use it in projects"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7"}),(0,i.jsx)(t.td,{children:"Branding"}),(0,i.jsx)(t.td,{children:"Make logotype for typechain and better README"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-work",children:"Future work"}),"\n",(0,i.jsx)(t.h3,{id:"milestone-3---high-level-improvements-flexibility-and-simplifying-of-usage",children:"Milestone 3 - High-level improvements, flexibility and simplifying of usage"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 8-12 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"})," ?"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Costs: -"})}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0a"}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"MIT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0b"}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"We will cover new-added features in documentation and usage examples."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"User-defined plugins"}),(0,i.jsx)(t.td,{children:"We will provide an opportunity for users to make their plugins, for instance, how to parse types or what generated code will look like."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Subscribing to events"}),(0,i.jsx)(t.td,{children:"We will research and subscribe to events the contract emits, which will be handy for developers."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Typechain-compiler"}),(0,i.jsx)(t.td,{children:"The tool will be easy for big projects to compile Rust code and generate Typechain definitions. It\u2019ll be helpful for TDD when users can write code and develop everything in one CLI command instead of generating a typechain-code file by file. In plans, we want to make a wrapper for running user scripts (like hardhat run) and also functionality to initialize the environment for typechain usage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"Openbrush integration"}),(0,i.jsx)(t.td,{children:"We will test typechain on openbrush integration tests to ensure everything is working correctly and is easy to use."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5"}),(0,i.jsx)(t.td,{children:"typechain/types package"}),(0,i.jsx)(t.td,{children:"We will make a separate package for types that typechain use to reduce the usage of the same code and separate static code from generated code."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6"}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish article that explain how to connect it to the project and describe the types of connection options (directly or via compiler)"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"After this grant, we will maintain the project to keep up with new emerging ecosystem standards, listen to community issues, and update the tool to make the transformation process a more excellent experience for the developers and teams. We are going to work on integration with the Swanky project."}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,i.jsx)(t.p,{children:"Have a number of approved applications:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"OpenBrush"}),"\n",(0,i.jsx)(t.li,{children:"Sol2Ink"}),"\n",(0,i.jsx)(t.li,{children:"Typechain-polkadot (Milestone 1)"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);