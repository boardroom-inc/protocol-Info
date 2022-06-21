# Frax Finance 

Fractional-Algorithmic Stablecoin Protocol

## Overview
Frax is the first fractional-algorithmic stablecoin protocol. 
Frax is open-source, permissionless, and entirely on-chain – currently implemented on Ethereum and 12 other chains. The end goal of the Frax protocol is to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets like BTC. The Frax ecosystem has 2 stablecoins: FRAX (pegged to the US dollar) & FPI (pegged to the Consumer Price Index).  

Frax is a new paradigm in stablecoin design. It brings together familiar concepts into a never before seen protocol:

- **Fractional-Algorithmic** – Frax is the first and only stablecoin with parts of its supply backed by collateral and parts of the supply algorithmic. This means FRAX is the first stablecoin to have part of its supply floating/unbacked. The stablecoin (FRAX) is named after the "fractional-algorithmic" stability mechanism. The ratio of collateralized and algorithmic depends on the market's pricing of the FRAX stablecoin. If FRAX is trading at above $1, the protocol decreases the collateral ratio. If FRAX is trading at under $1, the protocol increases the collateral ratio. 
- **Decentralized & Governance-minimized** – Community governed and emphasizing a highly autonomous, algorithmic approach with no active management. 
- **Fully on-chain oracles** – Frax v1 uses Uniswap (ETH, USDT, USDC time-weighted average prices) and Chainlink (USD price) oracles. 
- **Two Tokens** – FRAX is the stablecoin targeting a tight band around $1/coin. Frax Shares (FXS) is the governance token which accrues fees, seigniorage revenue, and excess collateral value.
- **Crypto Native CPI** – Frax's end vision is to build the first crypto native version of the CPI called the Frax Price Index (FPI) governed by FXS holders (and other protocol tokens). FRAX is currently pegged to USD but aspires to become the first decentralized, permissionless native unit of account which holds standard of living stable.

### Introduction
Many stablecoin protocols have entirely embraced one spectrum of design (entirely collateralized) or the other extreme (entirely algorithmic with no backing). Collateralized stablecoins either have custodial risk or require on-chain overcollateralization. These designs provide a stablecoin with a fairly tight peg with higher confidence than purely algorithmic designs. Purely algorithmic designs such as Basis, Empty Set Dollar, and Seigniorage Shares provide a highly trustless and scalable model that captures the early Bitcoin vision of decentralized money but with useful stability. The issue with algorithmic designs is that they are difficult to bootstrap, slow to grow (as of Q4 2020 none have significant traction), and exhibit extreme periods of volatility which erodes confidence in their usefulness as actual stablecoins. They are mainly seen as a game/experiment than a serious alternative to collateralized stablecoins.

Frax attempts to be the first stablecoin protocol to implement design principles of both to create a highly scalable, trustless, extremely stable, and ideologically pure on-chain money. The Frax protocol is a two token system encompassing a stablecoin, Frax (FRAX), and a governance token, Frax Shares (FXS). The protocol also has a pool contract which holds USDC collateral. Pools can be added or removed with governance.  

Although there's no predetermined timeframes for how quickly the amount of collateralization changes, we believe that as FRAX adoption increases, users will be more comfortable with a higher percentage of FRAX supply being stabilized algorithmically rather than with collateral. The collateral ratio refresh function in the protocol can be called by any user once per hour. The function can change the collateral ratio in steps of .25% if the price of FRAX is above or below $1. When FRAX is above $1, the function lowers the collateral ratio by one step and when the price of FRAX is below $1, the function increases the collateral ratio by one step. Both refresh rate and step parameters can be adjusted through governance. In a future update of the protocol, they can even be adjusted dynamically using a PID controller design. The price of FRAX, FXS, and collateral are all calculated with a time-weighted average of the Uniswap pair price and the ETH:USD Chainlink oracle. The Chainlink oracle allows the protocol to get the true price of USD instead of an average of stablecoin pools on Uniswap. This allows FRAX to stay stable against the dollar itself which would provide greater resiliency instead of using a weighted average of existing stablecoins only.

