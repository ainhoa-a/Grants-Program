"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[61940],{23359:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(74848),i=s(28453);const a={},l="Stable Asset",r={id:"applications/stable-asset",title:"Stable Asset",description:"Project Name:* Stable Asset",source:"@site/applications/stable-asset.md",sourceDirName:"applications",slug:"/applications/stable-asset",permalink:"/applications/stable-asset",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/stable-asset.md",tags:[],version:"current",frontMatter:{}},o={},h=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Stable Asset",id:"stable-asset-1",level:4},{value:"Stable Swap",id:"stable-swap",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"<strong>Overview</strong>",id:"overview-1",level:3},{value:"<strong>Milestone 1 \u2014 Implement Stable Swap Module</strong>",id:"milestone-1--implement-stable-swap-module",level:3},{value:"<strong>Milestone 2 \u2014 Implement Stable Asset Module</strong>",id:"milestone-2--implement-stable-asset-module",level:3},{value:"<strong>Milestone 3 \u2014 Support Yield in Stable Asset</strong>",id:"milestone-3--support-yield-in-stable-asset",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"stable-asset",children:"Stable Asset"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Project Name:"})," Stable Asset"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," NUTS Finance"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0x679824d755B054a2a50358008472a6F400740319"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"There are vastly emerging assets in the Polkadot ecosystem, including both Polkadot native assets and assets bridged from other blockchains such as Ethereum and EOS. These assets introduce diversity in architecture and business model, but also fragmentizes the ecosystem since applications need to build separate markets for each of these assets. For example, stables coins can be divided into three categories: fiat-backed, crypto-backed and algorithmic stable coins, and on Ethereum each category has more than ten stable coin protocols. DEX benefits from such asset diversification but other protocols such as lending and options find it difficult to accommodate all these various assets."}),"\n",(0,n.jsx)(t.p,{children:"Asset synthesis is a common approach to unify asset values and hedge asset risks. One approach is to synthesize several mainstream assets or assets belonging to the same niche so that the synthetic assets represents the general trend of the underlying assets. In this approach the synthetic assets acts similiar to an index fund, and how to fairly price and adopt the synthetic assets becomes a new question. The second approach is to synthetize several assets of the same value peg such as BTC, ETH or USD. The synthetic asset has the same value peg, and it could simplifies financial application development since only one synthetic asset needs to be supported for each peg type."}),"\n",(0,n.jsx)(t.p,{children:"Stable Asset is an asset synthetic protocol of the second approach. It is also built with integrated swap and saving functionalities using the basket of assets."}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"The Stable Asset is an asset synthetic protocol based on Curve's StableSwap algorithm as shown below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lh6.googleusercontent.com/i6owf1R5cUcc8lQtPTouisnVsj1Dt3xeCyeC_XcSjLPBCk1glLh_ZHx5GUa_f5WhsrkXJZx-PKfy8dxxrl1YjDsy-suFyXeU0vx1i6zp82lK7__NCR-HcE5cxEZ0FmaACfH8Ah7z",alt:"Stable Swap Algorithm"})}),"\n",(0,n.jsx)(t.p,{children:"Widely adopted as swap algorithm among assets with the same peg, it also works perfectly as an asset synthesis algorithm with a basket of assets with the same peg due to the following properties:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"When the prices of all underlying assets in the basket are equal, the number of each underlying assets in the baskets are equal as well. At this moment, the value of the synthetic asset equals the total number of underlying assets in the basket, and the collateral ratio reaches 100%;"}),"\n",(0,n.jsx)(t.li,{children:"Whenever the price of any underlying asset differs from each other, the value of StableAsset is smaller than the total number of underlying assets so that the collateral ratio is larger than 100%. Since all assets in the baskets are of the same value peg, their prices should fluctuate about the peg prices with low variation expected so that the overall collateral ratio should be slightly over 100%;"}),"\n",(0,n.jsx)(t.li,{children:"Users of the underlying swap can help to maintain the basket balance subject to underlying assets price shift."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The Stable Asset system consists of three major components: Stable Asset, Stable Swap and Stable Savings."}),"\n",(0,n.jsx)(t.h4,{id:"stable-asset-1",children:"Stable Asset"}),"\n",(0,n.jsx)(t.p,{children:"Stable Asset is a synthetic asset with value peg such as BTC or USD. It's backed by a basket of assets with similar peg, and it provides more reliability and better peg compared to individual asset in the basket."}),"\n",(0,n.jsx)(t.p,{children:"The value of Stable Asset is derived from Curve's StableSwap algorithm. When there is shift in price from individual asset in the basket, the value of Stable Asset remains unchanged: The total value of Stable Asset is always the total amount of assets in the basket when their prices are all equal."}),"\n",(0,n.jsx)(t.h4,{id:"stable-swap",children:"Stable Swap"}),"\n",(0,n.jsx)(t.p,{children:"Stable Swap is a DEX built on top of the basket which is backing Swap Asset. It serves several purposes in the systems."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First, it enhances the capital efficiency of the baskets. Instead of staying still, the asset basket is used as DEX;"}),"\n",(0,n.jsx)(t.li,{children:"Second, it helps maintain peg of Stable Asset. Since the prices of individual asset might shift over time, DEX users can adjust the basket composition in order to reflect the current underlying asset value;"}),"\n",(0,n.jsx)(t.li,{children:"Third, the trading fee, along with the Stable Asset redemption fee, provide native yield to the Stable Asset holders."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Stable Swap component is built with Curve's StableSwap algorithm with enhancement to better support the value of Stable Asset. It's different from the Curve DEX in that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Its value composition is calculated based on the instrinic value of the Stable Assets instead of value of the underlying assets;"}),"\n",(0,n.jsx)(t.li,{children:"It has more robust and flexible basket management functionalities which are not required in DEX;"}),"\n",(0,n.jsx)(t.li,{children:"It's optimized in asset value computation."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsxs)(t.p,{children:["Equilibrium is planning to deliver a ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/curve_amm.md",children:"Curve AMM"})," which is also based on StableSwap algorithm. Stable Asset, on the other hand, is a synthetic asset protocol built on top of the StableSwap algorithm with the following enhancement worth highlighted:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Liquidity providers received a strongly peg asset instead of LP token so that they don't lose usability of their assets;"}),"\n",(0,n.jsx)(t.li,{children:"Users of the DEX helps the synthetic assets to maintain peg in cases of asset price shift;"}),"\n",(0,n.jsx)(t.li,{children:"Holders of Stable Asset have native interest coming from the system itself."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In short, Equilibrium is a DEX while uses the bonding curve to compute the balance of the underlying assets, while StableAsset is a synthetic asset which uses the bonding curve to maintain the derived value of the basket."}),"\n",(0,n.jsxs)(t.p,{children:["Similar to Equilibrium, ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/sunrise-dex.md",children:"Sunrise DEX"})," is a DEX that focuses on swap functionalities. On the other hand, StableAsset focus on asset synthesis and the Stable Swap module is an internal system that helps keep the basket balanced."]}),"\n",(0,n.jsx)(t.p,{children:"Laminar is an over-collateralized synthetic asset protocol that uses various underlying assets to generate a value pegged assets. StableAsset is highly optimized for asset synthesis with a basket of assets with the same peg, and it can achieve a collateral ratio closed to 100%."}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Daniel Tang, Co-founder"}),"\n",(0,n.jsx)(t.li,{children:"Terry Lam, Co-founder"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"}),"\xa0Terry Lam"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"}),"\xa0",(0,n.jsx)(t.a,{href:"mailto:terry@nuts.finance",children:"terry@nuts.finance"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"https://acoconut.fi/",children:"https://acoconut.fi/"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"}),"\xa0PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"}),"\xa0ACoconut"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain."}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/nutsfinance",children:"https://github.com/nutsfinance"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/joeztang",children:"https://www.linkedin.com/in/joeztang"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/in/terry-lam-80a71927",children:"https://www.linkedin.com/in/terry-lam-80a71927"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:(0,n.jsx)(t.strong,{children:"Overview"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"}),"\xa01 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"\xa02"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"}),"\xa020,000 DAI"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1--implement-stable-swap-module",children:(0,n.jsx)(t.strong,{children:"Milestone 1 \u2014 Implement Stable Swap Module"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"}),"\xa01.5 week"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"\xa02"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"}),"\xa07,000 DAI"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on components, working algorithms, and deployment processes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Swap Substrate module"}),(0,n.jsxs)(t.td,{children:["This module will implement ",(0,n.jsx)(t.a,{href:"https://docs.acoconut.fi/asset/acbtc/algorithm",children:"core Stable Swap algorithm"})," to maintain balance of the basket, e.g.",(0,n.jsx)("br",{}),"computeD",(0,n.jsx)("br",{}),"computeDy",(0,n.jsx)("br",{}),"computeSwapAmount",(0,n.jsx)("br",{}),"swap.",(0,n.jsx)("br",{})," Part of the algorithm is implemented in Solidity in acBTC's ",(0,n.jsx)(t.a,{href:"https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol",children:"ACoconutSwap"})," contract."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Comprehensive tests that cover Stable Swap Substrate module"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a docker image with a Substrate chain that demonstrates this project"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2--implement-stable-asset-module",children:(0,n.jsx)(t.strong,{children:"Milestone 2 \u2014 Implement Stable Asset Module"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"}),"\xa01.5 week"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"\xa02"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"}),"\xa07,000 DAI"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on components, working algorithms, and deployment processes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset Substrate module"}),(0,n.jsxs)(t.td,{children:["This module will contain core functionalities for Stable Asset, which includes both how Stable Asset is minted/redeemed, e.g.  ",(0,n.jsx)("br",{}),"getMintAmount",(0,n.jsx)("br",{}),"mint",(0,n.jsx)("br",{}),"getRedeemProportionAmount",(0,n.jsx)("br",{}),"redeemProportion",(0,n.jsx)("br",{}),"getRedeemSingleAmount",(0,n.jsx)("br",{}),"redeemSingle",(0,n.jsx)("br",{}),"getRedeemMultiAmount",(0,n.jsx)("br",{}),"redeemMulti,",(0,n.jsx)("br",{})," and how the basket assets are managed. The first part is partly implemented in Solidity in acBTC's ",(0,n.jsx)(t.a,{href:"https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol",children:"ACoconutSwap"})," contract."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Comprehensive tests that cover the Stable Asset Substrate modules"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a docker image with a Substrate chain that demonstrates this project"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-3--support-yield-in-stable-asset",children:(0,n.jsx)(t.strong,{children:"Milestone 3 \u2014 Support Yield in Stable Asset"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"}),"\xa02 week"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"\xa02"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"}),"\xa06,000 DAI"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1"}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsx)(t.td,{children:"Provide documentation on how to handle yield in stable asset pools"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2"}),(0,n.jsx)(t.td,{children:"Substrate module: Stable Asset Substrate module"}),(0,n.jsx)(t.td,{children:"The Stable Asset module supports yield assets, e.g. LDOT/LKSM whose intrinsic values increase over time. It's able to collect yield generated by the yield asset to generate additional total supply of the stable asset. The Stable Asset module also supports increasing swap available liquidity within the same price range to better support price shift of DOT/KSM derivatives such as LDOT/LCDOT."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(t.td,{children:"Testing"}),(0,n.jsx)(t.td,{children:"Comprehensive tests that cover yield asset and amplification parameter change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4"}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"Provide a docker image with a Substrate chain that demonstrates this project"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"We are going to launch token economics and governance to support the system."}),"\n",(0,n.jsx)(t.p,{children:"We are also going to launch multiple Stable Assets on Polkadot and reach DeFi applications for community adoption."}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:["We've successfully launched our first StableAsset, ",(0,n.jsx)(t.a,{href:"https://app.acbtc.fi/",children:"acBTC"}),", on Ethereum. It receives positive feedback from the community and reaches peak total supply of 577 acBTC. The source code for acBTC can be found ",(0,n.jsx)(t.a,{href:"https://github.com/nutsfinance/acBTC",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"cBTC is an implementation of the core algorithm and used to prove our concept in Ethereum. The StableAsset will be a full-fledged asset protocol with the following anhancements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Stable Asset is a Substrate module in Polkadot ecosystem;"}),"\n",(0,n.jsx)(t.li,{children:"Stable Asset is a generic asset module which allows anyone to create synthetic value peg asset with integrated swap and saving functionalities;"}),"\n",(0,n.jsx)(t.li,{children:"Stable Asset provides complete and flexible asset management solutions which is currently not available in acBTC."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);