# Yam

## Overview
### What is Yam ?

Yam launched on August 12th, 2020 as An Experiment in Fair Farming, Governance, and Elasticity. Yam Protocol mashes up some of the most exciting innovations in programmable money and governance. Built by a team of DeFi natives, but now controlled by the community.

On December 29th, 2020 the Yam community has voted to disable the rebasing / elastic supply function of Yam and the scaling factor of Yam has been fixed at 2.50. 

Originally, YAM was an elastic supply cryptocurrency, which expanded and contracted supply in response to market conditions, targeting 1 USDC per YAM. This stability mechanism was supplemented by one key addition to existing elastic supply models: a portion of each supply expansion was used to buy yUSD/ETH and added to the Yam treasury, which is controlled via Yam community governance.

YAM now acts as a DAO governance token and has evolved into a launch pad for DeFi projects supported by a community governed treasury. Yam is currently developing multiple projects including Umbrella (Smart Contract Insurance), [Degenerative.Finance](https://degenerative.finance/)(Synthetics) and Yam DAO Set (Set Protocol DAO Investment fund). All of which will generate revenue for Yam. For most current projects, please visit us on [Discord](https://discord.gg/RgHpsmShhE).

### Fair Launch
YAM was launched using a fair distribution method inspired by YFI, in which users could stake cryptocurrencies to receive a pro rata distribution of YAM each block. There was no premine, and neither the launch team nor VCs received any shares outside the prescribed rules of distribution to which all had access.
This form of distribution had two goals:
To ensure Yam was truly a community owned and governed protocol.

To align interests with the communities of the staked tokens, all of which had potential value and experience to add to the Yam protocol

[Launch Medium Article](https://medium.com/yam-finance/yam-finance-d0ad577250c7)

### Rebase
Rebasing mechanism had been disabled by community governance as of Dec 29th, 2020. 

Below is just for archival purposes: 

Rebasing is a mechanism generally used to promote price stability by increasing the supply when the price is above the target price and decrease supply when price is below the target. YAM is currently pegged to 1 USDC, and uses the YAM/ETH Sushiswap pool to generate a TWAP (Time-Weighted Average Price) oracle to determine the necessary change in supply.

* If YAM price is above 1.05 USDC, YAM supply increases. This is known as a positive rebase.
* If YAM price is below 0.95 USDC, YAM supply decreases. This is known as a negative rebase.
* If YAM price is between 0.95 and 1.05 USDC, YAM does not rebase.
When a rebase occurs, the `scalingFactor` within the token itself changes, which automatically updates the balance of the tokens. In other words, all YAMs are always rebased.

In the Yam protocol, when a positive rebase occurs, 5% of the YAM rebase amount is minted and sold for ETH via the YAM/ETH Sushiswap pool. The ETH is subsequently deposited to the governance-controlled treasury.


## Governance
YAM launched with fully decentralized governance from Day 1 by implementing the Compound governance module. This gives control of the protocol to YAM tokenholders, meaning that updates to the protocol and management of the treasury can only be performed with approval from YAM holders.

The governance process begins on [Yam Discord](https://discord.gg/RgHpsmShhE) where ideas are initially discussed. Once discussion has formalized a potential proposal it is submitted to [Yam Governance Forum](https://forum.yam.finance/). If the community signals its interest and any necessary modifications to the proposal are made, the proposal is submitted to [Snapshot off-chain governance](https://snapshot.page/#/yam), where tokenholders can vote with their token balances.

If a Snapshot proposal is passed and no code is required to be implemented, the approved action can be taken.

If code deployment is required, the code will go to audit if necessary, and then be proposed via on-chain governance at which point tokenholders will vote on-chain to deploy.

### Timeline
Discord Ideation: 1-3 days
Forum Discussion: 3+ days
Snapshot Off-Chain Voting: 3 days
On-chain Voting: 2 days
Execution Timelock: 12 hours

### Delagation
In order to vote, you must delegate your vote to yourself or to someone else. This applies to off-chain snapshot voting as well. Any YAM tokens being used as an LP in Yam's incentivizer farming Yams are automatically delegated to self. You can currently delegate to yourself via yam.finance, and we are working on an interface to delegate to other addresses. You can also delegate via etherscan directly.

### Quorum

For a proposal to pass and be executed on-chain, it must reach "minimum acceptance quorum," which means having 200,000 BoU YAM voting "For" the proposal, equivalent to 4% of the initial token supply. Quorum requirements for Yam are based on balanceOfUnderlying, which are YAMs without the rebasing scalingFactor applied. Since the rebase function has been disabled as of Dec 29 the scaling factor is currently fixed to 2.50. Your voting power is your balance of Yam tokens / 2.50. 

To submit a proposal:
- In snapshot a user must have 100 BoU YAMs delegated to their address. 
- For on-chain voting, a user must have 50,000 BoU YAMs delegated to their address This is equivalent to 1% of the initial token supply.

Basing quorum around a minimum amount of "For" votes eliminates a scenario in which voting "Against" could actually lead a proposal to pass when abstaining would cause it to fail (for example if there were 198k "For" votes and zero "Against", a 2k "Against would allow the proposal to pass if quorum was based on total votes rather than total "For" votes). 

### LP Governance Participation
Only if you provide liquidity to Sushiswap Yam/ETH pool and stake on Yam's incentivizer using  yam.finance/farm. Don't forget to register to vote on yam.finance/governance, only needs to be done once. Voting power is determined by distributing the voting power of YAM held in the YAM/ETH Sushiswap pool, but distributed to only YAM Incentivizer stakers. This was done to mitigate flashloan threats in voting, so the Incentivizer contract keeps a record of the necessary values at needed block heights to facilitate those mitigations.

## Treasury

https://yam.finance/dashboard

Yam’s major differentiator vs other similar projects is the community funded and governed Yam Treasury. Initially the treasury was funded during positive rebases, where depending on the size of the rebase, an additional percentage was minted for the treasury. Since the rebase mechanism has been disabled since Dec 29th 2020, the treasury has been self funding

### Treasury Use Cases
The Yam treasury is controlled by the Yam community and as the community and Yam evolves there have been multiple use cases for the treasury. 
2020 Developments

Great Yam Wall - A core value proposition for YAM has always been the unique value of our growing treasury model. Great Yam Wall is an alternative to the initial ragequit designs and will allocate treasury funds for use in executing buybacks if market cap is less than treasury value. Original proposal.

Yam DAO Set (YDS) - A Collaboration with Set Protocol for Yam to build our own Set on TokenSets.com. A part of Yam treasury has been allocated to be an investment portfolio investing in other crypto assets and also utilizing DeFi yield generating strategies from yielding stablecoins to yield farming to revenue staking. 

Project Support and Investments - As of year end 2020, we have multiple projects in development that would benefit from treasury bootstrapping either liquidity or another function. This can benefit current projects but also potential future projects in a way Yam can incubate projects and teams.

## Join us
Come join the conversation on our Discord to learn more!

## Additional links

Website: https://yam.finance/

Social Links:
Medium: https://medium.com/@yamfinance
Twitter: https://twitter.com/YamFinance
Voting: https://snapshot.page/#/yam (Snapshot ⚡)
Forum: https://forum.yam.finance/
Youtube: https://youtube.com/channel/UCYQjPiXShL3WqguvR8f2xsA
Reddit: http://www.reddit.com/r/yamprotocol

Chats:
Discord: https://discord.gg/TgFpmDj
Telegram: https://t.me/yamfarm
Telegram CN: https://t.me/YamFinanceChinese

*Official YAM Token: Sushiswap - Etherscan 0x0aacfbec6a24756c20d41914f2caba817c0d8521*