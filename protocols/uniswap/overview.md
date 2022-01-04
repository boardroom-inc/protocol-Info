**Uniswap is a decentralized exchange protocol that enables trading between any Ethereum tokens. Liquidity providers can deposit asset pairs to earn trading fees, in exchange for bearing risk of losses from large price movements.**

Uniswap protocol is goverened and upgraded by UNI token holders, using three distinct components; the UNI token, governance module, and Timelock. Together, these contracts allow the community to propose, vote, and implement changes to the uniswap protocol.

Any addresses with more than 10M UNI delegated to it may propose governance actions, which contain finished, executable code. When a proposal is created, the community can cast their votes during a 3 day voting period. If a majority, and at least 4M votes are cast for the proposal, it is queued in the Timelock, and may be executed in a minimum of 2 days.

Governance Process
------------------

Uniswap uses Compound governance architecture for proposals and voting, with some minor modifications. Uniswap's token supply is 1 billion UNI versus Compound's 10 million COMP supply, so while the relevant proposal and quorum thresholds are equal in percentage terms at 1% and 4% of total voting power, the number of UNI tokens required to pass a proposal is higher. Additionally, while Compound uses a ~2.5 day voting period, Uniswap allows voting over a 7 day period.

#### Phase 1: Temperature Check

The purpose of the Temperature Check is to determine if there is sufficient will to make changes to the status quo. Voters use Snapshot to indicate their interest in bringing it forward to the next stage, linked from a governance forum post.

#### Phase 2: Consensus Check

The purpose of the Consensus Check is to establish formal discussion around a potential proposal. This is done through a follow up Snapshot proposal - a 50k UNI yes-vote quorum is required for the Consensus Check to pass.

#### Phase 3: Governance Proposal

Phase 3 is the final step of the governance process. The proposal should be based on the winning outcome from the Consensus Check and can consist of one or multiple actions, up to a maximum of 10 actions per proposal.

#### Soft Governance:

The process described above lays out a structure for those wishing to host a formal vote on a particular issue. However, governance systems also require a degree of "meta governance" discussions that inform the direction of and the implementation processes behind policy, but which don't qualify as policy themselves. The community may discuss new ideas and strategies for governance in the "Governance-Meta" category of the forum. On-chain voting is not necessary to make updates to off-chain processes.

Additional Resources
--------------------

* [Discord](https://discord.com/channels/597638925346930701/597638926152499206)
* [Discourse Forum](https://gov.uniswap.org/)
* [Voting App](https://app.uniswap.org/#/vote)
* [Github](https://github.com/Uniswap)
* [Uniswap Governance Docs](https://uniswap.org/docs/v2/governance/overview)
* [Compound Governance Docs](https://compound.finance/docs/governance)
* [Twitter](https://twitter.com/UniswapProtocol)
* [UNI Token Info](https://www.coingecko.com/en/coins/uniswap)

Glossary
--------------------

-   *UNI*: An ERC-20 token that designates the weight of a user's voting rights. The more UNI a user has in their wallet, the more weight their delegation or vote on a proposal holds.

-   *Delegation*: UNI holders cannot vote or create proposals until they delegate their voting rights to an address. Delegation can be given to one address at a time, including the holder's own address. Note that delegation does not lock tokens; it simply adds votes to the chosen delegation address.

-   *Proposal*: A proposal is code that is executed by the governance contract through timelock. It can replace the governance contract, transfer tokens from the community treasury, or perform an almost infinite range of other on-chain actions. In order to create a proposal, an address must have at least 1% (10M UNI) of all UNI delegated to their address. Proposals are stored in the "proposals" mapping of the Governor smart contract. All proposals are subject to a 7-day voting period. If the proposer does not maintain their vote weight balance throughout the voting period, the proposal may be canceled by anyone.

-   *Quorum*: In order for a vote to pass, at least 4% of all UNI (40M) must vote in the affirmative. The purpose of this quorum is to ensure that the only measures that pass have adequate voter participation.

-   *Voting*: Users can vote for or against single proposals once they have voting rights delegated to their address. Votes can be cast while a proposal is in the "Active" state. Votes can be submitted immediately using "castVote" or submitted later with "castVoteBySig" (For more info on castVoteBySig and offline signatures, see EIP-712). If the majority of votes (and a 4% quorum of UNI) vote for a proposal, the proposal may be queued in the Timelock.

-   *Voting Period*: Once a proposal has been put forward, Uniswap community members will have a seven day period (the Voting Period) to cast their votes.

-   *Timelock*: All governance actions are delayed for a minimum of 2 days by the timelock contract before they can be executed.
