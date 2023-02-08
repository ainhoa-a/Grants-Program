"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9750],{61303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(30828);const o={},i="Tuxedo",l={unversionedId:"applications/tuxedo",id:"applications/tuxedo",title:"Tuxedo",description:"- Team Name: Off-Narrative Labs",source:"@site/docs/applications/tuxedo.md",sourceDirName:"applications",slug:"/applications/tuxedo",permalink:"/Grants-Program/applications/tuxedo",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Tuxedo Core and Cryptocurrency Piece",id:"milestone-1--tuxedo-core-and-cryptocurrency-piece",level:3},{value:"Milestone 2 \u2014 Wallet and Multisig",id:"milestone-2--wallet-and-multisig",level:3},{value:"Milestone 3 \u2014 Full Docs and Tutorial",id:"milestone-3--full-docs-and-tutorial",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tuxedo"},"Tuxedo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Off-Narrative Labs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x5a335908df9D2C47304338E3b744579Ed7C6a64d (DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2 \ud83d\udc24")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Develop Substrate runtimes based on the UTXO model."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Tuxedo is a framework for developing Substrate runtimes based on the Unspent Transaction Output (UTXO) model. The letters utxo are contained in the word tuxedo, hence the name."),(0,r.kt)("p",null,"In the broader blockchain space, there are essentially two models for creating state machines, or runtimes, as they are known in the Substrate ecosystem. Those two models are the ",(0,r.kt)("strong",{parentName:"p"},"Account System")," as seen in Ethereum, Polkadot, and others, and the ",(0,r.kt)("strong",{parentName:"p"},"UTXO System")," as seen in Bitcoin, Monero, Cardano, and others. Currently the defacto way to write Substrate runtimes is with FRAME, which is based on the account system, and any project wishing to build on the utxo system is left to write a runtime from scratch or find a home in another ecosystem. Tuxedo would be a couterpart to FRAME based on UTXOs rather than accounts."),(0,r.kt)("p",null,"Tuxedo would make the UTXO model more visible and accessible in the Substrate ecosystem and begin to create a diversity of runtime frameworks in addition to FRAME, a trend that we hope will continue beyond Tuxedo itself."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"The primary advantage of UTXOs is that they are highly parallelizable. This fits well in Polkadot's multichain ecosystem where parachains execute and communicate asynchronously, and will be an even bigger advantage if (hopefully when) DAG based chains become popular, a trend that is already kicked off with projects like Aleph Zero, and many others outside the Polkadot ecosystem, including Hedera Hashgraph, Nano, and Casper Labs."),(0,r.kt)("p",null,"The UTXO data model is relatively well established by Bitcoin as well as research from IOHK in their ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/469.pdf"},"Abstract Model"),"  and ",(0,r.kt)("a",{parentName:"p",href:"https://files.zotero.net/eyJleHBpcmVzIjoxNjc1MjAwMTAwLCJoYXNoIjoiYTVhYmY4NjdiY2E2YzdkNTNjODkwNWNmZDZhYmM5MjAiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uXC9wZGYiLCJjaGFyc2V0IjoiIiwiZmlsZW5hbWUiOiJDaGFrcmF2YXJ0eSBldCBhbC4gLSAyMDIwIC0gVGhlIEV4dGVuZGVkIFVUWE8gTW9kZWwucGRmIn0%3D/ddc74b205ca4890fe1d87770bee15dd5a82bfed1ad8f84217cbf407686958498/Chakravarty%20et%20al.%20-%202020%20-%20The%20Extended%20UTXO%20Model.pdf"},"Extended UTXO Model"),". Our primary tasks would be to implement this in Rust and expose a standard API for chain developers to build on. This is analogous to the API exposed by FRAME System and the Pallets built on top."),(0,r.kt)("p",null,"Our core data types follow similarly, to the IOHK research cited above. The primary differences are that we do not assume a native cryptocurrency and rely on Tuxedo ",(0,r.kt)("strong",{parentName:"p"},"Pieces")," (analogous to FRAME Pallets) to provide the validation logic, rather than the UTXOs themselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// A UTXO transaction specifies some inputs to be consumed, and some new outputs to be created.\nstruct Transaction {\n  /// The inputs refer to currently existing unspent outputs that will be consumed by this transaction\n  inputs: BTreeSet<Input>,\n  /// Similar to inputs, Peeks refer to currently existing utxos, but they will be read only, and not consumed\n  peeks: BTreeSet<Input>,\n  /// The new outputs to be created by this transaction.\n  outputs: Vec<Output>,\n}\n\n/// A single output of a transaction which has an owner and some associated data\nstruct Output {\n  /// The address that owns this output. Based on either a public key or a Tuxedo Piece\n  owner: Address,\n  /// The data associated with this output. In the simplest case, this will be a token balance, but could be arbitrarily rich state.\n  data: Vec<u8>,\n}\n\n/// A single input references the output to be consumed or peeked at and provides some witness data, possibly a signature.\nstruct Input {\n  /// A previously created output that will be consumed by the transaction containing this input.\n  output: OutputId,\n  /// A witness proving that the output can be consumed by this input. In many cases including that of a basic cryptocurrency, this will be a digital signature.\n  redeemer: Vec<u8>,\n}\n")),(0,r.kt)("p",null,"The core of the API exposed developers who create Tuxedo Pieces, will roughly follow this trait. We expect this will have to get more specific as our development shows us what we haven;t yet considered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// The API of a Tuxedo Piece\ntrait TuxedoPiece {\n\n  /// The type of data stored in Outputs associated with this Piece\n  type Data;\n\n  /// The validation function to determine whether a given input can be consumed.\n  fn validate(transaction: Transaction, input: Input) -> bool;\n}\n")),(0,r.kt)("p",null,"This grant does not strive to create the entire rich ecosystem of Tuxedo pieces that we hope to eventually be developed on top of Tuxedo. Rather it strives to create the core of the Tuxedo system and a few of the most important and exemplary pieces. Specifically, we strive to develop the analogs to FRAME Executive, FRAME System, Pallet Balances, and Pallet Transaction Payment."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Tuxedo is a framework for writing Substrate runtimes. Substrate is the toolkit for building virtually all parachain nodes as well as many standalone blockchains. As such, Tuxedo provides a richer set of options to runtime developers, and hopes to attract teams to the Substrate / Polkadot ecosystem who may have otherwise gone elsewhere."),(0,r.kt)("p",null,"The primary users of Tuxedo will be parachain and runtime developers who will use Tuxedo directly to structure their runtimes. Of course, the user base will trickle downstream as well to users of those parachains that choose to build with Tuxedo. However, chain users will use Tuxedo only indirectly."),(0,r.kt)("p",null,"There are no projects like this in the Substrate ecosystem, although they do exist in the broader blockchain space; Cardano being the most notable example."),(0,r.kt)("p",null,"While it fulfills a similar role, Tuxedo is not intended to compete with FRAME, but rather to compliment it, by welcoming projects that fit naturally with the utxo model into the Substrate ecosystem, as FRAME does for projects that fit the accounts model."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joshy Orndorff ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JoshOrndorff"},"https://github.com/JoshOrndorff")),(0,r.kt)("li",{parentName:"ul"},"Andrew Burger ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/coax1d"},"https://github.com/coax1d"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Joshy Orndorff"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," joshyorndorff at proton dot me"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," The address you'll use in the invoices")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Joshy entered the Substrate ecosystem in 2019 as part of the Substrate Developer Hub team. There he created and hosted the weekly Substrate Seminar, and contributed significantly to the Substrate Recipes. In 2020, he moved to the Moonbeam team where he was a core developer. While at Moonbeam, Joshy wrote the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/nimbus/"},"Nimbus consensus engine")," which is used in several production parachains, and helped pioneer the technique whereby EVM contracts can interact with native Substrate pallets. In 2022, Joshy began contributing to the Polkadot Blockchain Academy, teaching in both Cambridge and Buenos Aires."),(0,r.kt)("p",null,"Andrew entered the Substrate ecosystem from a curiosity point of view back in June 2021. From there he learned blockchain and Substrate via documents and tinkering in his off time after work. In December 2021 received a fulltime job for a venture builder to build a parachain to eventually connect to Polkadot. Andrew graduated from the first Polkadot Blockchain Academy cohort in 2022 in Cambridge. After Cambridge Andrew moved on from the venture builder to dive into education in the Polkadot Ecosystem by instructing and developing course curriculum for the Polkadot Devcamp #2 online. For Andrew's current work he is contracting as an instructor at the Polkadot Blockchain Academy for Parity Technologies lecturing and creating educational content for Blockchain Fundamentals(Specifically lecturing on UTXO vs Accounts models), Substrate, and XCM modules. Also Andrew is doing Rust Core development work for the Integritee Parachain. Andrew shares a passion for allowing blockchain developers the ability to build upon the UTXO model in Substrate. "),(0,r.kt)("p",null,"Joshy and Andrew met in Cambridge in 2022 at the first Polkadot Blockchain Academy. There Andrew chose the Frameless UTXO Project cited above as his final project."),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"The team has done previous work on this topic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joshy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JoshOrndorff/utxo-workshop/tree/joshy-update-deps-may-2022"},"maintained")," the Substrate UTXO Workshop code as part of the Substrate Developer Hub team, and has continued to maintain it out of personal interest even years after leaving that team."),(0,r.kt)("li",{parentName:"ul"},"Andrew ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/coax1d/utxo-frameless/"},"ported")," this code to work ",(0,r.kt)("em",{parentName:"li"},"without FRAME")," as part of the Polkadot Blockchain Academy.")),(0,r.kt)("p",null,"The development so far has focused specifically on the crypto",(0,r.kt)("em",{parentName:"p"},"currency")," use case, whereas this grant proposes to generalize the code to be a framework for broader runtime logic development."),(0,r.kt)("p",null,"As teaching staff at the Polkadot Blockchain Academy in Buenos Aires, Joshy and Andrew found themselves, on two occasions, in conversations with other teaching staff in which it was noted that a diversity of runtime development frameworks would make the Substrate ecosystem stronger and attractive to a broader development base. This idea was supported by Kian Paimani and Shawn Tabrizi among others."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 9 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1.5 FTE (Joshy and Andrew will both work roughly three quarters time on this)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $30,000 (USD)")),(0,r.kt)("h3",{id:"milestone-1--tuxedo-core-and-cryptocurrency-piece"},"Milestone 1 \u2014 Tuxedo Core and Cryptocurrency Piece"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("p",null,"Split the existing FRAMEless UTXO project into the generic Tuxedo core, and the first Tuxedo piece which represents a cryptocurrency."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up the example node and transfer tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Tuxedo Core"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create the core of the Tuxedo System, analogous to FRAME Executive and FRAME System")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Token Piece"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create the first Tuxedo piece that serves as a cryptocurrency, analogous to Pallet Balances")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Tuxedo Node Template"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a Substrate node with the runtime built with Tuxedo and including the Token piece. Together this will represent a bitcoin-like token (not PoW though, only the token logic is bitcoin-like)")))),(0,r.kt)("h3",{id:"milestone-2--wallet-and-multisig"},"Milestone 2 \u2014 Wallet and Multisig"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("p",null,"Create the second Tuxedo piece, and a user-facing wallet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up the example node and transfer tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"User Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a CLI wallet that users can use to track their tokens in a Tuxedo-based cryptocurrency. This makes the example node actually useable by common users who are curious to explore but not yet ready to dig into the code. The wallet will be written in Rust and communicate with Substrates jsonrpsee endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Multisig Piece"),(0,r.kt)("td",{parentName:"tr",align:null},"We will expand the ecosystem of Tuxedo pieces by creating a multisig wallet. In addition to making the Tuxedo ecosystem a bit more complete, this also demonstrates to future piece developers how to couple pieces.")))),(0,r.kt)("h3",{id:"milestone-3--full-docs-and-tutorial"},"Milestone 3 \u2014 Full Docs and Tutorial"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("p",null,"Fully document the Tuxedo paradigm, existing pieces, CLI wallet, and provide a tutorial for runtime developers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up the example node and transfer tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0e.")),(0,r.kt)("td",{parentName:"tr",align:null},"Full written and Video Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"With a node template, piece template, and user-facing wallet now complete, we can get serious about user and developer documentation. We will create a full written tutorial and video walkthough that covers how to build and run the Tuxedo Node Template, and send tokens around with the wallet. We will then dive into how to add the multisig piece to your runtime, and how to develop your own simple piece starting from the piece template.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Piece Template"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create the template Tuxedo Piece analogous to the FRAME pallet template. This will allow runtime developers to have a concrete starting place when building their own utxo based Substrate runtimes.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Being a framework for runtime development, we plan to continue developing the ecosystem of Tuxedo Pieces including Pieces for NFTs, Governance Mechanisms, Proof of Stake, and even smart contracts."),(0,r.kt)("p",null,"Joshy has long had a vision of a UTXO based smart contract language based on the pi calculus. With Tuxedo core complete, it will be possible to develop such a contracting platform."),(0,r.kt)("p",null,"The UTXO model allows concurrent processing of unrelated transactions (those that do not compete to consume any inputs). It would be exciting to extend Substrate itself to support a DAG structure rather than a linear chain to take advantage of this ability, although the feasibility of this extension has not yet been studied."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"The team has been in the Substrate ecosystem for a long time, so we have heard of the grants program in many ways. From colleagues, grant recipients speaking highly the program, and grant recipients looking for help understanding Substrate."))}c.isMDXComponent=!0}}]);