FRAX stablecoins can be minted by placing the appropriate amount of its constituent parts into the system. At genesis, FRAX is 100% collateralized, meaning that minting FRAX only requires placing collateral into the minting contract. During the fractional phase, minting FRAX requires placing the appropriate ratio of collateral and burning the ratio of Frax Shares (FXS). While the protocol is designed to accept any type of cryptocurrency as collateral, this implementation of the Frax Protocol will mainly accept on-chain stablecoins as collateral to smoothen out volatility in the collateral so that FRAX can transition to more algorithmic ratios smoothly. As the velocity of the system increases, it becomes easier and safer to include volatile cryptocurrency such as ETH and wrapped BTC into future pools with governance. 

![](https://i.imgur.com/mP2WrwA.jpg)

## Token

### Frax Shares (FXS)
FXS is the value accrual and governance token of the entire Frax ecosystem. All utility is concentrated into FXS.

The Frax Share token (FXS) is the non-stable, utility token in the protocol. It is meant to be volatile and hold rights to governance and all utility of the system. It is important to note that we take a highly governance-minimized approach to designing trustless money in the same ethos as Bitcoin. We eschew DAO-like active management such as MakerDAO. The less parameters for a community to be able to actively manage, the less there is to disagree on. Parameters that are up for governance through FXS include adding/adjusting collateral pools, adjusting various fees (like minting or redeeming), and refreshing the rate of the collateral ratio. No other actions such as active management of collateral or addition of human-modifiable parameters are possible other than a hardfork that would require voluntarily moving to a new implementation entirely. 

The FXS token has the potential of upside utility and downside utility of the system, where the delta changes in value are always stabilized away from the FRAX token itself. FXS supply is initially set to 100 million tokens at genesis, but the amount in circulation will likely be deflationary as FRAX is minted at higher algorithmic ratios. The design of the protocol is such that FXS would be largely deflationary in supply as long as FRAX demand grows.  

The FXS token’s market capitalization should be calculated as the future expected net value creation from seigniorage of FRAX tokens in perpetuity, the cash flow from minting and redemption fees, and utilization of unused collateral. Additionally, as the market cap of FXS increases, so does the system’s ability to keep FRAX stable. Thus, the priority in the design is to accrue maximal value to the FXS token while maintaining FRAX as a stable currency. As Robert Sam’s described in the original Seigniorage Shares : “Share tokens are like the asset side of a central bank’s balance sheet. The market capitalisation of shares at any point in time fixes the upper limit on how much the coin supply can be reduced.” Likewise, the Frax protocol takes inspiration from Sams’ proposal as Frax is a hybrid (fractional) seigniorage shares model.

### veFXS & Long Term Staking
In May 2020, the protocol now allows FXS holders to lock up FXS tokens to generate veFXS and earn special boosts, special governance rights, and AMO profits. Check the in depth veFXS specs for more information on how all veFXS features function.

![](https://i.imgur.com/bmfCrk8.jpg)

### A functional way to visualize to Frax

Frax uses ideas from Uniswap and AMMs to build a novel hybrid stablecoin design never seen before. In a Uniswap pool, the ratio of asset A and B has to be proportional due to the constant product function. The LP token is just a pro rata claim on the pool + fees so it is usually increasing in value (if fees higher than impermanent loss) or loses value (if impermanent loss greater than fees). The LP token is just passive claims on the pool. 

Frax takes that idea and turns it over to design a unique stablecoin. The LP token is the stablecoin, FRAX. It is the object of stabilization and always mintable/redeemable for $1 worth of collateral and the governance (FXS) token at the collateral ratio. This ratio of the two assets (collateral and FXS) dynamically changes based on the price of the stablecoin. If the stablecoin price is dropping, then the protocol tips the ratio in favor of collateral and less in the FXS token to regain confidence in FRAX. An arbitrage opportunity arises for people wanting to put in collateral into the pool at the new ratio for discounted FXS which the protocol mints for this "recollateralization swap." This recollateralizes the protocol to the new, higher collateral ratio. 

If FRAX is over $1, then the protocol tips the collateral ratio to the FXS token to measure the market's confidence in more FRAX supply being stabilized algorithmically. As FRAX becomes more algorithmic, the excess collateral can go back to FXS holders through a buyback shares function that anyone can call to burn their FXS tokens for an equal value of excess collateral. The "buyback swap" function always keeps value accruing to the governance token any time there is excess fees/collateral/value in the system. 

This 'Frax dance' is always happening and uses AMM game theory to test different ratios of collateralization, incentivize recollateralizing through arbitrage swaps, and redistribute excess value back to FXS holders through a buyback swap. The protocol starts at a 100% collateral ratio at genesis and might or might not ever get to purely algorithmic. The novel insight is to use market forces itself to see how much of a stablecoin can be algorithmically stabilized with its own seigniorage token so that it keeps a tight band around $1 like fiatcoins. Purely algorithmic/rebase designs like Basis, ESD, and Seigniorage Shares have wildly fluctuating prices as much as +-40% around $1 that take days/weeks to stabilize before going through another cycle. This is counterproductive and assumes the market actually wants/needs a stablecoin with 0% collateralization. Frax doesn't make this assumption. Instead, it measures the market's preference and finds the actual collateral ratio which holds a stablecoin tightly around $1, periodically testing small differences in the ratio when the price of FRAX slightly rises/drops. Frax uses AMM concepts to make a real-time fractional-algorithmic stablecoin that is as fast at price recovery as Uniswap is at keeping trading pools correctly priced. 

As this system gets more efficient and the velocity of the system increases, collateral pools can include other assets instead of stablecoins like volatile crypto such as ETH and wrapped BTC. As the price of the volatile asset rises, users will use the buy back shares function to distribute the excess value to FXS holders. When the price of the volatile collateral drops, there is an instant arbitrage opportunity to put in more crypto for discounted FXS to keep the collateral ratio at the target. Just like a Uniswap trading pair keeps its constant product function balanced, the Frax Protocol keeps its target collateral ratio balanced to what the market needs for FRAX to be $1. 

The above example uses "collateral" and "FXS" as the two assets within the protocol, but in reality, Frax can have multiple pools of collateral and multiple algorithmic token pools with weights, similar to Balancer. The protocol currently has USDC collateral pools and just 1 algorithmic token: FXS. In v2, we will release a second algorithmic token, the Frax Bond token (FXB) which represents pure debt with an interest rate attached.
We believe that the fractional-algorithmic design of Frax is paradigm shifting for stablecoins. It is fast, real-time balancing, algorithmic, governance-minimized, and extremely resilient. We strongly believe the Frax protocol can become a foil to Bitcoin's "hard money" narrative by demonstrating algorithmic monetary policy to create a trustless stablecoin that all of the crypto community can embrace

## Governance

The Frax governance module is forked from Compound, with FXS acting as the voting token in the system.
Users may propose new changes to the protocol if they are holding a certain threshold of FXS (1% of the total votes, equivalent to 1,000,000 FXS), or may combine their votes together to submit a proposal.
Once a proposal has been submitted, it begins an active voting period of 3 days, where it may be voted for or against. If a majority is in support of the proposal at the end of the period, and the proposal has a minimum of 4,000,000 FXS in favor, the change is queued into the Timelock where it can be implemented after 2 days.

### Access Control
Frax uses OpenZepplin's Access Control module for certain permissions. Each role in Frax that is permission through hasRole may also be decentralized by a proposal in the governance module, which can then callgrantRole on other addresses.
### Timelock (48 hours)
The Timelock contract is responsible for executing proposals that have succeeded in their voting phase, and has permissions over the other system contracts like FRAXStablecoin, FRAXShares, and FRAXPool through Access Control.  The Timelock contract provides transparency to changes that will affect the Frax protocol, as the queued proposals may only be activated after the waiting period is satisfied within the contract logic.

### Contracts
The Frax governance contract controls the Timelock contract, which receives accepted proposals and uses its authority over the system contracts to update them as needed. The Frax admin address is the initial governor of the system to which roles are granted to upon deployment. Over time, the roles will be granted to the Timelock contract which gives governance control to the community.

### Deployment
The AlphaGovernor contract is deployed at 0xd74034C6109A23B6c7657144cAcBbBB82BDCB00E

The Timelock contract is deployed at 0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA

## Join us 

Check out our [builders program](https://docs.alchemist.wtf/alchemist/join-us/alchemist-builders-onboarding-guide)

## Additional links

* Website: https://app.frax.finance
* Docs: https://docs.frax.finance/v/en/
* Telegram: https://t.me/fraxfinance
* Telegram (announcements / news): https://t.me/fraxfinancenews
* Twitter: https://twitter.com/fraxfinance
* Medium / Blog: https://fraxfinancecommunity.medium.com/
* Governance (discussion): https://gov.frax.finance/
* Governance (voting): https://snapshot.org/#/frax.eth