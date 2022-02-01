# Silo

Silo is an isolated-markets lending protocol. Smart contracts have a modular design and mostly follow Uniswap’s naming convention. The protocol consists of:

* *Silo Factory* deploys Silos (money markets.)
* *Silo contract* holds liquidity for a given asset and manages its borrowing and lending functions. 
* *SiloBridgePool* manages the bridge asset (e.g. ETH). SiloBridge contract is an unlimited set of ETH silos that store ETH liquidity and manage borrowing and lending ETH between the bridge pool and each silo. 
* *SiloOracle* is the source of prices for the protocol. It enables oracle extensions. Silo will support Uniswap V3 TWAP oracle among others. 
* *Router* contracts allow for action batching. For example, if a user creates 2 lending positions, the router turns 4 transactions into one atomic execution. 
* *Interest Rate Model* implements dynamic interest rate using PID controller. 

## Proposals

How to create a governance proposal.

### Process

1. Submit a post in [Silo Governance Forum](https://gov.silo.finance/) under Proposal Discussion. The goal is to gauge the community's interest and build consensus. Topics under discussion will be archived at one point. 

2. Get in touch with prominent members of the Silo community to discuss your proposal. You can do that in the discord Server under #proposal-discussion channel. You can also discuss your proposal during Silo Weekly that takes place every Thursday 3:00 PM UTC on the Discord Stage. 

3. If you believe your proposal has traction, create a formal proposal under the [Snapshot Proposals](https://gov.silo.finance/c/snapshot-proposals/5) section in the Governance Forum. You can use this [proposal template](https://resources.silo.finance/governance/proposal-template).

4. A formal proposal needs a snapshot vote. This is important to formally measure consensus. Either you or someone in the community can publish a [snapshot vote](https://snapshot.org/#/silofinance.eth). Once the snapshot is created, attach it to your formal proposal and ask Silo team to publish it via the official channels. 

5. Once the snapshot vote is passed, you, or a member of the community, can create an on-chain vote. On-chain votes are needed for proposals concerning moving the DAO's assets. Visit Silo's [governance page on Tally](https://resources.silo.finance/governance/proposal-template) to create a proposal. 

### Snapshot Parameters

* Proposal Threshold: 100K $SILO is needed to create a proposal
* Voting Period: 5 days
* Quorum: 10M $SILO has to participate 

### On-Chain Governance Parameters

* Proposal Threshold: 100K $SILO is needed to create a proposal
* Voting Period: 8 days
* Voting Delay: 2 days
* Quorum: 10M $SILO has to participate

### Voting on On-Chain Proposals

You need to delegate your voting power before you can vote on active proposal. You can either delegate your vote to your wallet or someone else's in the community. You need to delegate your vote once only. You can always change the wallet address you have delegated your vote to. 
Delegating your vote require an on-chain transaction and therefore costs gas. 
If you you delegated your vote to your wallet, you can vote on active proposals. Just visit Silo's [governance page on Tally](https://resources.silo.finance/governance/proposal-template) and click on an active proposal to review the proposal's details and cast your vote. Voting on a proposal is an on-chain transaction that costs gas. 
In case your vote is delegated to someone else, they will vote on your behalf on proposals in any way they choose to. 

## Additional resources: 

* [Silo](https://www.silo.finance/)
* [Forum](https://gov.silo.finance/)
* [Snapshot](https://snapshot.silo.finance/#/)
* [Governance Page](https://www.withtally.com/governance/eip155:1:0xA89163F7B2D68A8fbA6Ca36BEEd32Bd4f3EeAf61)
* [Discord](https://discord.com/invite/silo-finance)
* [Twitter](https://twitter.com/SiloFinance)
* [Github](https://github.com/silo-finance)
* [Telegram](https://t.me/silo_community)