
<p align="center">
  <a href="http://app.boardroom.info/BanklessDAO">
    <img src="https://miro.medium.com/max/1400/1*V3K-Uu2va_r9p7O2p_FzMw.png" alt="Synthetix" width="400" />
  </a>
  <h1 align="center">Synthetix Weekly Update</h1>
  <p align="center">
    November 5th, 2021
  <br />
  <a href="http://app.boardroom.info/BanklessDAO"><strong>View in the Portal »</strong></a>
  <br />
  </p>
</p>

### <p align="center"> *New Weekly Update for Synthetix from Mark Priddy November 1st 2021 - November 5th 2021*

## Discord Announcements
	
[November 2nd Recap Blog](https://snxweave.medium.com/snxweave-weekly-recap-af98e1000e8c)

[On Spotify](https://open.spotify.com/show/5RkXS9nwyfkwQsnt7svavX)

- **Reminder that a New Voting Guide** was released for new Synthetix Community Members [here](https://medium.com/@akng105/a-guide-to-synthetix-voting-for-new-community-members-fa57d929b2ce)

- Rewards are now claimable [here](https://synthetixembassy.io/gpp) by all addresses who delegated $UNI for the Governance Participation Program

- Kwenta’s trading competition ended last week
	
## Governance

### Spartan Council and Core Contributor Committee

- New proposal by Afif [SIP-188](https://sips.synthetix.io/sips/sip-188) to add a synth for sETHBTC
  - Drafting a second proposal which will propose adjusting the fees for synth-to-synth trading by charging fees between non-sUSD pairs as if they are trading through sUSD first
	
- The Wrappr Factory [SIP-182](https://sips.synthetix.io/sips/sip-182/) was implemented Thursday October 28th 	
  - Proposed a new abstract factory contract that can deploy new wrappers as needed, rather than creating another distinct SIP and contract for each new token to be added in the future	
  - It will be starting with ETH and LINK, and then each new Wrappr instance can be introduced to the factory via a SIP
  - [SCCP-143](https://sips.synthetix.io/sccp/sccp-143/) to raise the L2 ETH wrapper cap to 1,500 ETH and lower minting fees just passed
	
- [SCCP-142](https://sips.synthetix.io/sccp/sccp-142/) discussed which will increase L2 inflationary rewards from 50k to 75k SNX weekly
  - Will be voted on soon
	
	
### GrantsDAO

- The full budget for this epoch has been received from the Treasury Council, so the gDAO is now able to move forward with projects

- One of the grantDAO’s projects is a [debt hedging bot](https://medium.com/@SynthetixGrants/synthetix-debt-hedging-bot-458fca8b0f4b) that stakers can use to automatically hedge their debt externally
  - With the Heroku integration, this bot is going to be much easier to use
 
- [Teleportr](https://medium.com/@SynthetixGrants/teleport-eth-to-optimism-with-teleportr-f6b1b719736c) is back up and running after it was incorrectly labeled as a phishing site
  - Proves the need for decentralized hosting services

- Tools.Synthetix is one of the grantsDAO’s ongoing initiatives that will organize different tools that directly and indirectly help the Synthetix community in an accessible format
  - Waiting on concept design for this site
	
- Working on a way to do keeper trades for low volume synths	
  - Synth circuit breaker was initially added in [SIP-55](https://sips.synthetix.io/sips/sip-55/) in order to protect the integrity of the system. "However, when a synth that isn’t traded too often exhibits this price move of 25% or more, this wrongly triggers the circuit breaker and it gets paused for trading, possibly resulting in losses for traders."[^1]	
  - gDAO working on a solution that will involve having keepers trade a low-volume synth if it hasn’t been traded for X amount of time, and oracle reports the price with Y delta from the last traded price.
	
[^1]: SNXWeave, "SNXweave Weekly Recap", *https://snxweave.medium.com/snxweave-weekly-recap-af98e1000e8c*, Medium, November 2nd, 2021. November 3rd, 2021
	
### AmbassadorsDAO

- First City Hall with the Spartan Council and Lyra [recording here](https://anchor.fm/synthetix/episodes/SD032---Spartan-City-Hall-1---Lyra-e19fq3e)

- Spartan City Hall happening regularly and will take place in the public Synthetix Stage in [Discord](https://discord.gg/bq3V9brMQV)

## Summary

- [SIP-182](https://sips.synthetix.io/sips/sip-182/) was implemented Thursday October 28th

- [SIP-187](https://sips.synthetix.io/sips/sip-187/) approved last week

-  Working on [SCCP-143](https://sips.synthetix.io/sccp/sccp-143/) to support the new Wrappr Factory per [SIP-182](https://sips.synthetix.io/sips/sip-182/)
	
- [SCCP-142](https://sips.synthetix.io/sccp/sccp-142/) is an ongoing discussion with votes pending

- [SIP-120](https://sips.synthetix.io/sips/sip-120) Atomic Exchange Function approved

- [SIP-188](https://sips.synthetix.io/sips/sip-188) still being drafted
	
	
## Additional Research

- All Synthetix Improvement Proposals [here](https://sips.synthetix.io/all-sip/)

- Kain Warwick received a mention in a [November 2nd Cointelegraph article](https://cointelegraph.com/news/crypto-founders-top-young-australian-rich-list)

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






