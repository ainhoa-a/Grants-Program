"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[50401],{1063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(8209);const l={},o="Solang Playground",r={unversionedId:"applications/Solang_Playground",id:"applications/Solang_Playground",title:"Solang Playground",description:"- Team Name: Salaheldin Soliman",source:"@site/applications/Solang_Playground.md",sourceDirName:"applications",slug:"/applications/Solang_Playground",permalink:"/applications/Solang_Playground",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Solang_Playground.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"First Milestone: Solang&#39;s language server integrated in a Solidity Web Editor Client",id:"first-milestone-solangs-language-server-integrated-in-a-solidity-web-editor-client",level:4},{value:"Task 1: Language server package",id:"task-1-language-server-package",level:5},{value:"Task 2: The Web IDE client.",id:"task-2-the-web-ide-client",level:5},{value:"Note: This is a mock UI where Solidity code is not hinted by the language server. At the end of the project, there would be a section showing the deployed contracts and how to interact with them.",id:"note-this-is-a-mock-ui-where-solidity-code-is-not-hinted-by-the-language-server-at-the-end-of-the-project-there-would-be-a-section-showing-the-deployed-contracts-and-how-to-interact-with-them",level:6},{value:"Second Milestone: Solang Playground Backend Service",id:"second-milestone-solang-playground-backend-service",level:4},{value:"Third Milestone: Substrate contracts nodes interaction",id:"third-milestone-substrate-contracts-nodes-interaction",level:4},{value:"Task 1: Investigate and integrate means for Substrate node interaction",id:"task-1-investigate-and-integrate-means-for-substrate-node-interaction",level:5},{value:"Note: My decision will be more inclined towards the first two options. The reason is that in the near future, <code>llvm</code> wasm package would be up-streamed and <code>Solang</code> can be compiled to <code>wasm</code> then. A future plan for the IDE is that it doesn&#39;t depend on any back-end service.",id:"note-my-decision-will-be-more-inclined-towards-the-first-two-options-the-reason-is-that-in-the-near-future-llvm-wasm-package-would-be-up-streamed-and-solang-can-be-compiled-to-wasm-then-a-future-plan-for-the-ide-is-that-it-doesnt-depend-on-any-back-end-service",level:6},{value:"Fourth Milestone: IDE Improvements",id:"fourth-milestone-ide-improvements",level:4},{value:"Important Note: This grant will be more focused on achieving core functionality rather than making the IDE visually attractive. This would be considered as a future plan for improving the IDE.",id:"important-note-this-grant-will-be-more-focused-on-achieving-core-functionality-rather-than-making-the-ide-visually-attractive-this-would-be-considered-as-a-future-plan-for-improving-the-ide",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Contributer \ud83d\udc65",id:"contributer-",level:2},{value:"Contact",id:"contact",level:3},{value:"Relevant experience",id:"relevant-experience",level:3},{value:"Github Handle",id:"github-handle",level:3},{value:"LinkedIn Profile",id:"linkedin-profile",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Solang\u2019s language server integrated in a Solidity Web Editor Client",id:"milestone-1-solangs-language-server-integrated-in-a-solidity-web-editor-client",level:3},{value:"Note: To make things clear, this milestone <strong>only</strong> invovles the integration of the language server into the client. It does not involve compiling or deploying contracts.",id:"note-to-make-things-clear-this-milestone-only-invovles-the-integration-of-the-language-server-into-the-client-it-does-not-involve-compiling-or-deploying-contracts",level:6},{value:"Milestone 2: Solang Playground Backend Service",id:"milestone-2-solang-playground-backend-service",level:3},{value:"Milestone 3: Substrate node interaction",id:"milestone-3-substrate-node-interaction",level:3},{value:"Milestone 4 Solang IDE Improvements",id:"milestone-4-solang-ide-improvements",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Future improvements",id:"future-improvements",level:3},{value:"1- Removing the Backend Component:",id:"1--removing-the-backend-component",level:4},{value:"2- Making the IDE visually attractive",id:"2--making-the-ide-visually-attractive",level:4},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solang-playground"},"Solang Playground"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Salaheldin Soliman"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9036b20920ddf473e796d24afd0fe04d4dde0b68"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Details:")," DAI (ERC20)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is a follow-up grant for this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md"},"grant"),". The main theme is improving Solidity developer experience on non-EVM chains."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Solang compiles Solidity smart contracts to Substrate and Solana targets. An in-depth overview of Solang's purpose and motivation can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html"},"https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html"),"."),(0,i.kt)("p",null,"Solang Playground will be a web based IDE that allows users to compile and interact with Solidity smart contracts in a browser environment, without prior installation of any of the needed components: ",(0,i.kt)("inlineCode",{parentName:"p"},"Solang"),"or ",(0,i.kt)("inlineCode",{parentName:"p"},"Substrate contracts node"),". The aim here is to provide an experience similar to what ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," provides, as Remix is the first tool Solidity developers get introduced to in their smart contract learning track."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The aim of this project is to implement a web based IDE for Solang, and continue to improve it until full maturity. Therefore, improving Solidity developer experience on Substrate based chains through undertaking the following milestones:"),(0,i.kt)("h4",{id:"first-milestone-solangs-language-server-integrated-in-a-solidity-web-editor-client"},"First Milestone: Solang's language server integrated in a Solidity Web Editor Client"),(0,i.kt)("h5",{id:"task-1-language-server-package"},"Task 1: Language server package"),(0,i.kt)("p",null,"As of now, ",(0,i.kt)("inlineCode",{parentName:"p"},"Solang")," has a builtin language server. That is, the language server is a subcommand of the Solang executable. If the language server code is separated from Solang, in a standalone crate, and compiled to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),", it should be able to run in a browser environment.\nCompiling Solang as a whole to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," would be a more challenging task since its dependence on ",(0,i.kt)("inlineCode",{parentName:"p"},"LLVM"),", so this would be considered as a future improvement to the IDE.\nThe aim of this task is to develop a version of Solang's language server that could be compiled to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),", and could be integrated to a web code editor."),(0,i.kt)("h5",{id:"task-2-the-web-ide-client"},"Task 2: The Web IDE client."),(0,i.kt)("p",null,"Now that the language server ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," executable is ready from task one, we are ready to integrate it to a front-end which will provide the following functionalities:\n1- uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Monaco editor")," to edit ",(0,i.kt)("inlineCode",{parentName:"p"},"solidity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".toml")," files.\n2- uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," Solang language server to improve Solidity code editing experience."),(0,i.kt)("p",null,"At this point, the client should take its initial design: A simple web IDE with a file explorer and a code editor\n",(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Sy8wDpAi2.jpg",alt:null})),(0,i.kt)("h6",{id:"note-this-is-a-mock-ui-where-solidity-code-is-not-hinted-by-the-language-server-at-the-end-of-the-project-there-would-be-a-section-showing-the-deployed-contracts-and-how-to-interact-with-them"},"Note: This is a mock UI where Solidity code is not hinted by the language server. At the end of the project, there would be a section showing the deployed contracts and how to interact with them."),(0,i.kt)("h4",{id:"second-milestone-solang-playground-backend-service"},"Second Milestone: Solang Playground Backend Service"),(0,i.kt)("p",null,"The aim of this milestone is to develop a back-end server that is responsible for the following:\n1- Compile Solidity source files.\n2- Return Compiled byte-code as well as contracts metadata to the client (front-end)"),(0,i.kt)("p",null,"To achieve this functionality, the server will host the following:\n1- Solang Compiler docker image."),(0,i.kt)("p",null,"The back-end server will be built using the ",(0,i.kt)("inlineCode",{parentName:"p"},"actix framework"),"."),(0,i.kt)("p",null,"In the end of this milestone, the client should be able to interact with the back-end server, and the architecture will look like this:\n",(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/ByjxjgFjh.png",alt:null})),(0,i.kt)("p",null,"At this point in the project, The client should be able to save and edit Solidity source files, compile them and save the compiled byte-code and metadata."),(0,i.kt)("h4",{id:"third-milestone-substrate-contracts-nodes-interaction"},"Third Milestone: Substrate contracts nodes interaction"),(0,i.kt)("h5",{id:"task-1-investigate-and-integrate-means-for-substrate-node-interaction"},"Task 1: Investigate and integrate means for Substrate node interaction"),(0,i.kt)("p",null,"In order to deploy and interact with a smart contract, a run-time is needed (Substrate contracts pallet). Here are the existing options:"),(0,i.kt)("p",null,"1- Interact with a public test-net."),(0,i.kt)("p",null,"2- There is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Cardinal-Cryptography/drink"},"Drink"),", which provides a minimal substrate run-time with a an interface to interact with. This Could be compiled to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," and won't need to be hosted in the back-end server."),(0,i.kt)("p",null,"3- Host a substrate contracts node on the back-end server."),(0,i.kt)("h6",{id:"note-my-decision-will-be-more-inclined-towards-the-first-two-options-the-reason-is-that-in-the-near-future-llvm-wasm-package-would-be-up-streamed-and-solang-can-be-compiled-to-wasm-then-a-future-plan-for-the-ide-is-that-it-doesnt-depend-on-any-back-end-service"},"Note: My decision will be more inclined towards the first two options. The reason is that in the near future, ",(0,i.kt)("inlineCode",{parentName:"h6"},"llvm")," wasm package would be up-streamed and ",(0,i.kt)("inlineCode",{parentName:"h6"},"Solang")," can be compiled to ",(0,i.kt)("inlineCode",{parentName:"h6"},"wasm")," then. A future plan for the IDE is that it doesn't depend on any back-end service."),(0,i.kt)("p",null,"At the end of this milestone, the architecture will evolve into this:\n",(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/HksDHFAoh.png",alt:null})),(0,i.kt)("p",null,"The front-end will be responsible for providing language smarts from Solang's language server, and taking the following from the user and sending them to the Back-end:\n1- Solidity source files\n2- Compiler options"),(0,i.kt)("p",null,"The back-end will respond with compilation results: compiled bytecode and contracts metadata. The contracts will then be deployed and interacted with through scripts accessible to the client. The aim of this milestone is to merge milestones one and two, and to provide a test suite ensuring that front-end and back-end interactions are happening seamlessly. After this milestone, I will share blog posts and articles inviting Solidity developers to try out the IDE."),(0,i.kt)("h4",{id:"fourth-milestone-ide-improvements"},"Fourth Milestone: IDE Improvements"),(0,i.kt)("p",null,"Remix IDE has some attractive functionalities to any solidity developer, which we would like to see on the Substrate side:"),(0,i.kt)("p",null,"1- Calling a  specific function by the click of a button, alongside with the required parameters. E.G. similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts UI"),". (Only possible on the Substrate side)"),(0,i.kt)("p",null,"2- Initializing the work-space with an example contract in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Solang project")," file structure ready for deployment and interaction."),(0,i.kt)("p",null,"These functionalities will be implemented as a first step towards improving the IDE."),(0,i.kt)("h4",{id:"important-note-this-grant-will-be-more-focused-on-achieving-core-functionality-rather-than-making-the-ide-visually-attractive-this-would-be-considered-as-a-future-plan-for-improving-the-ide"},"Important Note: This grant will be more focused on achieving core functionality rather than making the IDE visually attractive. This would be considered as a future plan for improving the IDE."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Where and how does your project fit into the ecosystem? Who is your target audience? What need(s) does your project meet?"))),(0,i.kt)("p",null,'Quoted from the Ecosystem Fit section of the previous completed grant application, this statement still holds: "We still have a long way to go in terms of developer experience with Solidity on Substrate based chains. Although Solang as a compiler itself can be considered a huge step towards attracting solidity developers to the Polkadot/Kusama ecosystems: The Solidity developer experience on Ethereum far exceeds that of "Solidity Contracts on Substrate", caused by our inferior tooling and debugging story."'),(0,i.kt)("p",null,"The story stays the same, but the solution offered here is different: By Offering an ",(0,i.kt)("inlineCode",{parentName:"p"},"EVM")," developer an easy portal to the Substrate echo-system, especially with the language they love (Solidity) alongside a fairly good IDE that will be comparable to Remix in the long run, Substrate based chains will be an easy to try option without any prior installation of any component."),(0,i.kt)("p",null,"This project would benefit any para-chain using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," contracts pallet."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"))),(0,i.kt)("p",null,"Yes. There exists paritytech's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-playground"},"Ink! Playground"),". As the name implies, Ink! Playground would compile and deploy ink! contracts, not Solidity.\nAs a matter of fact, I investigated integrating Solang to Ink! playground, but this implied two problems:\n1- Changing the name of the project. (Not likely to take place)\n2- Convincing the contributors to integrate Solana. (Not likely to take place)"),(0,i.kt)("h2",{id:"contributer-"},"Contributer \ud83d\udc65"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Salaheldin Soliman"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:salaheldin_sameh@aucegypt.edu"},"salaheldin_sameh@aucegypt.edu"))),(0,i.kt)("h3",{id:"relevant-experience"},"Relevant experience"),(0,i.kt)("p",null,"1- Worked on Solang as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.hyperledger.org/display/INTERN"},"Hyperledger Mentorship Program"),"."),(0,i.kt)("p",null,"a. Implemented ",(0,i.kt)("a",{parentName:"p",href:"https://solang.readthedocs.io/en/latest/code_gen_options.html#array-bound-checks-optimization"},"array bounds checks optimization"),".\nb. Implemented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang/pull/988"},"multiplication overflow detection during runtime"),".\nc. Implemented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang/pull/1024#ref-commit-baaa425"},"constant overflow detection during compilation"),".\nd. Improved ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/solang/pull/1068"},"Solang's parser resilience"),"."),(0,i.kt)("p",null,"2- Worked on Solang as part of a previous W3F ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md"},"grant"),". "),(0,i.kt)("h3",{id:"github-handle"},"Github Handle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/salaheldinsoliman"},"https://github.com/salaheldinsoliman"))),(0,i.kt)("h3",{id:"linkedin-profile"},"LinkedIn Profile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/salaheldinsoliman/"},"https://www.linkedin.com/in/salaheldinsoliman/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The project can be considered as a helper project for Hyperledger Solang.\nDesigning the milestone structure was based on some existing IDE structures and design choices. To achieve the desired result, various open-source projects will be integrated.\nA list of these projects and their use are briefly documented in this ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Solang-Playground-dfe85d3493a943849af67991e56adbf2?pvs=12"},"notion page"),"."),(0,i.kt)("p",null,"There were also talks, via mail, with members from the foundation explaining interest in the project."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 13 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  ~0.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 25,000 USD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Date:")," September 1, 2023"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spare Period(time extension for unexpected events):")," 4 months spare (1 for each milestone) ")),(0,i.kt)("h3",{id:"milestone-1-solangs-language-server-integrated-in-a-solidity-web-editor-client"},"Milestone 1: Solang\u2019s language server integrated in a Solidity Web Editor Client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.75"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"- We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the client code and a readme that shows the build steps of the language server ",(0,i.kt)("inlineCode",{parentName:"td"},".wasm")," binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"- The functionalities of the ",(0,i.kt)("inlineCode",{parentName:"td"},".wasm")," language server will be tested against the existing test suite of the current language server to ensure robustness.",(0,i.kt)("br",null),"- Evaluators can fire up the docker container locally and try to edit Solidity source files with smarts provided from the language server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"A docker image will be provided so that an evaluator can easily set it up an try out the client locally.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Solang Playground Client"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a functional web editor in which a developer can edit and save Solidity source files with the help of Solang's language server.(documented code base).")))),(0,i.kt)("h6",{id:"note-to-make-things-clear-this-milestone-only-invovles-the-integration-of-the-language-server-into-the-client-it-does-not-involve-compiling-or-deploying-contracts"},"Note: To make things clear, this milestone ",(0,i.kt)("strong",{parentName:"h6"},"only")," invovles the integration of the language server into the client. It does not involve compiling or deploying contracts."),(0,i.kt)("h3",{id:"milestone-2-solang-playground-backend-service"},"Milestone 2: Solang Playground Backend Service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.75"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 6,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a ",(0,i.kt)("inlineCode",{parentName:"td"},"readme")," that shows how to run and interact with the actix web server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"- Unit tests to be provided to test for the compilation result of the web server. The unit tests will be a part of the server's source code. ",(0,i.kt)("br",null)," - Test scripts for the client's compile functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"- A ",(0,i.kt)("inlineCode",{parentName:"td"},"Docker")," container will be provided for the actix web server.  ",(0,i.kt)("br",null)," - A ",(0,i.kt)("inlineCode",{parentName:"td"},"Docker compose")," script to be provided to build both the client container and the backend container and set their networking.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Initial skeleton"),(0,i.kt)("td",{parentName:"tr",align:null},"- The client  should have a ",(0,i.kt)("inlineCode",{parentName:"td"},"compile")," functionality in which the bytecode and metadata can be viewed. This would be done by the interaction with the backend server implemented in this milestone.")))),(0,i.kt)("h3",{id:"milestone-3-substrate-node-interaction"},"Milestone 3: Substrate node interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Added code to the client will be documented. Steps for deploying and interacting with a smart contract will also be provided at this point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"- A testing suite will be provided to ensure that the front-end sends the correct requests ",(0,i.kt)("inlineCode",{parentName:"td"},"(compile, deploy and test)")," with correct parameters. The tests will ensure the contracts are deployed and could be interacted with as expected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Since this milestone is considered added functionality to the client ",(0,i.kt)("inlineCode",{parentName:"td"},"(milestone 1)"),", the docker provided in the first milestone would be updated and a new container for the client will be provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"First Working Version"),(0,i.kt)("td",{parentName:"tr",align:null},"- At this point, a Solidity developer should be able to edit, compile, deploy and interact with a smart contract through the IDE without installing any components.")))),(0,i.kt)("h3",{id:"milestone-4-solang-ide-improvements"},"Milestone 4 Solang IDE Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 4,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and update the ",(0,i.kt)("inlineCode",{parentName:"td"},"readme")," of the playground with the newly added functionalities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The added functionality will be tested against the test suite provided in milestone 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"Since this milestone is considered added functionality to the client ",(0,i.kt)("inlineCode",{parentName:"td"},"(milestone 1)"),", the docker provided in the first milestone would be updated and a new container for the client will be provided.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0e.")),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"I will share a blog-post on multiple platforms inviting Solidity developers to try out Solidity on Substrate using the IDE.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"IDE Improvements"),(0,i.kt)("td",{parentName:"tr",align:null},"1- Call a specific function by the click of a button, alongside with the required parameters. E.G. similar to ",(0,i.kt)("inlineCode",{parentName:"td"},"contracts UI"),". (Only possible on the Substrate side)",(0,i.kt)("br",null),"2- Initializing the work-space with an example contract in a Solang project file structure ready for deployment and interaction.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("h3",{id:"future-improvements"},"Future improvements"),(0,i.kt)("h4",{id:"1--removing-the-backend-component"},"1- Removing the Backend Component:"),(0,i.kt)("p",null,"Removing the Back-end component of the web IDE consists of a collection of tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Investigate compiling Solang to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," to run in the browser. This will imply investigating a suitable way to compile ",(0,i.kt)("inlineCode",{parentName:"p"},"LLVM")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There are implementations of mock Substrate contracts run-time, but they don't support full chain operations. Compiling the runtime with full functionality to ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," will be investigated."))),(0,i.kt)("h4",{id:"2--making-the-ide-visually-attractive"},"2- Making the IDE visually attractive"),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," "),(0,i.kt)("p",null,"I have already completed a grant under this program. I was first introduced to it by my mentor ",(0,i.kt)("a",{parentName:"p",href:"sean@mess.org"},"Sean Young")," and the awesome ",(0,i.kt)("a",{parentName:"p",href:"bigcyrill@hotmail.com"},"Cyrill leutwiler"),"."))}h.isMDXComponent=!0}}]);