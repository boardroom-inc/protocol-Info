About GnosisDAO
====================================

**GnosisDAO is the prediction market-driven collective. The mission of GnosisDAO is to successfully steward the Gnosis ecosystem through futarchy: governance by prediction markets.**

Introduction
------------------

GnosisDAO is a living entity that will evolve over time. This post provides an overview of the current GnosisDAO governance process.

To learn more about the vision of GnosisDAO, you can read the blog post announcing GnosisDAO. If you have any questions about how to use GnosisDAO platforms, please take a look at the [Governance Tutorial](https://blog.gnosis.pm/gnosisdao-governance-tutorial-8257f5a1adb4). Continue reading below for the governance process summary. Many thanks to teams in the ecosystem including Balancer and Uniswap, on which this governance process built.

Governance Process
------------------

The GnosisDAO governance process is primarily conducted using the [GnosisDAO category on the Gnosis Forum](https://forum.gnosis.io/c/dao). For a proposal to be accepted, it must successfully pass through three phases:

| Phase | Content | Duration | Passing Requirements |
| --- | --- | --- | --- |
| Phase 1 Ideation | - Post created on the Gnosis Forum in the [GnosisDAO category](https://forum.gnosis.io/c/dao) | Open-ended | For proposals to successfully pass from Phase 1 to Phase 2, there is no formal requirement. However, if a Phase 1 proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal. |
| Phase 2 Specification | - [Gnosis Improvement Proposal](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post created | 5 days | For proposals to successfully pass from Phase 2 to Phase 3, there must be one outcome with a relative majority of votes on the forum poll. If the relative majority of votes on the forum poll indicates the result `Make no changes,` the proposal will not pass to Phase 3. |
| Phase 3 Consensus | - [Gnosis Improvement Proposal](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post refined - [GnosisDAO Snapshot](https://snapshot.page/#/gnosis) poll - [Omen Prediction Markets](https://omen.eth.link/) surfacing the proposal's projected price impact on GNO (Gnosis Impact) | 7 days | For proposals to be accepted in this final phase, there must be one outcome with a relative majority of GNO used for signalling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4%[1] of the circulating supply of GNO. If the relative majority of GNO used in signalling on the Snapshot poll indicates the result `Make no changes,` the proposal will not be accepted and considered closed. |

Now let's dive deeper into each phase.

### Phase 1: Ideation

This phase facilitates an initial, informal discussion on Gnosis Forum regarding potential proposals to GnosisDAO. You can initiate a proposal in Phase 1 by posting your idea in the [GnosisDAO category](https://forum.gnosis.io/c/dao) with the `phase-1` tag. This phase allows proposals to gather community insight for refinement before opening a formal poll.

**Duration:** Open-ended\
**Passing Requirement:** For proposals to successfully pass from Phase 1 to Phase 2, there is no formal requirement. However, if a Phase 1 proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal.

### Phase 2: Specification

This phase requires proposals to be posted in the [GnosisDAO category](https://forum.gnosis.io/c/dao) using the [Gnosis Improvement Proposal (GIP)](https://forum.gnosis.io/t/gip-0-template/734) template. You can create a Gnosis Improvement Proposal (GIP) easily by adding the GIP subcategory, after which your draft post will automatically be populated by a GIP template for you to fill in. You can move a proposal to Phase 2 by posting the GIP-# with the `phase-2` tag.

The GIP template requires all proposals speak to applicable fields, such as a Simple Summary, Abstract, Motivation, Specification, and Implementation. In addition to these fields, Phase 2 proposals must also include a 5-day forum poll on the proposal outcome, and it must include the option `Make no changes`.

**Duration:** 5 days\
**Passing Requirement:** For proposals to successfully pass from Phase 2 to Phase 3, there must be one outcome with a relative majority of votes on the forum poll. If the relative majority of votes on the forum poll indicates the result `Make no changes,` the proposal will not pass to Phase 3.

### Phase 3: Consensus

This phase opens proposals to two signalling methods for token holders. You can move a proposal to Phase 3 by editing the GIP post from the previous phase to reflect the forum poll result that received a relative majority of votes and by updating the proposal's tag to `phase-3`. This serves to refine the proposal for the final phase.

Additionally, two signalling methods with a duration of 7 days must be created:

1.  **Omen Prediction Markets**: Two prediction markets must be created on the proposal, with one market denominated in GNO and the other denominated in a stablecoin. This enables the Gnosis Impact app to be included in the GIP post. This app calculates the projected price impact on GNO of the proposal's outcome. These markets are funded by the Gnosis Safe Multisig owned by GnosisDAO. To create these markets, reach out to the [GnosisDAO Admin forum moderator](https://forum.gnosis.io/u/gnosisdao/).
2.  **[GnosisDAO Snapshot](https://snapshot.page/#/gnosis) poll**: A [GnosisDAO Snapshot](https://snapshot.page/#/gnosis) poll must be created that contains the proposal text as well as a link to the GIP post on the Gnosis Forum, and it must include the option `Make no changes`. In order to be eligible to signal in the poll, community members must hold a minimum of 1 GNO.

Both a link to the corresponding GnosisDAO Snapshot poll and the Gnosis Impact app must be edited into the GIP post.

**Duration:** 7 days\
**Passing Requirement:** For proposals to be accepted in this final phase, there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4%[1] of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result `Make no changes,` the proposal will not be accepted and considered closed.

At the time of initial publication, the total circulating supply of GNO is approximately 1,504,587. This is defined as follows: 10M total GNO - ([Gnosis Ltd. vesting GNO amount](https://etherscan.io/address/0x604e4557e9020841f4e8eb98148de3d3cdea350c#tokentxns) + [GnosisDAO vesting GNO amount](https://etherscan.io/address/0xec83f750adfe0e52a8b0dba6eeb6be5ba0bee535#tokentxns)).

[1] Upon initial publication, for proposals to be accepted in the final phase, there had to be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a quorum of a minimum of 10% of the circulating supply of GNO. After a [successful GnosisDAO proposal](https://snapshot.page/#/gnosis/proposal/QmdjWuBnBnPUafW9jBNNsJJvaeQAVExGcFZ7zB38VtNuu4), this has been changed to require a **yes-voting quorum of a minimum of 4%.**

Additional Resources
--------------------

* [Governance Tutorial](https://blog.gnosis.pm/gnosisdao-governance-tutorial-8257f5a1adb4)
* [GnosisDAO Admin forum moderator](https://forum.gnosis.io/u/gnosisdao/)
* [Gnosis Discord Server](https://chat.gnosis.io/)