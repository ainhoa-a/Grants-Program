"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[44916],{11699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(74848),o=n(28453);const r={},s="Quantum Lock for QBITCOIN",a={id:"applications/quantumLock",title:"Quantum Lock for QBITCOIN",description:"- Team Name: BQP",source:"@site/applications/quantumLock.md",sourceDirName:"applications",slug:"/applications/quantumLock",permalink:"/applications/quantumLock",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/quantumLock.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Mathematical Background: Forrelation Function",id:"mathematical-background-forrelation-function",level:4},{value:"Header",id:"header",level:3},{value:"Remarks",id:"remarks",level:3},{value:"Forrelation Parameters",id:"forrelation-parameters",level:4},{value:"Technology Stack",id:"technology-stack",level:3},{value:"UI Frontend",id:"ui-frontend",level:4},{value:"Blockchain Backend",id:"blockchain-backend",level:4},{value:"Forrelation Solver Backend",id:"forrelation-solver-backend",level:4},{value:"DevOps Pipeline for Scaling Clusters with Quantum Computers",id:"devops-pipeline-for-scaling-clusters-with-quantum-computers",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: \u2014 Implement Quantum Lock Substrate Modules",id:"milestone-1--implement-quantum-lock-substrate-modules",level:3},{value:"Milestone 2: \u2014 Quantum Computing Libraries",id:"milestone-2--quantum-computing-libraries",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quantum-lock-for-qbitcoin",children:"Quantum Lock for QBITCOIN"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," BQP"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0x063c75324504D1595a972462A30A230d703f655e (ETH)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/904#issuecomment-1297382772",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.p,{children:"The application is for the new project, which introduces the Quantum Lock -- the proof of quantum work (PoQW)."}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"We are developing an enhancement to the blockchain consensus protocol to enable it to run on a quantum computer. This enhancement allows an existing blockchain to be quantum enabled, and take advantage of the significant potential benefits that quantum computation promise to deliver."}),"\n",(0,i.jsx)(t.p,{children:"The most significant benefit is the potential to drastically diminish the energy consumption involved in a classical proof-of-work computation. As our Quantum Lock uses quantum computation with marginal energy cost that is only a fraction of its classical counter-part. (quantum computation is reversible and thermodynamically efficient, thus the expected marginal increase of energy usage of running quantum computation tends toward being comparatively negligible)."}),"\n",(0,i.jsx)(t.p,{children:"Quantum computing is per se energy more efficient and energy consumption does not scale in the same way for classical computing. By some estimation, the reduction in energy consumption as result of processing data with quantum computing can be a factor of 10^-2 to 10^-3, which is huge. There will be competition in improving the ability to do quantum computing between the nodes but such competition cannot be trivially won by more brute force energy consumption. Consequently, we hope that there will be such a competition enabled by our protocol which can promote genial technological progress in quantum error correction, quantum circuit optimization and distributed quantum computation, which would in turn bring substantial positive impact in various domains. On the contrary, traditional PoW in many sense, unfortunately, has zeroed in on a pattern of destructive competition."}),"\n",(0,i.jsx)(t.p,{children:"The Quantum Lock is developed in Substrate and it will be utilised in the QBITCOIN. We aim to integrate the QBITCOIN with the rest of the Polkadot ecosystem, the way of integration (as an independent network with bridge or as a parachain) is to be determined. We are applying for funding in order to cover the initial development costs for the PoQW technology. Our team consists of several quantum algorithm researchers and quantitative finance specialists. The focus on blockchain and the implementation of quantum technologies is a natural fit for our product specialists."}),"\n",(0,i.jsx)(t.p,{children:"We chose this path as we realized that a quantum technology enabled blockchain can be energy efficient, as the nature of a proof-of-work can be radically changed with the application of quantum processors. This inspired us to develop the quantum lock and a blockchain ready for the quantum era. Being able to address one of the most pressing problems in blockchain is a major motivation for our work."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.p,{children:"The Quantum Lock embodies the PoQW. The core of the PoQW is a Forrelation function which is, from the complexity-theoretic perspective, an optimal problem to separate bounded-error quantum polynomial-time (BQP), and the polynomial hierarchy (PH). Without detailing the formal definitions, the class BQP contains decision problems that can be efficiently solvable by a quantum computer within a bounded error. A problem separating BQP from PH can be thought of as the optimal problem to distinguish the capability of quantum from classical computers."}),"\n",(0,i.jsx)(t.p,{children:"The project focuses on the implementation of the mechanics of the Quantum Lock protocol. The complementary part of the project is the \u201cforging\u201c agent \u2013 the term forging is an analogy to classical mining with an iterative calculation of double hash function. The role of the mining agent is to efficiently perform iterative evaluations of the forrelation function such that the solution is found (see below for details). The calculation can be effectively performed using the quantum computer and this a separate stream of research work in our team. The Quantum Lock itself needs to evaluate the Forrelation function only once to verify the validity of the mined block. This task is achievable for any node with a standard computational resource."}),"\n",(0,i.jsx)(t.p,{children:"The first stage of our project aspires to implement the Forrelation function within the Substrate protocol and create a module that can be natively used. In the subsequent stages, we aim to incorporate the Quantum Lock protocol into a full PoQW consensus in a form of an independent blockchain QBITCOIN. We have separated the implementation of the Quantum Lock from the full protocol to stress the difference between the concept and its application."}),"\n",(0,i.jsx)(t.p,{children:"Furthermore, the Quantum Lock can be used in a more versatile way and the community could benefit from its independent application. As a complement to the Quantum Lock module, we will provide a wrapper for Python code which access Quantum Resources through Qiskit/Braket libraries. This will allow any Substrate user to easily access numerical modules with quantum subroutine and backends, and thus  further stipulate the \u201cquantum\u201c aspect within the Ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"There is an alternative to the proof-of-work consensus protocol, namely do this off chain via offchain worker. This is intended as a further step, where would use the quantum work to serve as a proof of quantum authority (node has ability to perform quantum work). It will be certainly useful when thinking about quantum smart contracts and calculation of useful quantum tasks."}),"\n",(0,i.jsx)(t.h4,{id:"mathematical-background-forrelation-function",children:"Mathematical Background: Forrelation Function"}),"\n",(0,i.jsx)(t.p,{children:"Let us consider two Boolean functions f1 and f2. The Boolean function is in the protocol represented as an array of binary of length nBit. The length of the array is"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"nBit = 2 ^ nQubit"})}),"\n",(0,i.jsxs)(t.p,{children:["where nQubit is the number of qubits, the parameter which drives the complexity of the problem. For ",(0,i.jsx)(t.code,{children:"nQubit"}),", there ",(0,i.jsx)(t.code,{children:"2^nQubit"})," configurations of bits (and function can take ",(0,i.jsx)(t.code,{children:"0/1"})," on every each of such configuration)."]}),"\n",(0,i.jsx)(t.p,{children:"The basic operation we need to do with the Boolean functions is to calculate forrelation. The forrelation is defined as"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"forrelation = 0"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"for i1=1,...,nBit"}),"\n",(0,i.jsx)(t.code,{children:"for i2=1,...,nBit"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"forrelation += b2PM(f1[i1]) b2PM(f2[i2]) (-1)**bXb(v2b(i1,nB),v2b(i2,nB))"})}),"\n",(0,i.jsx)(t.p,{children:"and the forrelation is normalised as"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"forrelation=forrelation * 2 ^ (-3*nQubit/2)"})}),"\n",(0,i.jsxs)(t.p,{children:["Further, ",(0,i.jsx)(t.code,{children:"b2PM(b)"})," converts bit to ",(0,i.jsx)(t.code,{children:"+1/-1"}),", and ",(0,i.jsx)(t.code,{children:"bXb"}),"  calculates the dot-product of two bit arrays, which are obtained by function ",(0,i.jsx)(t.code,{children:"v2b"})," (it converts the integer into bit array)."]}),"\n",(0,i.jsx)(t.p,{children:"The block is considered valid, if and only if:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"forrelation(f1,f2,nBit) within [target-precision;target_precision]"})}),"\n",(0,i.jsx)(t.p,{children:"inclusive the borders. We need to ensure that we use the fix precision of the numbers such that there is no inconsistency in the comparison."}),"\n",(0,i.jsxs)(t.p,{children:["For forging the block, we need to have ",(0,i.jsx)(t.code,{children:"f1"})," and ",(0,i.jsx)(t.code,{children:"f2"})," such that the result is withing the allowed intrerval."]}),"\n",(0,i.jsx)(t.p,{children:"For more references, see the QBITCOIN white paper."}),"\n",(0,i.jsx)(t.h3,{id:"header",children:"Header"}),"\n",(0,i.jsx)(t.p,{children:"In order to incorporate the Quantum Lock into the blockchain protocol, we need to amend the information stored in the header. We need to include following items to the header (assuming that certain information is already there, like block id etc), the variables are mentioned in chronological order:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hash of the previous block"}),"\u2013 we use classical hash to refer to the previous block. We will use SHA512 (at least). This will ensure continuity of the chain. Type hexadecimal array of given length. Hash is calculated by double hashing. Hash is taken from the header (data are included through Hash of the Merkle tree)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data"})," \u2013 hash of Merkle tree of the transactions"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Index of the block"})," \u2013 integer, counting the blocks since genesis"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Nonce"})," \u2013 not needed (mentioned to stress out the difference to classical mining procedure). The function f2 plays a role of the nonce, the Quantum Lock forging protocol provides this piece of data"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"nBit"})," \u2013 the number of bits to represent function with nQubits qubits used for a given block. This is an example of a value, which can be in the header but needs to be controlled by the protocol so miner cannot cheat. The verification of the block requires check of this value. nBit needs to be strictly smaller than nMax."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Precision"})," \u2013 this value is provided by the protocol, it depends on the speed of forging over past the past history. The value can be stored in the header for reference, but needs to be verified by the protocol."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"f1"})," \u2013 Binary array of length nMax, where ",(0,i.jsx)(t.code,{children:"nMax"})," is the hardcoded parameter, which specifies the maximum number of qubits we consider."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The value is obtained as follows: Binary representation of the hash of the merkle tree (see data above) and the binary sum with the binary representation of the hash of the previous block. We consider last ",(0,i.jsx)(t.code,{children:"nBit"})," bits of the array."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Target"})," \u2013 The value which is target by forrelation the value is derived from the hash of the previous block \u2013 the link to previous block. Target is a number within ",(0,i.jsx)(t.code,{children:"(-a,a)"})," interval, where a depends on nQubits."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"f2"})," \u2013 Binary array of length nMax. Value forged for the quantum lock."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["This value, together with ",(0,i.jsx)(t.code,{children:"f1"}),", ",(0,i.jsx)(t.code,{children:"Target"})," and ",(0,i.jsx)(t.code,{children:"Precision"})," are basis of the Quantum Lock (this is a Quantum Lock analogue to nonce)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Time"})," \u2013 the time at nanosecond level, when the block is published."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Hash-hash of the entire header."})," - This value does not need to be calculated nor stored, but this is the signature of the forged block."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(t.p,{children:"The key variable determined by the protocol is the Target, which is to be aimed by the forrelation. The value depends on the nQubit. We set"}),"\n",(0,i.jsxs)(t.p,{children:["Target within ",(0,i.jsx)(t.code,{children:"[-1/2^nQubit;1/2^nQubit]"})]}),"\n",(0,i.jsx)(t.p,{children:"The Target is obtained as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Take the Hash of the previous block (hash and hash). The Hash is represented by ",(0,i.jsx)(t.code,{children:"nHash"})," bits."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Split the interval ",(0,i.jsx)(t.code,{children:"[-1/2^nQubit;1/2^nQubit]"})," into ",(0,i.jsx)(t.code,{children:"(2^nHash)-1"})," equidistant intervals and thus ",(0,i.jsx)(t.code,{children:"2^nHash"})," points, where the smallest one is ",(0,i.jsx)(t.code,{children:"-1/2^nQubit"})," and the largest one is ",(0,i.jsx)(t.code,{children:"1/2^nQubit"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Target is then found by matching the grid point within the interval with the Hash value (when the binary representation converted to integer)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The genesis block starts with ",(0,i.jsx)(t.code,{children:"nQubit0"}),". The nQubit can be increased over time. The ",(0,i.jsx)(t.code,{children:"nQubit"})," never goes down. The nQubit determines the Era of the protocol."]}),"\n",(0,i.jsx)(t.h4,{id:"forrelation-parameters",children:"Forrelation Parameters"}),"\n",(0,i.jsx)(t.p,{children:"Our team is in parallel conducting a research around to assess the parametrisation. In particular, the number of qubits is the leading parameter and will lead the divergence between quantum and classical computer performance."}),"\n",(0,i.jsx)(t.h3,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsx)(t.h4,{id:"ui-frontend",children:"UI Frontend"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A UI forks from the substrate frontend template with a new quantum style theme, used for visualization transactions and block information, add an extra visualization panel for quantum information."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"blockchain-backend",children:"Blockchain Backend"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Adding a new consensus mechanism called QPoW (Proof of Quantum Work), it will be built as a substrate frame pallet that can be used in all the parachains and even Polkadot."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Building a blockchain node client based on substrate framework and PoQW with some modification to the block heads, which can run as an independent chain or a parachain in Polkadot ecosystem."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Adding more functions to RPC-API to implement the interaction between the node client and quantum forrelation solver backend."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"forrelation-solver-backend",children:"Forrelation Solver Backend"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Focusing on the forging part (solving the forrelation problem), built as an independent program."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Offering an RPC-API which gives access to forrelation solving ability on quantum computers. It can be used by the PoQW consensus pallet and any other program that needs a forrelation solver."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Implementation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Classical solution: an algorithm can be run on a classic computer as a fallback solution when there is no quantum computer available. In the case of classical resources, we consider:"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Amazon bracket solution: a forrelation solver implemented on the Amazon bracket system."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Qiskit solution: a forrelation solver implemented on the most widely used open-source quantum computing library which also contains adapter to many popular quantum computing systems like IBM Q."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"devops-pipeline-for-scaling-clusters-with-quantum-computers",children:"DevOps Pipeline for Scaling Clusters with Quantum Computers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Building a devcontainer for developers, which can offer a stable rust development and quantum computing environment."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Dockerfiles and Scripts used for deploying and scaling clusters with quantum computing on IBM Cloud and AWS."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"Our project is based on Substrate. We use the modularity of the framework to build all the elements we need to end up with the layer using the proof of quantum work \u2013 the QBITCOIN. In addition, we aim to keep the blockchain connected with the rest of the ecosystem (the best way is to be determined, either to aspire to become a parachain or through bridges). The PoQW and concepts of quantum computation can enhance the entire ecosystem, making Substrate/Polkadot the first truly quantum enabled block chain."}),"\n",(0,i.jsx)(t.p,{children:"The primary audience are the users of the QBITCOIN, which is a blockchain on its own. We do however anticipate in the next iterations to deploy the Quantum Lock across different applications (bridges, for instance)."}),"\n",(0,i.jsx)(t.p,{children:"Firstly, our project introduces the proof of quantum work and thus bridges the abrupt development in the quantum computing with the blockchain. Across the board, every industry is preparing for the adoption of quantum computing and the Quantum Lock is doing this task for the Polka ecosystem. Once the PoQW is deployed, the quantum resources can be further extended and used across (quantum) smart contracts. Secondly, the Quantum Lock gives an extra protection to the consensus against the adversarial quantum miners as the Quantum Lock scales with the growing quantum power and keeps it is proof of work integrity. Last but not least, the application of Quantum Lock and  PoQW paves a way to significantly ameliorate the carbon footprint of classical PoW, since it is energy efficient and de facto serves as a proof of quantum authority rather than burning protocol burning significant amount of global available energy."}),"\n",(0,i.jsx)(t.p,{children:"Existing projects with quantum computing focus on quantum security, mainly using the lattice cryptography algorithm. Our approach is different, as we focus on integrating quantum technology with the consensus protocol itself. In addition, the Quantum Lock aims to create an economic activity for available quantum resources, which will in turn stimulate the continue development of the quantum computing industry, thus creating a desirable positive feedback loop. The ecosystem that adopts quantum resources early will first and for most enjoy the spring of opportunities coming with the dawning the quantum era."}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," bqp team"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:code@qbitcoin.tech",children:"code@qbitcoin.tech"})]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Website:"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," N/A"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," (the legal entity will be specified in the coming weeks)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"bqp1: Blockchain dimension, blockchain development, Substrate/Rust, distributed databases."}),"\n",(0,i.jsx)(t.p,{children:"bqp2: Quantum dimension, quantum computing, algorithms for use in financial trading using near term quantum processors."}),"\n",(0,i.jsx)(t.p,{children:"bqp3: System dimension, quantitative trading development, machine learning."}),"\n",(0,i.jsx)(t.p,{children:"bqp4: Commercial dimension, front office trading, quantum computing ventures."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsx)(t.p,{children:"Our team repository is just being built up and we do not have anything in public domain yet."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Team: ",(0,i.jsx)(t.a,{href:"https://github.com/bqpquantum/",children:"https://github.com/bqpquantum/"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:"The Quantum Lock project is in its development infancy from the Rust perspective. We have been focusing so far on the Quantum Computing side, where we have done extensive research in Qiskit/Braket framework (as part of this project, we will provide Rust wrappers to the Python functions accessing quantum resources, which will open the quantum resources to the Rust/Substrate community beyond our project)."}),"\n",(0,i.jsx)(t.p,{children:"We have discussed the project with Polkadot team and we have been encouraged to apply for this project to start building the POC and implement the chain with proof of quantum work (QBITCOIN)."}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1.5 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 10,000USD (ETH)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--implement-quantum-lock-substrate-modules",children:"Milestone 1: \u2014 Implement Quantum Lock Substrate Modules"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Follow Substrate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"The functionality will be documented in the code. In addition, we add detailed README and link it to the white paper."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Forrelation and the adjoint functions will be covered with unit tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"White paper"}),(0,i.jsx)(t.td,{children:"We extend the existing White Paper we have with cross references to the code, which can also serve as complementary documentation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate module: Forrelation"}),(0,i.jsx)(t.td,{children:"The Substrate module will be responsible for the calculation of the Forrelation function and management of the data structures."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Substrate module: Quantum Lock"}),(0,i.jsx)(t.td,{children:"The subsequent Substrate module will utilise the Forrelation module and implements the proof of work based on the Forrelation as described above."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsx)(t.td,{children:"Substrate chain"}),(0,i.jsx)(t.td,{children:"We develop the basic framework to implement the consensus mechanism based on the Quantum Lock. The objective is to have a POC."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2--quantum-computing-libraries",children:"Milestone 2: \u2014 Quantum Computing Libraries"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 0.5 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Follow Substrate"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsx)(t.td,{children:"The White paper refers to the algorithms, which utilise the Quantum Computing (real QPU or simulators) to efficiently calculate the Forrelation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsx)(t.td,{children:"Functions will be tested through unit tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker/git"}),(0,i.jsx)(t.td,{children:"The code will be part of the repository. Some of the routines requires login to resources (Qiskit, for example, offers free access to simulated resources, but personal account needs to be created) and thus the vanilla Docker may not be applicable (user provided config files may be needed)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"White paper"}),(0,i.jsx)(t.td,{children:"Part of the White paper refered above. The quantum routines are not important for the Quantum Lock itself, but they are important for the process of forging (mining using the proof of quantum work). We thus complement the Milestone 1 with these routines. In addition, this will bring the \u201cquantum\u201c to the Substrate."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Substrate module: Quantum Resource Access"}),(0,i.jsx)(t.td,{children:"We provide a module using Foreign Language Interface PyO3 to wrap the Python functions, which are responsbile for managing and accessing the quantum resource. This module will have a complementary Python repository, which will hold the body of the functions."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Substrate chain"}),(0,i.jsx)(t.td,{children:"This module complements the chain POC outlined above."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"Our long-term plan is to implement the full blockchain based on the proof of quantum work. We use Substrate to be able to bridge to other protocols. The Quantum Lock can be used across different projects and we consider this is a first step to bring the quantum computation into the blockchain \u2013 utlimately, we envisage the creation of the Quantum Smart Contracts, where Quantum Computation will be available through the contract."}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Meeting with Parity team, who recommended us to join this programme. We have been admitted to bootcamp programme organised by Outliers Venture."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);