[![](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/optimized/1X/f1d7c6c3002bd44ad7a09f6b106659ebd47316b8_2_624x351.jpeg)](https://aws1.discourse-cdn.com/standard17/uploads/compoundcommunity/original/1X/f1d7c6c3002bd44ad7a09f6b106659ebd47316b8.jpeg)

# Agenda

On December 9, at 9:30am PT / 16:30 GMT, the Compound community will hold its next Developer Community Call. This will be an open discussion forum for individuals and organizations developing protocol improvement proposals or building applications and projects that integrate the protocol.

Held in the Compound Discord 8, with options for screen-share, voice, or text-only participation
Wednesday 12/9 at 9:30am PT / 16:30 GMT, and bi-weekly after (Google Calendar Event 3)
Below is the high-level agenda for the upcoming call. Note that this call belongs to the community, and as a community member you are empowered to take this call in any direction you think best benefits the community. If you wish, you may help organize it, structure its agenda, lead it, etc.

1. Welcome: Adam will provide a brief recap of the previous call.
2. Proposal/Project Discussions: The following community members have volunteered to discuss the proposals and projects they are working on or considering working on.

Tarun Chitra - Update on Gauntlet’s COMP grant and vesting proposal
Wesley van Heije - Protocol development organization with Tokenlog
Dennison Bertram - Tally’s DeFi governance tool
McFly - 88pmh’s EMA oracle using cToken exchange rates
3. Open Forum: The community may ask questions of each other, request help/resources, introduce miscellaneous ideas, etc.

If there are any other proposals, projects, or topics you’d like to add to the agenda, please post on this thread or in the Compound Discord. Everyone is welcome to participate and contribute.

Lastly, the call will be audio-recorded; the recording and written notes will be shared in this thread for anyone who can’t make it.

Hope to see you on the call tomorrow!

# Notes

Thank you to everyone who was able to join the community call today! I've posted notes from the call below. You can also listen to a recording of the call [here 4](https://drive.google.com/file/d/1g_5shFhY7LnwkdHmj1K9ZWZt4cC3gSt8/view?usp=sharing).

Compound Developer Community Call Notes

*Wednesday, December 9, 2020*

Tarun Chitra - Update on Gauntlet's COMP grant/vesting proposal *(Starts at 2:31)*

-   Tarun shared an update on the COMP grant and vesting proposals, which have been separated into individual proposals per feedback from the community. The COMP grant proposal successfully [passed a governance vote](https://compound.finance/governance/proposals/30) on December 5th, and awarded Gauntlet with 1,000 COMP to cover the development and audit cost for these proposals. Gauntlet now plans to test the COMP vesting parameters on a testnet and host a line by line code walkthrough of the proposal sometime in the near future. Details for the code review will be posted in the community forum in the coming weeks. Please let Tarun know if you have any feedback on the vesting pull request, as well as the overall strategy for testing the changes. Resources: [Vesting and Grants PR](https://github.com/compound-finance/compound-protocol/pull/71), [Grants Only PR](https://github.com/compound-finance/compound-protocol/pull/79), [Grant Forum Post](https://www.comp.xyz/t/compound-contributor-grants/756/12), [Vesting Forum Post](https://www.comp.xyz/t/vesting-for-the-compound-protocol/252/22)

Wesley van Heije - Protocol development pipeline with Tokenlog *(Starts at 7:45)*

-   Wesley discussed his project Tokenlog, which allows tokenholders to actively signal which development topics are important to them, rather than just voting on individual proposals in the governance voting process. Tokenlog connects to Github and your Ethereum wallet, so you can use your COMP to directly vote on issues and pull requests. Wesley is looking for community feedback on Tokenlog, so check out the [beta version of the project](https://tokenlog.xyz/compound-finance/compound-protocol) and the [slide deck](https://docs.google.com/presentation/d/1IQ9DhVcMlSYXLvhxS7JFuusIsQKLBY5IaWV4eqUVGNQ/edit#slide=id.p) and let him know your thoughts.

Dennison Bertram - Tally's DeFi governance portal *(starts at 16:58)*

-   Dennison shared a preview of [Tally's DeFi governance portal](https://www.withtally.com/governance/compound), which allows users to participate in Compound governance and view insightful data on past proposals and top advocates. The team's overall goal is to add transparency to the governance process, and is exploring ways to verify community participants by their Ethereum address. Feel free to reach out to Dennison with any feedback on the governance portal or ideas for identity verification.

Zefram Lou - 88pmh's EMA Oracle *(Starts at 26:20)*

-   Zefram Lou explained the inner workings of the EMA oracle that 88mph leverages for its fixed and floating rate interest calculations. The oracle uses the cToken exchange rate, rather than the supply rate per block, to estimate the interest rate since the exchange rate is less volatile than the supply rate and presents less of a risk of being manipulated. You can view the [addresses of the EMA oracle](https://88mph.app/docs/addresses/) in the 88mph documentation and use them in your project.

Open Discussion *(Starts at 36:36)*

-   During the open discussion section, Dennison Bertram asked how Compound governance verifies identity, Praneeth brought up the topic of cCOMP voting, Guillame Palayer provided additional information on 88mph's EMA oracle, and Arr00 shared a screenshot of the new comp.vote page.