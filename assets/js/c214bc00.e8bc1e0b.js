"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7110],{4933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var s=r(74848),o=r(28453);const a={},i="Social Recovery Wallet",n={id:"docs/RFPs/social-recovery-wallet",title:"Social Recovery Wallet",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/social-recovery-wallet.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/social-recovery-wallet",permalink:"/docs/RFPs/social-recovery-wallet",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/social-recovery-wallet.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SCALE Codec Comparator",permalink:"/docs/RFPs/scale-codec-comparator"},next:{title:"Front-End for Staking Rewards Collector",permalink:"/docs/RFPs/staking-rewards-collector-front-end"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"social-recovery-wallet",children:"Social Recovery Wallet"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This Request for Proposals is ",(0,s.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/Plus-social-recovery-wallet.md",children:"Implemented 1"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/hypha-dao/hashed-wallet",children:"Implemented 2"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/dauth_network.md",children:"Under Development 1"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/Noc2",children:"Noc2"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:['Managing your own private keys is a difficult task. The average person doesn\u2019t want to spend multiple hours to ensure the security of their keys. This leads to people having difficulties to join the blockchain space or even worse leads to the loss of funds. One solution to this problem is the implementation of a social recovery system. It allows users to recover their accounts if their key or other authentication mechanism has been lost. Therefore you usually set up at least 3 "guardians" (e.g. other devices, friends or family or institutions), of which a majority can cooperate to change the key of the account (often after some delay). Kusama has for this purpose currently the ',(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/master/frame/recovery",children:"social recovery pallet implemented"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The goal of this RFP is to find teams that are willing to leverage this or similar mechanism to create wallet solutions (desktop, web, mobile, extensions, etc.) which are as easy to use as possible and at the same time offer a high security for the average user."}),"\n",(0,s.jsxs)(t.p,{children:["Apart from the ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/master/frame/recovery",children:"social recovery pallet"}),", the support of the ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/proxy",children:"Proxy Module"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/multisig",children:"Multisig Module"})," is encouraged as part of this RFP to further improve the user experience."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Existing Social Recovery Wallets on Ethereum:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.argent.xyz/",children:"https://www.argent.xyz/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://loopring.io/#/",children:"https://loopring.io/#/"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Other interesting sources:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.parity.io/social-recovery-on-substrate/",children:"https://www.parity.io/social-recovery-on-substrate/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://vitalik.ca/general/2021/01/11/recovery.html",children:"https://vitalik.ca/general/2021/01/11/recovery.html"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/master/frame/recovery",children:"https://github.com/paritytech/substrate/blob/master/frame/recovery"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/proxy",children:"https://github.com/paritytech/substrate/tree/master/frame/proxy"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/multisi",children:"https://github.com/paritytech/substrate/tree/master/frame/multisi"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(t.p,{children:["The deliverables highly depend on the exact wallet implementation and therefore aren\u2019t further described as part of this RFP. For the grant application you should take a look at the ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/application-template.md#overview-1",children:"application template"})," and try to specify the deliverables as detailed as possible."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>n});var s=r(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);