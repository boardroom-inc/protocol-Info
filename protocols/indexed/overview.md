# Indexed Finance

Indexed Finance is a project focused on the development of passive portfolio management strategies for the Ethereum network.

Indexed Finance is managed by the holders of its governance token [NDX](https://etherscan.io/token/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83), which is used to vote on proposals for protocol updates and high level index management such as the definition of market sectors and the creation of new management strategies.

# Overview

## Index Pools

The first product developed by Indexed Finance is a set of capitalization-weighted index pools designed to replicate the behavior of index funds, which historically [have returned better and more consistent returns](https://www.cnbc.com/2019/03/15/active-fund-managers-trail-the-sp-500-for-the-ninth-year-in-a-row-in-triumph-for-indexing.html) than actively managed funds on the stock market.

Index pools simplify asset management on Ethereum the way that index funds do for the stock market: by creating a single asset which represents ownership in a diverse portfolio that tracks the market sector the index represents. Each index pool has an ERC20 index token which anyone can mint by providing the underlying assets in the pool, burn to claim the underlying assets, or swap with exchanges to easily manage their exposure to specific markets.

Index pools regularly rebalance their underlying assets in order to better represent the market sectors they track. Portfolio targets are set using [on-chain data from Uniswap](https://github.com/indexed-finance/uniswap-v2-oracle) and [pre-set rules defined in smart contracts](https://github.com/indexed-finance/indexed-core/blob/eae0eaf9ffc8a0d34a206c056d5e1381a7077f7e/contracts/lib/MCapSqrtLibrary.sol#L56). As with index funds, the only roles for humans in managing index pools are the initial determination of weighting and asset selection rules, the definition of market sectors and the classification of assets into those sectors. These roles are carried out by NDX governance, which has mandatory time-locks for all governance decisions.

# Governance

## Role

The NDX governance organization is responsible for:

* Upgrading proxy implementations as needed.
* Deploying new index pools from the core controller.
* Managing the token categories which indices select from and creating new ones.
* Approving pool controllers that implement new management strategies.
* Setting configuration values such as swap fees.
* Adjusting parameters of Nirn yield aggregator vaults such as fees and reserve ratios.

## NDX Token Distribution

NDX is the governance token for Indexed. The initial supply of 10,000,000 NDX is being distributed as follows:

* 35% is vesting to the NDX treasury over the course of 9 months, beginning March 1, 2021.
* 25% was distributed through liquidity mining to users who staked CC10/DEFI5 index tokens or their Uniswap V2 Ether pair LP tokens (ended March 8th 2021).
* 20% will go to the founders and future contributors of the protocol, subject to vesting periods.
* 15% is set to be distributed through liquidity mining to users who stake index tokens, either single-sided or as liquidity for various DEXes (scheduled to end Q1 2023).
* 5% will be used to reward keepers who update the Uniswap oracle and trigger periodic updates on the pool controller (under development).

As of June 1, 2021 the ability to mint new NDX tokens is available to the DAO.

Minting is restricted to a maximum of 10% of the supply (at the time tokens are minted) and may only occur once every 90 days. NDX governance may also disable minting permanently by changing the minter address from the timelock contract to the null address.

## Early Governance

In order to ensure the security of the project while distribution is underway, the team will retain the ability to create and vote on governance proposals while our tokens are vesting. This will ensure that we are able to respond if security incidents occur prior to the completion of the initial distribution, but all successful proposals will still be subject to the two day time lock.

## Keepers

The 5% allocation for keepers is currently held by the timelock contract and will be transferred once we complete development and testing of the keeper bot and contract. Until then we will trigger the updates ourselves, and anyone else can do so on Etherscan.

# Join our DAO

Please reach out via our [Discord](https://forum.indexed.finance/) for details on how to join. 

# Additional Links

* [Indexed](https://indexed.finance/)
* [Snapshot](https://gov.indexed.finance/#/)
* [Discourse](https://forum.indexed.finance/)
* [Medium](https://ndxfi.medium.com/)
* [Discord](https://forum.indexed.finance/)
* [Twitter](https://twitter.com/ndxfi)
* [Github](https://github.com/indexed-finance)
* [Reddit](https://www.reddit.com/r/IndexedFinance/)
* [Youtube](https://www.youtube.com/channel/UCdbua6FtaiD0emvvBerKRMw
* [Documentation](https://docs.indexed.finance/)
