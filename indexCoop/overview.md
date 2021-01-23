*Index Coop is an index provider and decentralized asset management protocol. Its primary product, the Defi Pulse Index (DPI), comprises a broadly diversified pool of governance tokens which is rebalanced monthly based on market capitalization.*

### The INDEX Token
INDEX is a governance token used to vote in changes to the Index Coop. INDEX holders may vote in smart contract upgrades to the Index Coop, vote in new Index Coop products, vote on allocation of the Index Coop treasury, and more.

### Governance Process
Index Coop uses the Snapshot off chain voting tool to hold governance votes, and also makes use of Discourse's native polling system (which grants 1 vote per account) for building consensus earlier in the proposal process.

INDEX holders are also able to excercise control over governance tokens held within the DPI index. Currently, only voting systems without locking or deposit functionality are supported (Compound, Uniswap, and Aave). When a vote in an underlying protocol is submitted on chain, a corresponding Snapshot poll is created to gauge INDEX holder sentiment. If a majority is reached with at least 5% of circulating INDEX tokens in support, the Index Coop multisig executes the vote on behalf of DPI token holdings.

#### Index Improvement Proposals (IIPs)
An IIP is a proposal to update some function or standard within the Index Coop. IIPs can vary widely from proposing new Index products, to requesting funds from the Index Treasury, to performing Index Coop smart contract upgrades. The IIP proposal process largely follows the same behavior as Ethereum's EIP process.

The most up to date status on every IIP can be found in [this github repository.](https://github.com/SetProtocol/IIPS)​. If you would like to submit a proposal to the Index Coop, check out the more detailed IIP contribution guide [here.](https://gov.indexcoop.com/t/iip-contribution-process/86)​

This is a high level overview of an IIP lifecycle:

1.  Informal discussion on the [Discord](https://discord.com/invite/ezuJ6ZZ) or [forum](https://gov.indexcoop.com/).
2.  Forum Proposal/Github IIP.
    1.  If the proposal has >90% agreement, it goes to a Snapshot vote.
    2.  If not, then:
3.  Governance Call & Discussion
    1.  If it passes, goes to a Snapshot vote
4.  Implementation by the parties involved with the improvement

![](https://gblobscdn.gitbook.com/assets%2F-MJY-enmfAw5ra2s-8QX%2F-MJiAQT4RjVMOja_4CsG%2F-MJiBwCkxEjmj2Aak2GX%2Fimage.png?alt=media&token=0cb42321-cce9-4d38-abf3-e3c70b5b2702)

#### Meta-Governance
Meta-governance refers to the ability for $INDEX token holders to vote on governance proposals for other protocols. Governance tokens held within the $DPI index can be used to vote on their respective proposals. Currently this is limited to Uniswap, Compound and AAVE. You can head to our meta voting page if you hold $INDEX to check for open proposals and cast your vote!

Meta-governance voting is carried via the GovernanceModule in the following steps:

1.  A governance vote is called for AAVE, Compound or Uniswap.
2.  The proposal is duplicated on Index Coop's [snapshot page](https://www.indexcoop.com/vote).
3.  $INDEX holders vote on the meta governance proposal via snapshot.
4.  The meta governance voting period will end 24 hours before the underlying (AAVE, Compound, or UNI) governance vote ends.
5.  At the end of the voting period if a 5% quorum is reached, the Index Coop multisig will vote according to the related snapshot proposal majority. Votes will not be split proportionally, so reaching quorum 'for' a proposal will use the full weight of tokens held by DPI in favour and likewise if majority 'against'.

### Additional Resources

* [Discourse Forum](https://gov.indexcoop.com/)
* [Discord Chat](https://discord.com/channels/762061559744299010/762061784379031554)
* [Snapshot Polls](https://app.boardroom.info/indexCoop/proposals)
* [Website](https://www.indexcoop.com/)
* [Github](https://github.com/SetProtocol/index-coop)
* [Documentation](https://docs.indexcoop.com/)
* [Blog](https://www.indexcoop.com/news)
* [Twitter](https://twitter.com/indexcoop)
* [INDEX Token Info](https://www.coingecko.com/en/coins/index-cooperative)