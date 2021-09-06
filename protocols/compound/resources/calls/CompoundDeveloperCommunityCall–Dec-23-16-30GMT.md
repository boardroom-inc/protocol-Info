[![](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/optimized/1X/2416541cead6a24aae88f481e9809f3d79171ab1_2_624x351.jpeg)](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/original/1X/2416541cead6a24aae88f481e9809f3d79171ab1.jpeg)

# Agenda

On December 23, at 9:30am PT / 16:30 GMT, the Compound community will hold its next Developer Community Call. This will be an open discussion forum for individuals and organizations developing protocol improvement proposals or building applications and projects that integrate the protocol.

-   Held in the [Compound Discord](https://compound.finance/discord), with options for screen-share, voice, or text-only participation
-   Wednesday 12/23 at 9:30am PT / 16:30 GMT, and bi-weekly after ([Google Calendar Event](https://calendar.google.com/event?action=TEMPLATE&tmeid=MGZsbTRob2s5dTFrazM5b2Q0bTNlbWpmNjVfMjAyMDEyMjNUMTczMDAwWiBjX2xtaDN1cHM0M3I5MnU1ODJwczYwZ202aW8wQGc&tmsrc=c_lmh3ups43r92u582ps60gm6io0%40group.calendar.google.com))

Below is the high-level agenda for the upcoming call. Note that this call belongs to the community, and as a community member you are empowered to take this call in any direction you think best benefits the community. If you wish, you may help organize it, structure its agenda, lead it, etc.

1\. Welcome: Adam will provide a brief recap of the previous call.\
2\. Proposal/Project Discussions: The following community members have volunteered to discuss the proposals and projects they are working on or considering working on.

-   Tarun - Update on Gauntlet's COMP vesting proposal
-   Jared F. - Compound Chain Announcement

3\. Open Forum: The community may ask questions of each other, request help/resources, introduce miscellaneous ideas, etc.

If there are any other proposals, projects, or topics you'd like to add to the agenda, please post on this thread or in the Compound Discord. Everyone is welcome to participate and contribute.

Lastly, the call will be audio-recorded; the recording and written notes will be shared in this thread for anyone who can't make it.

Hope to see you on the call tomorrow!

# Notes

Thank you to everyone who was able to join the community call today! I've posted notes from the call below. You can also listen to a recording of the call [here](https://drive.google.com/file/d/1CJcfoTeS8KnMC1lbxl7R3FVv2eZT7UQ1/view?usp=sharing).

Compound Developer Community Call Notes

*Wednesday, December 23, 2020*

Tarun Chitra - Update on Gauntlet's COMP vesting proposal *(starts at 1:30)*

-   Tarun provided an update on the COMP vesting proposal, which is currently in the final stages of development. The current implementation has a high level of complexity, so the Gauntlet team is working on a second, simpler implementation that will also need an audit. There will likely be a UX change on claiming COMP with this new implementation, so the Gauntlet team is looking for feedback on how the UX for COMP vesting should look on various platforms and applications. Feedback can be shared in the [#development](https://www.comp.xyz/c/development/7) channel of the Compound Discord (be sure to [@Tarun](https://www.comp.xyz/u/tarun)). The Gauntlet team will also be holding a code review session in early January once both implementations are done, so stay tuned for details on joining. Resources: [Presentation](https://docs.google.com/presentation/d/1KZGxbYTS1FhluyU7k0Rc1mLobf-3tmpexaLbUklhHLU/edit), [PR #71](https://github.com/compound-finance/compound-protocol/pull/71)

Jared Flatow - Compound Chain Whitepaper Walkthrough *(starts at 12:12)*

-   Jared Flatow of Compound Labs provided an overview of Compound Chain, a stand-alone distributed ledger capable of transferring value & liquidity between peer ledgers. At a high level, each validator on Compound Chain is reading events from starports (smart contracts on integrated blockchains), and signing notices that go out to the various chains. The native unit of account, CASH, can be borrowed from the protocol after posting the required collateral. Right now the Compound Labs team is in the feedback phase, gathering ideas from the community on how to improve the core protocol. The team expects the first version of the testnet to be live in January, which will allow users to borrow and download CASH. On the next version of the testnet, users will be able to borrow other assets on Ethereum. The team is planning on getting security audits in February, at which point the community can decide if the protocol is safe enough to launch on mainnet. Resources: [Whitepaper](https://compound.cash/)

Open Discussion *(starts at 33:40)*

-   During Open Discussion, Arr00 shared information about the launch of [Comp.vote](http://comp.vote/), a cheaper way to vote on Compound governance proposals.