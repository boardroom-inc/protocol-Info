**MKR holders are responsible for governing the Maker Protocol, which includes adjusting policy for the Dai stablecoin, choosing new collateral types, and improving governance itself. Anyone can be an MKR holder and all are welcome to come join us in shaping the future of DeFi.**

The MKR token—the governance token of the Maker Protocol—allows those who hold it to vote on changes to the Maker Protocol. Note that anyone, not only MKR holders, can submit proposals for an MKR vote.

Any voter-approved modifications to the governance variables of the Protocol will likely not take effect immediately in the future; rather, they could be delayed by as much as 24 hours if voters choose to activate the Governance Security Module (GSM). The delay would give MKR holders the opportunity to protect the system, if necessary, against a malicious governance proposal (e.g., a proposal that alters collateral parameters contrary to established monetary policies or that allows for security mechanisms to be disabled) by triggering a Shutdown.

Governance Process
------------------

In practice, the Maker Governance process includes proposal polling and Executive Voting. Proposal polling is conducted to establish a rough consensus of community sentiment before any Executive Votes are cast. This helps to ensure that governance decisions are considered throughtfully and reached by consensus prior to the voting process itself. Executive Voting is held to approve (or not) changes to the state of the system. An example of an Executive Vote could be a vote to ratify Risk Parameters for a newly accepted collateral type.

At a technical level, smart contracts manage each type of vote. A Proposal Contract is a smart contract with one or more valid governance actions programmed into it. It can only be executed once. When executed, it immediately applies its changes to the internal governance variables of the Maker Protocol. After execution, the Proposal Contract cannot be reused.

Any Ethereum Address can deploy valid Proposal Contracts. MKR token holders can then cast approval votes for the proposal that they want to elect as the Active Proposal. The Ethereum address that has the highest number of approval votes is elected as the Active Proposal. The Active Proposal is empowered to gain administrative access to the internal governance variables of the Maker Protocol, and then modify them.

#### The MKR Token’s Role in Recapitalization

In addition to its role in Maker Governance, the MKR token has a complementary role as the recapitalization resource of the Maker Protocol. If the system debt exceeds the surplus, the MKR token supply may increase through a Debt Auction (see above) to recapitalize the system. This risk inclines MKR holders to align and responsibly govern the Maker ecosystem to avoid excessive risk-taking.

#### MKR Holder Responsibilities

MKR holders can vote to do the following:

- Add a new collateral asset type with a unique set of Risk Parameters.
- Change the Risk Parameters of one or more existing collateral asset types, or add new Risk Parameters to one or more existing collateral asset types.
- Modify the Dai Savings Rate.
- Choose the set of Oracle Feeds.
- Choose the set of Emergency Oracles.
- Trigger Emergency Shutdown.
- Upgrade the system.

MKR holders can also allocate funds from the Maker Buffer to pay for various infrastructure needs and services, including Oracle infrastructure and collateral risk management research. The funds in the Maker Buffer are revenues from Stability Fees, Liquidation Fees, and other income streams.

The governance mechanism of the Maker Protocol is designed to be as flexible as possible, and upgradeable. Should the system mature under the guidance of the community, more advanced forms of Proposal Contracts could, in theory, be used, including Proposal Contracts that are bundled. For example, one proposal contract may contain both an adjustment of a Stability Fee and an adjustment of the DSR. Nonetheless, those revisions will remain for MKR holders to decide.

#### Risk Parameters Controlled by Maker Governance
Each Maker Vault type (e.g., ETH Vault and BAT Vault) has its own unique set of Risk Parameters that enforce usage. The parameters are determined based on the risk profile of the collateral, and are directly controlled by MKR holders through voting.

Additional Resources
--------------------

* [Discord](https://chat.makerdao.com/)
* [Discourse Forum](https://forum.makerdao.com/)
* [Voting App](https://vote.makerdao.com/)
* [Governance Docs](https://makerdao.com/en/whitepaper/#governance-of-the-maker-protocol)
* [Twitter](https://twitter.com/MakerDAO)
