"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[29114],{2675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(74848),i=n(28453);const r={},a="Open rollup - MVP - Phase 1",o={id:"applications/openrollup-mvp-phase-1",title:"Open rollup - MVP - Phase 1",description:"- Team Name: Open rollup",source:"@site/applications/openrollup-mvp-phase-1.md",sourceDirName:"applications",slug:"/applications/openrollup-mvp-phase-1",permalink:"/applications/openrollup-mvp-phase-1",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/openrollup-mvp-phase-1.md",tags:[],version:"current",frontMatter:{}},l={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Protocol overview",id:"protocol-overview",level:4},{value:"Prove and Verification abstraction",id:"prove-and-verification-abstraction",level:4},{value:"Scope of current proposal",id:"scope-of-current-proposal",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules",id:"milestone-1--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"open-rollup---mvp---phase-1",children:"Open rollup - MVP - Phase 1"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Open rollup"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0xC1347410Ee2Fc96C4e5a090FF97E3937A8aE158F (DAI)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Description."})," Open rollup provides a powerful and complete ZK rollup solution for substrate-based chains without contract enabled."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Background."})," We have developed some blockchain products, and the blockchain scalability problem is a serious problem. We believe that the off-chain zkapp solution is one of the best solutions to this problem."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Proposal."})," We propose an open zk-rollups hub solution based on Substrate. There is no central operator here. Each zkapp developer can freely register their own zkapp on the chain, implement their own offline logic, and submit their ZK Proofs and state changes for their batch transactions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zkapp."})," Zkapp can be a simple voting app, or a professional layer 2 solution with EVM support like zksync."]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(t.p,{children:["The core of Open rollup is open-rollup-pallet, which saves the program-hash, balance, operations (e.g., transfer, swap, move),  and account state root hash of each zkapp. In addition it saves each users' balance of each zkapp, one child trie per zkapp.\nIt includes two main components: rollup and verifier.\nThe rollup component includes a zkapp registration, user deposits to a zkapp, exit when a zkapp is inactive which didn't submit a batch within 7 days and the handling of full-exit operations on the zkapp side.\nDue to resource and time constraints, this proposal currently contains a rollup component, and a ",(0,s.jsx)(t.a,{href:"https://github.com/maticnetwork/miden",children:"miden"})," verifier instead of a zkvm that we want to implement in the future.\nThe verifier will be included in future proposals, and the rollup part will also increase the support of tokens and NFTs.\nOur initial idea about the verifier is to implement the verifier of ",(0,s.jsx)(t.a,{href:"https://eprint.iacr.org/2021/1063.pdf",children:"Cairo VM"})," in the future, which requires implementing the AIR of zkstark for Cairo VM. Then the developers of zkapp can use ",(0,s.jsx)(t.a,{href:"https://www.cairo-lang.org/",children:"Cairo-lang"})," to develop zkapp."]}),"\n",(0,s.jsx)(t.h4,{id:"protocol-overview",children:"Protocol overview"}),"\n",(0,s.jsx)(t.p,{children:"We give a brief overview of the rollup protocols."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zkapp registration."})," Developers use a program-hash to register a zkapp. The program-hash is derived from the bytecode of the zkapp. If the zkapp is open source, users can verify that the program-hash is indeed corresponding to the zkapp. In addition, the program-hash is also a public output of the verifier, which ensures that the submitted proof is indeed generated by this very zkapp's execution."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"User deposit."})," Users who want to participate in a zkapp deposit to this zkapp, and the batch submitted by this zkapp needs to include this deposit."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"User withdraw."})," If this zkapp ignores the user's operation in zkapp, the user can submit an withdraw transaction, and this zkapp must include this withdraw operation in the next submission."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"User full exit."})," If the zkapp has not been submitted for a period of time, the user can exit the zkapp and withdraw the assets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zkapp batch submit."})," The submission includes the batch's commitment, operations, proof, and new and previous account state root hashes. The commitment is the hash of the batch's operations, it's the public output of the zkapp's execution, so the verifier can be convinced that the state transition of the operations is correct. Operations include transfers, swaps, moving to another zkapp, and exit ops, which are used to update user balances for int the zkapp."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zkapp management"})," The registrant of one zkapp can manage the batch submitter and manually set the zkapp to be inactive"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zkapps info api."})," Query the status (assets's balances, last submission time, inactive status) of each zkapp, and the assets's balances of each user in each zkapp"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"prove-and-verification-abstraction",children:"Prove and Verification abstraction"}),"\n",(0,s.jsx)(t.p,{children:"Open rollup supports arbitrary programs (zkapp) to interact with it, the open rollup pallet runs on-chain (L1), and zkapp runs off-chain (L2). To ensure the correctness of off-chain zkapp execution and state transitions, open rollup abstracts a zkvm that runs off-chain, and an on-chain verifier verifies the batch submitted by zkapp."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"zkvm"})," run a zkapp program, generate proofs"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"program"})," zkapp program, consisting of zkvm instructions"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"program_hash"})," any zkapp can be reduced to a single 32-byte value, called program-hash, it ensures that the verifier verifies the execution of a specific program"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"zkapp-txs"})," L2 transactions generated by the user's interaction with zkapp and L1 transactions submitted by the user to the Open rollup pallet (deposit/exit/move)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"operations"})," emitted by zkapp-txs (such as transfer, swap, move) to update state"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"state"})," merkle tree of the account's balances of tokens of a zkapp"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"state root"})," the Merkle root hash of the state of a zkapp"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"batch_commitment"})," the state changes commitment (hash) of the batch, it ensures the submitted operations are the result of the batch's execution"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Pseudocode run offchain on zkapp side"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"let (zk-proof, execute_program_hash, operations, new_state_root, batch_commitment) = zkvm.execute(program, current_state_root, zkapp-txs)\nassert program_hash == execute_program_hash\nzkapp.submit_to_onchain(program_hash, operations, current_state_root, new_state_root, batch_commitment)\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Pseudocode run onchain on pallet side"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"assert current_state_root == saved_state_roots[program_hash]\nlet verifier = new MockVerifier()\nassert batch_commitment == verifier.compute_batch_commitment(new_state_root, operations)\nlet public_inputs = (program_hash, batch_commitment)\nassert verifier.vefify(zk-proof, public_inputs)\nsaved_state_roots[program_hash] = new_state_root\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"note"})}),"\n",(0,s.jsx)(t.p,{children:"As the detailed zkvm is determined, this abstraction may change."}),"\n",(0,s.jsx)(t.h4,{id:"scope-of-current-proposal",children:"Scope of current proposal"}),"\n",(0,s.jsx)(t.p,{children:"Due to the time and resource constraints of us, we limit the scope of the current proposal to implementing the on-chain rollup part of the pallet involving Currency(Balances pallet)/Assets(Assets pallet)/NFT(Uniques pallet).\nWe are still considering and researching the proof and verification protocol, we can't provide very detailed details yet, we will design it while implementing this proposal."}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Where and how does your project fit into the ecosystem?"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Open zk-rollup architecture"})," Developers who want to participate in the Polkadot ecosystem do not need to invest in their own zk-rollup technology alone so that more developers can participate in the development of zkapp."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"increase scalability"})," The off-chain zkapps greatly expands the scalability of the Polkadot/Substrate."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Modularity"})," The architecture of Open rollup is suitable for different proof and verify protocols, and can adapt to zkapps of different ZK protocols in the future"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"}),"\n",(0,s.jsx)(t.li,{children:"What need(s) does your project meet?"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The application developers that are in search of scaling their blockchain application, for example, the payment application."}),"\n",(0,s.jsx)(t.li,{children:"The game developers who do not want to interact with the chain frequently only need to submit in batches for a period of time, which saves the cost of using the chain and improves the user experience."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are many zk-rollup projects, such as zksync, starknet, hermez, plonky2, they are basically in the Ethereum ecosystem. They are all operated by a central operator, and in our protocol, each zkapp is an operator."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Chris Cen"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Chris Cen"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:chris@icen.cc",children:"chris@icen.cc"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://openrollup.org/",children:"https://openrollup.org/"})," (not yet established)"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"}),"  not yet available"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," not yet available"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.p,{children:["Our team has a lot of experience in applied cryptography, blockchain research, and software development.\nChris has been a software engineer for many years in the gaming industry and has led the development of various multiplayer online games. Recently he develop a hybrid consensus of Progpow and AuthorityRound ",(0,s.jsx)(t.a,{href:"https://github.com/chrisicen/openethereum-unity",children:"https://github.com/chrisicen/openethereum-unity"}),". He is currently devoted to the development of an off-chain ZK scalability solution for blockchain."]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/openrollup-zk",children:"https://github.com/openrollup-zk"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/chrisicen",children:"https://github.com/chrisicen"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsx)(t.p,{children:"not yet available"}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(t.p,{children:"We've been working on techniques for zk-rollup, and verifiable computation for some time, including projects like zksync, halo2, plonky2, winterfell, hermez, and related papers and articles. We are starting to implement the rollup part."}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 7.5 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 1.5 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 30,000 USD."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--implement-substrate-modules",children:"Milestone 1 \u2014 Implement Substrate Modules"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 7.5 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsxs)(t.td,{children:["We will publish an ",(0,s.jsx)(t.strong,{children:"article"}),"/workshop that explains what was done/achieved as part of the grant."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"Open rollup Pallet"}),(0,s.jsxs)(t.td,{children:["We provide the core data types and the functionalities(zkapp registration/user deposit/user exit/user full exit/zkapp batch submit/zkapp management/zkapp info api) which support currencies/tokens/NFTs as specified in Project Details. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"  - ",(0,s.jsx)(t.strong,{children:"Pallet Data structures"}),(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"Zkapps"}),": Map<programHash, zkappParams>, The zkappParams defining a zkapp, i.e., the ZkvmType, the submitter, and the inactive status ",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.code,{children:"ZkappStates"}),": Map<programHash, childTrieRootHash>,  A ",(0,s.jsx)(t.a,{href:"https://docs.substrate.io/main-docs/fundamentals/state-transitions-and-storage/",children:"child Trie"})," holds Users' balances of the Assets in each zkapp ",(0,s.jsx)("br",{})," ",(0,s.jsx)("br",{})," - ",(0,s.jsx)(t.strong,{children:"Pallet Functionality"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn zkappRegister(programHash: Hash, zkvmType: ZkvmType)"}),": Register a zkapp on the pallet",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn addAssetSuppport(programHash: Hash, asset: Asset)"}),": Add support of one asset in the zkapp",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn changeSubmitter(programHash: Hash, asset: Asset, newSubmitter: AccountId)"}),": Change the submitter of the zkapp",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn setInactive(programHash: Hash)"}),": Set the zkapp is inactive, no batch can be submitted in the future, and the users can send an exit transaction to withdraw their assets",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn submitBatch(programHash: Hash, oldStateRoot: Hash, newStateRoot: Hash, operations: Vec<Operation>, proof: Vec<u8>)"}),": Submit a new batch providing the L2 operations (transfer, swap, move, withdraw)",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn deposit(programHash: Hash, asset: Asset)"}),": Deposits a given amount of assets into the zkapp.",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn withdraw(programHash: Hash, asset: Asset)"}),": Withdraws a given amount of assets from the zkapp to the owner",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn moveAsset(fromProgramHash: Hash, toProgramHash: Hash, asset: Asset)"}),": Move a given amount of assets from one zkapp to another zkapp",(0,s.jsx)("br",{}),"   - ",(0,s.jsx)(t.code,{children:"fn exit(programHash: Hash)"}),": If one zkapp is inactive, the user can exit the zkapp and withdraw the assets",(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"Miden verifier in Open rollup Pallet"}),(0,s.jsx)(t.td,{children:"We provide the verifier trait suitable for general apps, and a miden verifier that implements the verifier trait."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A proof and verification protocol for developing Cairo programs using the Rust language."}),"\n",(0,s.jsx)(t.li,{children:"Add recursive zero-knowledge proof protocol"}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Recommendation from a friend in the ",(0,s.jsx)(t.a,{href:"https://github.com/bifrost-finance/bifrost",children:"Bifrost"})," team."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);