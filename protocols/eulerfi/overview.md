# Euler Finance

Euler is a non-custodial permissionless lending protocol on Ethereum that helps users to earn interest on their crypto assets or hedge against volatile markets without the need for a trusted third-party. 


## Overview

Euler features a number of innovations not seen before in DeFi, including permissionless lending markets, reactive interest rates, protected collateral, MEV-resistant liquidations, multi-collateral stability pools, and much more. For more information, read the Euler [White Paper](https://docs.euler.finance/getting-started/white-paper).

## Governance

Euler will broadly follow the governance model pioneered by [Compound (10)](https://docs.euler.finance/getting-started/white-paper#ref10). The protocol will be managed by holders of a protocol native governance token called Euler Governance Token (EUL). EUL tokens will represent voting powers of the protocol software. Holders with enough EUL tokens will be able to make a formal proposal for change on the protocol. Token holders will then be able to vote on the proposal themselves or delegate their vote shares to a third party. Examples of the kinds of decisions token holders might vote on include proposals to alter include:
* The tier of an asset
* Collateral and borrow factors
* Price oracle parameters
* Reactive interest rate model parameters
* Reserve factors
* Governance mechanisms themselves

### Parameters

Execution Delay, Voting Delay and Voting Period are based on the assumption of a 15 seconds block creation time on the Ethereum Mainnet.

The governance smart contract inherits functionality from the OpenZeppelin [GovernorSettings.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/extensions/GovernorSettings.sol) module allowing Voting Delay, Voting Period and Proposal Threshold to be updated through an on-chain governance proposal and voting process

![](https://i.imgur.com/Pv3dfOh.png)

When a governance proposal is created, it enters a 2 day review period (i.e., Voting Delay), after which voting weights are recorded and voting begins.
Voting lasts for 3 days (i.e., Voting Period); once the voting period is over, if quorum was reached (enough voting power participated) and the majority voted in favour, the proposal is considered successful and can proceed to be executed 2 days (48 hours) later (i.e., Execution Delay).
Addresses delegated at least 75,000 EUL can create governance proposals having met the Proposal Threshold.

The image below depicts the on-chain governance phases and durations for each phase:

![](https://i.imgur.com/XsDMGAU.png)

### Process

On-chain governance, allows unique features such as delegated voting and proposition powers, as well as protocol (and governance configuration) updates via a time lock executor. This ensures the protocol can adapt to evolving market conditions, as well as upgrade core parts of the protocol over time.


The [General Governance Process](https://forum.euler.finance/t/welcome-to-the-euler-governance-forum/7) is documented on the Governance Forum.

The general flow for the governance process is proposed as follows: Governance forum Idea/Proposal Discussion → eIP (Euler Improvement Proposal) creation on Governance forum by forum moderator → eIP created (On-chain Proposal Creation) → On-chain Voting (and Execution if successful)

#### Idea
A great place to start a discussion on a potential governance proposal is the idea section on the forum website. If you feel confident that your idea is relevant to the community and is well-formulated, head over to the Governance Forum to begin a discussion with the community around your idea (following the process described on the forum).

Once a discussion / commenting begins around your idea, be proactive with the community and be open to suggestions. It typically takes a week for the request for comments to mature before it becomes an eIP.

#### Governance Proposal
If the discussion is well-formulated and the community has a clear understanding of the proposal and supports your idea, it will be moved by a moderator to the governance category as an eIP: Euler Improvement Proposal. Once the proposal has an eIP, an on-chain proposal can be created on the governance dashboard under the EulerDAO.

A proposal vote does not always need to be posted by the original eIP author, it can be posted by someone else or by the core team in case the minimum threshold of EUL is not being met.

A good governance proposal example can be found here: [eIP: Promote WBTC to collateral tier 3](https://forum.euler.finance/t/eip-1-promote-wbtc-to-collateral-tier/27).

Stay updated by subscribing to the [community newsletter](https://newsletter.euler.finance/) and follow the [Twitter Page](https://twitter.com/eulerfinance)!

### Treasury

The Euler Treasury comprises undistributed EUL tokens, assets accumulated as reserves from the Euler Protocol, and assets received in the course of other DAO-DAO operations. The treasury is managed by EUL token holders.


## Token

EUL is an ERC20 token that acts as the native governance token of the Euler Protocol.

### Contract
The EUL token address is: 0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b. More information about EUL can be found on [Etherscan](https://etherscan.io/token/0xd9fcd98c322942075a5c3860693e9f4f03aae07b) or [CoinMarketCap](https://coinmarketcap.com/currencies/euler-finance/). 

**Read more** on [Allocation, Vesting, Inflation and Liquid supply](https://docs.euler.finance/governance/eul#allocations-and-vesting)

## Join us

Please reach out to use via our [Discord](https://discord.com/invite/CdG97VSYGk) or [Telegram](https://t.me/eulerfinance_official). 

## Additional links

* [Euler Finance Website](https://www.euler.finance/)
* [Whitepaper](https://docs.euler.finance/getting-started/white-paper)
* [Github](https://github.com/euler-xyz)
* [Twitter](https://twitter.com/eulerfinance)
* [Medium](https://blog.euler.finance/)
* [LinkedIn](https://www.linkedin.com/company/euler-xyz/)
* [Discord](https://discord.com/invite/CdG97VSYGk)
* [Telegram](https://t.me/eulerfinance_official)
* [Documentation](https://docs.euler.finance/)