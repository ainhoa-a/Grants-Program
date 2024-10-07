"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[11232],{11962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const r={},o="Keysafe Network",a={id:"applications/keysafe_network",title:"Keysafe Network",description:"- Team Name: Keysafe",source:"@site/applications/keysafe_network.md",sourceDirName:"applications",slug:"/applications/keysafe_network",permalink:"/applications/keysafe_network",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/keysafe_network.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Description",id:"description",level:4},{value:"Our solution",id:"our-solution",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Documentations",id:"documentations",level:4},{value:"POC",id:"poc",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Scope",id:"scope",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement On-chain Modules",id:"milestone-1--implement-on-chain-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"keysafe-network",children:"Keysafe Network"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Keysafe"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0x09C08f46d523822cC9D18A077e2e3BDE5BC07a0b (Ethereum (USDC))"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/947#issuecomment-1512008998",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsxs)(t.p,{children:["This grant is for the RFP ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"Social Recovery Wallet"})]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.h4,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(t.p,{children:["As the ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"RFP"}),' mentioned: "managing private keys is a difficult task." A secure, simple and user-friendly private key management solution has not yet appeared in the Web3 world. Most typical Web3 users do not have the ability to properly safeguard and manage private keys to their crypto assets and Web3 identities. Based on a latest research by ChainAnalysis, the number of lost bitcoins due to account loss has reached 3.79 million($150 billion).']}),"\n",(0,i.jsx)(t.p,{children:"We are thus inspired and encouraged by this initiatives and create Keysafe, a decentralized key custody network together with its underlying protocols, to offer a solution that aims to keep private keys safe and 'alive' in a user-friendly way for all Web3 users."}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Keysafe is a decentralized protocol for private key backup, retrieval, and access management. Keysafe allows users to register their keys with multiple authentications (SMS, email, etc.) and access their keys from anywhere in the world securely without carrying specific devices that store them."}),"\n",(0,i.jsx)(t.h4,{id:"our-solution",children:"Our solution"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/keysafe-protocol/documents/main/network_structure.png",alt:"architecture"})}),"\n",(0,i.jsx)(t.p,{children:"Keysafe Protocol uses Secure Multi-party Computation (MPC), Threshold BLS Signatures, and Trusted Execution Environment (TEE) technology to manage private keys and allows owners to access with a customized combination of Web2 third-party authentication services including SMS, email, Google Auth, and even another Web3 address."}),"\n",(0,i.jsx)(t.p,{children:"When a private key is registered in Keysafe Network, the key will be divided into multiple fragments by a threshold secret sharing scheme on user's local device and then sent to randomly appointed TEE nodes in encrypted forms. Each fragment is bound to an authentication condition set by the user, i.e. SMS, email, Google authentication, etc. The private key fragments and the corresponding authentication info will be safely stored in Keysafe's decentralized network of TEE nodes - even the TEE enclave are not allowed to read the data."}),"\n",(0,i.jsx)(t.p,{children:"When a user wants to access his or her registered private keys from Keysafe Network, the TEE nodes who are in charge of each fragment will initiate an authentication task, i.e. sending a verification SMS or email, according to the authentication info bound to the fragment. After passing the authentication process, the user is allowed to access his or her private keys, which can be a key retrieval, a remote Sig generation, a remote Tx generation, or a modification on the registered data."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.h4,{id:"documentations",children:"Documentations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Project overview PPT ",(0,i.jsx)(t.a,{href:"https://docsend.com/view/b9yhcs36z2i33755",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:["Technical whitepaper ",(0,i.jsx)(t.a,{href:"https://docsend.com/view/bsb8xf4hbrw422gy",children:"here"})]}),"\n",(0,i.jsxs)(t.li,{children:["API specifications ",(0,i.jsx)(t.a,{href:"https://docs.google.com/document/d/1DuewxMxVOSB9H6i45FzP71ALR5c6LeDE4Zzg8svlWcw/edit?usp=sharing",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"poc",children:"POC"}),"\n",(0,i.jsxs)(t.p,{children:["We have completed a proof-of-concept to verify the feasibility of our solutions ",(0,i.jsx)(t.a,{href:"https://demo.keysafe.network",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The TEE (Trusted Execution Environment) technology: TEE guarantees secrets to be protected with respect to confidentiality and integrity from a hardware level."}),"\n",(0,i.jsx)(t.li,{children:"Secret Sharing algorithm: Based on the M-of-N Threshold Secret Sharing algorithm, privates key can be divided into N shares, and can be later restored as long as M shares are obtained."}),"\n",(0,i.jsx)(t.li,{children:"BLS-MPC: Based on MPC and BLS algorithms, users can manage nodes to complete threshold signatures with their stored private key fragments."}),"\n",(0,i.jsx)(t.li,{children:"The Node: Keysafe Network is made up of many distributed Nodes with TEE inside. Private key fragments are stored safely in the node's TEE enclave."}),"\n",(0,i.jsx)(t.li,{children:"Web2 + Web3 authentications: The user can authenticate through Web2 or/and Web3 methods (including SMS, emails, social media accounts and Web3 accounts) to access his or her registered private keys."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"scope",children:"Scope"}),"\n",(0,i.jsx)(t.p,{children:"There are a lot of tasks involved to get all of these into a product-ready state which is what we are always aiming for, but it'd be too extensive to fit all of the tasks into this one single open grant. Therefore, we have carved out a scope specifically for this grant, followed by the details of the future tasks."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Grant scope"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Develop TEE module(written in C++) that supports basic private key transfer and management functions."}),"\n",(0,i.jsx)(t.li,{children:"Develop off-chain node program(written in Rust) that coordinating with TEE module."}),"\n",(0,i.jsx)(t.li,{children:"Develop on-chain protocol (written in ink! smart contract) that organizes all TEE nodes into a functioning network."}),"\n",(0,i.jsx)(t.li,{children:"Develop a key management tool with Web-UI (written in JS) that supports Ethereum and Polkadot accounts."}),"\n",(0,i.jsx)(t.li,{children:"Implement a hybrid authentication mode that includes mailbox, password, Google 2FA, and Polkadot account."}),"\n",(0,i.jsx)(t.li,{children:"Contribute SDKs for polkadot-js or polkadot-apps, so that polkadot users can use Keysafe Network to backup, recover and manage their substrate-based keys."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Future development"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Implement more functions in TEE, such as MPC signature and access delegation."}),"\n",(0,i.jsx)(t.li,{children:"Accept nodes endorsed by more organizations."}),"\n",(0,i.jsx)(t.li,{children:"Support more authentication methods such as google sign-in"}),"\n",(0,i.jsx)(t.li,{children:"Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Generally, Keysafe Network provides decentralized and distributed private key custody with recovery and remote access compatibility with multi-factor auth for all potential web3 users."}),"\n",(0,i.jsx)(t.li,{children:"By integrating Polkadot-JS and other libraries if needed, Keysafe Network provides key management for all kinds of accounts/address in the Substrate/Polkadot ecosystem."}),"\n",(0,i.jsxs)(t.li,{children:["Dapps and their users will greatly benefit from the decentralized key custody service from Keysafe Network:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"No more worrying about losing private keys and corresponding crypto assets for their accounts;"}),"\n",(0,i.jsx)(t.li,{children:"They can now easily migrate their private keys to new devices without copying private keys or seedphrases in plaintext and risking themselves of accidentally exposing them to attackers."}),"\n",(0,i.jsx)(t.li,{children:"They can remotely access their accounts and generate signatures/transactions with multi-factor social auths, from devices that don't have private keys stored locally."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Futhermore, as long as Keysafe Network integrates libraries/SDKs from other ecosystem/blockchains, our users enjoy one-stop cross-platform management for their keys, accounts as well as assets held by the accounts."}),"\n",(0,i.jsx)(t.li,{children:"Keysafe Network can be easily integrated into all kinds of Dapps (i.e. wallets, De-Fi protocols, GameFi projects) so that they can offer their users with a 'Log in with Keysafe' option inside their user interface. Since Keysafe's login style is significantly more friendly to new web3 users who are expectedly much familier with social auth, both Dapps and Keysafe Network realize a win-win situation from these integrations."}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Name of team leader: Dean Yan"}),"\n",(0,i.jsx)(t.li,{children:"Names of team members: Mingshi Song, Yan Jiang"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Dean Yan"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:yyd106@gmail.com",children:"yyd106@gmail.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/dean-yan-717784100/",children:"https://www.linkedin.com/in/dean-yan-717784100/"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"No legal entity yet"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Dean is the author of technical whitepaper of ",(0,i.jsx)(t.a,{href:"https://crust.network/",children:"Crust Network"})]}),"\n",(0,i.jsxs)(t.li,{children:["Mingshi is the incubation program leader of ",(0,i.jsx)(t.a,{href:"https://astar.network/",children:"Astar Network"})]}),"\n",(0,i.jsxs)(t.li,{children:["We once won the third prize at ",(0,i.jsx)(t.a,{href:"https://web3-hackathon.com/",children:"Web3-hackathon"})," with the idea of \u200b\u200bKeysafe"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/keysafe-protocol",children:"https://github.com/keysafe-protocol"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/keysafe-protocol/keysafe-front",children:"https://github.com/keysafe-protocol/keysafe-front"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/keysafe-protocol/ks-sgx",children:"https://github.com/keysafe-protocol/ks-sgx"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/orgs/keysafe-protocol/people/yyd106",children:"https://github.com/orgs/keysafe-protocol/people/yyd106"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/orgs/keysafe-protocol/people/jarodzz",children:"https://github.com/orgs/keysafe-protocol/people/jarodzz"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/orgs/keysafe-protocol/people/newnewsms",children:"https://github.com/orgs/keysafe-protocol/people/newnewsms"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/dean-yan-717784100/",children:"https://www.linkedin.com/in/dean-yan-717784100/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/yan-jiang-97512455/",children:"https://www.linkedin.com/in/yan-jiang-97512455/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.p,{children:["We completed a ",(0,i.jsx)(t.a,{href:"https://demo.keysafe.network/",children:"prototype system"})," to verify technical feasibility.\nThe relevant ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md",children:"RFP is here"})]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 8 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," $27,000 (payable in Ethereum-USDC)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--implement-on-chain-modules",children:"Milestone 1 \u2014 Implement On-chain Modules"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 6 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 15,000USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a user can use Keysafe."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Core Protocol"}),(0,i.jsxs)(t.td,{children:["Implements the ",(0,i.jsx)(t.code,{children:"nodeRegister"})," ",(0,i.jsx)(t.code,{children:"userRegister"})," ",(0,i.jsx)(t.code,{children:"userAuthentication"})," and ",(0,i.jsx)(t.code,{children:"keyRecovery"})," functions for Node program written in Rust."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"TEE Implementation"}),(0,i.jsxs)(t.td,{children:["Implements the ",(0,i.jsx)(t.code,{children:"nodeRegister"})," ",(0,i.jsx)(t.code,{children:"userRegister"})," ",(0,i.jsx)(t.code,{children:"userAuthentication"})," and ",(0,i.jsx)(t.code,{children:"keyRecovery"})," functions for TEE part written in C++."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Smart Contract"}),(0,i.jsxs)(t.td,{children:["Implements and test for the !ink smart contracts used for ",(0,i.jsx)(t.code,{children:"nodeRegister"})," and ",(0,i.jsx)(t.code,{children:"userRegister"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsx)(t.td,{children:"Web Server"}),(0,i.jsx)(t.td,{children:"Provide meta-data management service for Keysafe users written in Rust, users can manage keys and authentication methods"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsx)(t.td,{children:"Polkadot.js"}),(0,i.jsxs)(t.td,{children:["Add in encryption/decryption functionality to ",(0,i.jsx)(t.code,{children:"@polkadot/keyring"})," and ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," so that the protocol can run without the needs to read the private key of users."]})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 12,000USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(t.strong,{children:"tutorial"})," that explains how a project can integrate the Keysafe Protocol into their project."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"MPMC(Multi-Party-Multi-Cloud)"}),(0,i.jsx)(t.td,{children:"Cooperation with multiple institutions, different institutions run Keysafe nodes on different cloud vendors. Decentralizing the Keysafe Network."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Keysafe SDK"}),(0,i.jsx)(t.td,{children:"Develop the Keysafe SDK and the corresponding Adapters written in JS, so that the projects in Polkadot ecosystem can integrate Keysafe to provide users with a secured private key backup and recovery function."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Support mainstream authentication methods"}),(0,i.jsx)(t.td,{children:"Provide multiple authentication methods for user key recovery, such as Ethereum wallet, Polkadot wallet, email and other authentication methods."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Implement more functions in TEE, such as MPC signature and access delegation"}),"\n",(0,i.jsx)(t.li,{children:"Accept nodes endorsed by more organizations"}),"\n",(0,i.jsx)(t.li,{children:"Support more authentication methods such as google sign-in"}),"\n",(0,i.jsx)(t.li,{children:"Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As a long-term business model, we have following plans to make Keysafe powerful and secure:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We will support more TEE implementations, such as Trusted Zone of ARM, SEV of AMD;"}),"\n",(0,i.jsx)(t.li,{children:"We will explore more possibilities as Keysafe Lego, including AML integrations, Web3 social graph, and decentralized access management;"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Announcement by another team"]}),"\n",(0,i.jsx)(t.p,{children:"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"}),"\n",(0,i.jsx)(t.p,{children:"Dean's Crust Network and Mingshi's Astart Network are both projects of Web3 Grants."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);