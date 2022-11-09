# APWine Finance

### What is your project and what’s your mission ?

APWine is a protocol that allows users to access yield tokenization on their winelisted IBTs (Interest Bearing Tokens).
The governance token of the APWine protocol is APW.

## Protocol Overview

### Core products

Yield tokenization:
Users can deposit IBTs to receive two different tokens: PT (Pricipal token) and FYT (Future yield token).This can give the possibility to long or short APRs.
Users can redeem one underlying asset per PT at the end of a period, while burning FYT at the end of the period allows one to redeem the yield generated during the period.

Fixed rates:
Through the APWine AMM, users who wish to hedge their risk on APY volatility can directly exchange their FYT for the underlying asset at the current market rate designated by the AMM. Not only does this provide fixed-rate interest, due to the atomic nature of the swap, but also upfront yield - meaning you can get your APY upfront, at any time.

APWine AMM:
The APWine AMM is composed of two pools for each future that behave like Balancer V1 pools:

A PT/Underlying pool with dynamic weights.
A PT/FYT pool with constant 50/50 weights.
More informations can be found here.

The liquidity mining rewards emission is controlled by veAPW holders, which can redirect more rewards on their favorite pools by voting on the gauges.

# DAO structure overview

The DAO governs the protocol by voting on the decisions. The proposals are discussed on the governance forum with a sentiment poll, and voted on Snapshot.

## Governance

### How is your governance structured ?

The DAO voted a governance framework, splitting the proposals in 3 categories with different duration and quorums:

    APIR (APWine Integration Request) - 3 days voting - 5% quorum
    APGP (APWine Governance Proposal) - 5 days voting - 10% quorum
    APIP (APWine Improvement Protocol) - 7 days voting - 15% quorum

Each of these proposal types requires a post on the governance forum at least 48h before posting on Snapshot.
tAPW, LP APW/ETH on Sushi and veAPW can vote on these proposals. More informations on the framework can be found here.

Additionally, two types of votes have other parameters:

    Winelisting votes (7 days voting - No quorum - everyone can vote)
    Gauges votes (7 days voting - No quorum - only veAPW can vote)

### Is it on-chain or off-chain or both ?
The APWine governance is currently off chain using Snapshot.

### A short description about your gov token.
The APW token alone can’t participate in the governance, but it can have different forms that can with different weights:

    tAPW holders = APW deposited on Tokemak (coeff x1)
    LP APW/ETH holders = APW deposited in the Sushi LP mainnet (coeff x1)
    veAPW holders = APW locked from 1 week to 2 years (coeff x104)

veAPW stands for voting escrow APW. They are your APW locked for voting. Your veAPW weight gradually decreases as your escrowed tokens approach their lock expiry.

The veAPW has a lock capability of up to 2 years. The liquidity mining rewards emission is controlled by veAPW holders, which can redirect more rewards on their favorite pools by voting on the gauges.

Similar to Curve, locking your APW for veAPW gives access to:

    Boosted proposal power (participation in the protocol decisions - 1 veAPW = 104 votes, while 1 tAPW or 1 APW in sushi LP = 1 vote)
    Gauge weight power (liquidity mining redirection)
    veAPW Yield
    (Coming soon) Boosting power

The longer you lock your APW, the more voting power you have :
1 APW locked for 1 week = 0.009615 veAPW = 1 vote
1 APW locked 6 months = 0.25 veAPW = 26 votes
1 APW locked 1 year = 0.5 veAPW = 52 votes
1 APW locked 2 years = 1 veAPW = 104 votes

Even if your veAPW voting power decreases over time, 1 APW lock is always redeemable for 1 APW at the end of the lock time.

### How are proposals created and reviewed ?
The proposals are created following a framework (APIRs, APGPs, APIPs described in the docs) and reviewed by the forum moderators and the community with a sentiment poll before voting on Snapshot.

## Join our DAO

### How can one join your DAO ?
Anyone can join the DAO, either as a community/DAO member by voting and participating on the discussions, as a delegate by submitting an application on the forum, or by contributing to the DAO through Dework page.

### What are the steps invloved ?

### DAO member
Get an account on the governance forum and join the discord
Join the weekly Governance calls
Get/Earn voting power
Participate

### DAO Delegate
Get an account on the governance forum and join the discord
Post a presentation about yourself on the delegate thread
Get delegated voting power
Participate

### DAO contributor
Get an account on the governance forum and join the discord
Get an account on Dework and join the APWine Space
Pick an open bounty or create suggestions for new ones
Participate

### Are there any prerequisites ?
No, anyone can participate.

### Add Jobs/Careers Page here
https://app.dework.xyz/apwine-dao
https://cryptocurrencyjobs.co/startups/apwine/

## Additional links

### Links to your social media profiles
https://twitter.com/APWineFinance
https://lenster.xyz/u/apwine.lens
https://discord.gg/nMhbVuu5
https://t.me/APWineFinance

### Links to your gov-platform
https://gov.apwine.fi/
https://snapshot.org/#/apwine.eth

### Any others relavant links
https://linktr.ee/apwine