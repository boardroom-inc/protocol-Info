
# Saddle finance

Saddle is a decentralized automated market maker on the Ethereum blockchain, optimized for pegged value crypto assets such as stablecoins and wrapped BTC. 

We believe in collaboration, in building Saddle as a DeFi lego block, and in helping DeFi teams bring pegged asset swaps to any blockchain or L2.

## Overview

Saddle enables cheap, efficient, swift, and low-slippage swaps for traders and high-yield pools for LPs.

Saddle’s open-sourced StableSwap implementation in Solidity is the pillar for many DeFi projects, across different verticals and blockchains.

### Why Saddle?
- Saddle stands for DeFi: We commit ourselves to [open-source software](https://github.com/saddle-finance) and collaboration to fulfil the promise of DeFi, of financial Lego blocks.
- Saddle is safe & legit: Saddle protocol is audited and secured by leading blockchain security firms like Certik, Quantstamp, and OpenZeppelin. Read the audits [here](https://github.com/saddle-finance/saddle-audits).
- Saddle is collaborative and fun to work with: We root our ethos in the desire to [support](https://docs.saddle.finance/build-with-saddle) the DeFi ecosystem and partner with like-minded protocols.

### Who built Saddle?
Saddle is built by DeFi natives with prior years of developer experience at Web2 companies like Uber, Amazon, and Square. As regular DeFi users ourselves, we’ve seen first-hand how important an active and vibrant community is for a project’s success. We know Web2, but we know Web3 better.
You might have interacted with our founder [Sunil](https://www.linkedin.com/in/sunilsrivatsa/) (aka [devops199fan](https://twitter.com/devops199fan)) in the YFI community (he’s a multisig signer), or used tools created by members of our team, like yieldfarming.info by [John](https://www.linkedin.com/in/jongseunglim/) (aka [Weeb_Mcgee](https://twitter.com/Weeb_Mcgee)).


## Token

Saddle has served as community and a developer first infrastructure entirely embracing open-source collaboration since our launch in Jan 2021. We are here today because of the many community members and liquidity providers who supported our journey over the past year.

As the Saddle protocol grows and develops, DAO governance is our next step in our community and LPs outreach.

SDL is the Saddle DAO governance token.

### SDL Allocation
The max supply of 1 billion SDL has been minted at genesis and will become available over the course of 3 years. We split the initial SDL allocation between:

![](https://i.imgur.com/ilpJH63.png)
### SDL Community Token Allocation
The Saddle community tokens (510,000,000 SDL) are further allocated as per the schedule below:

![](https://i.imgur.com/beEhgk3.png)
15% of SDL (150,000,000 SDL) can be claimed by past liquidity providers and users with 2-year vesting. This is broken down as follows:
- 10.5% pro rata to historical liquidity providers (105,000,000 SDL)
    * Cut-off date is 11/1/21
    * Tokens were distributed per block to historical liquidity providers by accounting for provided liquidity amounts in dollars as a percent of total TVL
    * Rewards were doubled during the one month guarded launch period
* 3% split evenly across veCRV holders (30,000,000 SDL) as a token of thanks for the StableSwap maths (using the latest EPS snapshot)
* 0.5% split evenly across each address that has ever swapped using Saddle contracts (5,000,000 SDL)
    * Cutoff date is 10/1/21 (any addresses swapping with any Saddle contract before then is eligible)
    * Addresses swapping less than a total of $100 are excluded to prevent sybils
* 0.5% split evenly across multisig signers (5,000,000 SDL)
* 0.5% pro rata to early depositors - we’d like to appreciate and compensate these community members, a few of whom took risks and lost value.
The token is initially non-transferable for a period of between 3 to 12 months. After 3 months, governance may vote to enable transfers. After 12 months, they may be enabled by anyone. The token and vesting contracts have been audited by Quantstamp, read the audit [here](https://github.com/saddle-finance/saddle-audits/blob/master/10-27-2021_Quantstamp_Token.pdf).

We launched SDL as non-transferrable to allow community members to earn more and deter short-term profit-seekers and mercenaries.

All historical users and liquidity providers can claim their SDL now on the [Saddle dApp](http://saddle.exchange/).

## Governance

### Important links

* [Saddle Improvement Proposals GitHub](https://github.com/saddle-finance/SIPS)
* [Saddle Improvement Proposals (overview)](https://sips.saddle.community/)
* [Discourse (saddle.community)](https://www.saddle.community/)
* [Snapshot](https://snapshot.org/#/saddlefinance.eth)

### Proposal Process
SIP stands for [Saddle Improvement Proposal](https://github.com/saddle-finance/SIPS/blob/master/SIPS/sip-0.md#what-is-an-sip). An SIP is a design document providing information to the Saddle community about a proposed change to the system. The author builds consensus within the community and documents dissenting opinions

### Governance steps
The chart below shows a high-level view of the Saddle governance process:

![](https://i.imgur.com/TOjoHfi.png)

#### Stage 1: Gauge Interest
If you have an idea for improving the Saddle protocol, the first stage is to test the waters. Go to Saddle on Discord and look for the Governance > #discussion channel. Share your idea and listen to what the community has to say.
If the initial reactions are positive and encouraging, start formalizing your idea into a post for polling on Discourse.

#### Stage 2: Poll on Discourse
Go to Discourse, look for the Proposals category, and post your proposal there (rec copying the formatting from a prev passing proposal, or using [this template](https://github.com/saddle-finance/SIPS/blob/master/sip-X.md)).

![](https://i.imgur.com/Y8w2Ejm.png)

Here’s are a few handy tools to help draft your post:
* Tips on posting proposals on Discourse: [Link](https://www.saddle.community/t/about-the-proposals-category/15)
* Template for your post: [Link](https://github.com/saddle-finance/SIPS/blob/master/sip-X.md)
* Before you click the submit button, check if your post has:
    * Sections: Simple Summary, Abstract, Motivation, Specification
    * Poll: Include a 72h poll (using the most appropriate poll type, typically Y/N or multiple choice)
All set! Last step is to ping a Saddle Core Contributor in Discord to blast your shiny new proposal on all the socials to maximize engagement.

#### Stage 3: Vote on Snapshot
If the Discourse poll passes after 72 hours, the SIP editor will step in to formalize the SIP. The voting process comprises:
* Creating a vote on Snapshot (by SIP editor)
* Creating a specific discussion channel on Discord (by Saddle core contributor or gov mod)
* Announcing the vote on all socials (by Saddle core contributor)
* 72-hour voting period

#### Stage 4: Fork SIP
Once the Snapshot voting is finished and passes successfully, the SIP editor will fork the SIPs repo and create a pull request (PR):
* The PR will have a copy of your proposal
* With the metadata filled out, notably discussions-to which will link to the Discourse post
* The proposal will be named in the format: sip-draft_title_abbrev.md
* Read SIP-0 for additional information (e.g., workflow, attaching images/diagrams, SIP editor responsibilities).

#### Stage 5: Execution
Lastly, a Saddle core contributor or SIP editor will coordinate with the community multisig to execute the proposed change.

### GOVERNANCE ROLES
The stakeholders for the governance process can be both internal and external. Various governance roles exist to ensure the stakeholders engage in delivering the type of value desired or expected. The key roles and responsibilities of Saddle governance are:
#### SIP Editor
Broadly, the SIP editor’s powers and responsibilities are:
* Checks the incoming proposals for quality
* Validate technical correctness
* Check language and grammar, and other editorial aspects
* Work with the SIP authors for revision, where required
* Create vote on Snapshot
* Formalize and document passed SIPs on GitHub
The editors don’t pass on judgement on SIPs, rather act as an administrative check-and-balance role.
**Who:** The current editors are `@alphastorm`, `@penandlim`, `@hammeiam`, and `@ug02fast`.
#### Saddle Core Contributors
Core contributor powers and responsibilities:
* Provide feedback on proposals
* Advise on how best to create a passing proposal
* Create channels and shepherd discussions in Discord and Discourse
* Post announcements of voting start on social channels (Discord, TG, Twitter)
**Who:** Anyone with a Saddle Team role in Discord
#### Governance Mod
Gov mod powers and responsibilities:
* Moderating messages in communities and deleting inappropriate messages
* Invite, ban, or suspend people who violate the community rules
* Create channels and shepherd discussions in Discord and Discourse
* Create vote on Snapshot
**Who:** No one as of now. Community members interested in contributing as a gov mod should ping `zim#2649` on Discord.

## Additional links

* Dapp: http://saddle.exchange/
* Saddle Blog: https://blog.saddle.finance/
* Discord: https://discord.gg/hX8RZFBW9R
* Twitter: https://twitter.com/saddlefinance
* GitHub: https://github.com/saddle-finance
* Telegram: https://t.me/saddle_finance
