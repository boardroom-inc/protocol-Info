# Compound 

Compound is a protocol for creating and managing money markets for lending crypto assets. Holders of the COMP token can make changes to the protocol by voting on and passing proposals.

## Governance Process
------------------

*From [COMP Governance Explained](https://soliditydeveloper.com/comp-governance) by Markus Waas*

On a high-level, the governance is a simple set of smart contracts. They allow calling any other smart contract with any data from within the governance core contract in a decentralized way. In Compound the core contract is set as the admin of the other Compound protocol contracts. This means the core contract will be able to call all kinds of management functions like adding new markets, changing parameters and even upgrading the contracts itself.

COMP token holders are allowed to vote. Further COMP is distributed to active participants in the system, ensuring the people who use Compound are the people who get to decide on its future.

The upgrade functionality is the most powerful. Compound is using a typical [proxy upgrade pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies), so by allowing governance to do upgrades, literally everything can be changed including the governance mechanism itself.

The mechanism of governance follows a strict timeline of creating proposals, voting for proposals and a two day timelock before execution:

![Governance Diagram](https://cdn0.scrvt.com/b095ee27d37b3d7b6b150adba9ac6ec8/5a6bfe46945abfde/a662a71f9611/v/9565b3203398/gov_diagram.png)

### Compound Autonomous Proposals (CAPs)
------------------

Since the requirement of 100,000 COMP tokens to create a proposal is a very high barrier, after all that's over 10 million USD at the current COMP prices, a new mechanism called Compound Autonomous Proposals (CAPs) was introduced. This will allow anyone with 100 COMP or more to propose a proposal. Any CAP that gets 100,000 votes can be added as regular proposal.

You can see and vote for CAPs under <https://app.compound.finance/vote>.

## Join our DAO

Please reach out via our [Discord](https://discord.com/invite/fq6JSPkpJn)

## Additional Links

* [Compund](https://compound.finance/)
* [Discord](https://discord.com/invite/fq6JSPkpJn)
* [Github](https://github.com/compound-finance/compound-protocol)
* [Medium](https://medium.com/compound-finance)
* [Twitter](https://twitter.com/compoundfinance)
* [CompoundTreasury](https://compoundtreasury.com/)
* [Documentation](https://compound.finance/docs)