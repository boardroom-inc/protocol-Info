
<p align="center">
  <a href="http://app.boardroom.info/BanklessDAO">
    <img src="https://miro.medium.com/max/1400/1*V3K-Uu2va_r9p7O2p_FzMw.png" alt="Synthetix" width="400" />
  </a>
  <h1 align="center">Synthetix Weekly Update</h1>
  <p align="center">
    October 15, 2021
  <br />
  <a href="http://app.boardroom.info/BanklessDAO"><strong>View in the Portal »</strong></a>
  <br />
  </p>
</p>

### <p align="center"> *New Weekly Update for Synthetix from Mark Priddy October 11th 2021 - October 15th 2021*

## Discord Announcements
	
[Last Week's Recap Blog](https://snxweave.medium.com/snxweave-weekly-recap-f0b35a2316f9)

[On Spotify](https://open.spotify.com/episode/44F2wrMzTaJf1OdYJjdW88)

- **Reminder that a New Voting Guide** was released for new Synthetix Community Members [here](https://medium.com/@akng105/a-guide-to-synthetix-voting-for-new-community-members-fa57d929b2ce)

- Synthetix tweeted a referral read by [@0xToit](https://twitter.com/i/web/status/1448380685484367874) explaining Synthetix

- Early next week, shorting will be enabled on L2 with the Sargas release. 
  - During this release there will be no downtime on L1, but there will be up to 3 hours of downtime on L2 and deposits to L2 will be frozen during that time. [See the official announcement here for details](https://blog.synthetix.io/the-sargas-release/)

#### Thales Information
	
	
- Thales is working on being ready to rollout on L2 soon after the final OP regenesis.
	
- They are hosting a trading competition on mainnet to have some fun and harden their competition framework for more competitions they plan to host on L2.
	
- Please register [here](https://thales.market/markets/leaderboard) if you want to participate


**Rewards pot is as follows:**

- 25,000 THALES
- 1,500 SNX (courtesy of treasury council)
- 10,000 ZRX (courtesy of 0xDAO)

- [Thales Opensea Marketplace](https://opensea.io/collection/thales-market)

  - The competition also includes some unique markets such as speculating on ETH/BTC market cap ratio (AKA the Flippening) and on the number of ETH burned, all served by Chainlink oracles built for Thales.



## Governance

- [SIP-135](https://sips.synthetix.io/sips/sip-135/) - L2 Shorting: This proposal brings shorting capabilities (that have been available on L1) to L2.

>To maintain consistency between L1 and L2, this release will also include implementation of two SIP’s on L2 that have already been released previously on L1 ([SIP-174](https://sips.synthetix.io/sips/sip-174/) and [SIP-145](https://sips.synthetix.io/sips/sip-145/) in the [Mirfak release](https://blog.synthetix.io/the-mirfak-release/)).

- Collateralization Ratio on L2 has been lowered to 500% as per [sccp-140](
https://sips.synthetix.io/sccp/sccp-140/)

- 3 SIPS were discussed in-depth Thursday October 14th, 2021 with the Spartan Council in the community governance [Discord channel](https://t.co/MoZraZDBZF?amp=1)
  - [SIP-161: Core Contributor Committee](https://sips.synthetix.io/sips/sip-161/)
  - [SIP-172: V2.X Governance Processes & Changes](https://sips.synthetix.io/sips/sip-172/)
  - [SIP-186: Risk Committee](https://sips.synthetix.io/sips/sip-186/)

- **A new SIP was discussed last week — [SIP-187](https://sips.synthetix.io/sips/sip-187/) to Fix Partial Synth Updates in Debt Cache.**
  - This SIP, proposed by Jackson, recommends upgrading the debt cache contract to fix an issue with partial synth updates so that the cached debt is updated after minting and burning sUSD. 
  - This SIP is still in draft; however, the council hopes to see some movement and get it out in a week or so.

- [The Atomic Exchange Function SIP - 120](https://sips.synthetix.io/sips/sip-120/) is in the process of being implemented
  - Continuing to do sandbox testing here.
	
- Code for the L2 Bridged Governance SIP is pretty much ready to go, there’s just the last bit of information from the auditors to apply before it’s ready. 
  - However, this [SIP - 171](https://sips.synthetix.io/sips/sip-171/) is being pushed back in favor of implementing L2 Shorting first with [SIP-135](https://sips.synthetix.io/sips/sip-135/). 
  - Working with Andre on a solution for [SIP - 171](https://sips.synthetix.io/sips/sip-171/), which will allow transfer of non fee reclamation balances, as it looks like it’s going to require 5–10% more gas. 
  - He hopes to have more information on this next week



## Summary

The Synthetix community is anticipating the Sargas Release as well as news on implementing L2 Shorting first with [SIP-135](https://sips.synthetix.io/sips/sip-135/). There was a new proposal discussed this week, [SIP-187](https://sips.synthetix.io/sips/sip-187/), to Fix Partial Synth Updates in Debt Cache. [SIP - 120](https://sips.synthetix.io/sips/sip-120/), "proposes a new exchange function for L1 that enables atomic transactions between synths by eschewing the current fee reclamation mechanism. The price selection method is designed to be resistant against both frontrunning oracle latency and flashloan attacks by sourcing prices from Chainlink and DEX oracles." [^1]
	
[^1]: SNXWeave, "SNXweave Weekly Recap", *https://snxweave.medium.com/snxweave-weekly-recap-f0b35a2316f9*, Medium, October 8th, 2021. October 12th, 2021
	
- A discussion took place on how to replenish the Synthetix Guardians to seek potential governance candidates and serve as mentors to new candidates.

- The dynamic exchange fee [SIP - 184](https://sips.synthetix.io/sips/sip-184/) was approved last week with six votes in favor (Michael, Kain, Spreek, Jackson, Bojan, and Danijel) and none against. Afif stated Daniel, Lecky, and Mark are working on simplifying implementation, and aiming to have it calculate exchanges at any moment for all exchanges using Chainlink’s price oracle history.


## Additional Research

- Bankless show [available here](https://www.youtube.com/watch?v=zb68Vl7cE_M) covers Kwenta's transition out of Synthetix, tokenomics, governance, staking, as well as the upcoming competition



<p align="center">
  <a href="http://app.boardroom.info/">
    <img src="https://i.ibb.co/PFcchnQ/boardroom.png" alt="Boardroom Logo" width="450" />
  </a>
</p>

<p align="center">
	This report was prepared by the Governance Scribes Guild
  <br />
  <a href="http://boardroom.info/">Portal</a>
  ·
  <a href="https://discord.com/invite/tgrTFg9">Discord</a>
  ·
  <a href="https://boardroom.mirror.xyz/JHrN8nVy_J4C7Xzj37zoyPANg0ZnNszhWy9YOZHC0lM">Join the Scribes Program</a>
</p>

<p align="center">
  <a href="https://discord.gg/CEZ8WfuK8s">
    <img src="https://img.shields.io/badge/Discord-Join-7289da?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>
  <a href="https://twitter.com/boardroom_info">
    <img src="https://img.shields.io/badge/Twitter-Follow-1da1f2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
</p>





