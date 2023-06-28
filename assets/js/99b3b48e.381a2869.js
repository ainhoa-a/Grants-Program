"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1469],{18536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));a(95657);const n={},l="Availability and Validity - Network Topology",s={unversionedId:"docs/RFPs/Open/a-and-v-topology",id:"docs/RFPs/Open/a-and-v-topology",title:"Availability and Validity - Network Topology",description:"Status:* Open",source:"@site/docs/RFPs/Open/a-and-v-topology.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/a-and-v-topology",permalink:"/docs/RFPs/Open/a-and-v-topology",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/a-and-v-topology.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Static Analysis of Runtime Pallets",permalink:"/docs/RFPs/Open/Static-Analysis-for-Runtime-Pallets"},next:{title:"Anti-Collusion Infrastructure",permalink:"/docs/RFPs/Open/anti-collusion_infrastructure"}},r={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - update &amp; implementation plan",id:"milestone-1---update--implementation-plan",level:3},{value:"Milestone 2 - Topology discovery by validators",id:"milestone-2---topology-discovery-by-validators",level:3},{value:"Milestone 3 - Networking and benchmarking",id:"milestone-3---networking-and-benchmarking",level:3}],d={toc:p},c="wrapper";function h(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"availability-and-validity---network-topology"},"Availability and Validity - Network Topology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," @infinity0, @skalman, @mmagician ")),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,"A part of the promise of Polkadot is to bring scalability to the blockchains. The way it achieves it is via delegating application-specific logic from layer 0 (the relay chain) to layer 1 chains (parachains). In order to achieve this efficiently yet securely, each parachain has its own block production mechanism (achieving efficienct block production), but the finalisation of candidate parachain blocks still happens with the involvement of the relay chain validators."),(0,o.kt)("p",null,"The full mechanism is described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec/blob/main/host-spec/c07-anv.tm"},"the host specification"),'. In short, it is split in two parts: first, a publicly known subset of validators attests that the parachain block data is available to them (i.e. they must have it in their local storage); second, once 2/3+ of the first group have published their availability votes, a "secret" (VRF-based assignment) subset of validators checks the validitiy of the candidate, by checking its state transition against that parachain runtime, which is available on-(the relay)chain.'),(0,o.kt)("p",null,"Currently, the gossip network among the relay chain validators does not make use of the public assignment of a the first subgroup of validators to a particular parachain. Instead, the candidate block is passed around the network until it reaches 2/3+ of approvals, causing an additional delay in the process of finalisation of the candidate."),(0,o.kt)("p",null,"This proposal aims to solve this issue by creating a selective networking topology among the publicly known subset of validators assigned to a particular parachain ID. For full details of the topology and its considerations, please consult the ",(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#design-considerations"},"Availability and Validity research document"),"."),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 14 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 90,000 DAI")),(0,o.kt)("h3",{id:"milestone-1---update--implementation-plan"},"Milestone 1 - update & implementation plan"),(0,o.kt)("p",null,"Given that the above linked research document was produced almost a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/research/commit/f1a698b34bda8a93433a0f8d9ab1b303c340cb31#diff-13146c2f4b910ccf22483fd1292efdaa079f5b07a966f76716e5bda35a6b3715"},"year ago")," (at the time of writing the RFP) and the fast pace of polkadot development, especially parachain development, the first step should be related to understanding and updating, if necessary, that document."),(0,o.kt)("p",null,"Tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"understand what is the current implemention status for parachain networking in Polkadot"),(0,o.kt)("li",{parentName:"ul"},"understand in depth what the new topology design tries to achieve"),(0,o.kt)("li",{parentName:"ul"},"produce a write-up detailing the differences between current and proposed design"),(0,o.kt)("li",{parentName:"ul"},"develop a roadmap for implementation, clearly identifying which parts of the codebase would be affected")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 15,000 DAI")),(0,o.kt)("h3",{id:"milestone-2---topology-discovery-by-validators"},"Milestone 2 - Topology discovery by validators"),(0,o.kt)("p",null,"As detailed in ",(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#topology"},"the Topology section"),", each validator should have a deterministic and equal view of the topology."),(0,o.kt)("p",null,"This milestone is tasked with figuring out the topology for each validator."),(0,o.kt)("p",null,"Note: The implementer might find that splitting Milestones 2 & 3 is counterproductive and a more efficient approach is to actually combine these."),(0,o.kt)("p",null,"Tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"perform the calculation of correct network topology for each validator"),(0,o.kt)("li",{parentName:"ul"},"add a method that returns the above result. This can either be an RPC method, thus allowing it to be verified externally, or an internal method, where the validators report (could be as simple as console logs) their assignment"),(0,o.kt)("li",{parentName:"ul"},"run tests to verify the correctness of the calculation and unanimous consensus")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 30,000 DAI")),(0,o.kt)("h3",{id:"milestone-3---networking-and-benchmarking"},"Milestone 3 - Networking and benchmarking"),(0,o.kt)("p",null,'This should be a "simple" milestone, in that it replaces the previous mechanism for candidate block distribution (broadcast medium B) with direct links(D), as proposed in the ',(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#overview"},"Overview"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Estimated Duration:")," 8 weeks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Costs:")," 45,000 DAI")),(0,o.kt)("p",null,"Tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"apply the topology calculated"),(0,o.kt)("li",{parentName:"ul"},"distribute block data along the direct route"),(0,o.kt)("li",{parentName:"ul"},"perform an extensive testing & benchmarking exercise on a network with at least 20 validators. The parachain block production can be mocked.")))}h.isMDXComponent=!0}}]);