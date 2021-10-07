
<p align="center">
  <a href="http://app.boardroom.info/BanklessDAO">
    <img src="https://miro.medium.com/max/1400/1*V3K-Uu2va_r9p7O2p_FzMw.png" alt="Synthetix" width="400" />
  </a>
  <h1 align="center">Synthetix Weekly Update</h1>
  <p align="center">
    October 8, 2021
  <br />
  <a href="http://app.boardroom.info/BanklessDAO"><strong>View in the Portal »</strong></a>
  <br />
  </p>
</p>

### <p align="center"> *New Weekly Update for Synthetix from Mark Priddy October 4th 2021 - October 8th 2021*

## Discord Announcements
	
- [Last Week’s Weekly Recap Blog](https://snxweave.medium.com/snxweave-weekly-recap-f0a24674efb9)
- [On Spotify](https://anchor.fm/snxweave)
	
- [Kain](https://twitter.com/kaiynne) from Synthetix and [Ohmzeus](https://twitter.com/ohmzeus) played a friendly chess game 10.1.21 via Discord ❤️
	
- **A New Voting Guide** was released for new Synthetix Community Members [here](https://medium.com/@akng105/a-guide-to-synthetix-voting-for-new-community-members-fa57d929b2ce)
	

#### The grantsDAO commissioned a Discord bot for stakers to automatically hedge their debt on centralized exchanges.

- The hedging bot takes USDT and trades it to the assets that compose the global sUSD debt pool, including short positions. 

- If the asset is not supported on Binance, the USDT will be traded for the base currency (default ETH). 

- The bot will rebalance when the TOLERANCE threshold is met

- [Read more here](https://medium.com/@SynthetixGrants/synthetix-debt-hedging-bot-458fca8b0f4b)

- [Access Synthetix Debt Hedging bot docs here](https://github.com/IlyaSleptsov/Synthetix-debt-hedging-bot)









## Governance

- Recording of Synthetix’s Community Governance Call available [here](https://anchor.fm/synthetix/episodes/SD030---Community-Governance-Call---September-2021-e184rsi)

- At this time, there is a major inefficiency in the the [Governance Participation Program](https://ambassadors-blog.synthetix.io/governance-participation-program/)

  - In an attempt to mobilize dormant voting power held by smaller token holders who support the Synthetix Ambassadors’ governance philosophy, we are introducing a 32,000 $SNX incentive program in cooperation with the synthetixDAO that will retroactively rewards wallets that delegate $UNI tokens to the ambassador multi-sig for the duration of a 30 day epoch.[^1]

[^1]: Proposal for the Governance Participation Program https://sips.synthetix.io/sips/sip-168/

- Delegators are earning over 120% APY just for delegating their $UNI to the ambassador multi-sig

- So far, this is a successful experiment that showed the community that in addition to incentives, the social element to governance is really important.

- Incentives are live for another 2 weeks

- A recording of the corresponding [SIP - 168](https://anchor.fm/synthetix/episodes/SD024---SIP-168-e15gde1) presentation

- Technical explanation of [SIP - 168](https://sips.synthetix.io/sips/sip-168/)

- If you are interested delegating visit the Synthetix Embassy site [here](https://synthetixembassy.io/protocol/UNI)

- Possible future iterations on this program in the future. Possibly a lottery type reward system.


## Summary

- In about 2 weeks time, a testnet L2 trading competition will be launched and then later opened to the community to test futures for synths

- **Atomic exchange function** still being tested but current market volatility has slowed progress
  - Fine tuning, waiting for Chainlink updates, and looking into the data to make it smoother

- **Simulated liquidity** is piled on top of the Chainlink oracle price for a synth and puts a ceiling on the value. It is still concentrated at the oracle price and is finite but it's still better than anywhere else on chain or centralized exchange.

- The **wrapper factory** is one of the ways Synthetix will improve liquidity on L2. For example, having more than wETH in liquidity. This tool will allow the spartan council to create a new wrapper by calling a function on chain. 

- **Dynamic exchange fees** break fees down into two components. 
	- Part one is a base fee that never changes nor can it be tweaked by SCCP. 
	
	- Part two is dynamic fee that responds to price instability. When volatility occurs, there are transient front running opportunities that governance is looking to minimize. 
	- Overall, the fees look backwards to ensure price stability. 
	
	- This is another effort to cut down front running on L2. 
	
	- Implementation coming soon to L2

- V3 engineering Update - development moving fast to research a “Router Proxy” which will change the way we code and make it less prone to error, making it easier to upgrade. More research being completed on how to implement a fully fledged governance system on top of V3. For example, Compound Finance.

- **V3 Product Update - new V3 team member Andy, more members to come. Kain and others going through details on supporting the [new governance organization](https://sips.synthetix.io/sips/sip-172/). Next iteration for Synthetix and Defi**

- V2 Governance Update - Implemented the Treasury Council which replaced the Synthetix DAO. Established governance working group which are coordinating to focus governance where it is needed.

- Established Core Contributor Committee - [SIP - 155](https://sips.synthetix.io/sips/sip-155/) proposed deprecating the current synthetixDAO and replacing it with two new governance bodies, The Synthetix Treasury Council and the Core Contributor Committee. 
	
	- The CCC is proposed here in [SIP - 161](https://sips.synthetix.io/sips/sip-161/)

- Will establish a Risk Committee with [SIP - 186](https://sips.synthetix.io/sips/sip-186/). This will be a parallel that runs alongside feasibility. 
	
	- Able to address SIPs and fully review SIPs. 
	
	- For example, a linear vesting model was going to be introduced but had the unintentional consequence where half of SNX would be liquid and wouldn't be feasible.

- Continuing to engage with other DAOs to learn their purpose and what strategies are working for them

- **Collaborating with Yearn on how to solve problems with DAOs and making the process as permissionless and open as possible**


### **Layer 2 Updates**

- 2-3 weeks away from starting the debt pool merge

- 6 weeks until synths fungibility implemented

- Migrating debt positions on L2

- Increasing liquidity on L2 to reduce front running

- Waiting to see Chainlink’s further improvements to oracles on L2

- Shorts for synths coming along nicely and working with front end designer to update in the next week

- Hopefully this will make the debt pool more balanced on L2

## Additional Research

- If you have a project (for example [Defi Llama](https://defillama.com/)) apply for a Synthetix Grant through [grantsDAO](https://snxgrants.io/)

- Working on an NFT project but details are not being shared at this time



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





