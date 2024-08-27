"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[43397],{54911:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=n(74848),t=n(28453);const l={},r="Subsembly - Support for GRANDPA",o={id:"applications/Subsembly-GRANDPA",title:"Subsembly - Support for GRANDPA",description:"Team Name:* LimeChain",source:"@site/applications/Subsembly-GRANDPA.md",sourceDirName:"applications",slug:"/applications/Subsembly-GRANDPA",permalink:"/applications/Subsembly-GRANDPA",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Subsembly-GRANDPA.md",tags:[],version:"current",frontMatter:{}},d={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Runtime APIs",id:"runtime-apis",level:4},{value:"Runtime-to-Consensus Engine Messages",id:"runtime-to-consensus-engine-messages",level:4},{value:"Public Functions",id:"public-functions",level:4},{value:"Dependencies &amp; Prerequisites",id:"dependencies--prerequisites",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Session",id:"milestone-1--session",level:3},{value:"Milestone 2 GRANDPA I",id:"milestone-2-grandpa-i",level:3},{value:"Milestone 3 GRANDPA II - Equivocations",id:"milestone-3-grandpa-ii---equivocations",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"subsembly---support-for-grandpa",children:"Subsembly - Support for GRANDPA"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Team Name:"})," ",(0,s.jsx)(i.a,{href:"https://github.com/LimeChain",children:"LimeChain"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Payment Address:"})," ",(0,s.jsx)(i.code,{children:"0x6eDf76FD16Bb290A544fDc14fBB4b403D1DEeD9f"})," (USDT)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Status:"})," ",(0,s.jsx)(i.a,{href:"https://github.com/w3f/Grants-Program/pull/563#issuecomment-1404941967",children:"Terminated"})]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(i.p,{children:["LimeChain's team has worked on ",(0,s.jsx)(i.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/rfp-responses/subsembly-assemblyscript_runtime_framework.md",children:"Subsembly - Framework for building AssemblyScript Runtimes"})," and managed to deliver 4/6 milestones so far. Developers can already checkout/install the ",(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly",children:"Subsembly CLI"})," and implement Substrate Runtimes using the framework."]}),"\n",(0,s.jsx)(i.p,{children:"The original goal of Subsembly was to support Aura and BABE consensus algorithms and provide the GRANDPA finality gadget. However, implementing GRANDPA and BABE turned out a harder task than initially estimated/scoped as a result the only consensus algorithm supported is Aura.\nWe would like to propose a grant amendment that enables LimeChain to continue Subsembly's development, finish the 2 outstanding milestones and propose additional features to be included."}),"\n",(0,s.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(i.p,{children:["In this project we are scoping out the development of GRANDPA and laying down the foundations for the future support of BABE.\nFor detailed information on GRANDPA, please refer to the original ",(0,s.jsx)(i.a,{href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf",children:"whitepaper"})," and the ",(0,s.jsx)(i.a,{href:"https://github.com/w3f/polkadot-spec/releases",children:"Polkadot Host spec file"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Generally speaking, the GRANDPA work can be divided into 3 components:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Implementing the Runtime APIs"}),"\n",(0,s.jsx)(i.li,{children:"Having support for the Runtime-to-Consensus Engine Messages"}),"\n",(0,s.jsx)(i.li,{children:"Implementing required modules/pallets (session, offences)"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(i.h4,{id:"runtime-apis",children:"Runtime APIs"}),"\n",(0,s.jsx)(i.p,{children:"Subsembly must implement the following Runtime APIs to have full support for GRANDPA:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GrandpaApi_grandpa_authorities"})," - fetches the list of GRANDPA authorities according to the genesis block. Any future authority changes get tracked via Runtime-to-consensus engine messages"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GrandpaApi_submit_report_equivocation_unsigned_extrinsic"})," - Called by the Host when validator votes for multiple blocks during one voting subround"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GrandpaApi_generate_key_ownership_proof"})," - Generates proof of the membership of a key owner in a specified block state. The returned values are used to report equivocations"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"GrandpaApi_grandpa_pending_change"})," - Returns information about GRANDPA pending changes"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"runtime-to-consensus-engine-messages",children:"Runtime-to-Consensus Engine Messages"}),"\n",(0,s.jsxs)(i.p,{children:["GRANDPA utilises consensus digest items for various events. The following is a list of the digest items emitted related to GRANDPA:\n",(0,s.jsx)(i.img,{src:"https://user-images.githubusercontent.com/12232750/128009365-e5943a13-f115-4c88-8205-e67c23920748.png",alt:"Untitled (20)"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Scheduled Change & Forced Change"})}),"\n",(0,s.jsxs)(i.p,{children:["Every pallet/module has an ",(0,s.jsx)(i.code,{children:"on_finalize"})," hook that is called whenever a block is finalised. In the case of GRANDPA, once the ",(0,s.jsx)(i.code,{children:"on_finalize"})," is called, the Runtime must check whether there is a ",(0,s.jsx)(i.code,{children:"PendingChange"})," (forced or scheduled) that must be deposited. If there is - a new ",(0,s.jsx)(i.code,{children:"DigestItem"})," of type ",(0,s.jsx)(i.code,{children:"Consensus"})," with the ",(0,s.jsx)(i.code,{children:"GRANDPA_ENGINE_ID"})," must be added in the block."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"On Disabled"})}),"\n",(0,s.jsx)(i.p,{children:"The ConsensusLog is deposited once the Session module calls the on_disabled method. The GRANDPA module must simply deposit the log whenever it is called from the Session module."}),"\n",(0,s.jsx)(i.h4,{id:"public-functions",children:"Public Functions"}),"\n",(0,s.jsx)(i.p,{children:"The following public functions, eligible for calling from the client side are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"report_equivocation"})," - must be a signed extrinsic"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"report_equivocation_unsigned"})," - this extrinsic may not be signed. It is called by the block producer"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"dependencies--prerequisites",children:"Dependencies & Prerequisites"}),"\n",(0,s.jsxs)(i.p,{children:["It is important to note that GRANDPA relies on the Session, Offence and minimal Staking modules. The Session module is configured to have a certain range of blocks and every time ",(0,s.jsx)(i.code,{children:"on_initialize"})," is called, the module checks whether the ",(0,s.jsx)(i.code,{children:"session"})," should end. If it has to end, the module ",(0,s.jsx)(i.code,{children:"rotates"})," the session changing the validators."]}),"\n",(0,s.jsx)(i.p,{children:"The offences module tracks reported offences and the Staking module must provide the implementation of the offence - slashing the users for their misbehaviour."}),"\n",(0,s.jsx)(i.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(i.p,{children:"Subsembly provides an alternative way for developers to build Runtimes. More specifically, it enables developers with TypeScript/JavaScript knowledge to build on top of the Substrate ecosystem."}),"\n",(0,s.jsxs)(i.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(i.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Daniel Ivanov"}),"\n",(0,s.jsx)(i.li,{children:"Dastanbek Samatov"}),"\n",(0,s.jsx)(i.li,{children:"Martin Petkov"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Contact Name:"})," Daniel Ivanov"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Contact Email:"})," ",(0,s.jsx)(i.a,{href:"mailto:daniel@limechain.tech",children:"daniel@limechain.tech"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Website:"})," ",(0,s.jsx)(i.a,{href:"https://limechain.tech",children:"https://limechain.tech"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Registered Address:"})," Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Registered Legal Entity:"})," LimeLabs Ltd."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(i.p,{children:"LimeChain is a blockchain development company with 100+ completed projects and strong focus on blockchain development infrastructure. LimeChain has built tools for different protocols and networks such as Ethereum, The Graph, Polkadot, EOS, Aeternity and Corda. Some of the projects LimeChain has worked with are Celo, P&G, Universe.xyz, The Graph, Dapper Labs, Hedera and Maker among others. LimeChain is also embedded into the Polkadot developer ecosystem, particularly with building AssemblyScript developer tools. The team has built a SCALE Codec implementation, Account-based AssemblyScript Runtime PoC and the Subsembly framework."}),"\n",(0,s.jsx)(i.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsx)(i.p,{children:"LimeChain's Substrate related repositories:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly",children:"https://github.com/LimeChain/subsembly"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly-core",children:"https://github.com/LimeChain/subsembly-core"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/as-scale-codec",children:"https://github.com/LimeChain/as-scale-codec"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/as-substrate-runtime",children:"https://github.com/LimeChain/as-substrate-runtime"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Team's GitHub profiles:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/LimeChain",children:"https://github.com/LimeChain"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/Daniel-K-Ivanov",children:"https://github.com/Daniel-K-Ivanov"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/dastanbeksamatov",children:"https://github.com/dastanbeksamatov"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/themartto",children:"https://github.com/themartto"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.linkedin.com/in/daniel-k-ivanov/",children:"https://www.linkedin.com/in/daniel-k-ivanov/"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.linkedin.com/in/dastanbek-samatov-30ab71128/",children:"https://www.linkedin.com/in/dastanbek-samatov-30ab71128/"})}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(i.p,{children:["The team already spend time on implementing GRANDPA, by updating the Subsembly CLI and spec builder to support GRANDPA authorities configuration. ",(0,s.jsx)(i.a,{href:"https://github.com/LimeChain/subsembly/blob/main/cli/src/commands/spec/builder/src/modules/grandpa.js",children:"Reference"})]}),"\n",(0,s.jsxs)(i.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(i.p,{children:"Described below is a practical approach to the implementation of the GRANDPA module along with the the other auxiliary modules that are required."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Session","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Implement session period configuration (",(0,s.jsx)(i.code,{children:"n"})," number of blocks)"]}),"\n",(0,s.jsxs)(i.li,{children:["Implement an ",(0,s.jsx)(i.code,{children:"on_initialize"})," hook called when the block is initialized. It must check whether the session must end; if it ends, ",(0,s.jsx)(i.code,{children:"rotate_session"})," is called."]}),"\n",(0,s.jsx)(i.li,{children:"Implement a service for tracking the Historical changes of session keys in order to verify proofs"}),"\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"rotate_session"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["GRANDPA - Session","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"on_new_session"})," handler"]}),"\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"schedule_change"})]}),"\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"on_finalize"})," hook","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Pending changes added in the state from ",(0,s.jsx)(i.code,{children:"schedule_change"})," must be deposited as logs."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Session","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"set_keys"})," method. The extrinsic must be signed. The caller gets their provided ",(0,s.jsx)(i.code,{children:"keys"})," set into storage for eventual usage in the next sessions"]}),"\n",(0,s.jsxs)(i.li,{children:["Implement ",(0,s.jsx)(i.code,{children:"purge_keys"})," method. Removes the session keys of the function caller. Takes effect after the next session starts"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["GRANDPA - Consensus Messages","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Add ",(0,s.jsx)(i.code,{children:"on_finalize"})," hook - If the current block is X, pending scheduled authority changes for the same block must be executed and an event must be deposited"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"At this point, the following features should be supported by the module:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Setting/changing/removing keys through the Session module"}),"\n",(0,s.jsxs)(i.li,{children:["Rotating sessions on every ",(0,s.jsx)(i.code,{children:"n"})," blocks"]}),"\n",(0,s.jsx)(i.li,{children:"Changing authorities if required on session rotation"}),"\n",(0,s.jsxs)(i.li,{children:["Depositing ",(0,s.jsx)(i.code,{children:"Scheduled Change"}),", ",(0,s.jsx)(i.code,{children:"Forced Change"})," and ",(0,s.jsx)(i.code,{children:"Disable"})," consensus logs"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The last part is to add support for ",(0,s.jsx)(i.code,{children:"equivocations"}),"."]}),"\n",(0,s.jsxs)(i.ol,{start:"5",children:["\n",(0,s.jsxs)(i.li,{children:["Equivocations - Reporting voter misbehaviour. The reporting of equivocations results in offences and slashe","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Implement a service for verifying the ",(0,s.jsx)(i.code,{children:"equivocation_proofs"})," - verifying the offender keys against the proof"]}),"\n",(0,s.jsx)(i.li,{children:"Implement a method for verifying the equivocation proof by making sure that both votes target different blocks and the signatures are valid"}),"\n",(0,s.jsx)(i.li,{children:"Implement Reporting Service for offences that reward the sender"}),"\n",(0,s.jsx)(i.li,{children:"Implement Offences module that tracks offences"}),"\n",(0,s.jsxs)(i.li,{children:["Implement minimal Staking module that provides an implementation for slashing ",(0,s.jsx)(i.code,{children:"on_offence"})," as ",(0,s.jsx)(i.code,{children:"OffenceHandler"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Total Estimated Duration:"})," 69 working days"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Full-Time Equivalent (FTE):"}),"  1.5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Total Costs:"})," $45,540"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"milestone-1--session",children:"Milestone 1 \u2014 Session"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Estimated duration:"})," 28 working days"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Costs:"})," $18,480"]}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(i.th,{children:"Deliverable"}),(0,s.jsx)(i.th,{children:"Specification"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(i.td,{children:"License"}),(0,s.jsx)(i.td,{children:"Apache 2.0 license"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(i.td,{children:"Documentation"}),(0,s.jsxs)(i.td,{children:["We will provide both ",(0,s.jsx)(i.strong,{children:"inline documentation"})," of the module as-well as update the official ",(0,s.jsx)(i.a,{href:"https://subsembly.gitbook.io/subsembly/",children:"documentation"})," of Subsembly."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(i.td,{children:"Testing Guide"}),(0,s.jsx)(i.td,{children:"Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well - how one can set keys, purge them and verify that the session rotates."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(i.td,{children:"Docker"}),(0,s.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test the functionality delivered with this milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsxs)(i.td,{children:["Session ",(0,s.jsx)(i.code,{children:"period"})]}),(0,s.jsxs)(i.td,{children:["We will start the work on Subsembly ",(0,s.jsx)(i.code,{children:"session"})," module. The end-users will be able to configure the session period configuration through the module. The period will be represented in ",(0,s.jsx)(i.code,{children:"n"})," number of blocks."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"on_initialize"})," hook"]}),(0,s.jsxs)(i.td,{children:["We will extend the ",(0,s.jsx)(i.code,{children:"on_initialize"})," hook to be calling the session's ",(0,s.jsx)(i.code,{children:"on_initialize"})," logic."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(i.td,{children:"Historical session service"}),(0,s.jsx)(i.td,{children:"We will implement a Historical session service for storing new sessions, starting sessions and ending sessions. The service will have a mechanism for proving that a given validator was part of a session at a given index."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"rotate_session"})}),(0,s.jsx)(i.td,{children:"We will implement the logic for rotating the session in the context of GRANDPA."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"5."}),(0,s.jsxs)(i.td,{children:["Session ",(0,s.jsx)(i.code,{children:"set_keys"})," extrinsic"]}),(0,s.jsxs)(i.td,{children:["We will implement the ",(0,s.jsx)(i.code,{children:"set_keys"})," extrinsic. The extrinsic must be signed. The caller gets the provided ",(0,s.jsx)(i.code,{children:"keys"})," set in to the sotrage for the eventual usage in next the sessions"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"6."}),(0,s.jsxs)(i.td,{children:["Session ",(0,s.jsx)(i.code,{children:"purge_keys"})," extrinsic"]}),(0,s.jsxs)(i.td,{children:["We will implement the ",(0,s.jsx)(i.code,{children:"purge_keys"})," extrinsic. Removes the session keys of the function caller. Takes effect after the next session starts."]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"milestone-2-grandpa-i",children:"Milestone 2 GRANDPA I"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Estimated Duration:"})," 19 working days"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Costs:"})," $12,540"]}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(i.th,{children:"Deliverable"}),(0,s.jsx)(i.th,{children:"Specification"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(i.td,{children:"License"}),(0,s.jsx)(i.td,{children:"Apache 2.0 license"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(i.td,{children:"Documentation"}),(0,s.jsxs)(i.td,{children:["We will provide both ",(0,s.jsx)(i.strong,{children:"inline documentation"})," of the module as-well as update the official ",(0,s.jsx)(i.a,{href:"https://subsembly.gitbook.io/subsembly/",children:"documentation"})," of Subsembly."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(i.td,{children:"Testing Guide"}),(0,s.jsx)(i.td,{children:"Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well -  how someone can verify that sessions are being changed, as-well as verify that consensus logs are being deposited."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(i.td,{children:"Docker"}),(0,s.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test the functionality delivered with this milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"on_new_session"})," hook"]}),(0,s.jsxs)(i.td,{children:["We will create a new GRANDPA module that will implement the ",(0,s.jsx)(i.code,{children:"on_new_session"})," handler."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"schedule_change"})}),(0,s.jsxs)(i.td,{children:["We will implement the ",(0,s.jsx)(i.code,{children:"schedule_change"})," logic that adds a Pending Change into the state."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"on_finalize"})," hook"]}),(0,s.jsxs)(i.td,{children:["We will implement the ",(0,s.jsx)(i.code,{children:"on_finalize"})," hook that will be called once a block is finalized and will check whether there are pending changes that must be set deposited as consensus logs."]})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"milestone-3-grandpa-ii---equivocations",children:"Milestone 3 GRANDPA II - Equivocations"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Estimated Duration:"})," 22 working days"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"FTE:"}),"  1.5"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Costs:"})," $14,520"]}),"\n"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(i.th,{children:"Deliverable"}),(0,s.jsx)(i.th,{children:"Specification"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(i.td,{children:"License"}),(0,s.jsx)(i.td,{children:"Apache 2.0 license"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(i.td,{children:"Documentation"}),(0,s.jsxs)(i.td,{children:["We will provide both ",(0,s.jsx)(i.strong,{children:"inline documentation"})," of the module as-well as update the official ",(0,s.jsx)(i.a,{href:"https://subsembly.gitbook.io/subsembly/",children:"documentation"})," of Subsembly."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(i.td,{children:"Testing Guide"}),(0,s.jsx)(i.td,{children:"Due to the complex nature of testing AS code, functions that have the ability to be unit tested will be fully covered to ensure functionality and robustness. In the guide, we will describe how to run these tests. We will provide testing information as-well -  how someone can cause equivocation by a malicious node and verify that he is receiving a reward."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(i.td,{children:"Docker"}),(0,s.jsx)(i.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(i.td,{children:"Article"}),(0,s.jsxs)(i.td,{children:["We will publish a ",(0,s.jsx)(i.strong,{children:"guide"})," in the Subsembly docs file, how one can run their Substrate node that uses Subsembly Runtime having GRANDPA enabled."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsxs)(i.td,{children:["GRANDPA ",(0,s.jsx)(i.code,{children:"equivocation_proofs"})," service"]}),(0,s.jsxs)(i.td,{children:["We will implement a services for verifying the ",(0,s.jsx)(i.code,{children:"equivocation_proofs"})," - verifying the offender keys against the proof. Method for verifying the equivocation proof by making sure that both votes target different blocks and the signatures are valid."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"reporting"})," service"]}),(0,s.jsx)(i.td,{children:"We will implementa reporting service for offences that reward the sender."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"offences"})," module"]}),(0,s.jsxs)(i.td,{children:["We will implement an ",(0,s.jsx)(i.code,{children:"offences"})," module that tracks offences."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsxs)(i.td,{children:["Minimal ",(0,s.jsx)(i.code,{children:"staking"})," module"]}),(0,s.jsxs)(i.td,{children:["We will implement a minimal ",(0,s.jsx)(i.code,{children:"staking"})," module that provides an implementation for slashing ",(0,s.jsx)(i.code,{children:"on_offence"})," as ",(0,s.jsx)(i.code,{children:"OffenceHandler"})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(i.p,{children:"LimeChain will be resolving any critical bugs that may arise. We would like to extend the framework by adding new pallets in the future. Our plan is to continue the development of the framework with support for BABE and after that, having support for Parachains. The end goal of Subsembly is to support the full set of foundational features that enable developers to create Substrate networks (with the option for both Aura and BABE + GRANDPA's finality) as-well as Polkadot parathreads and parachains."}),"\n",(0,s.jsxs)(i.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(i.p,{children:"LimeChain has been a long time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our involvement in the space we are working with various clients, developing smart contracts and working on parachains."})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(96540);const t={},l=s.createContext(t);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);