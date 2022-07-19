# Lil Nouns

## Summary

* Lil Nouns artwork is in the public domain.
* One Lil Noun is born and trustlessly auctioned every 15 minutes, forever.
* 100% of Lil Noun auction proceeds are trustlessly sent to the Lil Nouns treasury.
* Settlement of one auction kicks off the next.
* All Lil Nouns are members of Lil Nouns DAO.
* Lil Nouns DAO is backed by Nouns via Small Grants.
* Lil Nouns DAO uses Nouns DAO’s fork of  Compound Governance.
* One Lil Noun is equal to one vote.
* The treasury is controlled exclusively by Lil Nouns via governance.
* Artwork is generative and stored directly on-chain (not IPFS).
* No explicit rules exist for attribute scarcity; all Lil Nouns are equally rare.
* Lil Nounders receive rewards in the form of Lil Nouns (10% of supply for first 5 years).
* Nouns DAO receives rewards in the form of Lil Nouns (10% of supply for first 5 years).

## Overview

Lil Nouns is a fork of Nouns: a generative non-fungible token project on the Ethereum blockchain. Like Nouns, Lil Nouns are 32x32 pixel characters based on people, places, and things. A Lil noun is generated every 15 minutes. Here are some examples of Lil Nouns:

![](https://i.imgur.com/UmVQGMv.png)

### Lil Noun Auctions

One lil noun is auctioned every 15 minute, forever. One interface for participating in Lil Noun auctions is [lilnouns.wtf](https://lilnouns.wtf), which is a website built and maintained by the project founders ('Lil Nounders')

![](https://i.imgur.com/SAaonx6.png)

In the auction above, Lil Noun 985, which is the 986th Lil Noun (Lil Noun IDs start at 0) is for sale. The current bid is 0.88 ETH (Ether), and there are 4 minutes, and 32 seconds remaining in the auction. If this auction ends with no further bids, 0.88 ETH from whinfrey.eth ($1738.41 USD as of this writing) will be automatically and trustlessly sent to the Lil Nouns DAO Treasury and whinfrey.eth will win this Lil Noun, which means that the ERC-721 token will be transferred to their address.

You can see all the Noun ERC-721 tokens here: https://zora.co/collections/0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B

![](https://i.imgur.com/i8o3J2M.png)

## Governance

Lil Nouns DAO utilizes Nouns DAO's fork of Compound Governance and is the main governing body of the Lil Nouns ecosystem. The Lil Nouns DAO treasury receives 100% of ETH proceeds from daily Lil Noun auctions. Each Lil Noun is an irrevocable member of Lil Nouns DAO and entitled to one vote in all governance matters. Lil Noun votes are non-transferable (if you sell your Lil Noun the vote goes with it) but delegatable, which means you can assign your vote to someone else as long as you own your Lil Noun.

#### Governance slow start

In addition to the precautions taken by Compound Governance, Lil Nounders have given themselves a special veto right to ensure that no malicious proposals can be passed while the Lil Noun supply is low. This veto right will only be used if an obviously harmful governance proposal has been passed, and is intended as a last resort.

Lil Nounders will proveably revoke this veto right when they deem it safe to do so. This decision will be based on a healthy Lil Noun distribution and a community that is engaged in the governance process.

### Lil Nouns DAO

The Lil Nouns DAO treasury receives 100% of ETH proceeds from daily noun auctions. As of this writing, the Lil Nouns DAO treasury contains 701 ETH, the equivalent of $1,382,991 USD. 

![](https://i.imgur.com/nY0DJcg.png)

Lil Nouns DAO, which is based on Nouns DAOs fork of [Compound Governance](https://compound.finance/governance), is also the main governing body of the Lil Nouns ecosystem. Each noun is an irrevocable member of Lil Nouns DAO and entitled to one vote in all governance matters. 

Here is an image of [https://lilnouns.wtf/vote](https://lilnouns.wtf/vote)

Lil Nouns use their voting abilities (remember, 1 Lil Noun = 1 vote) to direct the treasury. Lil Nouns can create and vote on governance proposals, which execute transactions on the ethereum blockchain when they are approved.

### FAQ

**Q: Why does it cost money to vote?**

Votes are stored on-chain and as a result, require a gas only ethereum transaction. 

**Q: I have a Lil Noun, why can’t I vote?**

A Lil Noun can only vote on proposals created after it was born (minted).

**Q: Where do I vote?**

Go here: [https://lilnouns.wtf/vote](https://lilnouns.wtf/vote)


**Q: How long till a proposal is executed?**

Proposals transition from Voting Delay (2 days) to voting active (3 days) to timelock (2 days). 

**Q: How many votes does a proposal need to pass?**

For a proposal to pass, two things need to be true. 

1: the voting quorum needs to be exceeded.

2: a simple Yes majority is required. 

The quorum increases as the supply of Lil Nouns increases. This means as the community grows, a larger number of votes is required for the quorum to be met.

**Q: Where can I learn more about a proposal?**

Proposals are discussed by community members in the #proposal-ideas channel, and on Discourse discourse.lilnouns.wtf

**Q: How do I cancel a proposal?**

Only the proposer of a given proposal can cancel their proposal. This is done via contract by calling the ``cancel`` function with proposal number as proposalid: [https://etherscan.io/writecontract/index.html?m=normal&v=21.10.1.1&a=0x5d2C31ce16924C2a71D317e5BbFd5ce387854039&p=0xa43aFE317985726E4e194eb061Af77fbCb43F944&n=mainnet#collapse9](https://etherscan.io/writecontract/index.html?m=normal&v=21.10.1.1&a=0x5d2C31ce16924C2a71D317e5BbFd5ce387854039&p=0xa43aFE317985726E4e194eb061Af77fbCb43F944&n=mainnet#collapse9) 

**Q: I don’t have a Lil Noun, can I still propose an idea?**

Of course! Share your idea with Lil Nouners in the #proposal-ideas channel. If it has enough support, Lil Nouners can help putting up on-chain. If an on-chain proposal isn’t right for your idea, please consider #Prop House or #Lil-Grants.

**Q: Can I still vote if I transfer / sell my Lil Noun?**

No, the vote is transferred with the Lil Noun.

## Misc

### Funding

**Q: What kind of things does the DAO fund?**

Anything that’s ‘Nounish’. What’s Nounish? You tell us! But to get an idea, have a look at the proposals that have been funded by the DAO in the past.

**Q: I have an idea, but how do I get funding?**

Share it with the community in #proposal-ideas. For a longer discussion, head over to Discourse and post there. If it has enough support, you (or Lil Nouners) can submit it on-chain. If an on-chain proposal isn’t right for your idea, please consider Prop House or Lil Grants.

**Q: I made something Nounish in the past, do I get a reward?**

Awesome! Share it in the #lil-grants-retro-fund channel. Apply here for retroactive funding. A small group of Lil Nouners are in charge of the fund and will decide wether or not to reward.

**Q:What is Prop House?**

Prop House is where the DAO funds future builds, in weekly rounds. At the end of each round, the winner(s) is awarded ETH to build Every week, a round begins where the winners are awarded ETH to build out their ideas. Learn more here → [https://prop.house/](https://prop.house/)

**Q: What is the ‘Lil Grants Retro Fund’?**

The Lil Grants Retro Fund is a pool of ETH reserved to provide builders with retro/ad-hoc funding. Small amounts of capital are handed out on the spot, for a trial, to get something started or to recognize efforts for making something. The fund is in a safe, managed by a small group of Lil Nouners.

## Join

Join our [Discord](https://discord.gg/xjARUcB3tJ)

## Additional links

[Website](https://lilnouns.wtf/)
[Docs](https://lilnouns.notion.site/Explore-Lil-Nouns-db990658e6ab4cf19121b22642645032)
[Discourse](https://discourse.lilnouns.wtf/)
[Playground](https://lilnouns.wtf/playground)
[Twitter](https://twitter.com/lilnounsdao)
[Etherscan](https://etherscan.io/address/0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B)