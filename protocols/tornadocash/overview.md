# Tornado Cash
## Overview

Tornado Cash is a **fully decentralized non-custodial protocol** allowing private transactions in the crypto-space. 

As a decentralized protocol, Tornado.Cash smart contracts have been implemented within the Ethereum blockchain which makes them immutable. They can neither be changed or tampered with. Therefore, nobody - including initial developers - can modify or shut them down. All governance and mining smart contracts are deployed by the community in a decentralized manner.

As a non-custodial protocol, users keep custody of their cryptocurrencies while operating Tornado.Cash. Indeed, at each deposit, they are provided with the private key enabling the access to the deposited funds, which gives users complete control over their assets.

## How privacy is achieved?

Tornado Cash improves transaction privacy by breaking the on-chain link between source and destination addresses. It uses a smart contract that accepts ETH & other tokens deposits from one address and enable their withdrawal from a different address.

To preserve privacy, few good practices are in order, such as the use of a relayer for gas payments to withdraw funds towards an address with no pre-existing balance. 

More details are available in Behind the scenes: [How does Tornado.Cash work](https://docs.tornado.cash/how-does-tornado.cash-work)? & [Tips to remain anonymous](https://docs.tornado.cash/tips-to-remain-anonymous).

## Where is Tornado.Cash at?

The protocol has been operating on the **Ethereum blockchain** since its inception in 2019. It was recently deployed, in June 2021, on **Binance Smart Chain** & **Polygon**.
As of today, Tornado.Cash can be used with the following tokens:
- On Ethereum : **ETH** (Ethereum), **DAI** (Dai),**cDAI** (Compound Dai),**USDC** (USD Coin),**USDT** (Tether) &**WBTC** (Wrapped Bitcoin)
- On Binance Smart Chain:**BNB** (Binance Coin).
- On Polygon Network:**MATIC** (Polygon)
![network image](https://gblobscdn.gitbook.com/assets%2F-MXflGk4w5pDjjlmPCuF%2F-MhJPP4DeMIcR4iz-v1J%2F-MhJXUycS-uRlH6w-oKR%2FNon-custodial%20anonymous%20transactions%20on%20Ethereum%20(3).png?alt=media&token=d7319678-41ff-4c0f-981c-09a3ab0576f0)

The protocol also includes an **anonymity mining system for some of its token**, allowing its users to earn a **governance token**. Thanks to TORN tokens, Tornado Cash users actively participate in shaping the protocol. The community has a strong weight regarding the evolution of Tornado Cash and the improvement of its features. Indeed, protocol parameters & token distribution are completely under the community's control through this governance.

*More information about [Anonymity mining](https://docs.tornado.cash/anonymity-mining) & [Tornado.Cash](https://docs.tornado.cash/torn) token are available.*

## How does Tornado.Cash run?

[Codes behind Tornado.Cash functioning](https://github.com/tornadocash) - smart contacts, circuits & toolchain -  are **fully open sourced**. Working as a DAO (Decentralized Autonomous Organization), Tornado.Cash governance and mining smart contracts are deployed by its community.

The protocol also functions with zk-SNARK, which enables zero-knowledge proofs allowing users to demonstrate possession of information without needing to reveal it. The use of this technology is based **on open source research made by Zcash team with the help of Ethereum community**. To set-up zk-SNARK initial keys, Tornado.Cash [Trusted Setup Community](https://tornado-cash.medium.com/tornado-cash-trusted-setup-ceremony-b846e1e00be1) was launched in May 2020 & accounted [for 1114 contributions](https://tornado-cash.medium.com/the-biggest-trusted-setup-ceremony-in-the-world-3c6ab9c8fffa). This significant number of contributors makes it impossible to compromise the protocol by faking zero-knowledge proofs.

User interface is hosted on **IPFS** (InterPlanetary File System) by the community, minimizing risks of data being deleted. Indeed, the interface will work as long as at least one user is hosting it.

*Written by @[ayefda](https://torn.community/u/ayefda)*

## Governance

In order to participate in Tornado.Cash governance, users first need to lock tokens in the governance contract. If a user votes or creates a proposal, the tokens cannot be unlocked before the proposal execution period ends (8.25 days from proposal creation). The locked tokens can also be delegated to another address.

To create a proposal, a user needs to have at least 1,000 TORN. All proposals must be smart contracts with verified code that are executed from the [governance contract](https://etherscan.io/address/0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce) (using delegatecall). This way, it’s easy to audit and test any governance changes.

### How to vote ?

You first need to deposit (or lock) TORN tokens into the governance contract.
Go to: https://app.tornado.cash/governance

Click Manage -> Lock Tab

Approve the governance contract to transfer your TORN tokens by clicking on the Approve button. Once the approve is confirmed, chose the amount you want to deposit and click Lock. Confirm the transaction in your wallet and wait for the confirmation.

![](https://i.imgur.com/tfwFDnj.png)

Before the vote, the next crucial step is to review the proposal.

Legitimate proposals should have a dedicated post on [Torn.community](https://torn.community/) under the category “Proposal”. The forum post will provide additional context and arguments on the proposal. Read the thread and make your own mind on the issue.

Once a proposal was submitted it should appear on:
https://tornadocash.eth.link/governance
Proposal are implemented in the form of a smart contract making changes to the system. It is therefore important to verify the address of the smart-contract and review its code. Find the address of the proposal contract here:

![](https://i.imgur.com/urIOzjR.png)
Look for the contract address on Etherscan and make sure that the source code is verified and readable.

![](https://i.imgur.com/VGMuosr.png)
Read the source code and make sure that it matches what is described in the forum post.

If you are not technical or not comfortable to read Solidity code, get someone you trust to review the contract for you.
If you agree (or disagree) with the proposal code, it time to vote!

A proposal have a voting windows of 5 days. This means that we have 5 days to reach the vote quorum of 25k TORN.

Important: Once you voted, your tokens will be locked for 8.25 days from the moment the proposal was submitted (the start of the 5 days voting period). After the 8.25 you can withdraw your tokens from the governance contract. Note that you can vote on 2 proposal at the same time without incurring additional lockup period (Only the most recently submitted proposal will matter for the 8.25 lockup).

To vote, simply click on the Green check mark or the the red cross depending whether you accept or reject the proposal. Confirm the transaction with Metamask and your vote is in!

### How to delegate the vote ?

If you are a TORN token holder, you can delegate your voting power to someone else without having to send him the tokens.
IMPORTANT: If you delegate your tokens and that your delegate votes or initiate a proposal, your tokens will be locked for 8.25 days from the moment the proposal that the delegate voted on started. Note that that you can always undelegate at any time.

To achieve delegation, go to: https://tornadocash.eth.link/governance
You first need to lock your tokens in the governance contract. Click Manage -> Lock tab

Approve the governance contract to transfer your TORN tokens by clicking on the Approve button. Once the approve is confirmed, chose the amount you want to delegate and click Lock. Confirm the transaction in your wallet and wait for the confirmation.

![](https://i.imgur.com/yrvY7ut.png)

The last step, is to make the actual delegation. Go again to https://tornadocash.eth.link/governance

Click Manage -> Delegate tab

Fill-in the address to which you want to delegate and click Delegate. Approve the transaction in your wallet and wait for confirmation.

![](https://i.imgur.com/2Sf7GJ2.png)
The totality of your locked balance will be delegated.

You can undelegate at anytime. To undelegate simply use the Undelegate Button in Manage -> Undelegate Tab.

## Additional links

[Website](https://torn.community/)
[Jobs](https://tornado.cash/jobs)
[Compliance](https://tornadocash.eth.limo/compliance/)
[Stats](https://explore.duneanalytics.com/public/dashboards/UEU02CHiGtNw9crfeD6OJ7bKPnvFtNjOgZ7Vc6uj)
[FAQ](https://tornado.cash/#faq)

#### Socials
[Discord](https://discord.com/invite/TFDrM8K42j)
[Twitter](https://twitter.com/TornadoCash)
[Telegram](https://t.me/TornadoCashOfficial)
[DefiPulse](https://defipulse.com/tornado-cash)