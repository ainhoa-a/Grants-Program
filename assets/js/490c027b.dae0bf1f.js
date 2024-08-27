"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[32440],{40111:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453);const o={},i="Socks5 proxy support for JsonRpsee",c={id:"docs/RFPs/jsonrpsee-proxy-support",title:"Socks5 proxy support for JsonRpsee",description:"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.",source:"@site/docs/RFPs/jsonrpsee-proxy-support.md",sourceDirName:"docs/RFPs",slug:"/docs/RFPs/jsonrpsee-proxy-support",permalink:"/docs/RFPs/jsonrpsee-proxy-support",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/jsonrpsee-proxy-support.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"RFP: ink! block explorer",permalink:"/docs/RFPs/ink_smart_contract_block_explorer"},next:{title:"Tip or Donate KSM Embeddable Button",permalink:"/docs/RFPs/ksm-tipping-button"}},d={},l=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Background story",id:"background-story",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Ecosystem projects that rely on JsonRpsee",id:"ecosystem-projects-that-rely-on-jsonrpsee",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Demonstrations",id:"demonstrations",level:4}];function a(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"socks5-proxy-support-for-jsonrpsee",children:"Socks5 proxy support for JsonRpsee"})}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["This Request for Proposals is ",(0,n.jsx)(s.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Status:"})," [Closed](",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/jsonrpsee/issues/870",children:"https://github.com/paritytech/jsonrpsee/issues/870"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Proposer:"})," flipchan"]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/paritytech/jsonrpsee",children:"JsonRpsee"})," is an opensource Rust library used by several para and relay chain client libraries to connect to chains over ws or rpc."]}),"\n",(0,n.jsx)(s.h2,{id:"background-story",children:"Background story"}),"\n",(0,n.jsx)(s.p,{children:"Tor is a anonymization project that has been active for several years. By utilizing a traffic obfusication protocol to route data, it enables users to anonymize their internet traffic. Several blockchain projects leverage this technology to allow users to connect to nodes over tor, inputting the .onion address of the rpc provider."}),"\n",(0,n.jsx)(s.p,{children:"By providing a .onion address for a rpc/ws node, we can allow users to have more privacy by masking the origination of the request (the sender's ip address)."}),"\n",(0,n.jsxs)(s.p,{children:["Gavin Wood mentioned onion-routing as an important future feature on Decoded 2023:\n",(0,n.jsx)(s.img,{src:"https://lh4.googleusercontent.com/jVXYOtm4ORONGqAdtpj3tS4RUgpNJP3lAST_7byZOaT2FKzzGdvdVQOqf-2v1bhvWdniWuJDN2qBxkjYvMByqKXc9v6odzULbWla-sflQlEITA1hC34vCiumr3FKtpuaLo0xwfJNH_j9G-1O1RWki8k",alt:""})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://forum.polkadot.network/t/privhost-public-polkadot-kusama-and-edgeware-nodes-with-tor-v3-onion-support/2093",children:"In february 2023"}),", a small public rpc provider was launched in order to provide .onion rpc endpoints for handful of chains in the ecosystem.",(0,n.jsx)(s.br,{}),"\n","Privhost was later listed on the ",(0,n.jsx)(s.a,{href:"https://github.com/substrate-developer-hub/awesome-substrate#products-and-services",children:"awesome-substrate list"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"In order to connect to a .onion site, a user must pass it's connection through a tor socks5 proxy in order to resolve the .onion domain and connect."}),"\n",(0,n.jsx)(s.p,{children:"Several ecosystem projects want to add support for connecting to .onion, but are blocked due to JsonRpsee not having support for sock5 proxy."}),"\n",(0,n.jsx)(s.p,{children:"Third party pr's that are waiting for JsonRpsee to support socks5:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.del,{children:(0,n.jsx)(s.a,{href:"https://github.com/fedimint/fedimint/issues/391#issuecomment-1643878929",children:"Fedimint #391"})})," (Closed)"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/uptest-sc/uptest/issues/15",children:"Uptest #15"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["On 4th of September of 2022 a ",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/jsonrpsee/issues/870",children:"pr was created"})," to start the process of adding socks5 support for JsonRpsee.",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.del,{children:"Noone has had time to fix this issue and implement this feature, therefor this RFP."})," ",(0,n.jsx)(s.code,{children:"WsTransportClientBuilder"})," has been refactored, GH issue was ",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/jsonrpsee/issues/870",children:"closed"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Enable client libraries to connect to .onion rpc nodes."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"ecosystem-projects-that-rely-on-jsonrpsee",children:"Ecosystem projects that rely on JsonRpsee"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/paritytech/subxt",children:"Subxt"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/chevdor/subwasm",children:"Subwasm"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/uptest-sc/uptest",children:"Uptest"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/AcalaNetwork/subway",children:"Subway"})}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Total Estimated Duration:"})," 4 weeks"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Full-time equivalent (FTE):"}),"  4 weeks"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Total Costs:"})," 9000 USD(may be changed by the future team)"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,n.jsx)(s.p,{children:"Please add additional milestones in the same way:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Estimated Duration:"})," Duration of milestone 1"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"FTE:"}),"  4 weeks"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Costs:"})," 9000 USD(may be changed by the future team)"]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Number"}),(0,n.jsx)(s.th,{children:"Deliverable"}),(0,n.jsx)(s.th,{children:"Specification"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0a."}),(0,n.jsx)(s.td,{children:"License"}),(0,n.jsx)(s.td,{children:"Apache 2.0 / MIT / Unlicense"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0b."}),(0,n.jsx)(s.td,{children:"Documentation"}),(0,n.jsx)(s.td,{children:"Public documentation with implementation guides and sample code"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0c."}),(0,n.jsx)(s.td,{children:"Testing Guide"}),(0,n.jsx)(s.td,{children:"Rust Unit tests"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0d."}),(0,n.jsx)(s.td,{children:"Article"}),(0,n.jsx)(s.td,{children:"Article explaining how to utilize the socks5 support"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1."}),(0,n.jsx)(s.td,{children:"Middleware layer"}),(0,n.jsxs)(s.td,{children:["In order to enable socks5 support, several modifications of the ",(0,n.jsx)(s.code,{children:"WsTransportClientBuilder"})," needs to be implemented, described in ",(0,n.jsx)(s.a,{href:"https://github.com/paritytech/jsonrpsee/issues/1162",children:"issue #1162"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2."}),(0,n.jsx)(s.td,{children:"Socks5 support"}),(0,n.jsx)(s.td,{children:"enable a jsonrpsee client to proxy connections using a socks5 proxy"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"demonstrations",children:"Demonstrations"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Connect to a .onion rpc node with jsonrpsee."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(96540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);