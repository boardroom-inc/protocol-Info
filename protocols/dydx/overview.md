---
description: Overview of the dYdX Improvement Proposal (DIP) lifecycle.
---

# Proposal Lifecycle

## **Proposal Stages**

The dYdX Governance Process is fueled by governance forums at [**forums.dydx.community**](https://forums.dydx.community) and ratified through dYdX Improvement Proposal (“DIPs”).

Below we outline a preliminary draft explaining how the dYdX governance process will flow, from the inception and definition of the concept to the actual implementation. These processes are subject to change according to feedback from the DYDX community.

The following flow chart is the initial proposed stages to pass a proposal:

![Stages of a DIP](<https://github.com/dydxfoundation/governance-documentation/tree/en/.gitbook/assets/image (81).png>)

## 0. Forum Discussion

Anyone can sign up and set up a thread on any topic on dYdX’s Governance forums hosted at [**forums.dydx.community**](https://forums.dydx.community). Community members are required to register using an email address or an Ethereum wallet.

## 1. (Off-chain) DRC Creation

Off-chain **dYdX Request for Comments** (DRCs) creation is the first step in the governance improvement process. Anyone can participate in the Governance Forum, create off-chain DRCs, and discuss improvements.

To create a DRC, use [this template](https://github.com/dydxfoundation/dip/blob/master/DIP-X.md) (available on our Github). The DRC should cover all the information of the potentially final DIP.

At a minimum, DRCs must include:

* Short and concise titles of the DRC
* A short and concise description of the proposal
* The rationale for the DRC, e.g. why?
* The title of the forum post must include DRC: with the short title of the DRC. E.g. DRC: New Market Request
* A community poll that community members can use to vote on improvements off-chain

## 2. DRC Discussion & Feedback

Once posted on the governance forum, all questions and comments should be addressed & taken into consideration, to further improve the DRC.

## 3. DRC Snapshot Polling

Once an off-chain DRC has a very rough consensus, a community member holding more than `10,000` DYDX can create an **off-chain vote** for the DRC on **Snapshot**.

Snapshot is a simple voting interface that allows users to signal sentiment off-chain. Votes on snapshot are weighted by the number of DYDX delegated to the address used to vote.

The DRC submitter will need to provide details of the DRC, a voting system, vote start date, vote end date, and snapshot block number. The Snapshot block number locks the state of community members who are able to vote. Token holders who hold tokens before the snapshot block number are eligible to vote.

Snapshot poll lengths should be set to `5 days`.

Proposals and votes are just signed messages, stored on IPFS, and available via the Commonwealth portal.

## 4. (On-chain) DIP Creation

When a rough consensus is reached, an on-chain DIP may be submitted by a community member who holds enough proposition power for the type of proposal. An on-chain DIP is initiated via a smart contract call. The proposal should be based on the winning outcome of the off-chain DIP voting on Snapshot and can consist of one or multiple actions, up to a maximum of 10 actions per proposal.

A DIP creation is subject to a minimum number of tokens held/delegated required for an account. A Timelock executor must be specified when a proposal is created. The initial parameters are as follows (and can be modified by governance):

| Parameter          | Description                                      | Short Timelock Executor | Merkle-Pauser Executor | Long Timelock Executor | Starkware Executor   |
| ------------------ | ------------------------------------------------ | ----------------------- | ---------------------- | ---------------------- | -------------------- |
| Proposal Threshold | Minimum tokens held/delegated to create proposal | 0.5% of total supply    | 0.5% of total supply   | 2% of total supply     | 0.5% of total supply |

## 5. (On-chain) DIP Voting

After an On-Chain DIP is created, the proposal enters a `pending` state for a period defined by the **Voting Delay**, which is currently configured to `6570` blocks or approximately 1 day (assuming 13 seconds per block). In other words, user snapshots are recorded 1 day after the DIP is created, at which point the proposal transitions to an `active` state.

After the Voting Delay, the Voting Period is activated. The voting period length depends on the proposal type.

The following chart shows a DIP state flowchart:

![Lifecycle of a DIP](<https://github.com/dydxfoundation/governance-documentation/tree/en/.gitbook/assets/image (63).png>)

After a DIP is created on-chain it is subject to a **Voting Delay**, **Voting Period**, **Minimum Quorum**, and a minimum **Vote Differential**. The initial parameters are as follows:

| Parameter         | Description                                                                                           | Short Timelock Executor | Merkle-Pauser Executor | Long Timelock Executor | Starkware Executor   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------- | ---------------------- | -------------------- |
| Voting Delay      | Number of Ethereum blocks to wait before voting on a proposal may begin after a proposal is submitted | 6,570 blocks            | 6,570 blocks           | 6,570 blocks           | 6,570 blocks         |
| Voting Period     | Length of time for which proposals are available to be voted upon                                     | 4 days                  | 2 days                 | 10 days                | 4 days               |
| Minimum Quorum    | Minimum yes votes for a DIP proposal to pass                                                          | 2% of total supply      | 1% of total supply     | 10% of total supply    | 2% of total supply   |
| Vote Differential | Required yes-no gap for a DIP proposal to pass                                                        | 0.5% of total supply    | 0.5% of total supply   | 10% of total supply    | 0.5% of total supply |

Only the voting delay can be modified by governance, and it can only be changed to values in between (inclusive) the minimum and maximum delay. The voting period, minimum quorum, and vote differential can't be changed.

## 6. Proposal Queuing & Execution

After a DIP has passed, any address can call the queue method to move the proposal into the timelock queue. A DIP can only be queued if it has passed.

| Parameter              | Description                                                                           | Short Timelock Executor | Merkle-Pauser Executor | Long Timelock Executor | Starkware Executor |
| ---------------------- | ------------------------------------------------------------------------------------- | ----------------------- | ---------------------- | ---------------------- | ------------------ |
| Timelock Delay         | After a proposal passes and is queued, delay before the proposal is executed          | 2 days                  | 0 days                 | 7 days                 | 2-9 days           |
| Execution Grace Period | The time after which a proposal becomes executable, during which it must be executed. | 7 days                  | 7 days                 | 7 days                 | 7 days             |
| Minimum Timelock Delay | Minimum delay before a proposal is executed (after queuing)                           | 1 day                   | 0 days                 | 5 days                 | 4 days             |
| Maximum Timelock Delay | Maximum delay before a proposal is executed (after queuing)                           | 7 days                  | 1 day                  | 21 days                | 21 days            |

As soon as the voting period ends and a proposal has succeeded, anyone can call queue to begin the timelock delay.

For the Starkware priority timelock executor, it has a priority period of 7 days out of the 9 day timelock delay. This means that after 9 days anyone can execute a proposal, but within days 2-9 (the priority period) Starkware has the option to execute the proposal.

In practical terms it's:&#x20;

* Days 0–2: No one can execute&#x20;
* Days 2–9: Only Starkware can execute&#x20;
* Days 9: Anyone can execute

## 7. (Optional) Proposal Cancellation

At any point in a DIP lifecycle, the proposer can cancel the DIP. A proposal can be cancelled by anyone before it is executed if the proposer does not have sufficient proposition power at the current block.

## 8 Additional Resources

[Documentation] (https://docs.dydx.community/
[Discord Chat] (http://discord.gg/invite/dydx)
[Forums] (https://forums.dydx.community/)
[Community Website] (https://dydx.community/dashboard)
[Github] (https://github.com/dydxfoundation)
[Foundation Website] (https://dydx.foundation/)
[Blog] (https://dydx.foundation/blog)
[Twitter](https://twitter.com/dYdX)
[dYdX foundation Twitter] (https://twitter.com/dydxfoundation)
