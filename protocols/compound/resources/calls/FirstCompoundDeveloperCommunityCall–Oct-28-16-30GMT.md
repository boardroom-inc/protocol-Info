[![https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_199fb58c-404d-4831-9486-36fd8ef1fb53_1600x900 (1)](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/optimized/1X/a1fa3985b774c1259e4854671c12a1e9e574871e_2_690x388.jpeg)](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/original/1X/a1fa3985b774c1259e4854671c12a1e9e574871e.jpeg "https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_199fb58c-404d-4831-9486-36fd8ef1fb53_1600x900 (1)")

* * * * *

# Agenda

On October 28, at 9:30am PT / 16:30 GMT, the Compound community will hold its first ever Developer Community Call. This will be an open discussion forum for individuals and organizations developing protocol improvement proposals or building applications and projects that integrate the protocol.

-   Held in the [Compound Discord 7](https://compound.finance/discord), with options for screen-share, voice, or text-only participation

-   Every other Wednesday at 9:30am PT / 16:30 GMT, starting 10/28 ([Google Calendar Event 11](https://calendar.google.com/event?action=TEMPLATE&tmeid=MGZsbTRob2s5dTFrazM5b2Q0bTNlbWpmNjVfMjAyMDEwMjhUMTYzMDAwWiBjX2xtaDN1cHM0M3I5MnU1ODJwczYwZ202aW8wQGc&tmsrc=c_lmh3ups43r92u582ps60gm6io0%40group.calendar.google.com&scp=ALL))

Below is the high-level agenda for the first call. Note that this call belongs to the community, and as a community member you are empowered to take this call in any direction you think best benefits the community. If you wish, you may help organize it, structure its agenda, lead it, etc.

1.  Welcome: Adam will set context and explain some logistics for the call.

2.  Proposal/Project Discussions: The following community members have volunteered to discuss the proposals and projects they are working on or considering working on.

-   0age
-   0xRedan
-   Gauntlet Network
-   Fragosti
-   TennisBowling / arr00
-   Thrilok

1.  Suggested Discussion Topics: The following topics have been suggested as important to discuss by community members.

-   Grants (Leighton)
-   Credit Delegation (Leighton)
-   Collateral Factor Upgrades (Getty)

1.  Open Forum: The community may ask questions of each other, request help/resources, introduce miscellaneous ideas, etc.

*If there are any other proposals, projects, or topics you'd like to add to the agenda, please post on this thread or in the Compound Discord. Everyone is welcome to participate and contribute.*

Lastly, the call will be audio-recorded; the recording and written notes will be shared in this thread for anyone who can't make it.

Hope to see you tomorrow!

# Notes

Thank you to everyone who was able to join the community call this morning! I've posted notes from the call below. You can also listen to a recording of the call [here 6](https://drive.google.com/file/d/1A7HyLgH7afwTy8aTvdntFyiAJXv7PvkY/view?usp=sharing).

Compound Developer Community Call Notes\
*Wednesday, October 28, 2020*

Opening (Adam Bavosa)

-   Adam shared the goals of the call, which are to raise community awareness around what developers are working on (both on protocol improvements and application development) as well as coordinate a roadmap for what to work on next or in the near future.

cChannels (0xRedan)

-   0xRedan discussed a Layer 2 solution on top of Compound that he built at the HackMoney hackathon. The goal of the project is to optimize L2 before it arrives and incentivize people to use L2 once it is launched. The project is a payment channel that locks funds into Compound by default when they migrate to L2, so users can automatically earn interest while the L2 solution is open.
-   The name of the project is cChannels, which you can check out on [GitHub 2](https://github.com/anader123/compound-channels).

Gauntlet (Tarun and John)

-   Tarun and John described their pull request that would add vesting to the Comptroller contract. The vesting functionality is meant to be somewhat generic and could be used to disincentivize recycled borrowing as well as issue payments/grants to developers. While building, they found that the Comptroller is close to its max size limit, so they are working with Jared to remove a lot of code from the contract to make room for new functionality like vesting.
-   The long term solution would be to refactor the entire Comptroller to make it easier for future upgrades. They are working with Quantstamp to audit the vesting changes, as well as looking at splitting up the Comptroller contract so the size limit of the contract isn't an issue moving forward.
-   Gauntlet is looking for feedback on vesting and the Comptroller reductions, which you can view on [Github 4](https://github.com/compound-finance/compound-protocol/pull/71).

Split (Francesco and James)

-   Francesco and James showed a demo of their ETHOnline Hackathon project called Split, which deconstructs cTokens into its component parts - a capital component and a yield component (example: cETH into ccETH and ycETH). Splitting tokens enables new market-neutral yield assets, creates unique income flow opportunities, and provides levered directional trades. Split doesn't currently account for COMP, but the next step for the team is adding a governance component.
-   Check out [Split.finance 6](https://split.finance/split) to try it out the application and let the team know if you have any feedback.

Comp.vote (TennisBowling and Arr00)

-   TennisBowling and Arr00 are working on gasless voting and delegating using signatures on [Comp.vote 5](http://comp.vote/). The UI is still being worked on so feel free to [submit a PR 3](https://github.com/TennisBowling/comp.vote). You can also reach out to Ar00 on Discord if you are interested in using the publicly exposed comp.vote API.

Flashbank (Thrilok and Vaibhav)

-   Thrilok and Vaibhav worked on Flashbank in the ETHOnline hackathon, which aims to bring flash loans to Compound. They are planning to start with cDAI rather than change the Comptroller contract, since the cDAI contract is upgradable and other contracts like cUSDC are not. The team is looking for advice on whether to charge fees, as well as help with the draft governance proposal.
-   View the [Flash Bank website 2](https://suspicious-jepsen-42efa0.netlify.app/) or [this video 3](https://www.youtube.com/watch?v=hQoPnqTr8Zc&feature=youtu.be) to learn more about the project, and reach out to the team if you're interested in helping them submit a governance proposal.

Governor Beta (0age)

-   0age works with Dharma and is thinking about a better Governor contract (Governor Beta). The Governor Beta would include a proposal delay, the ability for the proposer to cancel a proposal in process, upgradable governance parameters that won't break connected interfaces, and a new way to configure voting of cCOMP that doesn't rely on voting as a pool. The end goal would be an improved governance system that could benefit both Compound and Uniswap.
-   0age is looking for community feedback on Governor beta, so reach out to him on Discord with any ideas.

Asset Risk (Getty Hill)

-   Getty wrote a blog post on updating the collateral factor mechanism for each asset and is thinking more broadly about better ways to assess asset risk. Markets could be more efficient
-   Check out Getty's [blog post 4](https://medium.com/@gettyh/compound-finance-asset-risk-e4025487fcbb) on asset risk and reach out to him with any feedback or ideas.