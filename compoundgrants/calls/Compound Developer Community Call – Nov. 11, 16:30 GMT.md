[![Developer Community Call Nov 11](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/optimized/1X/b40beb0edc9daa7c0213a417b09335fc14df6bdf_2_690x388.jpeg)

Developer Community Call Nov 11

# Agenda

](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/original/1X/b40beb0edc9daa7c0213a417b09335fc14df6bdf.jpeg "Developer Community Call Nov 11")

On November 11, at 9:30am PT / 16:30 GMT, the Compound community will hold its next Developer Community Call. This will be an open discussion forum for individuals and organizations developing protocol improvement proposals or building applications and projects that integrate the protocol.

-   Held in the [Compound Discord 1](https://compound.finance/discord), with options for screen-share, voice, or text-only participation

-   Wednesday 11/11 at 9:30am PT / 16:30 GMT, and bi-weekly after ([Google Calendar Event 6](https://calendar.google.com/calendar/u/0/r/eventedit/copy/MGZsbTRob2s5dTFrazM5b2Q0bTNlbWpmNjVfMjAyMDExMTFUMTczMDAwWiBjX2xtaDN1cHM0M3I5MnU1ODJwczYwZ202aW8wQGc/bmlja0Bjb21wb3VuZC5maW5hbmNl?sf=true))

Below is the high-level agenda for the upcoming call. Note that this call belongs to the community, and as a community member you are empowered to take this call in any direction you think best benefits the community. If you wish, you may help organize it, structure its agenda, lead it, etc.

1.  Welcome: Adam will provide a brief recap of the previous call.

2.  Proposal/Project Discussions: The following community members have volunteered to discuss the proposals and projects they are working on or considering working on.

-   zenithlight - Interest rate controller project
-   monet_supply - Potential MakerDAO<>Compound collaborations
-   bhagwan - Collateral warning alerts for Compound borrowers
-   Timur - Compound Governance Dashboard
-   Tennis Bowling - Latest governance proposal
-   tarun - Vesting proposal
    -   (If you are interested in speaking to the Compound community, contact nick@compound.finance and we will save you a spot too!)

1.  Open Forum: The community may ask questions of each other, request help/resources, introduce miscellaneous ideas, etc.

*If there are any other proposals, projects, or topics you'd like to add to the agenda, please post on this thread or in the Compound Discord. Everyone is welcome to participate and contribute.*

Lastly, the call will be audio-recorded; the recording and written notes will be shared in this thread for anyone who can't make it.

Hope to see you tomorrow!

# Notes

Thank you to everyone who was able to join the community call yesterday! I've posted notes from the call below. You can also listen to a recording of the call [here 5](https://drive.google.com/file/d/1shrL4UpYlYc6FWVyBK6jX-hPSSyOragf/view).

Compound Developer Community Call Notes\
*Wednesday, November 11, 2020*

Zenithlight - PID Interest Rate Controller *(starts at 2:50)*

-   Zenithlight shared an Interest Rate Controller project from the ETHOnline Hackathon, which would replace static interest rate models like JumpRateV2 with a PID (Proportional, Integral, Derivative) interest rate controller that targets a certain level of utilization in each market. The PID controller stabilizes the utilization of a market by changing the interest rate for borrowers over time, depending on how far above or below the utilization rate is from the target.
-   The next steps for Zenithlight are to code the PID interest rate models in Solidity, and simulate agents interacting with the models on a testnet. If the simulations are successful, Zenithlight will create a governance proposal for the community to vote on. You can view the PID Interest Rate Controller project written in Python in the Google Colab notebook [here](https://colab.research.google.com/drive/1ts1jfqNLZuossQ2T-mq7l6kXNkxUYlBS?usp=sharing), and reach out to Zenithlight with any feedback or ideas.

Leighton - Credit Delegation *(starts at 13:27)*

-   Leighton brought up the idea of credit delegation, and whether it should be a part of the core protocol or an application built on top of the protocol.
-   Leighton wants to see if anyone developers are working on this, so reach out to him if this is a feature that you are interested in building.

Monet_supply - MakerDAO<>Compound collaborations *(starts at 15:49)*

-   Monet_supply discussed the possibility of Maker onboarding yield stablecoins, like cUSDC and cDAI, as collateral to mint DAI. This could help the Compound protocol address hypothetical liquidity crunches for DAI, as well as help Maker with any solvency concerns.
-   You view the following resources to dig deeper into this topic and voice your opinions in the Maker governance forum. Resources: [cDAI collateral app 1](https://forum.makerdao.com/t/cdai-mip6-collateral-onboarding-application/3764), [cUSDC collateral app](https://forum.makerdao.com/t/cusdc-mip6-collateral-onboarding-application/4135), [cToken collateral research](https://forum.makerdao.com/t/research-ctokens-as-collateral/3979), [initial discussion](https://forum.makerdao.com/t/discussion-cdai-adai-ydai-collaterals-as-a-peg-enabler-tool/3470).

Bhagwan - Collateral Warning Alerts *(starts at 22:44)*

-   Bhagwan discussed a push notification alert system for Compound borrowers, which would warn them when their collateral ratio is getting close to the liquidation threshold. Bhagwan has already built a gas price alert system called [gasduck](https://gasduck.finance/), which provided the inspiration for this new project.
-   Bhagwan is currently polishing the code for the borrowing alert system and plans to post it in the [#development](https://www.comp.xyz/c/development/7) channel in the near future - so keep an eye out to review the code and provide feedback.

Timur - Governance Tracking Dashboard *(starts at 25:20)*

-   Timur shared his Compound governance tracking dashboard called [Catflip](https://catflip.co/compound), which reads data from the Governor to show changes from historical governance proposals, as well as the current parameters on all contracts like the Comptroller, Timelock, and all cTokens.
-   Timur is now thinking about adding information on delegates and interest rate models, so reach out to him with any feedback on what data to add next.

TennisBowling - Latest Governance Proposal *(starts at 29:22)*

-   TennisBowling shared his project called Aggregate, which allows users to stake stablecoins in order to mint a new stablecoin (AGG). At any time, users can send back the Aggregate to redeem their underlying stablecoins. TennisBowling is considering using Compound as the default vault to store the collateral assets, and has the below questions for the community:
    -   Where should the interest go? To the devs as a "reward" or something? to the person redeeming the collateral?
    -   How would we be able to see how much interest has been gained in this way?
    -   If it goes to the devs, do you think that the users are up for paying a bit more gas to help us?
    -   Do you think it will have a significant gas impact?
-   TennisBowling will post more information in the [#development](https://www.comp.xyz/c/development/7) channel as the project nears completion, and is open to general feedback/ideas from the community.

Tarun - Vesting Proposal *(starts at 31:08)*

-   Tarun provided an [update 1](https://docs.google.com/presentation/d/1oGQwqsMPc2n6P0T1AXLnH1MXpORLZ7Jc0rXbF2M2L2w/edit#slide=id.g57c0ccfc27_1_0) on the upcoming COMP vesting proposal, which now includes the ability for governance to approve COMP grants to developers who have made meaningful contributions to the protocol. This proposal also reduces the size of the Comptroller contract, allowing more room for future upgrades. The code is complete and currently being audited ahead of a planned governance proposal next week. The vesting functionality will initially be implemented with no vesting period, to allow the community to vote specifically on the vesting period in a later proposal.
-   Tarun is looking for the community to peer view the [pull request](https://github.com/compound-finance/compound-protocol/pull/71), and for the community's thoughts on the original [forum post](https://www.comp.xyz/t/vesting-for-the-compound-protocol/252/16).

Getty - Asset Risk *(Starts at 38:35)*

-   Getty further explained his idea on an improved collateral factor system, that introduces a 'safety score' to more accurately assess asset risk. He makes the point that an asset with a 0% collateral factor still allows people to borrow the asset in large quantities, and thus creates a risk that it will be hard to liquidate.
-   Getty is looking for feedback from the community, so consider reading his [blog post 1](https://medium.com/@gettyh/compound-finance-asset-risk-e4025487fcbb) and reaching out with any ideas.

Zenithlight - Transferable Positions *(Starts at 44:45)*

-   Zenithlight introduced the idea of being able to transfer an entire supply and borrow position to another address, potentially with an associated price for the position.