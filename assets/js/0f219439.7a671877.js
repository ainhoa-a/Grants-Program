"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[63169],{90890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(74848),a=n(28453);const r={},i="substrate-parachain-PoS-template",o={id:"applications/substrate-parachain-PoS-template",title:"substrate-parachain-PoS-template",description:"- Team Name: Aband-Network",source:"@site/applications/substrate-parachain-PoS-template.md",sourceDirName:"applications",slug:"/applications/substrate-parachain-PoS-template",permalink:"/applications/substrate-parachain-PoS-template",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/substrate-parachain-PoS-template.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Language",id:"language",level:3},{value:"Details",id:"details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Based on the nimbus consensus",id:"milestone-1---based-on-the-nimbus-consensus",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Referral Program (optional) \ud83d\udcb0",id:"referral-program-optional-moneybag",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"substrate-parachain-pos-template",children:"substrate-parachain-PoS-template"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Aband-Network"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0xD6Cec62CE67E09b240B84A3FB53cC1EbA05795d6 (USDT ERC20)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["Parachain projects require more teams to use PoS, which helps them achieve a certain degree of decentralization, and the economic model is healthier and more favored by the community.\nOur aband-parachain project uses the ",(0,s.jsx)(t.a,{href:"https://github.com/PureStake/nimbus",children:"PureStake/nimbus"})," as the Pos block consensus.\nIn the business layer, we prefer the staking developed by the Polkadot team and a series of modules related to staking. It took us two days to familiarize ourselves with the codes of these two projects, and then implemented Staking on the third day.\nThis makes us a little frustrated, we are senior developers of substrate, if we are all like this, it will take more time for beginners, even if it is a strong development team,\nYou shouldn't spend too much time on it either. We hope to make a PoS template, so that developers can develop their own PoS projects without taking a minute.\nWe also found that moonbean only implements its own staking, which is obviously not what most developers need. Developers need more substrate-native things.\nThis makes it unnecessary for users to increase learning costs, and these projects with more native modules of substrate can further promote the use of related technologies in the Polkadot ecosystem. so,\nIt is very meaningful to create a PoS parachain template that only has a different block consensus but the other modules are exactly the same."]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsx)(t.p,{children:"rust, and subsrate"}),"\n",(0,s.jsx)(t.h3,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(t.p,{children:["A substrate development template like ",(0,s.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-parachain-template",children:"substrate-developer-hub/substrate-parachain-template"}),", this template implements PoS.\nIn this project, we don't have any UI to design, which is the advantage of this project. Because except for the block consensus, other modules come from substrate.\nWe don't need to write a lot of extra code, and we don't even have our own modules. Let developers not realize our existence, but we do the repetitive work they have to do.\nThis template comes from our project, we will continue to follow up the latest polkadot version, and there will be more projects to use and maintain together.\nWe just hope that more parachain project parties can use Substrate's native Staking and Staking-related functions at no cost. Make it as generic as the ",(0,s.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-parachain-template",children:"substrate-developer-hub/substrate-parachain-template"}),".\nWith more developers using this template, it will further help us find problems when upgrading the runtime or client of aband-parachain. Make Aband-Network more secure."]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"This project makes up for Polkadot's lack of official PoS parachain templates. At the same time, it also makes up for the shortcomings of moonbean, because their Staking is very different from Substrate's Staking.\nThis is more friendly to both developers and users. It is born for better use of substrate to develop PoS parallel chains."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Octavei"}),"\n",(0,s.jsx)(t.li,{children:"keymi"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Octavei"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:octavei@proton.me",children:"octavei@proton.me"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," N/A"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," N/A"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Octavei Senior development engineer of Aband-Network, with 4 years experience in substrate development. Familiar with Ethereum and EOS smart contracts. Have done many blockchain projects."}),"\n",(0,s.jsx)(t.li,{children:"keymi Aband-Network's CEO. Worked in Google for 5 years, mainly as a product manager."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Aband-Network/substrate-parachain-PoS-template",children:"https://github.com/Aband-Network/substrate-parachain-PoS-template"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Aband-Network/aband-parachain",children:"https://github.com/Aband-Network/aband-parachain"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Aband-Network/substrate-parachain-PoS-template",children:"https://github.com/Aband-Network/substrate-parachain-PoS-template"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 4,000 USD"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1---based-on-the-nimbus-consensus",children:"Milestone 1 - Based on the nimbus consensus"}),"\n",(0,s.jsx)(t.p,{children:"Based on the nimbus consensus, make a PoS parachain development template with Polkadot Staking and Staking related modules."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 3 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 4000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2757"," ",(0,s.jsx)(t.strong,{children:"The default deliverables 0a-0d below are mandatory for all milestones"}),", and deliverable 0e at least for the last one."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"Add documentation explaining how these modules fit together to complete the entire PoS process."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"Add manual tests to prove that the entire PoS runs successfully.  Provide unit testing and benchmarking for the Collators pallet."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0d."})}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"Provide Docker to the chain, allowing anyone to quickly run the chain"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,s.jsx)(t.td,{children:"client code"}),(0,s.jsxs)(t.td,{children:["Provide a client with the same functions as ",(0,s.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-parachain-template/tree/main/node",children:"https://github.com/substrate-developer-hub/substrate-parachain-template/tree/main/node"}),".  Such as having the ",(0,s.jsx)(t.code,{children:"try-runtime"})," command, etc."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,s.jsx)(t.td,{children:"Substrate Modlue: Collators"}),(0,s.jsx)(t.td,{children:"The role of the Collators pallet is to provide a validator set for consensus. The validator can come from the staking module, which can also be set by ensure_root in this module, which means that with this template, you can also use the Staking function in the case of PoA, which is very useful if you just only want to reward collators."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We are very happy to know that Polkadot is officially developing the SASSAFRAS consensus. In the future, we will bring SASSAFRAS to the POS parachain template.\nMake this PoS template have more consensus."}),"\n",(0,s.jsx)(t.li,{children:"Based on the babe consensus, make a PoS parachain development template with Polkadot Staking and Staking related modules."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"referral-program-optional-moneybag",children:["Referral Program (optional) ","\ud83d\udcb0"]}),"\n",(0,s.jsxs)(t.p,{children:["You can find more information about the program ",(0,s.jsx)(t.a,{href:"../README.md#moneybag-referral-program",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Referrer:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1050",children:"JimYam"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0x8ab7860cd39f0f2facf61b379e87f3de2e3d4d17 (USDT ERC20)"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc."]}),"\n",(0,s.jsx)(t.p,{children:"personal recommendation"})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);