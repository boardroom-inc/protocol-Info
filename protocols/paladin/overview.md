# Paladin

Paladin is a decentralized, non-custodial governance lending protocol where users can either loan the voting power in their governance token, or borrow some voting power. 

Depositors stake governance tokens or derivatives that grant voting power in exchange for yield, while borrowers can leverage their voting power to gain more influence temporarily. 

## Overview

### Protocol Overview

**PalPools**
Independent pools where the underlying governance token is deposited in exchange for PalTokens, and allows users to borrow governance power.

**PalTokens**
ERC20 tokens representing your deposit in a PalPool as well as the yield earned.

**PalLoans**
Contracts are created by PalPools to hold the governance power borrowed by the user. A PalLoan is a Clone of one of the Delegator contracts, depending on the token to delegate. Each PalLoan is represented by a PalLoanToken.

**PalLoanTokens**
ERC721 tokens representing the ownership of a PalLoan. As any ERC721 token, PalLoanTokens can be transferred to change the owner of a PalLoan.

**Delegators**
Updatable delegation logic for a specific Governance token.

**Controller**
Contract listing all deployed PalPools & PalTokens and checking their current status. It is also handling the Paladin Liquidity Mining system

**Interest Module**
Calculations of Utilization Rate, Borrow Rate & Supply Rate for Pools

**Address Registry**
Contract to fetch the address of the different PalPools, PalTokens (ERC20), the Controller & the PalLoanToken (ERC721)
## Governance
### Token
#### PAL
The [PAL](https://etherscan.io/token/0xab846fb6c81370327e784ae7cbb6d6a6af6ff4bf) token is an ERC20 token, with Governance power over the Paladin ecosystem.

It allows PAL holders to govern and control the Paladin Protocol, to propose and implement changes in the Protocol parameters, add new components or even new functionalities.

> The PAL token is currently non-transferable, and not available on any DEX or other DeFi protocol. This will be changed later through a Governance Proposal.

**Token Distribution **
The following graph gives a breakdown of the PAL supply at token genesis. Future updates will include Liquidity Mining incentives and a native tokenomics system

![](https://i.imgur.com/wHYBOtT.png)

#### hPAL
Staked version of the Paladin Token, that can be locked from 3 months to 2 years to access more bonuses and functionalities.

### Delegation

The PAL token includes a Delegation logic. This allows any PAL holder to delegate their voting rights to an address, either to their own address, or another address.
Delegation can only be given to one address at a time, and will delegate all of your voting power. In no case does Delegation give another control over your PAL tokens, it only transfers the original voting power to the chosen address.

A Delegate is a representative of multiple holders amongst the Paladin DAO. Each holder who transfers voting power places their trust in the Delegate, expecting that they will make the best decisions on behalf of holders and the PAL protocol.

### Voting

Token voting will be essential for coordinating around topics such as managing protocol parameters, allocating treasury funds, initializing partnership programs, etc. 

At the moment, governance voting will be conducted through the Paladin Snapshot Space.

To create a proposal in the Space, 5% of circulating PAL delegated to your address is required. Quorum is at 15% circulating supply.  

There are several types of governance Proposal : 
* Paladin Upgrade Requests (PURe) for addition of new dApps to be managed by the DAO or large modification of the Paladin codebase ; 
* Paladin Constitution Modification (PCM) to any proposal needing a Constitution change, these will need a heavier quorum (20% or circulating supply right now) ;
* Paladin Governance Proposal (PGP) for the other proposals, concerning treasury allocation, parameter change, partnerships...

### Voting Proposal Framework
Every governance proposal will have to be presented in the following fashion to be considered a valid proposal : 

- Title: Type of proposal (see here : Voting - Docs 1) + ID number of the proposal + 7 words max summary ;
- Summary : One sentence explanation of the proposal ;
- Context & Reasoning : Comprehensive overview of the proposal ;
- Rationale : Why is this proposal the best available solution to the problem it tackled ;
- Means : What resources are needed to enable the proposal : parameter modification, expertise, code modification specifications, % of treasury allocated / Budget ;
- Sustainability : Is there a next step ? How is the implementation overseen ? What metrics can be used to measure its success ?
- Voting Options : Please don’t forget to add an abstain option ;

New proposals can be added here: https://gov.paladin.vote/t/formal-proposal-framework/102/11

## Join us

Connect with us on [Discord](https://discord.gg/SpQ7hgzmEP)

## Additional links
* [Website](https://www.paladin.vote/)
* [Twitter](https://twitter.com/Paladin_vote)
* [Discord](https://discord.com/invite/gxda4HgYXy)
* [Forum](https://gov.paladin.vote/)
* [Blog](https://medium.com/paladin-protocol)
* [Github](https://github.com/PaladinFinance)