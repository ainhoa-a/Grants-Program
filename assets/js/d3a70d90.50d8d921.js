"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[12867],{50078:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=i(74848),s=i(28453);const l={},a="tDOT",r={id:"applications/tdot",title:"tDOT",description:"- Team Name: NUTS Finance",source:"@site/applications/tdot.md",sourceDirName:"applications",slug:"/applications/tdot",permalink:"/applications/tdot",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/tdot.md",tags:[],version:"current",frontMatter:{}},d={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Stable Asset XCM Pallet",id:"milestone-1--stable-asset-xcm-pallet",level:3},{value:"Milestone 2 \u2014 tDOT Minting",id:"milestone-2--tdot-minting",level:3},{value:"Milestone 3 \u2014 tDOT Redeeming",id:"milestone-3--tdot-redeeming",level:3},{value:"Future Plans",id:"future-plans",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"tdot",children:"tDOT"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," NUTS Finance"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0x679824d755B054a2a50358008472a6F400740319(DAI)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Status:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/872#issuecomment-1424407082",children:"Terminated"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsxs)(t.p,{children:["This application is a follow-up of the ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md",children:"Stable Asset grant"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"DOT serves three distinct purposes in Polkadot: governance, staking and bonding. These critical functions have increased DOT's demand but also segregated DOT's liquidity across multiple applications."}),"\n",(0,n.jsx)(t.p,{children:"Several parachains and protocols arise to enhance DOT's capital efficiency, which includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Staked DOT, e.g. Acala's LDOT and Parallel's xDOT"}),"\n",(0,n.jsx)(t.li,{children:"Crowdloan DOT, e.g. Acala's LCDOT and Moonbeam's stDOT"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These DOT derivatives, which represents different forms of DOT across the Polkadot network, further spread out DOT's liquidity. DOT's liquidity fragementation has caused several crucial issues:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Each DOT derivative need to bootstrap their own liquidity and find a stable pricing"}),"\n",(0,n.jsx)(t.li,{children:"Polkadot application builders need to support multiple forms of DOT assets"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These hurdles are extremely difficult to overcome, given Polkadot network liquidity is still relatively low. tDOT aims at solving these issues by generating unified DOT liquidity across Polkadot applications."}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"tDOT is a DOT-pegged derivative built on top of the stable asset protocol."}),"\n",(0,n.jsx)(t.p,{children:"Stable asset is based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets."}),"\n",(0,n.jsx)(t.p,{children:"taiKSM is the first KSM-pegged derivative deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura."}),"\n",(0,n.jsx)("img",{width:"707",alt:"image",src:"https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png"}),"\n",(0,n.jsx)(t.p,{children:"tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;"}),"\n",(0,n.jsx)(t.li,{children:"Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;"}),"\n",(0,n.jsx)(t.li,{children:"If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows a dynamic trading range between xDOT and DOT but ensures the value of pool derivative is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the exchange rate between xDOT and DOT trades at 1:1, tDOT is 100% collateralized and is backed by exactly 1 DOT. When the exchange rate shifts, tDOT is over-collateralized and the collateral ratio increases as the exchange rate shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values."}),"\n",(0,n.jsx)(t.p,{children:"Since each xDOT-DOT pool can maintain pegging of its own pool derivative, it's a natural choice to unify these pool derivatives into a single tDOT. This brings extra benefits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It ensures a single tDOT and it can be bridged to any parachain;"}),"\n",(0,n.jsx)(t.li,{children:"It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;"}),"\n",(0,n.jsx)(t.li,{children:"It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;"}),"\n",(0,n.jsx)(t.li,{children:"It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"tDOT will be minted on a single parachain which is the hosting parachain for tDOT. It can be migrated to a different parachain or even a dedicated parachain. The hosting parachain can deploy its own xDOT-DOT pools so that tDOT is minted locally."}),"\n",(0,n.jsx)(t.p,{children:"Any other parachains such as Acala and Parallel which have their own native DOT derivatives can deploy xDOT-DOT pools on their own chains and mint tDOT on the hosting chain as remote minters. Their benefits include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The xDOT-DOT pool provides a stable swap between xDOT and DOT;"}),"\n",(0,n.jsx)(t.li,{children:"The xDOT-DOT liquidity is locked in its original chain while minting tDOT so the parachains can retain its TVL;"}),"\n",(0,n.jsx)(t.li,{children:"The minted tDOT can be bridged to other chains other than the hosting parachain. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For the whole Polkadot network, a standardized DOT derivative can service the entire Polkadot ecosystem; it can unify all forms of DOT liquidity and unleash maximum usability for DOT across Parachains."}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Daniel Tang, Co-founder"}),"\n",(0,n.jsx)(t.li,{children:"Terry Lam, Co-founder"}),"\n",(0,n.jsx)(t.li,{children:"Shengda Ding, Co-founder"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Shengda Ding"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:shengda@nuts.finance",children:"shengda@nuts.finance"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://nuts.finance",children:"https://nuts.finance"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," ACoconut"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/nutsfinance",children:"https://github.com/nutsfinance"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/joeztang",children:"https://www.linkedin.com/in/joeztang"})}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/terry-lam-80a71927",children:"https://www.linkedin.com/in/terry-lam-80a71927"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/dingshengda",children:"https://www.linkedin.com/in/dingshengda"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 14,000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1--stable-asset-xcm-pallet",children:"Milestone 1 \u2014 Stable Asset XCM Pallet"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1 week"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 4,000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Stable Asset XCM pallet is a new module which will be deployed in the host chain only. It manages balances and limits for each individual stable asset pools and acts as the portal to mint and redeem tDOT."}),"\n",(0,n.jsx)(t.p,{children:"Stable asset LPs will be divided into two layers:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Local LP, which is the LP of individual stable asset pools and managed by stable asset pallet;"}),"\n",(0,n.jsx)(t.li,{children:"Aggregate LP, which is the LP generated by local LPs and managed by stable asset XCM pallet."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/3374016/179861856-ffeaf4f8-2501-4cd2-b0b1-f0ea6a998c52.png",alt:"image"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on the architecture of tDOT."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Provide comprehensive tests that covers stable asset pool management functionalities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a Docker image with Substrate chain that demonstrate this project."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset XCM"}),(0,n.jsx)(t.td,{children:"The stable asset XCM module tracks and manages individual stable asset pools across multiple parachains. It tracks balances of each stable asset pools in each parachain and sets mint limits for each pool."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2--tdot-minting",children:"Milestone 2 \u2014 tDOT Minting"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 5,000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This milestone implements minting tDOT both locally on the host chain and remotely on the guest chains. In either case, minting is triggered in the stable asset pallet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/3374016/179863159-9f130f5b-3ff6-4f06-a85e-3d243c6d5c39.png",alt:"image"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/3374016/179863205-7258e9a9-26f4-4a46-9b76-e0773fa8fbed.png",alt:"image"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on the architecture of tDOT and flow diagrams of tDOT minting process."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Provide comprehensive tests that covers minting tDOT locally in host chain and remotely in guest chain."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a Docker image with Substrate chain that demonstrate this project."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset Pallet"}),(0,n.jsx)(t.td,{children:"Users can mint tDOT on stable asset pallet with underlying asset or with local LP. If minting fails in host chain, the whole extrinsic is reverted. If minting fails in guest chain, user will get local LP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset XCM Pallet"}),(0,n.jsx)(t.td,{children:"Handles the actual aggregate LP minting. It accepts XCM mint request from guest chain with local LP, and sends back XCM message if minting fails due to mint limit exceeds."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-3--tdot-redeeming",children:"Milestone 3 \u2014 tDOT Redeeming"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 5,000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This milestone implements redeeming tDOT on host chain."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/3374016/179863963-5bee9e99-f4a1-42c8-a274-50f2c81420d3.png",alt:"image"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on the architecture of tDOT and flow diagrams of tDOT redeeming process."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Provide comprehensive tests that covers redeeming tDOT to host chain or to guest chains."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a Docker image with Substrate chain that demonstrate this project."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsx)(t.td,{children:"We will publish an article that explains the architecture of tDOT and how minting and redeeming tDOT works. The article will discuss potential attack vectors of tDOT and how does tDOT addresses it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset XCM Pallet"}),(0,n.jsx)(t.td,{children:"Handles the aggregate LP redeeming request, eitehr in proportion or to a single asset. If redeeming to a local stable asset pool fails, the whole extrinsic is reverted. If redeeming to a remote stable asset pool fails, users will get local asset on the guest chain instead."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"We will upgrade taiKSM to tKSM with similar architecture shortly after the launch of tDOT."})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);