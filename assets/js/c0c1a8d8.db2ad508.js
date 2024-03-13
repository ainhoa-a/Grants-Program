"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[32157],{11658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(74848),l=t(28453);const r={},s="Democratic Governance 1",o={id:"applications/democratic-governance-1",title:"Democratic Governance 1",description:"- Team Name: Solidbit GmbH",source:"@site/applications/democratic-governance-1.md",sourceDirName:"applications",slug:"/applications/democratic-governance-1",permalink:"/applications/democratic-governance-1",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/democratic-governance-1.md",tags:[],version:"current",frontMatter:{}},c={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Encointer core protocol:",id:"encointer-core-protocol",level:4},{value:"Misc:",id:"misc",level:4},{value:"Non rust contributions:",id:"non-rust-contributions",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Protocol enhancements",id:"milestone-1-example--protocol-enhancements",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"democratic-governance-1",children:"Democratic Governance 1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Solidbit GmbH"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," CHF (22 November, 2023, 08:57 UTC)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Encointer has started the development of a pallet that facilitates democratic voting based on Proof-Of-Personhood. We believe that this work can be a basis for Proof-Of-Personhood based governance protocols for varios applications such as DAOs or parachains, which could benefit from improved legitimacy when using a democratic over a plutocratic design. We are interested in building this project as it builds on top of our expertise with Proof-Of-Personhood and it lays an important foundation to facilitate non-plutocratic governance in Web3."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(n.p,{children:["You can find the PR with the current state of the pallet ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/273",children:"here"})," and the node side of it ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/350",children:"here"}),". There also exists a ",(0,i.jsx)(n.a,{href:"https://book.encointer.org/protocol-democracy.html",children:"documentation of the protocol"})," and a ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/issues/347",children:"tracking issue"})," that tracks the work still to be done for the democracy pallet."]}),"\n",(0,i.jsx)(n.p,{children:"In this project we will continue building the democracy pallet as well as improve the CLI and integration tests for the protocol. The following tasks will be implemented:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Decide which matters can be voted on and implement (1.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Use timestamps instead of blocks to be consistent with cycles (1.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Use reputation commitment pallet for proposals (0.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Pass proposal enactment errors to user (0.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Lazy proposal update (0.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Persist electorate size in proposal (0.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Add more events (0.5 days)"}),"\n",(0,i.jsx)(n.li,{children:"Refactor integrations tests to be independent and systematically cover all potantial voting scenarios  (1 day)"}),"\n",(0,i.jsx)(n.li,{children:"Extend CLI (Show vote status, make enactments queriable) (1 day)"}),"\n",(0,i.jsx)(n.li,{children:"Tutorial (0.5 days)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(n.p,{children:"This project helps to build the foundation of a One-Person-One-Vote paradigm for varios governance systems in Web3. We believe that Proof-Of-Personhood and demorcatic voting will become essential in many Web3 applications, and thus Dotsama as a whole will profit from having a protocol like this available in the ecosystem."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Piero Guicciardi (Project Lead & Developer)"}),"\n",(0,i.jsx)(n.li,{children:"Alain Brenzikofer (Advisor Protocol)"}),"\n",(0,i.jsx)(n.li,{children:"Christian Langenbacher (Advisor Implementation)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Piero Guicciardi"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:pg@solid-bit.com",children:"pg@solid-bit.com"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"https://solid-bit.com",children:"https://solid-bit.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," General Wille Strasse 99, CH-8706 Meilen, Switzerland"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," Solidbit GmbH (CHE-267.620.734)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(n.p,{children:["Piero has been a core protocol developer for ",(0,i.jsx)(n.a,{href:"https://github.com/encointer",children:"Encointer"})," for the last two years and has recently become a member of the Polkadot Technical Fellowship. Among other projects, he designed and implemented a democracy module on top of Encointer's persoonhood reputation system. Please check out the ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/273",children:"pull request"})," and the ",(0,i.jsx)(n.a,{href:"https://book.encointer.org/protocol-democracy.html",children:"high level documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Below you can find a list of other contributions by Piero:"}),"\n",(0,i.jsx)(n.h4,{id:"encointer-core-protocol",children:"Encointer core protocol:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Design and implement faucet","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/book/pull/14",children:"https://github.com/encointer/book/pull/14"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/333",children:"https://github.com/encointer/encointer-node/pull/333"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/319",children:"https://github.com/encointer/pallets/pull/319"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/326",children:"https://github.com/encointer/pallets/pull/326"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-parachain/pull/193",children:"https://github.com/encointer/encointer-parachain/pull/193"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Design and implement democracy module","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://book.encointer.org/protocol-democracy.html",children:"https://book.encointer.org/protocol-democracy.html"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/273",children:"https://github.com/encointer/pallets/pull/273"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Redesign participant attestations","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/231",children:"https://github.com/encointer/pallets/pull/231"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/issues/215",children:"https://github.com/encointer/pallets/issues/215"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Endorsement after registration","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/202",children:"https://github.com/encointer/pallets/pull/202"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Early reward payout","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/233",children:"https://github.com/encointer/pallets/pull/233"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Allow for upgrading registrations and unregistering","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/254",children:"https://github.com/encointer/pallets/pull/254"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Allow reputables to endorse","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/268",children:"https://github.com/encointer/pallets/pull/268"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Geohash location validation algorithm","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/55",children:"https://github.com/encointer/pallets/pull/55"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Constant time random permutation for meetup assignment","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/68",children:"https://github.com/encointer/pallets/pull/68"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"misc",children:"Misc:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Implement custom RPCs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/196",children:"https://github.com/encointer/pallets/pull/196"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Implement storage migrations for Weight V2","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/308",children:"https://github.com/encointer/pallets/pull/308"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Various polkadot/substrate dependency bumps","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/299",children:"https://github.com/encointer/pallets/pull/299"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-parachain/pull/171",children:"https://github.com/encointer/encointer-parachain/pull/171"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Fee payment in Encointer community currency","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/194/files",children:"https://github.com/encointer/encointer-node/pull/194/files"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/226",children:"https://github.com/encointer/encointer-node/pull/226"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/190",children:"https://github.com/encointer/pallets/pull/190"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Integrate try runtime","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-parachain/pull/177/files",children:"https://github.com/encointer/encointer-parachain/pull/177/files"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/312/files",children:"https://github.com/encointer/encointer-node/pull/312/files"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"non-rust-contributions",children:"Non rust contributions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Build an indexer using qubquery","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/encointer/subquery",children:"https://github.com/encointer/subquery"})," (Main author)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Build an accounting tool for encointer businesses","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/encointer/accounting-frontend",children:"https://github.com/encointer/accounting-frontend"})," (Main author)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/SolidbitGmbH/encointer-accounting-backend",children:"https://github.com/SolidbitGmbH/encointer-accounting-backend"})," (Main author)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Build an integration for Encointer personhood in KILT","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/encointer/kilt-personhood",children:"https://github.com/encointer/kilt-personhood"})," (Main author)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Contributions to encointer js","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-js/pull/78",children:"https://github.com/encointer/encointer-js/pull/78"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The two project advisors Alain Brenzikofer and Christian Langenbacher both are known figures in the Dotsama ecosystem. Alain is the founder of ",(0,i.jsx)(n.a,{href:"https://github.com/encointer",children:"Encointer"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/integritee-network",children:"Integritee"})," and Chris is the tech-lead of both of those projects."]}),"\n",(0,i.jsx)(n.p,{children:"Encointer has previously received a W3F grant."}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets",children:"https://github.com/encointer/pallets"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-parachain",children:"https://github.com/encointer/encointer-parachain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node",children:"https://github.com/encointer/encointer-node"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/SolidbitGmbH/encointer-accounting-backend",children:"https://github.com/SolidbitGmbH/encointer-accounting-backend"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/pifragile",children:"https://github.com/pifragile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/brenzi",children:"https://github.com/brenzi"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/clangenb",children:"https://github.com/clangenb"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/piero-guicciardi-66b939152/",children:"https://www.linkedin.com/in/piero-guicciardi-66b939152/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/alain-brenzikofer-9a4480165/",children:"https://www.linkedin.com/in/alain-brenzikofer-9a4480165/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/christian-langenbacher-baa629182/",children:"https://www.linkedin.com/in/christian-langenbacher-baa629182/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the PR with the current state of the pallet ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/pull/273",children:"here"})," and the node side of it ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/encointer-node/pull/350",children:"here"}),". There also exists a ",(0,i.jsx)(n.a,{href:"https://book.encointer.org/protocol-democracy.html",children:"documentation of the protocol"})," and a ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/issues/347",children:"tracking issue"})," that tracks the work still to be done for the democracy pallet."]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 0.4 (8 person days)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Total Costs:"})," 8320 CHF"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1-example--protocol-enhancements",children:"Milestone 1 Example \u2014 Protocol enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  0.4 (8 person days)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 8320 CHF"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0a."})}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"GPLv3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0b."})}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsxs)(n.td,{children:["We will provide both ",(0,i.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,i.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0c."})}),(0,i.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(n.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:(0,i.jsx)(n.strong,{children:"0d."})}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(n.td,{children:"Article"}),(0,i.jsxs)(n.td,{children:["We will publish an ",(0,i.jsx)(n.strong,{children:"article"})," in the Encointer book that explains the functionality of the democracy module."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(n.td,{children:"Democracy Pallet"}),(0,i.jsx)(n.td,{children:"We will implement the above described tasks in the Encointer democracy pallet."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(n.td,{children:"CLI and Integration Tests"}),(0,i.jsx)(n.td,{children:"We will implement the above described tasks in the CLI and extend the existing integration tests."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsxs)(n.p,{children:["We will keep track of all future work in the ",(0,i.jsx)(n.a,{href:"https://github.com/encointer/pallets/issues/347",children:"tracking issue"}),". The main vision is to build a protocol where Dotsama users can globally participate in governance using their personhood instead of their tokens. Already defined steps are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Limit active proposals per reputable per cycle"}),"\n",(0,i.jsx)(n.li,{children:"Use generic dispatchables for proposal actions"}),"\n",(0,i.jsx)(n.li,{children:"Define protocol for inter-community voting"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Referrer:"})," Alain Brenzikofer: ",(0,i.jsx)(n.a,{href:"https://github.com/brenzi",children:"https://github.com/brenzi"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," 162yvHqgWxzb3rMWvEJyduQ72LHvkQNHVpvpASEWbhE8LwgT"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," I heard about it from Alain Brenzikofer."]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);